import React, { useEffect, useState } from 'react';

const Testimonials = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const usersData = await response.json();
            setUsers(usersData);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Testimonials</h1>
            <ul>
                <p>{new Date().toLocaleTimeString()}</p>
                {users.map((user) => (
                    <li className='my-4 px-4 py-2 rounded-md shadow-lg w-max' key={user.id}>{user.name}</li>
                ))}
            </ul>
            {/* <Link href="/user/post" className='rounded-3xl shadow-md' >Post Page</Link> */}
        </>
    );
};

export default Testimonials;
