import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import naszeLogo from '../../assets/logopat.jpg'; // with require
import Selector from "../../components/Selector"
import Deck from "../../components/Images"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import {faCameraRetro, faMapSigns,faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'


const Selection = React.forwardRef((props, ref) => 
{
    const[clicked, setClicked]= useState()
    useEffect(() => {
    if(clicked === 2) {
        props.map.current.scrollIntoView({behavior: 'smooth'});  
        setClicked(undefined);
    } 
    else if(clicked ===3) {
        props.info.current.scrollIntoView({behavior: 'smooth'}); 
        setClicked(undefined)
    } 
    }, [clicked, setClicked, props.info, props.map])

return(
<React.Fragment>
<Container ref={ref} backgroundColor="#fefdfb">

 <Selector  >
 <h2 data-aos="zoom-in" >
        ALE WLASCIE PO CO JEST TA STRONA?
    </h2>
<Row id="aboutSection">
<Col className="hoverableIcon" onClick={()=>setClicked(0)} sm={6} md={4}  xl={3}>

<FontAwesomeIcon size="4x" icon={faUsers} />
<p className="imgSignature">Usiedzenie gosci przy stolach</p>
{clicked === 0 &&
<p className="aboutBottom">Usiedzenie gosci przy stolach zostanie dodane tydzien przed przyjeciem.</p>}
</Col> 
<Col className="hoverableIcon" key={1} onClick={()=>setClicked(1)} sm={6} md={4} xl={3}>
<FontAwesomeIcon size="4x" icon={faCameraRetro} />
<p className="imgSignature">Zdjecia z wesela</p>
{clicked === 1 &&
<p className="aboutBottom">Strona jest chroniona, wiec tylko goscie ktorzy maja do niej link beda mogli je zobaczyc. Zdjecia dodamy, jak tylko je dostaniemy. Badz cierpliwy!</p>}
</Col>


<Col className="hoverableIcon"  onClick={()=>setClicked(2)} sm={6} md={4} xl={3}>
<FontAwesomeIcon size="4x" icon={faMapSigns} />
<p className="imgSignature">Jak dojechac</p>

    </Col>

<Col className="hoverableIcon" id="last" onClick={()=>setClicked(3)} sm={6} md={4} xl={3}>
<FontAwesomeIcon size="4x" icon={faPhoneSquareAlt} />
<p className="imgSignature">Kontakt</p>


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
