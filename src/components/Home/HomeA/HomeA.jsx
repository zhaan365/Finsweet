import React from 'react';
import homeA from '../../../images/home/homeA.png'
import btn from '../../../images/home/btn.png'
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'
import logo1 from '../../../images/home/logo1.png'
import logo2 from '../../../images/home/logo2.png'
import logo3 from '../../../images/home/logo3.png'
import logo4 from '../../../images/home/logo4.png'
import logo5 from '../../../images/home/logo5.png'



const HomeA = () => {
    return (
        <section className="homeA">
            <div className="container">

                <div className="homeA__nav">
                    <div className="homeA__info">

                        <div className="homeA__info-box"></div>

                        <h1 className="homeA__info-title">
                            Transform Your Idea <br/>
                            Into Reality with <br/>
                            Finsweet
                        </h1>

                        <p className="homeA__info-text">
                            The entire Finsweet team knows what's good with Webflow and <br/>
                            you can too with 1 week and a good attitude.
                        </p>

                        <button className="homeA__info-btn">
                            Request Quote
                            <LiaLongArrowAltRightSolid size={19}/>
                            <img src={btn} alt="" className="homeA__info-img"/>
                        </button>


                    </div>
                    <img src={homeA} alt=""/>
                </div>

                <div className="homeA__row">
                    <div className="homeA__row-desc">
                        <h2 className="homeA__row-title">
                            Our Clients
                        </h2>
                        <p className="homeA__row-text">
                            We've Worked with
                        </p>
                    </div>
                    <div className="homeA__row-row">
                        <img src={logo1} alt=""/>
                        <img src={logo2} alt=""/>
                        <img src={logo3} alt=""/>
                        <img src={logo4} alt=""/>
                        <img src={logo5} alt=""/>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HomeA;