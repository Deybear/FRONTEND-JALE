import React, { useState } from 'react';
import '../styles/Form.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function ContactForm()
{
    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({
        user_name: "",
        user_email: "",
        user_message: ""
    });

    //* - - - </> [METHOD] </> - - - *//
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    //* - - - </> [METHOD] </> - - - *//
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(data);
    }

    return (

        //* - - - </> [FORM] </> - - - *//
        <form onSubmit={handleSubmit} className='formulary-v3'>

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
                placeholder="Your name here*"
                
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
                <Icon icon="ic:sharp-text-snippet" className='formulary-textarea-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <textarea
                
                //* - - - </> [NAME] </> - - - *//
                name="user_message"
                
                //* - - - </> [SIZE] </> - - - *//
                cols="20"
                
                //* - - - </> [SIZE] </> - - - *//
                rows="5"
                
                //* - - - </> [TEXT] </> - - - *//
                placeholder="Your message here*"
                
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
                    <Icon icon="dashicons:whatsapp" className='formulary-button-icon-v1'/>

                    {/* - - - </> [LINK] </> - - - */}
                    <Link to="https://www.whatsapp.com" target="_blank" className='formulary-button-v1'>WhatsApp</Link>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper'>

                    {/* - - - </> [SUBMIT] </> - - - */}
                    <input type="submit" value="Send message" className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:baseline-send" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default ContactForm;