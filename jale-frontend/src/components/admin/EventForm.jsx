import React, { useState } from 'react';
import '../../styles/Form.css';
import '../../styles/admin/PlaceForm.css';
import { Icon } from '@iconify/react';
import Events from '../../services/Events';

function EventForm(props)
{
    //* - - - </> [DATA] </> - - - *//
    const service = new Events();

    //* - - - </> [DATA] </> - - - *//
    const event = props.data;
    const type = props.type;
    
    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({
        event_name: type === 'update' ? event.event_name : "",
        event_desc: type === 'update' ? event.event_desc : "",
        event_cost: type === 'update' ? event.event_cost : 0,
        event_email: type === 'update' ? event.event_email : "",
        event_photo: type === 'update' ? event.event_photo : "",
        event_phone: type === 'update' ? event.event_phone : "",
        event_website: type === 'update' ? event.event_website : "",
        event_address: type === 'update' ? event.event_address : "",
        event_date_start: type === 'update' ? event.event_date_start : "",
        event_time_start: type === 'update' ? event.event_time_start.substring(11, 16) : "",
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
                service.createEvent(data)
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
                service.updateEvent(event.id, data);
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
        <form onSubmit={handleSubmit} className='formulary-place'>

            {/* - - - </> [TEXT] </> - - - */}
            <p className='formulary-title'>{type === 'update' ? "Update" : "Add"} <span>event!</span></p>

            <div className='formulary-place-row'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-place-col'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:baseline-person" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="text"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_name'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event name here*"

                        //* - - - </> [CODE] </> - - - *//
                        pattern='^[A-Za-z0-9 ]{3,15}$'

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_name : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-email" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="email"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_email'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event email here*"

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_email : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-attach-money" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="text"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_cost'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event cost here*"
                        
                        //* - - - </> [CODE] </> - - - *//
                        pattern='[0-9]*[.,]?[0-9]*'

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_cost : ''}

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
                        type="text"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_address'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event address here*"

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_address : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-access-time-filled" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="date"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_date_start'
                        
                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_date_start : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-place-col'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-info" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="text"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_desc'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event description here*"

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_desc : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-phone-in-talk" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="tel"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_phone'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event phone here*"

                        //* - - - </> [CODE] </> - - - *//
                        pattern='[0-9]{4}-[0-9]{4}'

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_phone : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-image" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="url"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_photo'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event photo here*"
                        
                        //* - - - </> [TEXT] </> - - - *//
                        pattern="https://.*"

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_photo : ''}
                        
                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-language" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="url"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_website'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event website here*"

                        //* - - - </> [TEXT] </> - - - *//
                        pattern="https://.*"
                        
                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_website : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-access-time-filled" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="text"

                        //* - - - </> [NAME] </> - - - *//
                        name='event_time_start'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Event start time here*"
                        
                        //* - - - </> [CODE] </> - - - *//
                        pattern='[0-9]{2}:[0-9]{2}'

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? event.event_time_start.substring(11, 16)  : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                </div>

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
                    <input type="submit" value={type === 'update' ? "Update event" : "Add event"} className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default EventForm;