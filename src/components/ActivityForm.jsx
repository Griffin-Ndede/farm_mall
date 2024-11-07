// ActivityForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function ActivityForm({ activityType, onActivityAdded }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/activities/create/', {
            activity_type: activityType,
            date: date,
            description: description,
        });
        onActivityAdded();
        setDate('');
        setDescription('');
    };

    // Format activityType if it exists
    const displayActivityType = activityType
        ? activityType.charAt(0).toUpperCase() + activityType.slice(1)
        : '';

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
                {displayActivityType} Activity
            </h2>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="date">
                    Date:
                </label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="description">
                    Description:
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
                    placeholder="Describe the activity..."
                />
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold rounded-md py-2 hover:bg-green-700 transition duration-300"
            >
                Add Activity
            </button>
        </form>
    );
}

export default ActivityForm;
