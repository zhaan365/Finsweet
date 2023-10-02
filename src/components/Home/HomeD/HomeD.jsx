import React from 'react';
import icon1 from '../../../images/home/icon11.png'
import icon2 from '../../../images/home/icon22.png'
import icon3 from '../../../images/home/icon33.png'
import btn from "../../../images/home/btn.png";
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'
import {Link} from 'react-router-dom'


const HomeD = () => {
    return (
        <section className="homeD">
            <div className="container">

                <h3 className="homeD__title">
                    Our Services
                </h3>
                <h2 className="homeD__text">
                    We build software solutions <br/>
                    that solve client's business <br/>
                    challenges
                </h2>
                <button className="homeA__info-btn">
                    Request Quote
                    <LiaLongArrowAltRightSolid size={19}/>
                    <img src={btn} alt="" className="homeA__info-img"/>
                </button>


                <div className="homeD__row">
                    <div className="homeD__card">
                        <img src={icon1} alt=""/>
                        <h3 className="homeD__card-title">
                            Technical support
                        </h3>
                        <p className="homeD__card-text">
                            We aim to attain the greatest <br/>
                            satisfaction for our clients and be one of <br/>
                            the prominent names when it comes to <br/>
                            world-class service
                        </p>
                        <Link className="homeD__card-link" to='/'>
                            Read more
                            <LiaLongArrowAltRightSolid size={19}/>
                        </Link>
                    </div>
                    <div className="homeD__card">
                        <img src={icon2} alt=""/>
                        <h3 className="homeD__card-title">
                            Testing Management
                        </h3>
                        <p className="homeD__card-text">
                            We aim to attain the greatest <br/>
                            satisfaction for our clients and be one of <br/>
                            the prominent names when it comes to <br/>
                            world-class service
                        </p>
                        <Link className="homeD__card-link" to='/'>
                            Read more
                            <LiaLongArrowAltRightSolid size={19}/>
                        </Link>
                    </div>
                    <div className="homeD__card">
                        <img src={icon3} alt=""/>
                        <h3 className="homeD__card-title">
                            Development
                        </h3>
                        <p className="homeD__card-text">
                            We aim to attain the greatest <br/>
                            satisfaction for our clients and be one of <br/>
                            the prominent names when it comes to <br/>
                            world-class service
                        </p>
                        <Link className="homeD__card-link" to='/'>
                            Read more
                            <LiaLongArrowAltRightSolid size={19}/>
                        </Link>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default HomeD;