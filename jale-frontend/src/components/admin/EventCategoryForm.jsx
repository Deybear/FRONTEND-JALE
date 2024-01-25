import React, { useState } from 'react';
import '../../styles/Form.css';
import '../../styles/admin/AdminForm.css';
import { Icon } from '@iconify/react';
import Categories from '../../services/Categories';

function EventCategoryForm(props)
{
    //* - - - </> [DATA] </> - - - *//
    const service = new Categories();

    //* - - - </> [DATA] </> - - - *//
    const category = props.data;
    const type = props.type;

    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({
        event_id: type === 'update' ? category.event_id : 0,
        category_id: type === 'update' ? category.category_id : 0
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
                service.createEventCategory(data)
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
                service.updateEventCategory(category.id, data);
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
            <p className='formulary-title'>{type === 'update' ? "Update" : "Add"} <span>category!</span></p>

            {/* - - - </> [DIV] </> - - - */}
            <div className='formulary-wrapper'>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="ic:sharp-category" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="number"

                //* - - - </> [NAME] </> - - - *//
                name='category_id'
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'

                //* - - - </> [VALUE] </> - - - *//
                defaultValue={type === 'update' ? category.category_id : 0}

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
                <Icon icon="ic:sharp-event" className='formulary-input-icon'/>

                {/* - - - </> [INPUT] </> - - - */}
                <input

                //* - - - </> [TYPE] </> - - - *//
                type="number"

                //* - - - </> [NAME] </> - - - *//
                name='event_id'
                
                //* - - - </> [CLASS] </> - - - *//
                className='formulary-input'

                //* - - - </> [VALUE] </> - - - *//
                defaultValue={type === 'update' ? category.event_id : 0}

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
                    <input type="submit" value={type === 'update' ? "Update category" : "Add category"} className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default EventCategoryForm;