import React from 'react'
import Style from './Home.module.scss'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import Navigation from "../../components/Navigation/Navigation";
import {articles, data} from "./data";
import Icon from "../../components/Icon/Icon";
import {Slider} from "@mui/material";

function Home() {
  const [fss, setFss] = React.useState(1.0)
  const [articleIndex, setArticleIndex] = React.useState(0)
  const article = articles[articleIndex]
  
  const getArticle = (index: number) => {
    return articles[index]
  }
  const next = () => {
    return getArticle(articleIndex+1)
  }
  const prev = () => {
    return getArticle(articleIndex-1)
  }
  
  function fontStyle(fs = 18, lh: number | null = null) {
    const style: any = {
      fontSize: fs + fss + 'px',
    }
    if (lh !== null) {
      style['lineHeight'] = lh + fss + 'px'
    }
    return style
  }
  
  return (
    <div className={Style.Home}>
      <Navigation data={data} value={articleIndex} onChangeValue={i => {
        setArticleIndex(i)
      }} fss={fss}>
        <div className={Style.content}>
          <div className={Style.article}>
            <div className={Style.titleHolder}>
              <div className={Style.title} style={{
                backgroundImage: `url("${article.image}")`,
              }}>
                <div className={Style.slide}>
                  <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={e => {
                    // @ts-ignore
                    setFss((e.target.value - 50) / 10)
                  }} />
                </div>
                <div style={fontStyle(84, 100)} className={Style.text}>
                  {article.title}
                </div>
                <div style={fontStyle(22, 36)} className={Style.description}>
                  {article.description}
                </div>
              </div>
            </div>
            <div className={Style.body}>
              {
                article.content.split('\n').map((line, i) => {
                  line = line.trim()
                  if (line === '') {
                    return <br key={i}/>
                  } else if (line.startsWith('# ')) {
                    return <div key={i} style={fontStyle(48)} className={Style.firstTitle}>{line.substring(2)}</div>
                  } else if (line.startsWith('IMG ')) {
                    return <img key={i} alt='' className={Style.image} src={line.substring(4)}/>
                  } else if (line.startsWith('### ')) {
                    return <div key={i} style={fontStyle(21)} className={Style.terTitle}>{line.substring(4)}</div>
                  } else {
                    return <div key={i} style={fontStyle(19, 30)} className={Style.text}>{line}</div>
                  }
                })
              }
            </div>
            <div className={Style.control}>
              <div onClick={e => {
                if (!prev()) return
                setArticleIndex(articleIndex-1)
              }} style={{
                cursor: prev() ? 'pointer' : 'not-allowed'
              }}>
                <h1>
                  <Icon size='22px' color='#444746'>round_west</Icon>
                  <span>Previous</span>
                </h1>
                <p>{prev() ? prev().title : 'No more thing'}</p>
              </div>
              <div onClick={e => {
                if (!next()) return
                setArticleIndex(articleIndex+1)
              }} style={{
                cursor: next() ? 'pointer' : 'not-allowed'
              }}>
                <h1>
                  <span>Next</span>
                  <Icon size='22px' color='#444746'>round_east</Icon>
                </h1>
                <p>{next() ? next().title : 'No more thing'}</p>
              </div>
            </div>
            <svg aria-hidden="true" width="100%" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="a" width="91" height="8" patternUnits="userSpaceOnUse">
                <g>
                  <path d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" stroke="#E1E3E1" ></path>
                </g>
              </pattern>
              <rect width="100%" height="100%" fill="url(#a)"></rect>
            </svg>
            <div className={Style.footer}>
              <div className={Style.author} onClick={e => {
                window.open('https://github.com/Rhine-AI-Lab')
              }}>
                <img alt='' src="/logo.png"/>
                <span>RhineAi.com</span>
                <p></p>
                <span>Made by Henry</span>
              </div>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  )
}

export default Home


