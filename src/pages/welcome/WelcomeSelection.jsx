import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import Container from '../../components/Container'
import way from '../../assets/way.jpg'; // with require
import Selector from "../../components/Selector"
import { useTrail, a } from 'react-spring'

const Selection =  React.forwardRef((props, ref) => 
{
  
    return(
<React.Fragment>
<Container ref={ref} backgroundImage={way}>
 <Selector>
<p>14 sierpnia</p>
<p>16:00</p>
</Selector>
</Container>
</React.Fragment>
    )
}

)
export default Selection