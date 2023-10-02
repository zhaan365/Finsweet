import React from 'react';
import {Link} from 'react-router-dom'
import arrow from '../../../images/career/arrow.png'
import ava1 from '../../../images/blog/ava1.png'
import ava2 from '../../../images/blog/ava2.png'
import ava3 from '../../../images/blog/ava3.png'
import img from '../../../images/blog/img.png'
import icon from '../../../images/icon.png'
import card1 from '../../../images/blog/card1.png'
import card2 from '../../../images/blog/card2.png'
import card3 from '../../../images/blog/card3.png'
import card4 from '../../../images/blog/card4.png'


const BlogA = () => {
    return (
        <section className="blogA">
            <div className="container">

                <div className="blogA__row">
                    <div className="blogA__left">
                        <div className="blogA__left-box"></div>

                        <h3 className="blogA__left-subtitle">
                            TREnding
                        </h3>
                        <h2 className="blogA__left-title">
                            Breaking the code How <br/>
                            did we build our Figma <br/>
                            plugin
                        </h2>
                        <p className="blogA__left-text">
                            It is a long established fact that a reader will be distracted by the readable <br/>
                            content of a page when looking at its layout. The Maker is a decentralized. We <br/>
                            aim to attain the.
                        </p>
                        <Link className="blogA__left-link" to='/'>
                            Read More
                            <img src={arrow} alt=""/>
                        </Link>

                        <div className="blogA__ava">
                            <div className="blogA__ava-left">
                                <img src={ava1} alt=""/>
                                <h3 className="blogA__ava-title">
                                    Andrew Jonson
                                </h3>
                            </div>
                            <div className="blogA__ava-center"></div>
                            <p className="blogA__ava-text">
                                Posted on 27th January 2021
                            </p>
                        </div>
                        <img src={img} alt=""/>
                    </div>
                    <div className="blogA__right">

                        <img src={icon} alt="" className="blogA__right-img"/>

                        <p className="blogA__right-text">
                            Great design expectations <br/>
                            prejudice in digital products <br/>
                            in Next Year
                        </p>
                        <div className="blogA__right-ava">
                            <img src={ava1} alt=""/>
                            <p className="blogA__right-titles">
                                <span>Andrew Jonson</span> <br/>
                                Jan 19, 2021
                            </p>
                        </div>

                        <p className="blogA__right-text blogA__right-text2">
                            Great design expectations <br/>
                            prejudice in digital products <br/>
                            in Next Year
                        </p>
                        <div className="blogA__right-ava">
                            <img src={ava2} alt=""/>
                            <p className="blogA__right-titles">
                                <span>Mathew Jasele</span> <br/>
                                Jan 19, 2021
                            </p>
                        </div>

                        <p className="blogA__right-text blogA__right-text2">
                            Great design expectations <br/>
                            prejudice in digital products <br/>
                            in Next Year
                        </p>
                        <div className="blogA__right-ava">
                            <img src={ava3} alt=""/>
                            <p className="blogA__right-titles">
                                <span>Hussen Abakas</span> <br/>
                                Jan 19, 2021
                            </p>
                        </div>

                    </div>
                </div>

                <h2 className="blogA__title">
                    Read Recent Post
                </h2>

                <div className="blogA__nav">
                    <div className="blogA__card">
                        <img src={card1} alt=""/>

                        <div className="blogA__card-info">
                            <h3 className="blogA__card-title">
                                Today’s best design <br/>
                                trends for digital <br/>
                                products
                            </h3>
                            <div className="blogA__card-ava">
                                <img src={ava1} alt=""/>

                                <p className="blogA__card-text">
                                    <span>Andrew Jonson</span> <br/>
                                    Jan 19, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blogA__card">
                        <img src={card2} alt=""/>

                        <div className="blogA__card-info">
                            <h3 className="blogA__card-title">
                                Today’s best design <br/>
                                trends for digital <br/>
                                products
                            </h3>
                            <div className="blogA__card-ava">
                                <img src={ava1} alt=""/>

                                <p className="blogA__card-text">
                                    <span>Andrew Jonson</span> <br/>
                                    Jan 19, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blogA__card">
                        <img src={card3} alt=""/>

                        <div className="blogA__card-info">
                            <h3 className="blogA__card-title">
                                Today’s best design <br/>
                                trends for digital <br/>
                                products
                            </h3>
                            <div className="blogA__card-ava">
                                <img src={ava1} alt=""/>

                                <p className="blogA__card-text">
                                    <span>Andrew Jonson</span> <br/>
                                    Jan 19, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="blogA__card">
                        <img src={card4} alt=""/>

                        <div className="blogA__card-info">
                            <h3 className="blogA__card-title">
                                Today’s best design <br/>
                                trends for digital <br/>
                                products
                            </h3>
                            <div className="blogA__card-ava">
                                <img src={ava1} alt=""/>

                                <p className="blogA__card-text">
                                    <span>Andrew Jonson</span> <br/>
                                    Jan 19, 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlogA;