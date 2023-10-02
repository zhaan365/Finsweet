import React from 'react';
import box from "../../../images/home/boxC.png";
import icon1 from "../../../images/home/icon1.png";
import icon2 from "../../../images/home/icon2.png";
import icon3 from "../../../images/home/icon3.png";
import line from "../../../images/home/lineC.png";


const CompanyB = () => {
    return (
        <section className="companyB">
            <div className="container">

                <div className="companyB__row">
                    <div className="companyB__row-left">
                        <h3 className="companyB__subtitle">
                            Our expertise
                        </h3>
                        <h2 className="companyB__title">
                            We want to get local <br/>
                            identification in every <br/>
                            corner of the world in this <br/>
                            era of global citizenship
                        </h2>
                        <div className="companyB__text">
                            Through True Rich Attended does no end it his mother since real had half <br/>
                            every him case in packages enquire we up ecstatic unsatiable saw his giving <br/>
                            Remain expense you position concluded.
                        </div>
                    </div>

                    <div className="homeC__right">
                        <div className="homeC__right-card homeC__right-card1">
                            <img src={box} alt="" className="homeC__right-img"/>
                            <img src={icon1} alt=""/>
                            <div className="homeC__right-desc">
                                <h3 className="homeC__right-title">
                                    On Time Delivery
                                </h3>
                                <p className="homeC__right-text">
                                    Through True Rich Attended does no end it <br/>
                                    his mother since real had half every him.
                                </p>
                            </div>
                        </div>
                        <div className="homeC__right-card">
                            <img src={icon2} alt=""/>
                            <div className="homeC__right-desc">
                                <h3 className="homeC__right-title">
                                    Best Quality
                                </h3>
                                <p className="homeC__right-text">
                                    Through True Rich Attended does no end it <br/>
                                    his mother since real had half every him.
                                </p>
                            </div>
                        </div>
                        <div className="homeC__right-box">
                            <div className="homeC__right-card">
                                <img src={icon3} alt=""/>
                                <div className="homeC__right-desc">
                                    <h3 className="homeC__right-title">
                                        Support Assist
                                    </h3>
                                    <p className="homeC__right-text">
                                        Through True Rich Attended does no end it <br/>
                                        his mother since real had half every him.
                                    </p>
                                </div>
                            </div>
                            <img src={line} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CompanyB;