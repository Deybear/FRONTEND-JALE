import React, { useEffect, useState } from 'react';
import '../styles/Grid.css';
import '../styles/admin/Admin.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
// import Users from '../services/Users';
import Places from '../services/Places';
import PlaceTable from '../components/admin/PlaceTable';

function Admin()
{
    //* - - - </> [DATA] </> - - - *//
    // const [users, setUsers] = useState([]);
    const [places, setPlaces] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    // const userService = new Users();
    const placeService = new Places();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        // const userData = await userService.getUsers();
        // setUsers(userData);

        //* - - - </> [DATA] </> - - - *//
        const placeData = await placeService.getPlaces();
        setPlaces(placeData);
    }

    //* - - - </> [DATA] </> - - - *//
    const displayTable = (e) => {
        e.preventDefault();
        console.log(e.target.id);
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
                <div className='admin-records'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div id='admin-item-users' className='admin-item' onClick={displayTable}>

                        {/* - - - </> [ICON] </> - - - */}
                        <span className='admin-item-circle'><Icon icon="ic:sharp-person" className='admin-item-icon'/></span>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item-data'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-total'>{places.length}</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-title'>Users</p>

                        </div>
                        
                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div id='admin-item-place' className='admin-item' onClick={displayTable}>

                        {/* - - - </> [ICON] </> - - - */}
                        <span className='admin-item-circle'><Icon icon="ic:sharp-map" className='admin-item-icon'/></span>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item-data'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-total'>{places.length}</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-title'>Places</p>

                        </div>
                        
                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div id='admin-item-event' className='admin-item' onClick={displayTable}>

                        {/* - - - </> [ICON] </> - - - */}
                        <span className='admin-item-circle'><Icon icon="ic:sharp-event" className='admin-item-icon'/></span>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='admin-item-data'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-total'>{places.length}</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='admin-item-title'>Events</p>

                        </div>
                        
                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div id='admin-item-review' className='admin-item' onClick={displayTable}>

                        {/* - - - </> [ICON] </> - - - */}
                        <span className='admin-item-circle'><Icon icon="ic:sharp-text-snippet" className='admin-item-icon'/></span>
                        
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
                <div className='admin-table-wrapper'>

                    <PlaceTable data={places}/>

                </div>
                
            </div>

        </section>

    );
}

export default Admin;