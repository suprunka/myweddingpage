import React from 'react'
import { Col, Row } from 'reactstrap';
import Container from '../../components/Container'

const Directions = React.forwardRef((props, ref) => 
<Container backgroundColor="#fff">
    <div ref={ref}>

    <Row>
    <Col sm={12} md={6}>
        <p data-aos="zoom-in" > Jak dojechac do kosciola?</p>
    </Col>
  
</Row>
<Row>
    <Col sm={12} style={{height:"500px"}} >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.6896926197787!2d20.566307315420755!3d50.92945697954429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718291ebf76a3c5%3A0x94e967c21b5dce7a!2sKo%C5%9Bcielna%202B%2C%2026-085%20Kostom%C5%82oty%20Drugie%2C%20Polska!5e0!3m2!1spl!2sdk!4v1614284425435!5m2!1spl!2sdk"  style={{border:0, width:"100%", height:"100%"}} allowFullScreen="" loading="lazy"></iframe>

    </Col>
   
</Row>
<Row>
    <Col sm={12}>
    <p data-aos="zoom-in" >Jak dojechac na sale weselna?</p>
    </Col>
  
</Row>
<Row>
    <Col sm={12}   style={{height:"500px"}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.8621132686976!2d20.493983015425535!3d51.03716737956052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182d6b9e7057e9%3A0x2a7925cf743a8eab!2sGo%C5%9Bciniec%20za%20Borem!5e0!3m2!1spl!2sdk!4v1614284699883!5m2!1spl!2sdk"  style={{border:0, width:"100%", height:"100%"}}  allowFullScreen="" loading="lazy"></iframe>

    </Col>
</Row>
</div>
</Container>


)
export default Directions;