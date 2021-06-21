import React from 'react'
import Container from '../../components/Container';
import Selector from '../../components/Selector';
import logo from "../../assets/logopat.jpg"
const Invitation = ()=>
<Container backgroundColor="#fefdfb" className="height-fitCnt">
 <Selector className="invitation ">
 <p> Już wkrótce powiemy sobie <span className="handwrittenText">„TAK”</span> </p>

<p> 14 sierpnia 2021 roku o godzinie  16:00 </p> 
<p>w  Kościele pw. św. Andrzeja Boboli przy ul. Kościelnej 2b, w Kostomłotach Drugich </p>
<p>staniemy przed ołtarzem i wypowiemy tekst przysięgi małżeńskiej.
</p>
<p>
Wszystkich Przyjaciół, którzy chcieliby dzielić z nami
radość tej niezwykłej chwili serdecznie zapraszamy.
</p>

<p>
Po ślubie widzimy Was na przyjeciu w Sali weselnej „Gościniec za Borem”
w Zaborowicach.
</p>


<img src={logo} style={{width:"200px", alignSelf:"center"}}/>

   
</Selector>
</Container>
 

export default Invitation;