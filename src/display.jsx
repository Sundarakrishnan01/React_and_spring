import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RocketService from './RocketService';

export const Display = () => {

    const navigate = useNavigate();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RocketService.getRockets();
                setDetails(response.data);
                console.log(details);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    });

    console.log(details)

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"150px"}}>
            <table border="2px" width="500px" height="450px">
                <th>
                    Id
                </th>
                <th>
                    name
                </th>
                <th>
                    from
                </th>
                <th>
                    to
                </th>
                <th>
                    operation
                </th>
                
                {
                    details.map((ele) => {
                        return (
                            <tr>
                                <td>
                                    {ele.id}
                                </td>
                                <td>
                                    {ele.name}
                                </td>
                                <td>
                                    {ele.from_planet}
                                </td>
                                <td>
                                    {ele.to_planet}
                                </td>
                               
                               <td>
                               <button onClick={() => RocketService.deleteRocket(ele.id)}>Delete</button>
                               <button onClick={() => navigate(`/edit/${ele.id}`)}>Update</button>
                               
                               </td>
                            </tr>
                        );
                    })
                }
            </table>
        </div>
    )
}
