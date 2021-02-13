import React from 'react';
import './categories.css';

var x  = "browser name:"+ navigator.appCodeName;

export default function Categories(){
    return(
        
        <div className="categoriesContainer">
            <ul>
                <li>{x}</li>
                <li>Men & Women's Fashion</li>
                <li>Phones</li>
                <li>Tech & electronics</li>
                <li>Home</li>
                <li>Toys, Kids & babies, Pets</li>
                <li>Beauty, Health, Hair</li>
                <li>Home tools</li>
            </ul>
        </div>
    );
}