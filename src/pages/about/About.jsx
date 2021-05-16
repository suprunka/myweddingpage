import React, { useEffect, useRef, useState } from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import Selector from "../../components/Selector"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faInfoCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import {faCameraRetro, faMapSigns,faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import Contact from '../Contact';
import Directions from '../map';


const Selection = React.forwardRef((props, ref) => 
{   
    const contactRef = useRef(null)
    const mapRef = useRef(null)

    const[clicked, setClicked]= useState()
    useEffect(() => {
        if(clicked === 3) {
            contactRef.current.scrollIntoView({behavior: 'smooth'});  
        }  
        else if(clicked === 4) {
            mapRef.current.scrollIntoView({behavior: 'smooth'});  
        } 
    // else if(clicked ===3) {
    //     props.info.current.scrollIntoView({behavior: 'smooth'}); 
    //     setClicked(undefined)
    // } 
    }, [clicked, setClicked, props.info, props.map])
const handleClick =(index)=>{
    if(clicked === index)
        setClicked(undefined)
    else
        setClicked(index)
}
return(
<React.Fragment>
<Container ref={ref} className="height-fitCnt">

 <Selector  >

<Row id="aboutSection">
<Col className="hoverableIcon" data-aos="zoom-in" data-aos-duration="1000" onClick={()=>handleClick(0)} sm={6} md={4}  xl={4}>

<FontAwesomeIcon size="4x" icon={faUsers} />
<p className="imgSignature">Usiedzenie gości przy stołach</p>
{clicked === 0 &&
<p className="aboutBottom">Usiedzenie gości przy stołach zostanie dodane tydzień przed przyjeciem.</p>}
</Col> 
<Col className="hoverableIcon" data-aos="zoom-in"  data-aos-duration="1000" key={1} onClick={()=>handleClick(1)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faCameraRetro} />
<p className="imgSignature">Zdjęcia z wesela</p>
{clicked === 1 &&
<p className="aboutBottom">Zdjęcia będą chronione hasłem. Dodamy je, jak tylko je dostaniemy. Badź cierpliwy!</p>}
</Col>
<Col className="hoverableIcon" data-aos="zoom-in"  data-aos-duration="1000" onClick={()=>handleClick(2)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faGift} />
<p className="imgSignature">Prezenty</p>
{clicked === 2 &&
<p className="aboutBottom">
Drodzy goście, Państwo mili
Byście radość nam sprawili,
Po co dźwigać bukieciki,
lepsze Lotto kuponiki.
</p>}

</Col>

<Col className="hoverableIcon" data-aos="zoom-in" data-aos-duration="1000" onClick={()=>handleClick(4)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faMapSigns} />
<p className="imgSignature">Jak dojechać</p>
    </Col>

    <Col className="hoverableIcon" data-aos="zoom-in" data-aos-duration="1000" i onClick={()=>handleClick(3)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faPhoneSquareAlt} />
<p className="imgSignature">Kontakt</p>
</Col>
<Col className="hoverableIcon" data-aos="zoom-in" data-aos-duration="1000" onClick={()=>handleClick(5)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faInfoCircle} />
<p className="imgSignature">Wazne informacje</p>
</Col>

    
</Row>
<Row>

</Row>
{clicked === 3 &&
<Contact ref={contactRef}/>}
{clicked === 4 &&
<Directions ref={mapRef}/>}
</Selector>

</Container>
</React.Fragment>



)
})


export default Selection
