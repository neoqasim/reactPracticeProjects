// SimpleForm.js
import React, { useState } from 'react';

const SimpleForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert('Form data submitted:', formData);
    };

    return (
        <div className="w-[65vw] mx-auto p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Simple Form</h1>
            <form onSubmit={handleSubmit} className="w-1/2 bg-white p-8  rounded-lg shadow-lg text-3xl m-auto">
                <div className="mb-6 ">
                    <label htmlFor="name" className="block  font-medium text-gray-700">Name</label>
                    <input
                        placeholder='Enter your text here '
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className=" mb-10 mt-4 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block  font-medium text-gray-700">Email</label>
                    <input
                        placeholder='Enter your text here '
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mb-10 mt-4 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
                        required
                    />
                </div>
                <button
                    type="submit"
                    className=" my-8 w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SimpleForm;
