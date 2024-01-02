import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import '../styles/Menu.css';

function Menu()
{
    return (

        //* - - - </> [NAV] </> - - - *//
        <nav className='menu'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='menu-image'>

                {/* - - - </> [IMG] </> - - - */}
                <img src={logo} alt="menu-logo" className='menu-logo'/>

            </div>

            {/* - - - </> [UL] </> - - - */}
            <ul className='menu-list'>

                {/* - - - </> [LINK] </> - - - */}
                <li className='menu-item'>

                    {/* - - - </> [LINK] </> - - - */}
                    <Link to="https://www.youtube.com" target="_blank" className='menu-link'>YOUTUBE</Link>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="fa6-brands:youtube" className='menu-icon'/>
                    
                </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='menu-item'>

                    {/* - - - </> [LINK] </> - - - */}
                    <Link to="https://www.twitter.com" target="_blank" className='menu-link'>TWITTER</Link>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="fa6-brands:twitter" className='menu-icon'/>
                    
                </li>

                {/* - - - </> [LI] </> - - - */}
                <li className='menu-item'>
                    
                    {/* - - - </> [LINK] </> - - - */}
                    <Link to="https://www.facebook.com" target="_blank" className='menu-link'>FACEBOOK</Link>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="fa6-brands:facebook" className='menu-icon'/>
                    
                </li>

            </ul>

            {/* - - - </> [UL] </> - - - */}
            <ul className='menu-action'>

                {/* - - - </> [IMG] </> - - - */}
                <img src={logo} alt="menu-logo" className='menu-logo'/>

            </ul>

        </nav>

    );
}

export default Menu;