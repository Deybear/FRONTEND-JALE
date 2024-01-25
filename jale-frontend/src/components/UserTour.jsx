import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Sessions from '../services/Sessions';
import Users from '../services/Users';
import '../styles/Form.css';

function UsersTours(props)
{
    //* - - - </> [DATA] </> - - - *//
    const [place, setPlace] = useState([]);
    const [user, setUser] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const sessionService = new Sessions();
    const userService = new Users();

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();
    
    useEffect(() => {
        getData();
    }, []);

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const currentUser = await sessionService.getCurrentUser();
        setUser(currentUser);

        //* - - - </> [DATA] </> - - - *//
        const currentPlaces = await userService.getUser(currentUser.user_id);
        setPlace(currentPlaces.places);
    }

    //* - - - </> [DATA] </> - - - *//
    const destroySession = () => {
        
        sessionService.signOut();
        navigate("/signin");
    }
    
    return (

        <section>

            <h2>Welcome {user.user_name} <span style={{color: "var(--color_003)"}}>{user.user_lastname}</span></h2>
            <ul>
                <li>{user.user_email}</li>
                <li>{user.user_birthdate}</li>
                {place.map((item, index) => (<li key={index}>{item.place_name}</li>))}
            </ul>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-actions'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper' onClick={() => props.setTrigger(false)}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-back-ios-new" className='formulary-button-icon-v1'/>

                    {/* - - - </> [LINK] </> - - - */}
                    <input type="submit" value="Close list" className='formulary-button-v1'/>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper' onClick={destroySession}>

                    {/* - - - </> [SUBMIT] </> - - - */}
                    <input type="submit" value="Sign out" className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </section>

    );
};

export default UsersTours;