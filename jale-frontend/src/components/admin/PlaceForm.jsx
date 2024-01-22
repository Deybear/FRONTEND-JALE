import React, { useState } from 'react';
import '../../styles/Form.css';
import '../../styles/admin/AdminForm.css';
import { Icon } from '@iconify/react';
import Places from '../../services/Places';

function PlaceForm(props)
{
    //* - - - </> [DATA] </> - - - *//
    const service = new Places();

    //* - - - </> [DATA] </> - - - *//
    const place = props.data;
    const type = props.type;
    
    //* - - - </> [DATA] </> - - - *//
    const [data, setData] = useState({
        place_name: type === 'update' ? place.place_name : "",
        place_desc: type === 'update' ? place.place_desc : "",
        place_cost: type === 'update' ? place.place_cost : 0,
        place_email: type === 'update' ? place.place_email : "",
        place_score: type === 'update' ? place.place_score : 0,
        place_phone: type === 'update' ? place.place_phone : "",
        place_website: type === 'update' ? place.place_website : "",
        place_address: type === 'update' ? place.place_address : "",
        place_time_open: type === 'update' ? place.place_time_open.substring(11, 16) : "",
        place_time_close: type === 'update' ? place.place_time_close.substring(11, 16) : "",
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
                service.createPlace(data)
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
                service.updatePlace(place.id, data);
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
        <form onSubmit={handleSubmit} className='formulary-large'>

            {/* - - - </> [TEXT] </> - - - */}
            <p className='formulary-title'>{type === 'update' ? "Update" : "Add"} <span>place!</span></p>

            <div className='formulary-large-row'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-large-col'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:baseline-person" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="text"

                        //* - - - </> [NAME] </> - - - *//
                        name='place_name'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place name here*"

                        //* - - - </> [CODE] </> - - - *//
                        pattern='^[A-Za-z0-9 ]{3,15}$'

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_name : ''}

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
                        name='place_email'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place email here*"

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_email : ''}

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
                        name='place_cost'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place cost here*"
                        
                        //* - - - </> [CODE] </> - - - *//
                        pattern='[0-9]*[.,]?[0-9]*'

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_cost : ''}

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
                        name='place_address'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place address here*"

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_address : ''}

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
                        name='place_time_open'
                        
                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place open time here*"
                        
                        //* - - - </> [CODE] </> - - - *//
                        pattern='[0-9]{2}:[0-9]{2}'
                        
                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_time_open.substring(11, 16)  : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='formulary-large-col'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-info" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="text"

                        //* - - - </> [NAME] </> - - - *//
                        name='place_desc'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place description here*"

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_desc : ''}

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
                        name='place_phone'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place phone here*"

                        //* - - - </> [CODE] </> - - - *//
                        pattern='[0-9]{4}-[0-9]{4}'

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_phone : ''}

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-star" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="number"

                        //* - - - </> [NAME] </> - - - *//
                        name='place_score'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place score here*"

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_score : ''}

                        //* - - - </> [VALUE] </> - - - *//
                        min="1" max="5"

                        //* - - - </> [EVENT] </> - - - *//
                        onChange={handleChange}

                        //* - - - </> [EMPTY] </> - - - *//
                        required

                        />

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='formulary-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-phonelink" className='formulary-input-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <input

                        //* - - - </> [TYPE] </> - - - *//
                        type="url"

                        //* - - - </> [NAME] </> - - - *//
                        name='place_website'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place website here*"

                        //* - - - </> [TEXT] </> - - - *//
                        pattern="https://.*"
                        
                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_website : ''}

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
                        name='place_time_close'

                        //* - - - </> [TEXT] </> - - - *//
                        placeholder="Place close time here*"
                        
                        //* - - - </> [CODE] </> - - - *//
                        pattern='[0-9]{2}:[0-9]{2}'

                        //* - - - </> [CLASS] </> - - - *//
                        className='formulary-input'

                        //* - - - </> [VALUE] </> - - - *//
                        defaultValue={type === 'update' ? place.place_time_close.substring(11, 16)  : ''}

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
                    <input type="submit" value={type === 'update' ? "Update place" : "Add place"} className='formulary-button-v2'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:outline-arrow-forward-ios" className='formulary-button-icon-v2'/>

                </div>

            </div>

        </form>

    );
}

export default PlaceForm;