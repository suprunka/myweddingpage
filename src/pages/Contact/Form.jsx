import React from 'react'
import { Col, Row } from 'reactstrap';
import { useFormik } from 'formik';
import { Formik, Form,  Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {addMessage} from "../../services/formService"
const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Twoje imię jest za krótkie.')
      .required('Wpisz swoje imię, będzie nam łatwiej się z tobą skontaktować. '),
    contact: Yup.string()
      .required('Wpisz jakiś kontakt do siebie- będzie nam łatwiej się z tobą skontaktować.'),
      text: Yup.string()
      .min(5, 'Twoja wiadomość jest za krótka.')
      .required('To pole jest wymagane.'),
  });

const MessageForm = () =>{
  
    
    return(
        <Formik
        initialValues={{
            name: '',
            contact: '',
            text:""
          }}
        validationSchema={FormSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
          addMessage(values)
        }}
      >
        {({ errors, touched }) => (
        <Form    className="contactForm">
        <Row>
            <Col sm={12}>
            <Field placeholder="Twoje imie" 
                    className="contactInput" 
                    type="text" 
                    name="name"/>
            {errors.name !== undefined && <span className="error">{errors.name}</span>}
            </Col>
        </Row>
        <Row>
            <Col>
                 <Field placeholder="Twoj email/ telefon "  
                 className="contactInput" 
                 type="text"
                 name="contact"/>
            {errors.contact !== undefined && <span className="error">{errors.contact}</span>}

            </Col>
        </Row>
        <Row>
            <Col>
                <Field   placeholder="Zostaw wiadomość" 
                    rows="6" 
                    name="text"
                    className="contactInput" 
                    as={CustimTextarea}
                ></Field>
            {errors.text !== undefined && <span className="error">{errors.text}</span>}

            </Col>
        </Row> <Row>
            <Col>
            <button className="submitButton" type="submit">Wyslij!</button>
            </Col>
        </Row>
        </Form>)}
    </Formik>
    )

}


const CustimTextarea = (props) => (
    <textarea  {...props} ></textarea>
  );
 
export default MessageForm;