import React, { useEffect, useState } from 'react';

//* - - - </> [CSS] </> - - - *//
import '../styles/Grid.css';
import '../styles/Form.css';
import '../styles/admin/Admin.css';

//* - - - </> [ITEM] </> - - - *//
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

//* - - - </> [DATA] </> - - - *//
import Users from '../services/Users';
import Places from '../services/Places';
import Events from '../services/Events';
import Categories from '../services/Categories';

//* - - - </> [FORM] </> - - - *//
import PopUp from '../components/admin/PopUp';

//* - - - </> [TABLE] </> - - - *//
import UserTable from '../components/admin/UserTable';
import PlaceTable from '../components/admin/PlaceTable';
import EventTable from '../components/admin/EventTable';
import CategoryTable from '../components/admin/CategoryTable';

function Admin()
{
    //* - - - </> [CLICK] </> - - - *//
    const [display, setDisplay] = useState('table-user');
    const [popup, setPopup] = useState(false);
    
    //* - - - </> [TABLE] </> - - - *//
    const [users, setUsers] = useState([]);
    const [places, setPlaces] = useState([]);
    const [events, setEvents] = useState([]);
    const [categories, setCategories] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const userService = new Users();
    const placeService = new Places();
    const eventService = new Events();
    const categoryService = new Categories();

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
        const categoryData = await categoryService.getCategories();
        setCategories(categoryData);
    }
    
    return (

        <section className='main-section'>
            
            {/* - - - </> [DIV] </> - - - */}
            <PopUp trigger={popup} setTrigger={setPopup}/>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-panel'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='admin-panel-menu'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='admin-menu-user'>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='admin-menu-name'>Deynor <span>Rodriguez</span></p>

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
                        <div className='formulary-button-wrapper'>

                            {/* - - - </> [SUBMIT] </> - - - */}
                            <input type="submit" value="Sign out" className='formulary-button-v2'/>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-logout" className='formulary-button-icon-v2'/>

                        </div>

                    </div>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='admin-panel-item'>

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
                            <p className='admin-item-title'>{users.length > 1 ? "Users" : "User"}</p>

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
                            <p className='admin-item-title'>{places.length > 1 ? "Places" : "Place"}</p>

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
                            <p className='admin-item-title'>{events.length > 1 ? "Events" : "Event"}</p>

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
                            <p className='admin-item-title'>{categories.length > 1 ? "Categories" : "Category"}</p>

                        </div>
                        
                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='admin-item' onClick={() => setDisplay('table-review')} style={{background: display === 'table-review' && 'var(--color_002)'}}>

                        {/* - - - </> [ICON] </> - - - */}
                        <span className='admin-item-circle'>
                            
                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-text-snippet" className='admin-item-icon' style={{color: display === 'table-review' && 'var(--color_002)'}}/>
                            
                        </span>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item-data'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-total'>{places.length}</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-title'>Reviews</p>

                        </div>
                        
                    </div>

                    </div>

                </div>

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-user' && <UserTable data={users} trigger={popup} setTrigger={setPopup}/>}

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-place' && <PlaceTable data={places} trigger={popup} setTrigger={setPopup}/>}

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-event' && <EventTable data={events} trigger={popup} setTrigger={setPopup}/>}

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-category' && <CategoryTable data={categories} trigger={popup} setTrigger={setPopup}/>}

                {/* - - - </> [TABLE] </> - - - */}
                {display === 'table-review' && <div>[DIV-05]</div>}
                
            </div>

        </section>

    );
}

export default Admin;