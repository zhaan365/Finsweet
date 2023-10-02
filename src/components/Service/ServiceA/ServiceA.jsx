import React from 'react';
import btn from "../../../images/home/btn.png";
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'



const ServiceA = () => {
    return (
        <section className="serviceA">
            <div className="container">

                <div className="serviceA__row">
                    <div className="serviceA__right">
                        <h3 className="serviceA__right-subtitle">
                            Our Services
                        </h3>
                        <h2 className="serviceA__right-title">
                            We Build Software <br/>
                            Solutionthat Solve Clients <br/>
                            Business Challenges
                        </h2>
                        <p className="serviceA__right-text">
                            Through True Rich Attended does no end it his mother since favourable real <br/>
                            had half every him case in packages enquire we up ecstatic.
                        </p>
                        <button className="homeA__info-btn">
                            Request Quote
                            <LiaLongArrowAltRightSolid size={19}/>
                            <img src={btn} alt="" className="homeA__info-img"/>
                        </button>
                    </div>
                    <div className="serviceA__left">
                        <h2 className="serviceA__left-title">Technical support</h2>
                        <h2 className="serviceA__left-title">Development</h2>
                        <h2 className="serviceA__left-title">AWS/Azure</h2>
                        <h2 className="serviceA__left-title">Consulting</h2>
                        <h2 className="serviceA__left-title">Information Technology</h2>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServiceA;