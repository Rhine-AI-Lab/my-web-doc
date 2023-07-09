import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react'
import Style from './Navigation.module.scss'
import Icon from "../Icon/Icon";

export default function Navigation(props: NavigationProps) {
  const { data, onChangeValue, fss, value } = props
  
  const [subIndex, setSubIndex] = useState(-1)
  const [openTer, setOpenTer] = useState(-1)
  let firstSelected = 0
  
  for (const di in data) {
    const datum = data[di]
    for (const item of datum.content) {
      if (item.content === undefined) {
        if (item.id === value) {
          firstSelected = parseInt(di)
          break
        }
      } else {
        for (const ci in item.content) {
          const cItem = item.content[ci]
          if (cItem.id === value) {
            firstSelected = parseInt(di)
            break
          }
        }
      }
    }
  }
  
  function fontStyle(fs = 18, lh: number | null = null) {
    const style: any = {
      fontSize: fs + fss / 2 + 'px',
    }
    if (lh !== null) {
      style['lineHeight'] = lh + fss + 'px'
    }
    return style
  }
  
  return (
    <div className={Style.Navigation}>
      <div className={Style.content}>
        {props.children}
      </div>
      <div className={Style.drawer} onMouseLeave={e => setSubIndex(-1)}>
        <div className={Style.sub} style={{left: subIndex === -1 ? '-170px' : '88px'}}>
          {
            subIndex === -1 ? null : data[subIndex].content.map((item: any, index: number) => {
              if (!item.content) {
                return <div
                  key={index}
                  className={Style.lineBtn + ' ' + Style.subItem}
                  style={{background: item.id === value ? '#c2e7ff' : undefined}}
                  onClick={e => onChangeValue(item.id)}
                >
                  <span className={Style.text}>{item.title}</span>
                </div>
              } else {
                return (
                  <div className={Style.terMenu} key={index} style={{height: openTer === item.oid ? 'auto' : '56px'}}>
                    <div
                      className={Style.lineBtn + ' ' + Style.terTitle}
                      style={{background: openTer === item.oid ? '#44474614' : undefined}}
                      onClick={e => setOpenTer(openTer === item.oid ? -1 : item.oid)}
                    >
                      <span className={Style.text}>{item.title}</span>
                      <Icon className={Style.arrow + ' ' + (openTer === item.oid ? Style.arrowReverse : '')} color='#1f1f1f' size='22px'>arrow_drop_down</Icon>
                    </div>
                    {
                      item.content.map((terItem: any, index: number) => {
                        return <div
                          key={index}
                          className={Style.lineBtn + ' ' + Style.terItem}
                          style={{background: value === terItem.id ? '#c2e7ff' : undefined}}
                          onClick={e => onChangeValue(terItem.id)}
                        >
                          <span className={Style.text}>{terItem.title}</span>
                        </div>
                      })
                    }
                  </div>
                )
              }
            })
          }
        </div>
        <div className={Style.left}>
          {
            data.map((item: any, index: number) => {
              return <div className={Style.firstBtn} key={index} onMouseEnter={e => {
                setSubIndex(index)
                for (const contentElement of item.content) {
                  if (contentElement.content) {
                    for (const element of contentElement.content) {
                      if (element.id === value) {
                        setOpenTer(contentElement.oid)
                      }
                    }
                  }
                }
              }}>
                <div className={Style.iconHolder} style={{
                  background: firstSelected === index ? '#c2e7ff' : undefined,
                }}>
                  <Icon color='#444444'>{item.icon}</Icon>
                </div>
                <span className={Style.title} style={fontStyle(13)}>{item.title}</span>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

interface NavigationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: any
  value: number
  onChangeValue: (index: number) => void
  fss: number
}
