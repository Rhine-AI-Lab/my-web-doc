import React from 'react'
import Style from './Home.module.scss'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import Navigation from "../../components/Navigation/Navigation";
import {articles, data} from "./data";

function Home() {
  const [fss, setFss] = React.useState(1.0)
  const [articleIndex, setArticleIndex] = React.useState(0)
  const article = articles[articleIndex]
  
  return (
    <div className={Style.Home}>
      <Navigation data={data} onChangeIndex={i => {
        setArticleIndex(i)
      }} fss={fss}>
        <div className={Style.content}>
          <div className={Style.article}>
            <div className={Style.title} style={{
              backgroundImage: `url("${article.image}")`,
            }}>
              <div className={Style.text}>
                {article.title}
              </div>
              <div className={Style.description}>
                {article.description}
              </div>
            </div>
            <div className={Style.body}>
              {
                article.content.split('\n').map((line, i) => {
                  line = line.trim()
                  if (line === '') {
                    return <br key={i}/>
                  } else if (line.startsWith('### ')) {
                    return <div key={i} className={Style.subTitle}>{line.substr(4)}</div>
                  } else if (line.startsWith('IMG ')) {
                    return <img key={i} className={Style.image} src={line.substr(4)}/>
                  } else {
                    return <div key={i} className={Style.text}>{line}</div>
                  }
                })
              }
            </div>
            <div className={Style.control}>
              <div>
                <h1>← Previous</h1>
                <span></span>
              </div>
              <div>
                <h1>Next →</h1>
              </div>
            </div>
            <svg aria-hidden="true" width="100%" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="a" width="91" height="8" patternUnits="userSpaceOnUse">
                <g clip-path="url(#clip0_2426_11367)">
                  <path d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" stroke="#E1E3E1" stroke-linecap="square"></path>
                </g>
              </pattern>
              <rect width="100%" height="100%" fill="url(#a)"></rect>
            </svg>
            <div className={Style.footer}>
              <div className={Style.author} onClick={e => {
                window.open('https://github.com/Rhine-AI-Lab')
              }}>
                <img src="/logo.png"/>
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


