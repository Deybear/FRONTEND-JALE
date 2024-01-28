import React, { useEffect, useState } from 'react';

//* - - - </> [CSS] </> - - - *//
import '../styles/Grid.css';
import '../styles/Item.css';

//* - - - </> [ITEM] </> - - - *//
import { Icon } from '@iconify/react';
import { useNavigate, useParams } from 'react-router-dom';

//* - - - </> [DATA] </> - - - *//
import Places from '../services/Places';
import Sessions from '../services/Sessions';
import UserTours from '../services/UserTours';

//* - - - </> [ITEM] </> - - - *//
import Map from '../components/Map';
import Gallery from '../components/Gallery';

function Item()
{
    let { id } = useParams();

    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({user_id: 0, place_id: 0});

    //* - - - </> [DATA] </> - - - *//
    const [userTours, setUserTours] = useState([]);

    //* - - - </> [CLICK] </> - - - *//
    const [display, setDisplay] = useState(true);
    
    //* - - - </> [DATA] </> - - - *//
    const [gallery, setGallery] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const [address, setAddress] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const [session, setSession] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const [place, setPlace] = useState([]);
    
    //* - - - </> [DATA] </> - - - *//
    const placeService = new Places();
    const sessionService = new Sessions();
    const userTourService = new UserTours();

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [DATE] </> - - - *//
    const currentDate = new Date();
    const openTime = new Date(`${String(currentDate).substring(0, 15)} ${String(place.place_time_open).substring(11, 16)}:00 GMT-0600`);
    const closeTime = new Date(`${String(currentDate).substring(0, 15)} ${String(place.place_time_close).substring(11, 16)}:00 GMT-0600`);
    
    useEffect(() => {
        
        getData();
        setData({user_id: session.user_id, place_id: parseInt(id)});

    }, [session])

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const placeData = await placeService.getPlace(id);
        setAddress(placeData.place_location);
        setGallery(placeData.photos);
        setPlace(placeData);

        //* - - - </> [DATA] </> - - - *//
        const sessionData = await sessionService.getCurrentUser();
        setSession(sessionData);

        //* - - - </> [DATA] </> - - - *//
        const userTourData = await userTourService.getUserTours();
        setUserTours(userTourData);
    }
    
    //* - - - </> [DATA] </> - - - *//
    const handleCreate = () => {
        
        //* - - - </> [TYPE] </> - - - *//
        if(Object.keys(session).length > 0)
        {
            try
            {
                userTours.forEach(item => {

                    if(item.place_id == data.place_id && item.user_id == data.user_id)
                    {
                        return alert("It's already on your list!");
                    }
                    else
                    {
                        return alert("It's not on your list!");
                        // userTourService.createUserTour(data);
                    }
                });
            }
            catch(error)
            {
                //* - - - </> [ERROR] </> - - - *//
                console.error(error);
            }
        }
        else
        {
            //* - - - </> [ERROR] </> - - - *//
            navigate("/signin");
        }
    }
    
    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col'>
                
                {/* - - - </> [DIV] </> - - - */}
                <div className='item-status'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='item-schedule'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:baseline-access-time-filled" className='item-schedule-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='item-schedule-text'>{currentDate >= openTime && currentDate <= closeTime ? "OPEN NOW" : "CLOSE NOW"}</p>

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
                            {Array(5).fill(null).map((_, index) => {
                                
                                //* - - - </> [ICON] </> - - - *//
                                if (index < Math.floor(place.place_score))
                                {
                                    //* - - - </> [ICON] </> - - - *//
                                    return ( <Icon key={`star-${index}`} icon="ic:baseline-star" color={"#FFC439"} className='item-rating-star'/>)
                                }
                                else
                                {
                                    //* - - - </> [ICON] </> - - - *//
                                    return (<Icon key={`star-${index}`} icon="ic:baseline-star" color={"#E4E5E9"} className='item-rating-star'/>)
                                }
                            })}
                        
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
                        <div className='item-button-wrapper' onClick={handleCreate}>

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
                {display ? (<Gallery src={gallery}/>) : (address ? <Map lat={address.place_lat} lon={address.place_lon}/> : <div>NOT FOUND</div>)}
                
            </div>

        </section>

    );
}

export default Item;