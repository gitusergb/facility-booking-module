import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const BookingForm = () => {
    const [facility, setFacility] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [message, setMessage] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (endTime <= startTime) {
            setMessage('End time must be after start time within the same day.');
            setMessageStyle('error');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/book', 
            { 
                facility, 
                date, 
                time: `${startTime}-${endTime}` 
            });

            if (response.data) {
                setMessage(response.data.message);
                setAmount(response.data.amount);
                setMessageStyle('success');
            } else {
                setMessage('Unexpected error occurred.');
                setAmount('');
                setMessageStyle('error');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message);
            } else {
                setMessage('Network error. Please try again later.');
            }
            setAmount('');
            setMessageStyle('error');
        }
    };

    const [messageStyle, setMessageStyle] = useState('');

    return (
        <div className="container">
            <h1>ADDA Facility Booking</h1>
            <span >Book common Facilities.</span><br></br>
            <span>Stay updated about Activities, Events</span>
            <hr />
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Facility:</label>
                    
                    <select value={facility} onChange={(e) => setFacility(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Clubhouse">Clubhouse</option>
                        <option value="Tennis Court">Tennis Court</option>
                    </select>
                </div>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label>Start Time:</label>
                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </div>
                <div>
                    <label>End Time:</label>
                    <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                </div>
                <button type="submit">Book</button>
            </form>
            {message && (
                <div className={`message ${messageStyle}`}>
                    <p>{message}</p>
                    <p>{amount}</p>
                </div>
            )}
        </div>
    );
};

export default BookingForm;
