import React, { useEffect, useState } from 'react';
import { Global } from '../Membrane'
import { TSocial } from '/src/ui/Tsocial'
import { Link } from 'react-router-dom';
import { Loading } from '../Animations';
import { Addictions } from '../Api';
import { Asocial } from './Asocial'

export const Home = (props) => {
  const [rainData, setrainData] = useState(null)
  const [rsspublicfeed, setrsspublicfeed] = useState(null)
  const globalState = Global({ pageName: "Home", description: "{Home} => Daniel Assayag is an Artist and Project Leader in Education. (2022) {Paris-Casablanca}. [Experimentations, Daily Artivities, Retrospective]." })

  useEffect(() => {
    Meteor.call('rain.save', null, null, 'daniel', ((e, r) => {
      if(e) return
      setrainData(r)
    }))
  }, [props.user])

  useEffect(() => {
    Meteor.call('rss.public', (e, r) => {
      if(e) return console.error(e)
      setrsspublicfeed(r)
    }
    )
  }, [])


  return (
    <div id="main-container">

      <div id="main-container-header">
        <div id="main-container-header-title">
          <h1>Home</h1>
        </div>
        <div  id="main-container-header-instructions" >
            <ul>Welcome, salam, bonjour.
            </ul><ul>Que la ptite souris soit avec vous.
            </ul>
          </div>
          {!props.user? 
        <div className="main-container-block" style={{ background: "rgb(113 0 255)" }}>
          <ul><li>
            Are you <b><Link to="/user" style={{color: "#9a90b3"}}>registered</Link></b> yet?</li>
            <li>By <b><Link to="/user" style={{color: "#9a90b3"}}>creating a new account</Link></b>, you can save your creations and setup your own reminders.</li>
            </ul>
          </div>
          : null }
      </div>

      <Asocial home={false}/>
      {/* <section  className={"section-std"}>
      <h1>Internet compulsory addictions</h1>
        <Addictions />
      </section> */}
      {/* {rsspublicfeed? <section id={"rss-publicfeed"}>
        {rsspublicfeed?.sort((a, b) => {
          return new Date(b.pubDate?._text) - new Date(a.pubDate?._text)
          }).map((r, i) => {
          const imgtest = new Image();
          imgtest.src = r['media:content']?._attributes?.url?r['media:content']?._attributes?.url :r['photo:imgsrc']?._text 
          let rssimg = imgtest.width >= 100? r['media:content']?._attributes?.url?r['media:content']?._attributes?.url:null : imgtest.width >= 100? r['photo:imgsrc']?._text : null 
          let desc = r.description._cdata
          // if desc contains "Article URL: "
          if(desc?.includes("Article URL: ")){
            desc = ""
          }
          return (
            <article key={i}  onClick={
              () => {
                window.open(r.link?._text, "_blank")
            }}>
              <h3><b className={"articlerss-title"}>{r.title?._cdata? r.title?._cdata: r.title?._text }</b></h3>
              <h5>{r.pubDate?._text }</h5>
              <h4 dangerouslySetInnerHTML={{ __html: desc}}></h4>
              {<img src={rssimg}></img> }

            </article>
          )
        })}
      </section>
      :<Loading/>} */}
      

      <section id ="rain-publicfeed" className={"p-5 flex items-center flex-col main-container-content p-1 "} >
        {rainData?.map((r, i) => {
          return (
            <div key={i} className={"p-2"}>
              <img src={r.canvas} />
            </div>
          )
        })}
      </section>
    </div>

  )
}

