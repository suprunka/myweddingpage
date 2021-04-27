import React from 'react'
import { Col, Row } from 'reactstrap';


const Form = () =>
<form className="contactForm">
    <Row>
        <Col sm={6}>
        <input placeholder="Twoje imie" className="contactInput" type="text"/>
        </Col>
        <Col sm={6}>
        <input placeholder="Twoje nazwisko"  className="contactInput" type="text"/>
            </Col>
       
    </Row>
    <Row>
        <Col>
             <input placeholder="Twoj email/ telefon "  className="contactInput" type="text"/>
        </Col>
    </Row>
    <Row>
        <Col>
            <textarea placeholder="Wiadomosc do nas" rows="6" className="contactInput"></textarea>
        </Col>
    </Row>
</form>


export default Form;