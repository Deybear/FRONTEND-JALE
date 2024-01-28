import React from 'react';
import { Icon } from '@iconify/react';
import logo from '../images/main-logo.svg';
import '../styles/Menu.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Menu()
{
    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [LINK] </> - - - *//
    const location = useLocation();

    //* - - - </> [LINK] </> - - - *//
    const handleRoute = (link) => {

        navigate(link);
    }
    
    return (

        //* - - - </> [NAV] </> - - - *//
        <nav className='menu'>

            {/* - - - </> [UL] </> - - - */}
            <ul className='menu-list'>

                {/* - - - </> [LINK] </> - - - */}
                <li className='menu-item' onClick={() => handleRoute("/")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-home" className='menu-icon' style={{color: location.pathname === "/" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/" ? <span className='menu-active'/> : null}
                    
                </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='menu-item' onClick={() => handleRoute("/tours")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-backpack" className='menu-icon' style={{color: location.pathname === "/tours" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/tours" ? <span className='menu-active'/> : null}
                    
                </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='menu-item' onClick={() => handleRoute("/about")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-info" className='menu-icon' style={{color: location.pathname === "/about" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/about" ? <span className='menu-active'/> : null}
                    
                </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='menu-item' onClick={() => handleRoute("/contact")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-phone" className='menu-icon' style={{color: location.pathname === "/contact" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/contact" ? <span className='menu-active'/> : null}
                    
                </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='menu-item' onClick={() => handleRoute("/signin")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-info" className='menu-icon' style={{color: location.pathname === "/signin" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/signin" ? <span className='menu-active'/> : null}
                    
                </li>

            </ul>

        </nav>

    );
}

export default Menu;