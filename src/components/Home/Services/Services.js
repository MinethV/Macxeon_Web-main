import React, { useEffect } from 'react';
import SingleService from './SingleService';
import './Services.css';
import { useState } from 'react';
import webdesign from '../../../images/006-home page.svg';
import webdevelopment from '../../../images/012-coding.svg';
import contentwriting from '../../../images/015-type.svg';
import copywriting from '../../../images/6213640.png';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Replace the fetch URL with the correct endpoint that provides the services data
        fetch("https://desolate-falls-67613.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, []);

    return (
        <section className="services-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <h1 className="title">Provide awesome <span>services</span></h1>
                        <ul className="service-list">
                <li className="service-item">
                    <div className="service-icon-box">
                        <img src={webdesign} alt="web" width="60" />
                    </div>
                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Web design</h4>
                        <p className="service-item-text">
                            The most modern and high-quality design made at a professional level.
                        </p>
                    </div>
                </li>
                <li className="service-item">
                    <div className="service-icon-box">
                    <img src={webdevelopment} alt="web" width="60" />
                    </div>
                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Web development</h4>
                        <p className="service-item-text">
                            High-quality development of sites at the professional level.
                        </p>
                    </div>
                </li>
                <li className="service-item">
                    <div className="service-icon-box">
                    <img src={contentwriting} alt="web" width="60" />
                    </div>
                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Content Creation</h4>
                        <p className="service-item-text">
                            At Maxeon, we specialize in content creation that captivates your audience, drives engagement, and enhances your brand's online presence.
                        </p>
                    </div>
                </li>
                <li className="service-item">
                    <div className="service-icon-box">
                    <img src={copywriting} alt="web" width="60" />
                    </div>
                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Copywriting</h4>
                        <p className="service-item-text">
                            At Maxeon, we excel in the art of copywriting, delivering powerful messages that capture attention, engage audiences, and drive action.
                        </p>
                    </div>
                </li>
            </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
