import React, { useState, useEffect } from 'react';
import '../styles/Grid.css';
import '../styles/Tours.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Places from '../services/Places';

function Tours()
{
    //* - - - </> [DATA] </> - - - *//
    const [places, setPlaces] = useState([]);

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [DATA] </> - - - *//
    const service = new Places();

    useEffect(() => {
        getData();
    }, [])

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {
        const data = await service.getPlaces();
        setPlaces(data);
    }
    
    //* - - - </> [LINK] </> - - - *//
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
                    {places.map((item, index) => (

                        //* - - - </> [DIV] </> - - - *//
                        <div className='place-card' onClick={() => seeMore(item.id)} key={index}>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-wrapper'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-name'>{item.place_name} <Icon icon="ph:seal-check-fill" className='place-name-icon'/></p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-cost'>${item.place_cost}</p>

                            </div>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-rating-score'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                {Array(5).fill(null).map((_, index) => {
                                    
                                    //* - - - </> [ICON] </> - - - *//
                                    if (index < Math.floor(item.place_score))
                                    {
                                        //* - - - </> [ICON] </> - - - *//
                                        return ( <Icon key={`star-${index}`} icon="ic:baseline-star" color={"#FFC439"} className='place-rating-star'/>)
                                    }
                                    else
                                    {
                                        //* - - - </> [ICON] </> - - - *//
                                        return (<Icon key={`star-${index}`} icon="ic:baseline-star" color={"#E4E5E9"} className='place-rating-star'/>)
                                    }
                                })}
                            
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