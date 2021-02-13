import React from 'react';
import './carousel.css';
import svg1 from '../../assets/pictures/svg1.svg';
import svg2 from '../../assets/pictures/svg2.svg';
import svg3 from '../../assets/pictures/svg3.svg';
import svg4 from '../../assets/pictures/svg4.svg';



export default function Carousel(){
  return(<div id="slider">
      <figure>
        <img src={svg1} alt="nvm"/>
        <img src={svg2} alt="nvm"/>
        <img src={svg3} alt="nvm"/>
        <img src={svg4} alt="nvm"/>
      </figure>
    </div>);
}