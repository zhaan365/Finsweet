import React from 'react';
import box from '../../../images/home/next/Shape.png'
import {Link} from 'react-router-dom'
import {LiaLongArrowAltRightSolid} from 'react-icons/lia'
import img1 from '../../../images/home/next2/Image.png'
import img2 from '../../../images/home/next2/Image (1).png'



const HomeG = () => {
    return (
        <section className="homeG">
            <div className="container">

                <img src={box} alt=""/>

                <h2 className="homeG__title">
                    Read our latest blogs & news
                </h2>

                <div className="homeG__row">
                    <div className="homeG__card">
                        <img src={img1} alt=""/>
                        <div className="homeG__card-info">
                            <h3 className="homeG__card-title">
                                Jan 19, 2021
                            </h3>
                            <p className="homeG__card-text">
                                Today’s best design <br/>
                                trends for digital <br/>
                                products
                            </p>
                            <div className="homeG__card-subtitle">
                                <Link className="homeG__card-link" to='/'>
                                    Read More
                                </Link>
                                <LiaLongArrowAltRightSolid className="homeG__card-icon" size={19}/>
                            </div>
                        </div>
                    </div>
                    <div className="homeG__card">
                        <img src={img2} alt=""/>
                        <div className="homeG__card-info">
                            <h3 className="homeG__card-title">
                                Jan 19, 2021
                            </h3>
                            <p className="homeG__card-text">
                                A practical guide to <br/>
                                building a brand <br/>
                                strategy
                            </p>
                            <div className="homeG__card-subtitle">
                                <Link className="homeG__card-link" to='/'>
                                    Read More
                                </Link>
                                <LiaLongArrowAltRightSolid className="homeG__card-icon" size={19}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomeG;