import {faCartPlus,faBars,faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import './navbar.css';


export default function Navbar(){
    var [color,setColor] = useState('#5CDB95');

    return(
        <div className="navbarContainer">
           
            
            <div className="brandName"> ship'n'shop</div>
            <div className="search">
                <FontAwesomeIcon className="bars" icon={faBars} color={color}></FontAwesomeIcon>
                <input></input>
            </div>
            <div className="Logos">
                <FontAwesomeIcon className="Logo" icon={faUser} color={color} size='2x'
                 onMouseEnter={()=>{setColor('#fff')}} onMouseLeave={()=>{setColor('#5CDB95')}}>
                </FontAwesomeIcon>
                <div className="dropDown">
                    <ul>
                        <li>hello</li>
                        <li>hello2</li>
                    </ul>
                </div> 
                
            </div>
            <div className="Logos">
                <FontAwesomeIcon className="Logo" icon={faCartPlus} color={color} size = '2x' onMouseEnter={()=>{setColor('#fff')}}
                 onMouseLeave={()=>{setColor('#5CDB95')}}></FontAwesomeIcon>
            </div>
        </div>
        
        
    );
}