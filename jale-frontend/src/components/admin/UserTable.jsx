import React from 'react';
import '../../styles/admin/Table.css';
import { Icon } from '@iconify/react';

function UserTable(props)
{
    const data = props.data;

    return (

        <table className='admin-table'>

            <tbody>

                {/* - - - </> [TR] </> - - - */}
                <tr className='table-index'>

                    {/* - - - </> [TH] </> - - - */}
                    <th className='table-index-item'>ID</th>

                    {/* - - - </> [TH] </> - - - */}
                    <th className='table-index-item'>NAME</th>

                    {/* - - - </> [TH] </> - - - */}
                    <th className='table-index-item'>LASTNAME</th>

                    {/* - - - </> [TH] </> - - - */}
                    <th className='table-index-item'>EMAIL</th>

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
                    <td className='table-item'>{item.user_name}</td>

                    {/* - - - </> [TD] </> - - - */}
                    <td className='table-item'>{item.user_lastname}</td>

                    {/* - - - </> [TD] </> - - - */}
                    <td className='table-item'>{item.user_email}</td>

                    {/* - - - </> [TD] </> - - - */}
                    <td className='table-item'><Icon icon="ic:sharp-change-circle" className='table-update-icon'/></td>

                    {/* - - - </> [TD] </> - - - */}
                    <td className='table-item'><Icon icon="ic:sharp-remove-circle" className='table-delete-icon'/></td>

                </tr>

                ))}

            </tbody>

        </table>

    );
}

export default UserTable;