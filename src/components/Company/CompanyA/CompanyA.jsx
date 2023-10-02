import React from 'react';
import box from '../../../images/company/a/box.png'
import right from '../../../images/company/a/right.png'
import img1 from '../../../images/company/b/img1.png'
import img2 from '../../../images/company/b/img2.png'
import img3 from '../../../images/company/b/img3.png'
import block from '../../../images/company/b/block.png'
import boxblue from '../../../images/company/b/boxblue.png'
import line from '../../../images/company/b/line.png'
import em from '../../../images/company/b/emodji.png'
import logo1 from '../../../images/company/b/Logo.png'
import logo2 from '../../../images/company/b/Logo (1).png'
import logo3 from '../../../images/company/b/Logo (2).png'
import logo4 from '../../../images/company/b/Logo (3).png'
import logo5 from '../../../images/company/b/Logo (4).png'



const CompanyA = () => {
    return (
        <section className="companyA">
            <div className="container">


                <div className="companyA__top">
                    <div className="companyA__top-left">
                        <img src={box} alt=""/>
                        <h3 className="companyA__top-title">
                            Company
                        </h3>
                    </div>
                    <img src={right} alt=""/>
                </div>
                <h2 className="companyA__title">
                    Award-winning Company <br/>
                    seen and used by millions <br/>
                    around the world.
                </h2>
                <p className="companyA__text">
                    It is a long established fact that a reader will be distracted by the readable content of a <br/>
                    page when looking at its layout. The Maker is a decentralized.
                </p>

                <div className="companyA__imgs">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={block} className="companyA__imgs-img" alt=""/>
                </div>

                <div className="companyA__row">
                    <div className="companyA__left">
                        <div className="companyA__left-img">
                            <img src={boxblue} alt=""/>
                            <img src={em} alt=""/>
                        </div>
                        <h2 className="companyA__left-title">
                            From Startups to Titans of <br/>
                            Industry
                        </h2>
                        <p className="companyA__left-text">
                            Through True Rich Attended does no end it his mother since <br/>
                            favourable real had half every him case in packages enquire we up <br/>
                            ecstatic unsatiable saw his giving Remain expense of gay produce <br/>
                            excited perceived do an a china mean its so ye when in explained <br/>
                            Hearts am next over match mr partiality not shoud latter thus as out <br/>
                            no passed forming middleton exercise up
                        </p>
                    </div>
                    <div className="companyA__right">
                        <div className="companyA__right-row">
                                <div className="companyA__right-box">
                                    <h2 className="companyA__right-title">
                                        1560+
                                    </h2>
                                    <img src={line} alt=""/>
                                    <p className="companyA__right-text">
                                        Project Delivered
                                    </p>
                                </div>
                                <div className="companyA__right-box">
                                    <h2 className="companyA__right-title">
                                        950+
                                    </h2>
                                    <img src={line} alt=""/>
                                    <p className="companyA__right-text">
                                        Happy Client
                                    </p>
                                </div>
                            </div>
                        <div className="companyA__right-row">
                                <div className="companyA__right-box">
                                    <h2 className="companyA__right-title">
                                        100+
                                    </h2>
                                    <img src={line} alt=""/>
                                    <p className="companyA__right-text">
                                        Professional
                                    </p>
                                </div>
                                <div className="companyA__right-box">
                                    <h2 className="companyA__right-title">
                                        10 yrs
                                    </h2>
                                    <img src={line} alt=""/>
                                    <p className="companyA__right-text">
                                        Experience
                                    </p>
                                </div>
                            </div>
                    </div>

                </div>


                <div className="companyA__icons">
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                </div>




            </div>
        </section>
    );
};

export default CompanyA;