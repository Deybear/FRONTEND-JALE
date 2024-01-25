import React, { useEffect, useState } from 'react';

//* - - - </> [CSS] </> - - - *//
import '../styles/Grid.css';
import '../styles/Form.css';
import '../styles/admin/Admin.css';

//* - - - </> [ITEM] </> - - - *//
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

//* - - - </> [DATA] </> - - - *//
import Users from '../services/Users';
import Places from '../services/Places';
import Events from '../services/Events';
import Photos from '../services/Photos';
import Sessions from '../services/Sessions';
import Locations from '../services/Locations';
import Categories from '../services/Categories';

//* - - - </> [TABLE] </> - - - *//
import UserTable from '../components/admin/UserTable';
import PlaceTable from '../components/admin/PlaceTable';
import EventTable from '../components/admin/EventTable';
import PhotoTable from '../components/admin/PhotoTable';
import CategoryTable from '../components/admin/CategoryTable';
import PlaceLocationTable from '../components/admin/PlaceLocationTable';
import EventLocationTable from '../components/admin/EventLocationTable';
import PlaceCategoryTable from '../components/admin/PlaceCategoryTable';
import EventCategoryTable from '../components/admin/EventCategoryTable';

function Admin()
{
    //* - - - </> [CLICK] </> - - - *//
    const [display, setDisplay] = useState('table-user');
    
    //* - - - </> [DATA] </> - - - *//
    const [users, setUsers] = useState([]);
    const [places, setPlaces] = useState([]);
    const [events, setEvents] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [placeLocations, setPlaceLocations] = useState([]);
    const [eventLocations, setEventLocations] = useState([]);
    const [placeCategories, setPlaceCategories] = useState([]);
    const [eventCategories, setEventCategories] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const userService = new Users();
    const placeService = new Places();
    const eventService = new Events();
    const photoService = new Photos();
    const sessionService = new Sessions();
    const locationService = new Locations();
    const categoryService = new Categories();

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [DATA] </> - - - *//
    useEffect(() => {
        
        getData();
    
    }, []);

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const userData = await userService.getUsers();
        setUsers(userData);

        //* - - - </> [DATA] </> - - - *//
        const placeData = await placeService.getPlaces();
        setPlaces(placeData);

        //* - - - </> [DATA] </> - - - *//
        const eventData = await eventService.getEvents();
        setEvents(eventData);

        //* - - - </> [DATA] </> - - - *//
        const photoData = await photoService.getPhotos();
        setPhotos(photoData);

        //* - - - </> [DATA] </> - - - *//
        const sessionData = await sessionService.getCurrentUser();
        setSessions(sessionData);

        //* - - - </> [DATA] </> - - - *//
        const categoryData = await categoryService.getCategories();
        setCategories(categoryData);

        //* - - - </> [DATA] </> - - - *//
        const placeLocationData = await locationService.getPlaceLocations();
        setPlaceLocations(placeLocationData);

        //* - - - </> [DATA] </> - - - *//
        const eventLocationData = await locationService.getEventLocations();
        setEventLocations(eventLocationData);

        //* - - - </> [DATA] </> - - - *//
        const placeCategoryData = await categoryService.getPlaceCategories();
        setPlaceCategories(placeCategoryData);

        //* - - - </> [DATA] </> - - - *//
        const eventCategoryData = await categoryService.getEventCategories();
        setEventCategories(eventCategoryData);
    }

    //* - - - </> [DATA] </> - - - *//
    const destroySession = () => {
        
        sessionService.signOut();
        navigate("/signin");
    }
    
    return (

        <section className='main-section admin'>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-panel'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='admin-panel-menu'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='admin-menu-user'>
                        
                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='admin-menu-name'>{sessions.user_name} <span>{sessions.user_lastname}</span></p>
                        
                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='admin-menu-desc'>Let's back to work . . .</p>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='admin-menu-actions'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='formulary-button-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:outline-arrow-back-ios" className='formulary-button-icon-v1'/>

                            {/* - - - </> [LINK] </> - - - */}
                            <Link to="/" className='formulary-button-v1'>Go back</Link>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='formulary-button-wrapper' onClick={destroySession}>

                            {/* - - - </> [SUBMIT] </> - - - */}
                            <input type="submit" value="Sign out" className='formulary-button-v2'/>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-logout" className='formulary-button-icon-v2'/>

                        </div>

                    </div>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='admin-panel-item'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='admin-item-wrapper'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item' onClick={() => setDisplay('table-user')} style={{background: display === 'table-user' && 'var(--color_002)'}}>

                            {/* - - - </> [ICON] </> - - - */}
                            <span className='admin-item-circle'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                <Icon icon="ic:sharp-person" className='admin-item-icon' style={{color: display === 'table-user' && 'var(--color_002)'}}/>
                                
                            </span>
                            
                            {/* - - - </> [DIV] </> - - - */}
                            <div className='admin-item-data'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-total'>{users.length}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-title'>{users.length === 1 ? "User" : "Users"}</p>

                            </div>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item' onClick={() => setDisplay('table-place')} style={{background: display === 'table-place' && 'var(--color_002)'}}>

                            {/* - - - </> [ICON] </> - - - */}
                            <span className='admin-item-circle'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                <Icon icon="ic:sharp-map" className='admin-item-icon' style={{color: display === 'table-place' && 'var(--color_002)'}}/>
                                
                            </span>
                            
                            {/* - - - </> [DIV] </> - - - */}
                            <div className='admin-item-data'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-total'>{places.length}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-title'>{places.length === 1 ? "Place" : "Places"}</p>

                            </div>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item' onClick={() => setDisplay('table-event')} style={{background: display === 'table-event' && 'var(--color_002)'}}>

                            {/* - - - </> [ICON] </> - - - */}
                            <span className='admin-item-circle'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                <Icon icon="ic:sharp-event" className='admin-item-icon' style={{color: display === 'table-event' && 'var(--color_002)'}}/>
                                
                            </span>
                            
                            {/* - - - </> [DIV] </> - - - */}
                            <div className='admin-item-data'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-total'>{events.length}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-title'>{events.length === 1 ? "Event" : "Events"}</p>

                            </div>
                            
                        </div>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item' onClick={() => setDisplay('table-photo')} style={{background: display === 'table-photo' && 'var(--color_002)'}}>

                            {/* - - - </> [ICON] </> - - - */}
                            <span className='admin-item-circle'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                <Icon icon="ic:sharp-image" className='admin-item-icon' style={{color: display === 'table-photo' && 'var(--color_002)'}}/>
                                
                            </span>
                            
                            {/* - - - </> [DIV] </> - - - */}
                            <div className='admin-item-data'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-total'>{photos.length}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-title'>{photos.length === 1 ? "Photo" : "Photos"}</p>

                            </div>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item' onClick={() => setDisplay('table-location')} style={{background: display === 'table-location' && 'var(--color_002)'}}>

                            {/* - - - </> [ICON] </> - - - */}
                            <span className='admin-item-circle'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                <Icon icon="ic:sharp-my-location" className='admin-item-icon' style={{color: display === 'table-location' && 'var(--color_002)'}}/>
                                
                            </span>
                            
                            {/* - - - </> [DIV] </> - - - */}
                            <div className='admin-item-data'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-total'>{placeLocations.length + eventLocations.length}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-title'>Locations</p>

                            </div>
                            
                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item' onClick={() => setDisplay('table-category')} style={{background: display === 'table-category' && 'var(--color_002)'}}>

                            {/* - - - </> [ICON] </> - - - */}
                            <span className='admin-item-circle'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                <Icon icon="ic:sharp-category" className='admin-item-icon' style={{color: display === 'table-category' && 'var(--color_002)'}}/>
                                
                            </span>
                            
                            {/* - - - </> [DIV] </> - - - */}
                            <div className='admin-item-data'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-total'>{categories.length}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='admin-item-title'>{categories.length === 1 ? "Category" : "Categories"}</p>

                            </div>
                            
                        </div>
                    
                    </div>

                </div>

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-user' && <UserTable data={users}/>}

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-place' && <PlaceTable data={places}/>}

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-event' && <EventTable data={events}/>}

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-photo' && <PhotoTable data={photos}/>}
                
                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-category' && <div className='admin-table-mask'>

                    {/* - - - </> [TABLE] </> - - - */}
                    <CategoryTable data={categories}/>

                    {/* - - - </> [TABLE] </> - - - */}
                    <PlaceCategoryTable data={placeCategories}/>

                    {/* - - - </> [TABLE] </> - - - */}
                    <EventCategoryTable data={eventCategories}/>
                    
                </div>}

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-location' && <div className='admin-table-mask'>

                    {/* - - - </> [TABLE] </> - - - */}
                    <PlaceLocationTable data={placeLocations}/>

                    {/* - - - </> [TABLE] </> - - - */}
                    <EventLocationTable data={eventLocations}/>
                    
                </div>}
                
            </div>

        </section>

    );
}

export default Admin;