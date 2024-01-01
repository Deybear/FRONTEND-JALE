import React from 'react';
import '../styles/Grid.css';
import '../styles/Home.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';

function Home()
{
    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col'>

                {/* - - - </> [NAV] </> - - - */}
                <Navigation/>

                {/* - - - </> [DIV] </> - - - */}
                <div className='home-info'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='home-title'>The Best Way to Enjoy the Nature!</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='home-text'>

                        Discover all the riches that the Pacific region has to offer. Embark on an adventure through the Puntarenas 
                        province. We are proud of always offering the best quality places to our customers.
                        
                    </p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='home-actions'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='home-button-wrapper'>

                            {/* - - - </> [LINK] </> - - - */}
                            <Link to="/tours" className='home-button-v2'>View tours</Link>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:outline-arrow-forward-ios" className='home-button-icon-v2'/>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='home-button-wrapper'>

                            {/* - - - </> [LINK] </> - - - */}
                            <Link to="/contact" className='home-button-v1'>Contact us</Link>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:outline-arrow-forward-ios" className='home-button-icon-v1'/>

                        </div>

                    </div>

                </div>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col hide'>

                <Gallery/>

            </div>

        </section>

    );
}

export default Home;