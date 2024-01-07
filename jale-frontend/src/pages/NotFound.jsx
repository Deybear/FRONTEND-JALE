import React from 'react';
import '../styles/Form.css';
import '../styles/NotFound.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function NotFound()
{
    return (

        <section className='not-found-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='not-found-info'>
                
                {/* - - - </> [TEXT] </> - - - */}
                <p className='not-found-title'>404</p>

                {/* - - - </> [DIV] </> - - - */}
                <div className='not-found-item'>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-error" className='not-found-icon'/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='not-found-subtitle'>Page not found</p>

                </div>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='not-found-text'>The page you are looking for was moved, removed, renamed or might never existed</p>

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

                        {/* - - - </> [LINK] </> - - - */}
                        <Link to="/contact" className='formulary-button-v2'>Contact us</Link>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default NotFound;