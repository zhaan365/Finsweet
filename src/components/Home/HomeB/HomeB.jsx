import React from 'react';
import img1 from '../../../images/home/img1.png'
import img2 from '../../../images/home/img2.png'
import img3 from '../../../images/home/img3.png'
import img4 from '../../../images/home/img4.png'
import line from '../../../images/home/line.png'


const HomeB = () => {
    return (
        <section className="homeB">
            <div className="container">


                <h3 className="homeB__title">
                    ABOUT US
                </h3>
                <div className="homeB__desc">
                    <p className="homeB__desc-text">
                        The company leads entire <br/>
                        webdesign process from <br/>
                        concept to delivery.
                    </p>
                    <div className="homeB__desc-right">
                        <h2 className="homeB__desc-title">
                            The Era Of Technology.
                        </h2>
                        <p className="homeB__desc-text2">
                            Through True Rich Attended does no end it his mother since real had <br/>
                            half every him case in packages enquire we up ecstatic unsatiable <br/>
                            saw his giving Remain expense you position concluded.
                        </p>
                    </div>
                </div>


                <div className="homeB__imgs">
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <div className="homeB__imgs-img">
                        <img src={img3} alt=""/>
                        <img src={img4} alt=""/>
                    </div>
                </div>

                <div className="homeB__row">
                    <div className="homeB__card">
                        <h3 className="homeB__card-title">
                            1560+
                        </h3>
                        <img src={line} alt=""/>
                        <p className="homeB__card-text">
                            Project Delivered
                        </p>
                    </div>
                    <div className="homeB__card">
                        <h3 className="homeB__card-title">
                            100+
                        </h3>
                        <img src={line} alt=""/>
                        <p className="homeB__card-text">
                            Professional
                        </p>
                    </div>
                    <div className="homeB__card">
                        <h3 className="homeB__card-title">
                            950+
                        </h3>
                        <img src={line} alt=""/>
                        <p className="homeB__card-text">
                            Happy Client
                        </p>
                    </div>
                    <div className="homeB__card">
                        <h3 className="homeB__card-title">
                            10 yrs
                        </h3>
                        <img src={line} alt=""/>
                        <p className="homeB__card-text">
                            Experience
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomeB;