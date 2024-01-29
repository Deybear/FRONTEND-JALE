import React, { useState, useEffect } from 'react';

//* - - - </> [CSS] </> - - - *//
import '../styles/Grid.css';
import '../styles/Tours.css';

//* - - - </> [ITEM] </> - - - *//
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

//* - - - </> [DATA] </> - - - *//
import Categories from '../services/Categories';
import Places from '../services/Places';
import Events from '../services/Events';

function Tours()
{
    //* - - - </> [DATA] </> - - - *//
    const [places, setPlaces] = useState([]);
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("");
    const [option, setOption] = useState(null);
    const [categories, setCategories] = useState([]);

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [DATA] </> - - - *//
    const categoryService = new Categories();
    const placeService = new Places();
    const eventService = new Events();
    
    useEffect(() => {
        
        getData();

    }, [])

    //* - - - </> [DATA] </> - - - *//
    const getData = async () => {

        //* - - - </> [DATA] </> - - - *//
        const categoryData = await categoryService.getCategories();
        setCategories(categoryData);
        
        //* - - - </> [DATA] </> - - - *//
        // const placeData = await placeService.getPlaces();
        // setPlaces(placeData);

        //* - - - </> [DATA] </> - - - *//
        const eventData = await eventService.getEvents();
        setEvents(eventData);
    }

    useEffect(() => {

        getPlace();
        
    }, [search]);

    const getPlace = async () => {

        let data = [];

        if (option !== null)
        {
            //* - - - </> [DATA] </> - - - *//
            data = await placeService.getPlaceCategories(option);
        }
        else
        {
            //* - - - </> [DATA] </> - - - *//
            data = await placeService.getPlaces();
        }

        //* - - - </> [DATA] </> - - - *//
        const filteredPlaces = data.filter((item) => item.place_name.toLowerCase().includes(search.toLowerCase()));
        setPlaces(filteredPlaces);
    };

    //* - - - </> [DATA] </> - - - *//
    const handleFilter = async (id) => {

        //* - - - </> [DATA] </> - - - *//
        const data = await placeService.getPlaceCategories(id);
        setPlaces(data);
    };

    //* - - - </> [DATA] </> - - - *//
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    //* - - - </> [DATA] </> - - - *//
    const handleOption = (event) => {
        const chosenOption = event.target.value;
        setOption(chosenOption);
        handleFilter(chosenOption);
    };
    
    //* - - - </> [LINK] </> - - - *//
    const seeMore = (id) => {

        navigate(`/tours/${id}`);
    }

    return (

        <section className='main-section' style={{background: "var(--color_003)"}}>

            {/* - - - </> [DIV] </> - - - */}
            <div className='tours'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='tours-actions'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='tours-title'>Let's Travel!</p>

                </div>

                {/* - - - </> [INPUT] </> - - - */}
                <input type="text" placeholder="Search a place here*" value={search} onChange={handleSearch}/>

                <div>

                    <label htmlFor="dropdown">Select a category:</label>

                    <select id="dropdown" value={option} onChange={handleOption} placeholder="Select a category">

                        <option value="">Select an option</option>

                        {categories.map((category) => (

                            <option key={category.id} value={category.id}>{category.category_desc}</option>

                        ))}

                    </select>
                    
                    <button className="reload-button">Clean</button>
                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='tours-container'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='tours-wrapper'>

                        {/* - - - </> [PLACE] </> - - - */}
                        {places.map((item, index) => (

                        //* - - - </> [DIV] </> - - - *//
                        <div className='tours-card' onClick={() => seeMore(item.id)} key={index}>

                            {/* - - - </> [IMG] </> - - - */}
                            {/* <div className='place-image-wrapper'><img src={item.photos.length > 0 ? item.photos[0].photo_url : ""} alt="" className='place-image'/></div> */}

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='tours-text-wrapper'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='tours-name'>{item.place_name} <Icon icon="ph:seal-check-fill" className='tours-name-icon'/></p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='tours-cost'>${item.place_cost}</p>

                            </div>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='tours-rating-score'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                {Array(5).fill(null).map((_, index) => {
                                    
                                    //* - - - </> [ICON] </> - - - *//
                                    if (index < Math.floor(item.place_score))
                                    {
                                        //* - - - </> [ICON] </> - - - *//
                                        return ( <Icon key={`star-${index}`} icon="ic:baseline-star" color={"#FFC439"} className='tours-rating-star'/>)
                                    }
                                    else
                                    {
                                        //* - - - </> [ICON] </> - - - *//
                                        return (<Icon key={`star-${index}`} icon="ic:baseline-star" color={"#E4E5E9"} className='tours-rating-star'/>)
                                    }
                                })}
                            
                            </div>

                        </div>

                        ))}

                    </div>
                    
                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='tours-actions'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='tours-title'>Let's Travel!</p>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='tours-container'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='tours-wrapper'>

                        {/* - - - </> [PLACE] </> - - - */}
                        {events.map((item, index) => (

                        //* - - - </> [DIV] </> - - - *//
                        <div className='tours-card-event' key={index}>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='tours-date-wrapper'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='tours-date-day'>{item.event_date_start.substring(8, 10)}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                {item.event_date_start.substring(5, 7) === "01" ? <p className='tours-date-month'>JAN</p> : null}
                                {item.event_date_start.substring(5, 7) === "02" ? <p className='tours-date-month'>FEB</p> : null}
                                {item.event_date_start.substring(5, 7) === "03" ? <p className='tours-date-month'>MAR</p> : null}

                            </div>
                            
                            {/* - - - </> [DIV] </> - - - */}
                            <div className='tours-text-event'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='tours-name'>{item.event_name}</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='tours-cost'>{item.event_cost > 0 ? `$${item.event_cost}` : "FREE"}</p>

                            </div>

                        </div>

                        ))}

                    </div>
                    
                </div>

            </div>

        </section>

    );
}

export default Tours;