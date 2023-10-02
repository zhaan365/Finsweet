import React from 'react';
import logo from '../../../images/footer/footer.png'
import tw from '../../../images/footer/tw.png'
import inn from '../../../images/footer/in.png'
import i from '../../../images/footer/i.png'
import f from '../../../images/footer/f.png'



const Footer = () => {
    return (
        <section className="footer">
            <div className="container">

                <div className="footer__nav">
                    <div className="footer__logo">
                        <img src={logo} alt=""/>
                        <p className="footer__logo-text">
                            ©2021 Finsweet
                        </p>
                    </div>
                    <div className="footer__icons">
                        <img src={f} alt=""/>
                        <img src={tw} alt=""/>
                        <img src={i} alt=""/>
                        <img src={inn} alt=""/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;