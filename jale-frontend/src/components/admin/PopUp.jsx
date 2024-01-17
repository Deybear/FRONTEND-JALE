import React from 'react';
import '../../styles/admin/PopUp.css';
import UserForm from './UserForm';

function PopUp(props)
{
    return (props.trigger) ? (

        <div className='popup-wrapper'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='popup-card-v1'>

                <UserForm setTrigger={props.setTrigger}/>

            </div>

        </div>

    ) : "";
}

export default PopUp;