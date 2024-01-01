import React from 'react';
import '../styles/Grid.css';
import '../styles/About.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function About()
{
    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col'>

                {/* - - - </> [NAV] </> - - - */}
                <Navigation/>

                {/* - - - </> [DIV] </> - - - */}
                <div className='about-info'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='about-title'>About Us!</p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='about-question'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='about-item'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ri:question-fill" className='about-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='about-subtitle'>What's Jale?</p>

                        </div>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='about-text'>

                            Jale is a platform that allows you to find outstanding tourist spots within the Pacific region. You can 
                            consult information about these places, as well as events and other related activities.

                        </p>

                    </div>

                    {/* - - - </> [HR] </> - - - */}
                    <hr className='about-line'/>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='about-question'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='about-item'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ri:question-fill" className='about-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='about-subtitle'>How can I register a place?</p>

                        </div>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='about-text'>

                            First, you have to register on the official Jale website, after that go to the contact section and write us
                            an email indicating your interest in being part of us. We respond to you as soon we can.

                        </p>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='about-actions'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='about-button-wrapper'>

                            {/* - - - </> [LINK] </> - - - */}
                            <Link to="/tours" className='about-button-v2'>View tours</Link>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:outline-arrow-forward-ios" className='about-button-icon-v2'/>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='about-button-wrapper'>

                            {/* - - - </> [LINK] </> - - - */}
                            <Link to="/contact" className='about-button-v1'>Contact us</Link>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:outline-arrow-forward-ios" className='about-button-icon-v1'/>

                        </div>

                    </div>

                </div>
                
            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col hide'>

                {/* - - - </> [IMAGE] </> - - - */}
                <img src="https://rb.gy/am56nw" alt="image_001" className='about-image'/>

            </div>

        </section>

    );
}

export default About;