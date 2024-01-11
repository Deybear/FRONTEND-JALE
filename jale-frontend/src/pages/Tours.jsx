import React, { useState, useEffect } from 'react';
import '../styles/Grid.css';
import '../styles/Tours.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Places from '../services/Places';

function Tours()
{
    const [place, setPlace] = useState([]);
    const service = new Places();

    useEffect(() => {
        getPlace();
    }, [])

    const getPlace = async () => {
        const data = await service.getPlaces();
        setPlace(data);
    }

    console.log(place);

    return (

        <section className='main-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='lf-lg-col'>

                {/* - - - </> [NAV] </> - - - */}
                <Navigation/>

                {/* - - - </> [DIV] </> - - - */}
                <div className='places-list'>
                    
                    {/* - - - </> [PLACE] </> - - - */}
                    {place.map((item, index) => (

                        //* - - - </> [DIV] </> - - - *//
                        <div className='place-card' key={index}>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-name'>{item.place_name}</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-address'>{item.place_address}</p>

                        </div>

                    ))}
                    
                </div>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='rg-lg-col'>

            </div>

        </section>

    );
}

export default Tours;