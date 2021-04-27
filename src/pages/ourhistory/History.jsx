import React from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import way from '../../assets/way.jpg'; // with require
import Selector from "../../components/Selector"
import Deck from '../../components/Images';

const Selection = React.forwardRef((props, ref) => 
<React.Fragment>
<Container color="white"  ref={ref} backgroundColor="rgb(208 193 184)" >
 <Selector >
<Row>

<Col sm={6}>
  
</Col>
<Col sm={1}></Col>

<Col sm={5} >
    <p data-aos="fade-right" style={{color:"#d07c3f"}}>
        NASZA HISTORIA
    </p>
    <h2 data-aos="fade-right">
    Razem nawet na koniec swiata!
    </h2>
    <p className="mt-4">
    Ona, pilna uczennica, on szalony urwis- poznali sie w szkole, a chwile poźniej wyjechali do Danii w pogoni za gruba kasa i sławą. Niestety, ani kasy, ani sławy nie zdobyli, ale posiadają cos ważniejszego- wykształcenie, nowe umiejętności oraz bagaż doświadczeń. Przeżyli razem  wiele pięknych oraz tych mniej miłych chwil. Pewnego dnia Marcin postanowił wykonać następny krok w ich relacji, dzieki ktoremu blabla bla. 
    </p>

</Col> 
</Row>
</Selector>
</Container>
</React.Fragment>
)
export default Selection