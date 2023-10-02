import React from 'react';
import ava1 from '../../../images/home/next/Image 3.png'
import ava2 from '../../../images/home/next/Image 2 (1).png'
import ava3 from '../../../images/home/next/Image 1 (1).png'
import line from '../../../images/home/next/Group 1710.png'
import logo from '../../../images/home/next/Logo.png'
import svg from '../../../images/home/next/Quote.png'
import box from '../../../images/home/next/Shape.png'



const HomeF = () => {
    return (
        <section className="homeF">
            <div className="container">


                <div className="homeF__nav">
                    <div className="homeF__block">
                        <img className="homeF__block-img" src={box} alt=""/>

                        <h2 className="homeF__block-title">
                            Our customers love <br/>
                            what we do
                        </h2>
                        <h3 className="homeF__block-subtitle">
                            Transform your idea into reality with finsweet
                        </h3>
                        <p className="homeF__block-text">
                            It is a long established fact that a reader will be distracted by <br/>
                            the readable content of a page when looking at its layout.
                        </p>

                        <div className="homeF__block-imgs">
                            <img src={ava1} alt=""/>
                            <img src={ava2} alt=""/>
                            <img src={ava3} alt=""/>
                        </div>
                        <p className="homeF__block-text2">
                            <span>30+</span> Customer Reviews
                        </p>
                    </div>
                    <div className="homeF__card">
                        <img src={line} alt="" className="homeF__card-img0"/>

                        <img src={svg} alt="" className="homeF__card-img1"/>
                        <p className="homeF__card-text">
                            Finsweet has been a wonderful partner <br/>
                            to work with. I have been a customer <br/>
                            now for the past few months now and I <br/>
                            have had nothing but positive <br/>
                            experiences!
                        </p>
                        <div className="homeF__card-ava">
                            <img src={ava1} alt=""/>

                            <div className="homeF__card-desc">
                                <h2 className="homeF__card-title">
                                    Johnny Andro
                                </h2>
                                <h3 className="homeF__card-subtitle">
                                    Director, Company
                                </h3>
                            </div>
                        </div>
                        <img src={logo} alt="" className="homeF__card-img2"/>
                    </div>
                </div>





            </div>
        </section>
    );
};

export default HomeF;