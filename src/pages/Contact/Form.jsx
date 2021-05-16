import React from 'react'
import { Col, Row } from 'reactstrap';


const Form = () =>
<form action="mailto:patrycja.suprun@gmail.com" method="post" enctype="text/plain" className="contactForm">
    <Row>
        <Col sm={12}>
        <input placeholder="Twoje imie" className="contactInput" type="text"/>
        </Col>
    </Row>
    <Row>
        <Col>
             <input placeholder="Twoj email/ telefon "  className="contactInput" type="text"/>
        </Col>
    </Row>
    <Row>
        <Col>
            <textarea placeholder="Zostaw wiadomość" rows="6" className="contactInput"></textarea>
        </Col>
    </Row> <Row>
        <Col>
        <button className="submitButton" type="submit">Wyslij!</button>
        </Col>
    </Row>
</form>


export default Form;