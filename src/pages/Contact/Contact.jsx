import React from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import Selector from "../../components/Selector"
import Form from './Form';
import patkaimg1 from "../../assets/pics/11.jpg"
import patkaimg2 from "../../assets/pics/12.jpg"
const Selection = React.forwardRef((props, ref) => 
<React.Fragment>

<Container backgroundColor="#fff">
    <div  className=""  ref={ref}>

 <Selector>
<Row >
<Col sm={6} className="biggerPadding">
  
    <h3 className="pt-4 text-center" data-aos="fade-right"  style={{color:"#e48432"}}>
        BEZPOŚREDNI KONTAKT:
    </h3>
    <Row className="mt-6">

        <Col sm={12} md={12} style={{display:"flex"}}>
        <div class="bussinessCard">
            <img className="image" alt="" src={patkaimg1} style={{width:"100px", height:"100px", marginRight:"10px"}}/>
            <div class="overlay">
                <img alt="" className="image" src={patkaimg2} style={{width:"100px", height:"100px", marginRight:"10px"}}/>
             </div>
        </div>
        <div>
        <p>Patrycja</p>
        <p>+45 60 90 81 20</p>
        <p>patrycja.suprun@gmail.com</p>
        </div>
        </Col>
        <Col sm={12} md={12} style={{display:"flex"}}>
        <div class="bussinessCard">
            <img className="image" alt="" src={patkaimg1} style={{width:"100px", height:"100px", marginRight:"10px"}}/>
            <div class="overlay">
                <img alt="" className="image" src={patkaimg2} style={{width:"100px", height:"100px", marginRight:"10px"}}/>
             </div>
        </div>        <div>
        <p>Marcin</p>
        <p>+45 60 90 21 80</p>
        <p>martexxx1234567@gmail.com</p>
        </div>
        </Col>
        <Col sm={12} className="mt-6">
        <p>Prosimy o potwierdzenie obecnosci do 1 sierpnia 2021.</p>
        </Col>

    </Row>


</Col> 
<Col sm={6}>
    <h2 data-aos="fade-right">W razie pytań pisz do nas!</h2>
   <Form/>
</Col>
</Row>
</Selector>
</div>
</Container>
</React.Fragment>
)
export default Selection