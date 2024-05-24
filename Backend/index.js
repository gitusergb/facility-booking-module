const express = require('express');
const cors = require('cors'); // Add this line

const app = express();
const PORT = 3000;

app.use(cors()); // Add this line
app.use(express.json());

const facilities = [
    {
        name: 'Clubhouse',
        slots: [
            { start: '10:00', end: '16:00', rate: 100 },
            { start: '16:00', end: '22:00', rate: 500 }
        ],
        bookings: []
    },
    {
        name: 'Tennis Court',
        slots: [
            { rate: 50 }
        ],
        bookings: []
    }
];

const isOverlapping = (start1, end1, start2, end2) => {
    return !(end1 <= start2 || end2 <= start1);
};

const parseTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours + minutes / 60;
};

app.post('/book', (req, res) => {
    const { facility, date, time } = req.body;
    const [startTime, endTime] = time.split('-').map(t => t.trim());
    
    const start = parseTime(startTime);
    const end = parseTime(endTime);
    
    if (end <= start) {
        return res.status(400).json({ message: 'End time must be after start time within the same day.' });
    }

    const selectedFacility = facilities.find(f => f.name === facility);
    if (!selectedFacility) {
        return res.status(400).json({ message: 'Invalid facility' });
    }

    // Check if the slot is available
    for (let booking of selectedFacility.bookings) {
        if (booking.date === date && isOverlapping(parseTime(booking.startTime), parseTime(booking.endTime), start, end)) {
            return res.status(400).json({ message: 'Booking Failed, Already Booked' });
        }
    }

    // Calculate the booking amount
    let bookingAmount = 0;
    if (facility === 'Clubhouse') {
        selectedFacility.slots.forEach(slot => {
            const slotStart = parseTime(slot.start);
            const slotEnd = parseTime(slot.end);
            if (isOverlapping(slotStart, slotEnd, start, end)) {
                bookingAmount += slot.rate * (Math.min(slotEnd, end) - Math.max(slotStart, start));
            }
        });
    } else if (facility === 'Tennis Court') {
        bookingAmount = 50 * (end - start);
    }

    // Save the booking
    selectedFacility.bookings.push({ date, startTime, endTime });

    res.json({ message: 'Booked', amount: `Rs. ${bookingAmount}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
