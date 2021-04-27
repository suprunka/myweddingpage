import React from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import way from '../../assets/way.jpg'; // with require
import Selector from "../../components/Selector"
import Deck from "../../components/Images"

const Selection =()=> 
<React.Fragment>
<Container  backgroundColor="#fff">
 <Selector >
 <div id="imgs">
    <Deck/>

    </div>
</Selector>
</Container>
</React.Fragment>

export default Selection    