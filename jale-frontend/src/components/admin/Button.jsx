import React from 'react';
import { Icon } from '@iconify/react';
import '../../styles/admin/Button.css';
import { useNavigate } from 'react-router-dom';

function Button(props)
{
    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [LINK] </> - - - *//
    const handleAdmin = () => { navigate("/admin"); }

    //* - - - </> [LINK] </> - - - *//
    const handleUser = () => { props.setTrigger(!props.trigger); }

    return (props.currentUser.user_type === 1) ? (
        
        //* - - - </> [BUTTON] </> - - - *//
        <button className='float-button' onClick={handleAdmin}>

            {/* - - - </> [ICON] </> - - - */}
            <Icon icon="ic:sharp-settings" className='float-button-icon'/>

        </button>
    )
    : 
    (
        //* - - - </> [BUTTON] </> - - - *//
        <button className='float-button' onClick={handleUser} style={{display: props.trigger ? "none" : "inline-block"}}>

            {/* - - - </> [ICON] </> - - - */}
            <Icon icon="ic:sharp-person" className='float-button-icon'/>

        </button>
    );
}

export default Button;