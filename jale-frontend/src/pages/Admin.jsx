import React, { useEffect, useState } from 'react';
import '../styles/Grid.css';
import '../styles/admin/Admin.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Users from '../services/Users';
import Places from '../services/Places';
import UserTable from '../components/admin/UserTable';
import PlaceTable from '../components/admin/PlaceTable';

function Admin()
{
    //* - - - </> [CLICK] </> - - - *//
    const [display, setDisplay] = useState('table-user');
    
    //* - - - </> [TABLE] </> - - - *//
    const [users, setUsers] = useState([]);
    const [places, setPlaces] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const userService = new Users();
    const placeService = new Places();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const userData = await userService.getUsers();
        setUsers(userData);

        //* - - - </> [DATA] </> - - - *//
        const placeData = await placeService.getPlaces();
        setPlaces(placeData);
    }
    
    return (

        <section className='main-section'>

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
                        
                        {/* - - - </> [INPUT] </> - - - */}
                        <input type="button" value={"Go back"} className='admin-menu-button-v1'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input type="button" value={"Sign out"} className='admin-menu-button-v2'/>

                    </div>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='admin-panel-item'>

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
                            <p className='admin-item-title'>Users</p>

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
                            <p className='admin-item-title'>Places</p>

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
                            <p className='admin-item-total'>{places.length}</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-title'>Events</p>

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

                {/* - - - </> [DIV] </> - - - */}
                <div className='admin-panel-data'>

                    {/* - - - </> [TABLE] </> - - - */}
                    {display === 'table-user' && <UserTable data={users}/>}

                    {/* - - - </> [TABLE] </> - - - */}
                    {display === 'table-place' && <PlaceTable data={places}/>}

                    {/* - - - </> [TABLE] </> - - - */}
                    {display === 'table-event' && <div>[DIV-03]</div>}

                    {/* - - - </> [TABLE] </> - - - */}
                    {display === 'table-review' && <div>[DIV-04]</div>}

                </div>
                
            </div>

        </section>

    );
}

export default Admin;