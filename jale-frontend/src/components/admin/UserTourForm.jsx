import React, { useState } from 'react';
import '../../styles/Form.css';
import '../../styles/admin/AdminForm.css';
import { Icon } from '@iconify/react';
import UserTours from '../../services/UserTours';

function PlaceCategoryForm(props)
{
    //* - - - </> [DATA] </> - - - *//
    const service = new UserTours();

    //* - - - </> [DATA] </> - - - *//
    const tour = props.data;
    const type = props.type;

    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({
        user_id: type === 'update' ? tour.user_id : 0,
        place_id: type === 'update' ? tour.place_id : 0
    });

    //* - - - </> [DATA] </> - - - *//
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    //* - - - </> [DATA] </> - - - *//
    const handleSubmit = (e) => {

        e.preventDefault();

        //* - - - </> [TYPE] </> - - - *//
        if(type === 'create')
        {
            try
            {
                //* - - - </> [DATA] </> - - - *//
                service.createUserTour(data)
                props.setTrigger(false);

                //* - - - </> [LOAD] </> - - - *//
                setTimeout(function()
                {
                    //* - - - </> [LOAD] </> - - - *//
                    window.location.reload();

                }, 500);
            }
            catch(error)
            {
                //* - - - </> [ERROR] </> - - - *//
                console.error(error);
            }
        }
        else
        {
            try
            {
                //* - - - </> [DATA] </> - - - *//
                service.updateUserTour(tour.id, data);
                props.setTrigger(false);

                //* - - - </> [LOAD] </> - - - *//
                setTimeout(function()
                {
                    //* - - - </> [LOAD] </> - - - *//
                    window.location.reload();

                }, 500);
            }
            catch(error)
            {
                //* - - - </> [ERROR] </> - - - *//
                console.error(error);
            }
        }
    }
    
    return (

        //* - - - </> [FORM] </> - - - *//
        <form onSubmit={handleSubmit} className='formulary-smaller'>

            {/* - - - </> [TEXT] </> - - - */}
            <p className='formulary-title'>{type === 'update' ? "Update" : "Add"} <span>tour!</span></p>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-person" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="number"

                //* - - - </> [NAME] </> - - - *//
                name='user_id'
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'

                //* - - - </> [VALUE] </> - - - *//
                defaultValue={type === 'update' ? tour.user_id : 0}

                //* - - - </> [VALUE] </> - - - *//
                min="1"

                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}

                //* - - - </> [EMPTY] </> - - - *//
                required

                />

            </div>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-map" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="number"

                //* - - - </> [NAME] </> - - - *//
                name='place_id'
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'

                //* - - - </> [VALUE] </> - - - *//
                defaultValue={type === 'update' ? tour.place_id : 0}

                //* - - - </> [VALUE] </> - - - *//
                min="1"

                //* - - - </> [EVENT] </> - - - *//
                onChange={handleChange}

                //* - - - </> [EMPTY] </> - - - *//
                required

                />

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-actions'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper' onClick={() => props.setTrigger(false)}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-back-ios-new" className='formulary-button-icon-v1'/>

                    {/* - - - </> [LINK] </> - - - */}
                    <input type="submit" value="Go back" className='formulary-button-v1'/>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-button-wrapper'>

                    {/* - - - </> [SUBMIT] </> - - - */}
                    <input type="submit" value={type === 'update' ? "Update tour" : "Add tour"} className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default PlaceCategoryForm;