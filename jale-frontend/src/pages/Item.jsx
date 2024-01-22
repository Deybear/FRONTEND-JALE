import React, { useEffect, useState } from 'react';
import '../styles/Grid.css';
import '../styles/Item.css';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import Places from '../services/Places';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';

function Item()
{
    //* - - - </> [CLICK] </> - - - *//
    const [display, setDisplay] = useState(true);

    //* - - - </> [DATA] </> - - - *//
    const [gallery, setGallery] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const [place, setPlace] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const service = new Places();
    let { id } = useParams();

    useEffect(() => {
        
        getPlace();

    }, [])

    //* - - - </> [DATA] </> - - - *//
    const getPlace = async () => {

        //* - - - </> [DATA] </> - - - *//
        const data = await service.getPlace(id);
        setGallery(data.photos);
        setPlace(data);
    }

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
                    <p className='item-title'>{place.place_name} <Icon icon="ph:seal-check-fill" className='item-title-icon'/></p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-score'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-rating-score'>

                            {/* - - - </> [ICON] </> - - - */}
                            {Array(5).fill(<Icon icon="ic:baseline-star" color={"#E4E5E9"} className='item-rating-star'/>).fill(<Icon icon="ic:baseline-star" color={"#FFC439"} className='item-rating-star'/>, 0, Math.floor(place.place_score))}
                        
                        </div>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='item-price'>${place.place_cost}</p>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-desc'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-desc-title'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ri:question-fill" className='item-desc-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-desc-text'>Description</p>

                        </div>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='item-text'>{place.place_desc}</p>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-about'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-feature'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-phone-in-talk" className='item-feature-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-feature-text'>{"(+506)"} {place.place_phone}</p>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-feature'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-email" className='item-feature-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-feature-text'>{place.place_email}</p>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-feature'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-location-on" className='item-feature-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-feature-text'>{place.place_address}</p>

                        </div>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-actions'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='item-button-wrapper' onClick={() => setDisplay(!display)}>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-map" className='item-button-icon-v2'/>
                            
                            {/* - - - </> [BUTTON] </> - - - */}
                            <input type="button" value={display ? "See on map" : "See photos"} className='item-button-v2'/>

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
                {display ? <Gallery src={gallery}/> : <Map lat={9.981653213500977} lon={-84.75706481933594}/>}
                
            </div>

        </section>

    );
}

export default Item;