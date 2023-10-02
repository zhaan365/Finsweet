import React from 'react';
import icon1 from '../../../images/career/Culture Icon.png'
import icon2 from '../../../images/career/Culture Icon (1).png'
import icon3 from '../../../images/career/Culture Icon (2).png'
import icon4 from '../../../images/career/Culture Icon (3).png'
import icon5 from '../../../images/career/Culture Icon (4).png'
import icon6 from '../../../images/career/Culture Icon (5).png'


const CareerB = () => {
    return (
        <section className="careerB">
            <div className="container">


                <h3 className="careerB__subtitle">
                    OUR WORK & CULTURE
                </h3>
                <h2 className="careerB__title">
                    Come and join a team of highly <br/>
                    skilled professionals.
                </h2>
                <p className="careerB__text">
                    Through True Rich Attended does no end it his mother since real had half <br/>
                    every him case in packages enquire we up ecstatic unsatiable saw his giving <br/>
                    Remain expense you position concluded.
                </p>

                <div className="careerB__row">
                    <div className="careerB__card">
                        <img src={icon1} alt=""/>
                        <h3 className="careerB__card-title">
                            Covid-19 insurance
                        </h3>
                        <p className="careerB__card-text">
                            Through True Rich Attended does no end it his <br/>
                            mother since real had halfdoes no end it
                        </p>

                    </div>
                    <div className="careerB__card">
                        <img src={icon2} alt=""/>
                        <h3 className="careerB__card-title">
                            Flexible working time
                        </h3>
                        <p className="careerB__card-text">
                            Through True Rich Attended does no end it his <br/>
                            mother since real had halfdoes no end it
                        </p>

                    </div>
                    <div className="careerB__card">
                        <img src={icon3} alt=""/>
                        <h3 className="careerB__card-title">
                            Work from home
                        </h3>
                        <p className="careerB__card-text">
                            Through True Rich Attended does no end it his <br/>
                            mother since real had halfdoes no end it
                        </p>

                    </div>
                    <div className="careerB__card">
                        <img src={icon4} alt=""/>
                        <h3 className="careerB__card-title">
                            Annual retreats
                        </h3>
                        <p className="careerB__card-text">
                            Through True Rich Attended does no end it his <br/>
                            mother since real had halfdoes no end it
                        </p>

                    </div>
                    <div className="careerB__card">
                        <img src={icon5} alt=""/>
                        <h3 className="careerB__card-title">
                            Learning stipend
                        </h3>
                        <p className="careerB__card-text">
                            Through True Rich Attended does no end it his <br/>
                            mother since real had halfdoes no end it
                        </p>

                    </div>
                    <div className="careerB__card">
                        <img src={icon6} alt=""/>
                        <h3 className="careerB__card-title">
                            Gym membership
                        </h3>
                        <p className="careerB__card-text">
                            Through True Rich Attended does no end it his <br/>
                            mother since real had halfdoes no end it
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CareerB;