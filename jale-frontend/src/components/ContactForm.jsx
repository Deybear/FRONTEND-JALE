import React from 'react';
import '../styles/Form.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function ContactForm()
{
    return (

        //* - - - </> [FORM] </> - - - *//
        <form action="" className='formulary-v3'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:baseline-person" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input type="text" placeholder="Your name here*" className='formulary-input'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-email" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input type="text" placeholder="Your email here*" className='formulary-input'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-text-snippet" className='formulary-textarea-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <textarea name="" id="" cols="20" rows="5" placeholder="Your message here*" className='formulary-input'/>

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