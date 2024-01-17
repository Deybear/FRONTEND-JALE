import React, { useState } from 'react';
import '../../styles/Form.css';
import '../../styles/admin/UserForm.css';
import { Icon } from '@iconify/react';
import Users from '../../services/Users';

function UserForm(props)
{
    //* - - - </> [DATA] </> - - - *//
    const service = new Users();

    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({
        user_name: "",
        user_lastname: "",
        user_email: "",
        password: "",
        user_birthdate: ""
    });

    //* - - - </> [DATA] </> - - - *//
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    //* - - - </> [DATA] </> - - - *//
    const handleSubmit = (e) => {

        e.preventDefault();
        service.createUser(data);
        props.setTrigger(false);
    }
    
    return (

        //* - - - </> [FORM] </> - - - *//
        <form onSubmit={handleSubmit} className='formulary-user'>

            {/* - - - </> [TEXT] </> - - - */}
            <p className='formulary-title'>Add <span>user!</span></p>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:baseline-person" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="text"

                //* - - - </> [NAME] </> - - - *//
                name='user_name'

                //* - - - </> [TEXT] </> - - - *//
                placeholder="User name here*"

                //* - - - </> [CODE] </> - - - *//
                pattern='^[A-Za-z0-9]{3,15}$'

                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'

                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}
                
                //* - - - </> [EMPTY] </> - - - *//
                required

                />

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:baseline-person" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="text"

                //* - - - </> [NAME] </> - - - *//
                name='user_lastname'

                //* - - - </> [TEXT] </> - - - *//
                placeholder="User lastname here*"

                //* - - - </> [CODE] </> - - - *//
                pattern='^[A-Za-z0-9]{3,15}$'
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'

                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}
                
                //* - - - </> [EMPTY] </> - - - *//
                required
                
                />

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-email" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="email"

                //* - - - </> [NAME] </> - - - *//
                name='user_email'
                
                //* - - - </> [TEXT] </> - - - *//
                placeholder="User email here*"
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'
                
                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}
                
                //* - - - </> [EMPTY] </> - - - *//
                required
                
                />

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-lock" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="password"

                //* - - - </> [NAME] </> - - - *//
                name='password'

                //* - - - </> [TEXT] </> - - - *//
                placeholder="User password here*"
                
                //* - - - </> [CODE] </> - - - *//
                pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,15}$'

                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'

                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}
                
                //* - - - </> [EMPTY] </> - - - *//
                required
                
                />

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:baseline-person" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input
                
                //* - - - </> [TYPE] </> - - - *//
                type="date"
                
                //* - - - </> [NAME] </> - - - *//
                name='user_birthdate'
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'
                
                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}

                //* - - - </> [EMPTY] </> - - - *//
                required

                />

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-actions'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper' onClick={() => props.setTrigger(false)}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-back-ios-new" className='formulary-button-icon-v1'/>

                    {/* - - - </> [LINK] </> - - - */}
                    <input type="submit" value="Go back" className='formulary-button-v1'/>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper'>

                    {/* - - - </> [SUBMIT] </> - - - */}
                    <input type="submit" value="Add user" className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default UserForm;