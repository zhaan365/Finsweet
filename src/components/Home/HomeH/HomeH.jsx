import React from 'react';
import left from '../../../images/home/next2/Shapes.png'
import line from '../../../images/home/next2/Shapes (1).png'
import mineLeft from '../../../images/home/next2/left.png'
import ok from '../../../images/home/next2/ok.png'
import last from '../../../images/home/next2/last.png'
import arrow from '../../../images/home/next2/Icon.png'


const HomeH = () => {
    return (
        <section className="homeH">
            <div className="container">

                <div className="homeH__form">
                    <img src={left} alt="" className="homeH__form-img1"/>

                    <div className="homeH__form-info">
                        <h3 className="homeH__form-title">
                            NEWSLETTER
                        </h3>
                        <p className="homeH__form-text">
                            Subscribe our News Letter <br/>
                            to get Latest Updates.
                        </p>
                    </div>
                    <input type="text" placeholder="Paresh@Pixeto.com" className="homeH__form-input"/>

                    <img src={line} alt="" className="homeH__form-img2"/>
                </div>


                <img className="homeH__box" src={mineLeft} alt=""/>
                <div className="homeH__nav">
                    <div className="homeH__right">
                        <h2 className="homeH__title">
                            Let's make <br/>
                            something special
                        </h2>
                        <img className="homeH__img" src={ok} alt=""/>
                        <p className="homeH__text1">
                            020 7993 2905
                        </p>
                        <p className="homeH__text2">
                            hi@finsweet.com
                        </p>
                        <div className="homeH__line"></div>
                    </div>
                    <div className="homeH__left">
                        <div className="homeH__left-row">
                            <h2 className="homeH__left-title">Home</h2>
                            <h2 className="homeH__left-title">Service</h2>
                            <h2 className="homeH__left-title">Company</h2>
                            <h2 className="homeH__left-title">Career</h2>
                            <h2 className="homeH__left-title">News</h2>
                        </div>
                        <div className="homeH__left-row2 homeH__left-row3">
                            <h3 className="homeH__left-title">
                                Service
                            </h3>

                            <div className="homeH__left-row">
                                <h2 className="homeH__left-title2">Technical support</h2>
                                <h2 className="homeH__left-title2">Testing</h2>
                                <h2 className="homeH__left-title2">Development</h2>
                                <h2 className="homeH__left-title2">AWS/Azure</h2>
                                <h2 className="homeH__left-title2">Consulting</h2>
                                <h2 className="homeH__left-title2">Information Technology</h2>
                            </div>
                        </div>
                        <div className="homeH__left-row2">
                            <h3 className="homeH__left-title">
                                Resourses
                            </h3>

                            <div className="homeH__left-row">
                                <h2 className="homeH__left-title2">About Us</h2>
                                <h2 className="homeH__left-title2">Testimonial</h2>
                                <h2 className="homeH__left-title2">Privacy Policy</h2>
                                <h2 className="homeH__left-title2">Terms of use</h2>
                                <h2 className="homeH__left-title2">Blog</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homeH__bottom">
                    <div className="homeH__text3">
                        DLF Cybercity, Bhubaneswar, <br/>
                        India, &52050
                    </div>
                    <div className="homeH__last">
                        <img src={last} alt=""/>
                        <p className="homeH__last-text">
                            Contact Us
                        </p>
                        <img src={arrow} alt=""/>
                    </div>
                </div>





            </div>
        </section>
    );
};

export default HomeH;