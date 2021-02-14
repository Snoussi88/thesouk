import React from 'react';
import './footer.css';



export default function Footer() {
    return(
        <div>
            <div className="footerContainer">
                <div className="columnContainer">
                    <div className="aboutColumn">
                        <div className="title">About us</div>
                        <ul>
                            <li>thrif shop</li>
                            <li>confidentiality</li>
                            <li>the souk prime</li>
                            <li>tech week</li>
                        </ul>
                    </div>
                    <div className="contactColumn">
                        <div className="title">we are on:</div>
                        <ul>
                            <li>facebook</li>
                            <li>instagram</li>
                            <li>twitter</li>
                            <li>youtube</li>
                        </ul>
                    </div>
                    <div className="makeMoneyColumn">
                        <div className="title">Make money with us</div>
                        <ul>
                            <li>sell on the souk</li>
                            <li>become a souk partner</li>
                            <li>other jobs</li>
                        </ul>
                    </div>
                    <div className="paymentColumn">
                        <div className="title">Payment methods</div>
                        <ul>
                            <li>sell on the souk</li>
                            <li>become a souk partner</li>
                            <li>other jobs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}