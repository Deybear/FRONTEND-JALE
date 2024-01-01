import React from 'react';
import '../styles/Grid.css';
import '../styles/Tours.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Tours()
{
    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col'>

                {/* - - - </> [NAV] </> - - - */}
                <Navigation/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col'>

            </div>

        </section>

    );
}

export default Tours;