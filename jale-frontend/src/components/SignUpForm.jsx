import React from 'react';
import '../styles/Form.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function SignUpForm()
{
    return (

        //* - - - </> [FORM] </> - - - *//
        <form action="" className='formulary-v2'>

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
                <Icon icon="ic:baseline-person" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input type="text" placeholder="Your lastname here*" className='formulary-input'/>

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
                <Icon icon="ic:sharp-lock" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input type="password" placeholder="Your password here*" className='formulary-input'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:baseline-person" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input type="date" className='formulary-input'/>

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
                    <input type="submit" value="Sign up" className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default SignUpForm;