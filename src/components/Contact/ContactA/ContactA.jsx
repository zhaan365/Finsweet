import React from 'react';
import icon1 from '../../../images/contact/top.png'
import icon2 from '../../../images/contact/bottom.png'
import title from '../../../images/contact/title.png'
import btn from '../../../images/contact/btn.png'
import arrow from '../../../images/contact/arrow.png'
import tw from '../../../images/contact/tw.png'
import inst from '../../../images/contact/inst.png'
import inn from '../../../images/contact/in.png'
import face from '../../../images/contact/face.png'
import map from '../../../images/contact/Map.png'
import mineLeft from "../../../images/home/next2/left.png";
import ok from "../../../images/home/next2/ok.png";
import last from "../../../images/home/next2/last.png";



const ContactA = () => {
    return (
        <section className="contactA">
            <div className="container">

                <div className="contactA__row">
                    <div className="contactA__left">
                        <div className="contactA__left-box"></div>
                        <h2 className="contactA__left-title">
                            CONTACT US
                        </h2>
                        <img src={title} alt=""/>
                        <p className="contactA__left-text">
                            Fill up the Form  and ou team will get back to within 24 hrs
                        </p>

                        <form className="contactA__form">
                            <div className="contactA__form-label">
                                <div className="contactA__form-field">
                                    <h3 className="contactA__form-title">
                                        Name
                                    </h3>
                                    <input type="text" placeholder="Paresh Srichandan" className="contactA__form-input"/>
                                </div>
                                <div className="contactA__form-field">
                                    <h3 className="contactA__form-title">
                                        E-mail
                                    </h3>
                                    <input type="text" placeholder="Paresh@pixeto.com" className="contactA__form-input"/>
                                </div>
                                <div className="contactA__form-field">
                                    <h3 className="contactA__form-title">
                                        Subject
                                    </h3>
                                    <input type="text" placeholder="For web design work Enquire" className="contactA__form-input"/>
                                </div>

                                <div className="contactA__form-field2">
                                    <h3 className="contactA__form-subtitle">
                                        Messege
                                    </h3>
                                    <textarea placeholder="Type your Messege" cols="30" rows="10" className="contactA__form-text"></textarea>
                                </div>
                            </div>
                        </form>

                        <button className="contactA__left-btn">
                            <img src={btn} alt="" className="contactA__left-icon"/>
                            Send Messege
                            <img src={arrow} alt=""/>
                        </button>
                    </div>
                    <div className="contactA__right">
                        <img src={icon1} alt="" className="contactA__right-top"/>
                        <img src={icon2} alt="" className="contactA__right-bottom"/>

                        <h2 className="contactA__right-title">
                            Location
                        </h2>
                        <div className="contactA__right-line"></div>
                        <p className="contactA__right-text">
                            DLF Cybercity, Bhubaneswar, <br/>
                            India, &52050
                        </p>

                        <h2 className="contactA__right-title2">
                            Working Hour
                        </h2>
                        <div className="contactA__right-line"></div>
                        <p className="contactA__right-text">
                            Monday To Friday <br/>
                            9:00 AM to 8:00 PM
                        </p>
                        <p className="contactA__right-text2">
                            Our Support Team is available 24Hrs
                        </p>

                        <h2 className="contactA__right-title3">
                            Contact Us
                        </h2>
                        <div className="contactA__right-line"></div>
                        <p className="contactA__right-text">
                            020 7993 2905 <br/>
                            <span>Hello@ether.com</span>
                        </p>


                        <div className="contactA__right-icons">
                            <img src={face} alt=""/>
                            <img src={tw} alt=""/>
                            <img src={inst} alt=""/>
                            <img src={inn} alt=""/>
                        </div>

                    </div>
                </div>

                <img src={map} alt=""/>

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

export default ContactA;