import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import PM from "../assets/PM.png"
const Navbar = ({list}) =>{
    let history = useHistory();
    const [activeBar, setactiveBar] = useState(0)
    const {active} = useParams();
   
    useEffect(() => {
        if(active !== undefined)
            list[active].ref.current.scrollIntoView({behavior: 'smooth'});
    },[active, list])

    return (
        <div className= "p-navbar-cointainer">
         <ul className="p-navbar">
        <li>
            <img src={PM} style={{width:"60px"}}/>
        </li>
            {list.map((item, index)=>
                        <li key={index}
                            className={`${activeBar === index ? "active" : ""}`}
                            onClick={()=> {setactiveBar(index); history.push(`${index}`) }}>
                                <p className="p-navbar" style={{ marginTop: "10px", textTransform: "uppercase"}}> {item.label}</p> 
                            </li>
                )}
    </ul>
    </div>
    )
}
export default Navbar