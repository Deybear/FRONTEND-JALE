import React from 'react';
import '../../styles/admin/PopUp.css';
import UserForm from './UserForm';
import PlaceForm from './PlaceForm';

function PopUp(props)
{
    return (props.trigger) ? (

        <div className='popup-wrapper'>

            {/* - - - </> [DIV] </> - - - */}
            {props.id === 'user-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <UserForm setTrigger={props.setTrigger} type={props.action} data={props.user}/>

            </div>}
            
            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'place-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <PlaceForm setTrigger={props.setTrigger} type={props.action} data={props.place}/>
            
            </div>}

        </div>

    ) : "";
}

export default PopUp;