let bookings = {}; // Tracks bookings by date and time

export const fetchAPI = (date) => {
    if (!bookings[date]) bookings[date] = [];
    const allTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const unavailableTimes = bookings[date];
    return Promise.resolve(allTimes.filter(time => !unavailableTimes.includes(time)));

};

export const submitAPI = ({ date, time }) => {
    if (bookings[date]?.includes(time)) {
        return Promise.resolve(false); // Time already booked
    }
    bookings[date] = [...(bookings[date] || []), time];
    return Promise.resolve(true);

};

