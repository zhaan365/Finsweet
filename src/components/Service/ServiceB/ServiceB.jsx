import React from 'react';
import num1 from "../../../images/home/next/01.png";
import icon1 from "../../../images/home/next/Icon Div.png";
import line from "../../../images/home/next/Shapes 1.png";
import Line from "../../../images/home/next/Line 1.png";
import num2 from "../../../images/home/next/02.png";
import icon2 from "../../../images/home/next/Icon Div (1).png";
import num3 from "../../../images/home/next/03.png";
import icon3 from "../../../images/home/next/Icon Div (2).png";
import num4 from "../../../images/home/next/04.png";
import icon4 from "../../../images/home/next/Icon Div (3).png";
import num5 from "../../../images/home/next/05.png";
import icon5 from "../../../images/home/next/Icon Div (4).png";
import num6 from "../../../images/home/next/06.png";
import icon6 from "../../../images/home/next/Icon Div (5).png";

const ServiceB = () => {
    return (
        <section className="serviceB">
            <div className="container">

                <h3 className="homeE__subtitle">
                    Our Process
                </h3>
                <h2 className="homeE__title">
                    The process we are working <br/>
                    With Our client Worldwide
                </h2>
                <p className="homeE__text">
                    Through True Rich Attended does no end it his mother since real had half <br/>
                    every him case in packages enquire we up ecstatic unsatiable.
                </p>

                <div className="homeE__row1">
                    <div className="homeE__cards">
                        <div className="homeE__card">
                            <img src={num1} alt="" className="homeE__card-num"/>
                            <img src={icon1} alt=""/>

                            <div className="homeE__card-info">
                                <h2 className="homeE__card-title">
                                    Discover
                                </h2>
                                <p className="homeE__card-text">
                                    We aim to attain the greatest <br/>
                                    satisfaction for our clients and be <br/>
                                    one of the prominent.
                                </p>
                            </div>
                        </div>
                        <img src={line} alt=""/>
                    </div>
                    <img src={Line} alt=""/>
                    <div className="homeE__card">
                        <img src={num2} alt="" className="homeE__card-num"/>
                        <img src={icon2} alt=""/>

                        <div className="homeE__card-info">
                            <h2 className="homeE__card-title">
                                Designing
                            </h2>
                            <p className="homeE__card-text">
                                We aim to attain the greatest <br/>
                                satisfaction for our clients and be <br/>
                                one of the prominent.
                            </p>
                        </div>
                    </div>
                    <img src={Line} alt=""/>
                    <div className="homeE__card">
                        <img src={num3} alt="" className="homeE__card-num"/>
                        <img src={icon3} alt=""/>

                        <div className="homeE__card-info">
                            <h2 className="homeE__card-title">
                                Development
                            </h2>
                            <p className="homeE__card-text">
                                We aim to attain the greatest <br/>
                                satisfaction for our clients and be <br/>
                                one of the prominent.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="homeE__row2">
                    <div className="homeE__card">
                        <img src={num4} alt="" className="homeE__card-num"/>
                        <img src={icon4} alt=""/>

                        <div className="homeE__card-info">
                            <h2 className="homeE__card-title">
                                Testing
                            </h2>
                            <p className="homeE__card-text">
                                We aim to attain the greatest <br/>
                                satisfaction for our clients and be <br/>
                                one of the prominent.
                            </p>
                        </div>
                    </div>
                    <img src={Line} alt=""/>
                    <div className="homeE__card">
                        <img src={num5} alt="" className="homeE__card-num"/>
                        <img src={icon5} alt=""/>

                        <div className="homeE__card-info">
                            <h2 className="homeE__card-title">
                                Deployment
                            </h2>
                            <p className="homeE__card-text">
                                We aim to attain the greatest <br/>
                                satisfaction for our clients and be <br/>
                                one of the prominent.
                            </p>
                        </div>
                    </div>
                    <img src={Line} alt=""/>
                    <div className="homeE__cards">
                        <img src={line} alt=""/>
                        <div className="homeE__card">
                            <img src={num6} alt="" className="homeE__card-num"/>
                            <img src={icon6} alt=""/>

                            <div className="homeE__card-info">
                                <h2 className="homeE__card-title">
                                    Maintenance
                                </h2>
                                <p className="homeE__card-text">
                                    We aim to attain the greatest <br/>
                                    satisfaction for our clients and be <br/>
                                    one of the prominent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServiceB;