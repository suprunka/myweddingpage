import React from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import Selector from "../../components/Selector"
import Form from './Form';

const Selection = React.forwardRef((props, ref) => 
<React.Fragment>

<Container backgroundColor="#fff">
    <div  className="biggerPadding"  ref={ref}>

 <Selector>
<Row >
<Col sm={6} className="biggerPadding">
  
    <h3 className="pt-4 text-center" data-aos="fade-right"  style={{color:"#e48432"}}>
        BEZPOSREDNI KONTAKT:
    </h3>
    <Row className="mt-6">
        <Col sm={12} md={6} >
        <p>Patrycja</p>
        <p>00 00 00 00</p>
        <p>patrycja.suprun@gmail.com</p>
        </Col>
        <Col sm={12} md={6}>
        <p>Marcin</p>
        <p>00 00 00 00</p>
        <p>marcinkarys@gmail.com</p>
        </Col>
    </Row>


</Col> 
<Col sm={6}>
    <h2 data-aos="fade-right">W razie pytan pisz do nas!</h2>
   <Form/>
</Col>
</Row>
</Selector>
</div>
</Container>
</React.Fragment>
)
export default Selection