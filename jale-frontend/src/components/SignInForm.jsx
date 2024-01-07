import React, { useState } from 'react';
import '../styles/Form.css';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
import Sessions from '../services/Sessions';

function SignInForm()
{
    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({
        user_email: "",
        password: ""
    });

    const navigate = useNavigate();
    const service = new Sessions;

    //* - - - </> [METHOD] </> - - - *//
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    //* - - - </> [METHOD] </> - - - *//
    const handleSubmit = (e) => {

        e.preventDefault();
        service.signIn(data);
        navigate("/");
    }

    return (

        //* - - - </> [FORM] </> - - - *//
        <form onSubmit={handleSubmit} className='formulary-v1'>

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
                placeholder="Your email here*"

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
                placeholder="Your password here*"

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
                <div className='formulary-button-wrapper'>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-back-ios-new" className='formulary-button-icon-v1'/>

                    {/* - - - </> [LINK] </> - - - */}
                    <Link to="/" className='formulary-button-v1'>Go back</Link>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper'>

                    {/* - - - </> [SUBMIT] </> - - - */}
                    <input type="submit" value="Sign in" className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default SignInForm;