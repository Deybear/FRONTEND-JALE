import React from 'react';
import { Icon } from '@iconify/react';
import logo from '../images/JALE_LOGO.svg';
import '../styles/Navigation.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Navigation()
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
        <nav className='navigation'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='navigation-image'>

                {/* - - - </> [IMG] </> - - - */}
                <img src={logo} alt="navigation-logo" className='navigation-logo'/>

            </div>

            {/* - - - </> [UL] </> - - - */}
            <ul className='navigation-list'>

                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item' onClick={() => handleRoute("/")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-home" className='navigation-icon' style={{color: location.pathname === "/" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/" ? <span className='navigation-active'/> : null}
                    
                </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item' onClick={() => handleRoute("/tours")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-backpack" className='navigation-icon' style={{color: location.pathname === "/tours" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/tours" ? <span className='navigation-active'/> : null}
                    
                </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item' onClick={() => handleRoute("/about")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-info" className='navigation-icon' style={{color: location.pathname === "/about" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/about" ? <span className='navigation-active'/> : null}
                    
                </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item' onClick={() => handleRoute("/contact")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-phone" className='navigation-icon' style={{color: location.pathname === "/contact" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/contact" ? <span className='navigation-active'/> : null}
                    
                </li>

            </ul>

            {/* - - - </> [UL] </> - - - */}
            <ul className='navigation-action'>

                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item' onClick={() => handleRoute("/signin")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-play-circle" className='navigation-icon' style={{color: location.pathname === "/signin" || location.pathname === "/signup" ? "var(--color_001)" : "var(--color_003)"}}/>

                    {/* - - - </> [ICON] </> - - - */}
                    {location.pathname === "/signin" || location.pathname === "/signup" ? <span className='navigation-active'/> : null}
                    
                </li>

            </ul>

        </nav>

    );
}

export default Navigation;