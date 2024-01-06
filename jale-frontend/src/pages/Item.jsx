import React from 'react';
import '../styles/Grid.css';
import '../styles/Item.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';
import StarRating from '../components/StarRating';

function Item()
{
    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col'>

                {/* - - - </> [NAV] </> - - - */}
                <Navigation/>

                {/* - - - </> [DIV] </> - - - */}
                <div className='item-status'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-schedule'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:baseline-access-time-filled" className='item-schedule-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='item-schedule-text'>OPEN NOW</p>

                    </div>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='item-info'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='item-title'>Aquarium <Icon icon="ph:seal-check-fill" className='item-title-icon'/></p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-score'>

                        {/* - - - </> [DIV] </> - - - */}
                        <StarRating/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='item-price'>$5.50</p>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-desc'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-desc-title'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ri:question-fill" className='item-desc-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-desc-text'>About aquarium</p>

                        </div>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='item-text'>

                            Jale is a platform that allows you to find outstanding tourist spots within the Pacific region. You can 
                            consult information item these places, as well as events and other related activities.

                        </p>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-about'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-feature'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-phone-in-talk" className='item-feature-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-feature-text'>{"(+506)"} 2661-5272</p>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-feature'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-email" className='item-feature-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-feature-text'>info@parquemarino.org</p>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-feature'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-location-on" className='item-feature-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-feature-text'>Provincia de Puntarenas, Puntarenas, Barrio Las Playitas</p>

                        </div>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-actions'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-button-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-map" className='item-button-icon-v2'/>
                            
                            {/* - - - </> [BUTTON] </> - - - */}
                            <input type="button" value="See on map" className='item-button-v2'/>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-button-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:baseline-add-circle" className='item-button-icon-v1'/>

                            {/* - - - </> [BUTTON] </> - - - */}
                            <input type="button" value="Add to list" className='item-button-v1'/>

                        </div>

                    </div>

                </div>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col lite'>

                {/* - - - </> [IMG] </> - - - */}
                <Gallery/>

            </div>

        </section>

    );
}

export default Item;