import React from 'react';
import { useState, useEffect } from 'react';
import RocketService from './RocketService';
import { Display } from './display';


export default function MyForm() {
    const [Setvalues, setValues] = useState({ name: "", email: "", address: "", from_planet: "", to_planet: "", date: "" })

    const handleInputs = (e) => {
        setValues({ ...Setvalues, [e.target.name]: e.target.value });
    }


    const eventShow = (event) => {
        event.preventDefault();
        RocketService.saveRocket(Setvalues).then(res => console.log(res)).catch(err => console.log(err))
        console.log(Setvalues);
    }

    return (
        <div>
            <div>
                <form>
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

                </form>
                <Display/>
            </div>
        </div>
    )
}