import React from 'react';
import '../../styles/admin/Table.css';
import { Icon } from '@iconify/react';

function PlaceTable(props)
{
    const data = props.data;

    return (

        <div className='admin-table'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='admin-action-wrapper'>
                
                {/* - - - </> [DIV] </> - - - */}
                <button className='admin-action' onClick={() => props.setTrigger(true)}>

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

                        {data.map((item, index) => (

                        //* - - - </> [TR] </> - - - *//
                        <tr className='table-row' key={index}>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>{item.id}</td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>{item.place_name}</td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>{item.created_at.substring(0, 10)}</td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'>{item.updated_at.substring(0, 10)}</td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'><Icon icon="ic:sharp-autorenew" className='table-update-icon'/></td>

                            {/* - - - </> [TD] </> - - - */}
                            <td className='table-item'><Icon icon="ic:sharp-remove-circle" className='table-delete-icon'/></td>

                        </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default PlaceTable;