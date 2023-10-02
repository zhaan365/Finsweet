import React from 'react';
import right from '../../../images/company/a/right.png'
import img from '../../../images/career/top.png'
import img2 from '../../../images/career/top2.png'
import {Link} from 'react-router-dom'
import img3 from '../../../images/career/arrow.png'


const CareerA = () => {
    return (
        <section className="careerA">
            <div className="container">


                <div className="careerA__top">
                    <img src={right} alt="" className="careerA__top-img"/>
                    <h3 className="careerA__top-subtitle">
                        CAREER AT FINSWEET
                    </h3>
                    <h2 className="careerA__top-title">
                        We hired people who are <br/>
                        Always Passionate about <br/>
                        what they do
                    </h2>
                    <p className="careerA__top-text">
                        Through True Rich Attended does no end it his mother since real had half <br/>
                        every him case in packages enquire we up ecstatic unsatiable saw .
                    </p>

                    <img src={img} alt="" className="careerA__top-img2"/>
                    <p className="careerA__top-text2">
                        See Our open positions
                    </p>
                    <img src={img2} alt=""/>
                </div>


                <div className="careerA__bottom">
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Full Stack Developer
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>Bengaluru · Full Time</span>
                            <span>$10K - $18K · No equity</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Testing Engineer
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>Remote · Full Time</span>
                            <span>$08K - $10K · No equity</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Hr Manager
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>Mumbai . Fultime</span>
                            <span>$08K - $10K · 4 to 5 Yrs Exp</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Product Designer
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>Mumbai . Fultime</span>
                            <span>$08K - $10K · 4 to 5 Yrs Exp</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Wordpress Developer
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>Mumbai . Fultime</span>
                            <span>$08K - $10K · 4 to 5 Yrs Exp</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Jr. QA Tester
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>California, USA . Full Time</span>
                            <span>$14K - $23K · No equity</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Sr. UX Designer
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>California, USA . Full Time</span>
                            <span>$14K - $23K · No equity</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Social Media Manager
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>Kolkata, India .  Fulltime</span>
                            <span>$5K - $6K ·  Fresher</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                    <div className="careerA__bottom-card">
                        <h3 className="careerA__bottom-title">
                            Golang Developer
                        </h3>
                        <p className="careerA__bottom-text">
                            <span>Mumbai . Fultime</span>
                            <span>$08K - $10K · 4 to 5 Yrs Exp</span>
                        </p>
                        <Link className="careerA__bottom-link" to='/'>
                            Apply Now
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CareerA;