import './article.css';
import React from 'react';
import { faPlus,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Article(props){
    return(
        <div className="container"> 
        <div className="box1">
        </div>
        <div className="box2">
            <div className="imageContainer">
            </div>
            <div className="articleTitle">object for sale</div>
            <div className="articlePrice">12.4$</div>
            
            <div className="buttonContainer"> add to cart<FontAwesomeIcon icon={faShoppingCart} color={"white"}></FontAwesomeIcon></div>
        </div>
        <div className="box3">
            <div className="buttonContainer">
                <FontAwesomeIcon icon={faPlus} color={"white"}></FontAwesomeIcon>
            </div>
        </div>
        </div>
    );
}