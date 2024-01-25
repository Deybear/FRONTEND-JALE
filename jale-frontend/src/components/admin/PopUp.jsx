import React from 'react';
import '../../styles/admin/PopUp.css';
import UserForm from './UserForm';
import PlaceForm from './PlaceForm';
import EventForm from './EventForm';
import PhotoForm from './PhotoForm';
import PlaceLocationForm from './PlaceLocationForm';
import EventLocationForm from './EventLocationForm';
import CategoryForm from './CategoryForm';
import PlaceCategoryForm from './PlaceCategoryForm';
import EventCategoryForm from './EventCategoryForm';

function PopUp(props)
{
    return (props.trigger) ? (

        <div className='popup-wrapper'>

            {/* - - - </> [DIV] </> - - - */}
            {props.id === 'user-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <UserForm setTrigger={props.setTrigger} type={props.action} data={props.user}/>

            </div>}
            
            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'place-table' && <div className='popup-card-v2'>

                {/* - - - </> [FORM] </> - - - */}
                <PlaceForm setTrigger={props.setTrigger} type={props.action} data={props.place}/>
            
            </div>}

            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'event-table' && <div className='popup-card-v2'>

                {/* - - - </> [FORM] </> - - - */}
                <EventForm setTrigger={props.setTrigger} type={props.action} data={props.event}/>
            
            </div>}

            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'photo-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <PhotoForm setTrigger={props.setTrigger} type={props.action} data={props.photo}/>
                
            </div>}

            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'category-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <CategoryForm setTrigger={props.setTrigger} type={props.action} data={props.category}/>
                
            </div>}

            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'place-location-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <PlaceLocationForm setTrigger={props.setTrigger} type={props.action} data={props.location}/>
            
            </div>}

            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'event-location-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <EventLocationForm setTrigger={props.setTrigger} type={props.action} data={props.location}/>
            
            </div>}

            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'place-category-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <PlaceCategoryForm setTrigger={props.setTrigger} type={props.action} data={props.category}/>
            
            </div>}

            {/* - - - </> [FORM] </> - - - */}
            {props.id === 'event-category-table' && <div className='popup-card-v1'>

                {/* - - - </> [FORM] </> - - - */}
                <EventCategoryForm setTrigger={props.setTrigger} type={props.action} data={props.category}/>
            
            </div>}

        </div>

    ) : "";
}

export default PopUp;