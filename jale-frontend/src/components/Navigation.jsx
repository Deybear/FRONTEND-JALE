import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation()
{
    return (
        
        //* - - - </> [NAV] </> - - - *//
        <nav className='navigation'>

            {/* - - - </> [UL] </> - - - */}
            <ul className='navigation-list'>
                
                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item'> <NavLink to="/" className='navigation-link'>Home</NavLink> </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item'> <NavLink to="/tours" className='navigation-link'>Tours</NavLink> </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item'> <NavLink to="/about" className='navigation-link'>About</NavLink> </li>

                {/* - - - </> [LINK] </> - - - */}
                <li className='navigation-item'> <NavLink to="/contact" className='navigation-link'>Contact</NavLink> </li>

            </ul>

        </nav>

    );
}

export default Navigation;