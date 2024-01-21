import React, { useState } from 'react';
import '../../styles/admin/Table.css';
import { Icon } from '@iconify/react';
import Events from '../../services/Events';
import PopUp from '../../components/admin/PopUp';

function EventTable(props)
{
    //* - - - </> [CLICK] </> - - - *//
    const [popup, setPopup] = useState(false);
    const [type, setType] = useState('');
    const [data, setData] = useState([]);

    //* - - - </> [DATA] </> - - - *//
    const service = new Events();

    //* - - - </> [CLICK] </> - - - *//
    const handleCreate = () => {

        setType("create");
        setPopup(true);
    }

    //* - - - </> [CLICK] </> - - - *//
    const handleUpdate = (item) => {

        setType("update");
        setPopup(true);
        setData(item);
    }
    
    //* - - - </> [CLICK] </> - - - *//
    const handleDelete = (id) => {
        
        try
        {
            //* - - - </> [DATA] </> - - - *//
            service.deleteEvent(id);

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

    return (

        <div className='admin-table'>
            
            {/* - - - </> [DIV] </> - - - */}
            <PopUp id={'event-table'} trigger={popup} setTrigger={setPopup} action={type} place={data}/>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-action-wrapper'>
                
                {/* - - - </> [DIV] </> - - - */}
                <button className='admin-action' onClick={() => handleCreate()}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ic:sharp-add-circle" className='admin-action-icon'/>

                </button>
                
            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-table-wrapper'>

                {/* - - - </> [TABLE] </> - - - */}
                <table className='table-data'>

                    {/* - - - </> [TB] </> - - - */}
                    <tbody className='table-body'>
                        
                        {/* - - - </> [TR] </> - - - */}
                        <tr className='table-index'>

                            {/* - - - </> [TH] </> - - - */}
                            <th className='table-index-item'>ID</th>

                            {/* - - - </> [TH] </> - - - */}
                            <th className='table-index-item'>NAME</th>

                            {/* - - - </> [TH] </> - - - */}
                            <th className='table-index-item'>CREATED</th>

                            {/* - - - </> [TH] </> - - - */}
                            <th className='table-index-item'>UPDATED</th>

                            {/* - - - </> [TH] </> - - - */}
                            <th className='table-index-item'>UPDATE</th>

                            {/* - - - </> [TH] </> - - - */}
                            <th className='table-index-item'>DELETE</th>

                        </tr>

                        {props.data.map((item, index) => (

                        //* - - - </> [TR] </> - - - *//
                        <tr className='table-row' key={index}>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>{item.id}</td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>{item.event_name}</td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>{item.created_at.substring(0, 10)}</td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>{item.updated_at.substring(0, 10)}</td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>

                                {/* - - - </> [ICON] </> - - - */}
                                <Icon icon="ic:sharp-autorenew" className='table-update-icon' onClick={() => handleUpdate(item)}/>
                                
                            </td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>
                                
                                {/* - - - </> [ICON] </> - - - */}
                                <Icon icon="ic:sharp-remove-circle" className='table-delete-icon' onClick={() => handleDelete(item.id)}/>
                                
                            </td>

                        </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default EventTable;