import React from 'react';
import { useState, useEffect } from 'react';
import RocketService from './RocketService';
import { useNavigate, useParams } from 'react-router-dom';


export default function Updation() {

    const {id} = useParams();

    const navigate = useNavigate();

    const [Setvalues, setValues] = useState({ id: "", name: "", email: "", address: "", from_planet: "", to_planet: "", date: "" })

    const handleInputs = (e) => {
        setValues({ ...Setvalues, [e.target.name]: e.target.value });
    }

    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await RocketService.getRocketById(id);
                setValues(response.data);
                console.log(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const eventShow = (event) => {
        event.preventDefault();
        RocketService.updateRocket(id, Setvalues)
        navigate("/form");
        console.log(Setvalues);
    }

    const eventCancel = (event) => {
        navigate("/form");
    }

    return (
        <div>
            <div>
                <form>
                    <div>
                        <label>ID</label>
                    </div>
                    <div>
                        <input type='text'
                            name='id'
                            value={Setvalues.id}
                            onChange={handleInputs}
                            placeholder='ID' />
                    </div>

                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                        <input type='text'
                            name='name'
                            value={Setvalues.name}
                            onChange={handleInputs}
                            placeholder='username' />
                    </div>

                    <div>
                        <label>Email</label>
                    </div>
                    <div>
                        <input type='mail'
                            name='email'
                            value={Setvalues.email}
                            onChange={handleInputs}
                            placeholder='email' />
                    </div>

                    <div>
                        <label>Address</label>
                    </div>
                    <div>
                        <input type='text'
                            name='address'
                            value={Setvalues.address}
                            onChange={handleInputs}
                            placeholder='Address' />
                    </div>

                    <div>
                        <label>From</label>
                    </div>
                    <div>
                        <input type='text'
                            name='from_planet'
                            value={Setvalues.from_planet}
                            onChange={handleInputs}
                            placeholder='From' />
                    </div>
                    <div>
                        <label>To</label>
                    </div>
                    <div>
                        <input type='text'
                            name='to_planet'
                            value={Setvalues.to_planet}
                            onChange={handleInputs}
                            placeholder='To' />
                    </div>

                    <div>
                        <label>Date</label>
                    </div>
                    <div>
                        <input type='text'
                            name='date'
                            value={Setvalues.date}
                            onChange={handleInputs}
                            placeholder='Date' />
                    </div>
                    <button onClick={eventShow}>Submit</button>
                    <button onClick={eventCancel}>Cancel</button>

                </form>

            </div>
        </div>
    )
}