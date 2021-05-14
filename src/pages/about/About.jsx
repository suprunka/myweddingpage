import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import naszeLogo from '../../assets/logopat.jpg'; // with require
import Selector from "../../components/Selector"
import Deck from "../../components/Images"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faInfoCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import {faCameraRetro, faMapSigns,faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'


const Selection = React.forwardRef((props, ref) => 
{
    const[clicked, setClicked]= useState()
    useEffect(() => {
    if(clicked === 4) {
        props.map.current.scrollIntoView({behavior: 'smooth'});  
        setClicked(undefined);
    } 
    else if(clicked ===3) {
        props.info.current.scrollIntoView({behavior: 'smooth'}); 
        setClicked(undefined)
    } 
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
<Col className="hoverableIcon" onClick={()=>handleClick(0)} sm={6} md={4}  xl={4}>

<FontAwesomeIcon size="4x" icon={faUsers} />
<p className="imgSignature">Usiedzenie gosci przy stolach</p>
{clicked === 0 &&
<p className="aboutBottom">Usiedzenie gosci przy stolach zostanie dodane tydzien przed przyjeciem.</p>}
</Col> 
<Col className="hoverableIcon" key={1} onClick={()=>handleClick(1)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faCameraRetro} />
<p className="imgSignature">Zdjecia z wesela</p>
{clicked === 1 &&
<p className="aboutBottom">Strona jest chroniona, wiec tylko goscie ktorzy maja do niej link beda mogli je zobaczyc. Zdjecia dodamy, jak tylko je dostaniemy. Badz cierpliwy!</p>}
</Col>
<Col className="hoverableIcon" onClick={()=>handleClick(2)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faGift} />
<p className="imgSignature">Prezenty</p>
{clicked === 2 &&
<p className="aboutBottom">
 Prosimy o zastapienie kwiatow/wina zdrapkami i kuponami lotto!
</p>}

</Col>

<Col className="hoverableIcon"  onClick={()=>handleClick(4)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faMapSigns} />
<p className="imgSignature">Jak dojechac</p>
    </Col>

    <Col className="hoverableIcon" i onClick={()=>handleClick(3)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faPhoneSquareAlt} />
<p className="imgSignature">Kontakt</p>
</Col>
<Col className="hoverableIcon" onClick={()=>handleClick(5)} sm={6} md={4} xl={4}>
<FontAwesomeIcon size="4x" icon={faInfoCircle} />
<p className="imgSignature">Wazne informacje</p>
</Col>

    
</Row>
<Row>

</Row>
</Selector>

</Container>
</React.Fragment>



)
})


export default Selection
