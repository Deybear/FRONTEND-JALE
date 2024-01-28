import React, { useEffect, useState } from 'react';
import '../styles/Grid.css';
import '../styles/Home.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Button from '../components/admin/Button';
import UsersTours from '../components/UserTour';
import Sessions from '../services/Sessions';

function Home()
{
    //* - - - </> [CLICK] </> - - - *//
    const [display, setDisplay] = useState(false);

    //* - - - </> [LOAD] </> - - - *//
    const [loading, setLoading] = useState(true);

    //* - - - </> [DATA] </> - - - *//
    const [account, setAccount] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const service = new Sessions;

    useEffect(() => {
        
        setTimeout(() => {

            //* - - - </> [DATA] </> - - - *//
            const currentUser = service.getCurrentUser();
            setAccount(currentUser);

            //* - - - </> [LOAD] </> - - - *//
            setLoading(Object.keys(currentUser).length === 0);
    
        }, 800);

    }, []);

    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col'>
                
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

                {/* - - - </> [BUTTON] </> - - - */}
                {!loading ? <Button currentUser={account} trigger={display} setTrigger={setDisplay}/> : null}

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col hide'>

                {/* - - - </> [IMAGE] </> - - - */}
                {display ? <UsersTours setTrigger={setDisplay}/> : <img src="https://shorturl.at/gOSUW" alt="image_001" className='about-image'/>}

            </div>

        </section>

    );
}

export default Home;