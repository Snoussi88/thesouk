import { React } from 'react';
import './heroSection.css';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function HeroSection() {
    return(
        <div className="heroContainer">
            <div className="title">
                
                <div className="blank">

                </div>
                <div className="arrowContainer">
                    <div className="arrow">
                        <FontAwesomeIcon className="downArrow" icon={faArrowDown} size="2x"></FontAwesomeIcon>
                    </div>
                </div>
                
            </div>
        </div>
    );
}