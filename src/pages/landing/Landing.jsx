import React, { useEffect, useRef } from 'react'
import WelcomeSelection from '../welcome'
import About from '../about'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router-dom'
import History from '../ourhistory'
import PicsFeed from '../picsfeed'
import Contact from '../Contact'
import Directions from '../map'
import Invitation from '../Invitation'


const Landing = ()=>{
    const welcomRef = useRef(null)
    // const aboutRef = useRef(null)
    const historyRef = useRef(null)
    const directionsRef = useRef(null)
    const contactRef = useRef(null)
   
    const list = [
                 {label:"Cześć", ref:welcomRef},
                //  {label:"Po co ", ref:aboutRef}, 
                 {label:"Nasza historia ", ref:historyRef},
                 {label:"Kontakt ", ref:contactRef},
                ]
  
    return(
        <React.Fragment>
   
            <Navbar list={list}/>
            <WelcomeSelection ref={welcomRef} />
            <About map={directionsRef}  info={contactRef} />
            <Invitation/>
            <History ref={historyRef} />
            <PicsFeed  /> 
             <Contact ref={contactRef} />
            <Directions  ref={directionsRef} />
        </React.Fragment>
    )
}

export default Landing