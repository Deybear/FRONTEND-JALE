import React, { useState, useEffect } from 'react';
import '../styles/Grid.css';
import '../styles/Tours.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Places from '../services/Places';

function Tours()
{
    const [place, setPlace] = useState([]);

    const navigate = useNavigate();
    const service = new Places();

    useEffect(() => {
        getPlace();
    }, [])

    const getPlace = async () => {
        const data = await service.getPlaces();
        setPlace(data);
    }

    const seeMore = (id) => {
        navigate(`/tours/${id}`);
    }

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
                        <div className='place-card' onClick={() => seeMore(item.id)} key={index}>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-wrapper'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-name'>{item.place_name}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-cost'>${item.place_cost}</p>

                            </div>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-rating-score'>

                                {/* - - - </> [ICON] </> - - - */}
                                {Array(5).fill(<Icon icon="ic:baseline-star" color={"#E4E5E9"} className='place-rating-star'/>).fill(<Icon icon="ic:baseline-star" color={"#FFC439"} className='place-rating-star'/>, 0, Math.floor(item.place_score))}
                            
                            </div>

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