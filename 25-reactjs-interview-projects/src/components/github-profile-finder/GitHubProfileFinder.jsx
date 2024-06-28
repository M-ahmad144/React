import React, { useEffect, useState } from 'react';
import GithubUserCard from './GithubUserCard'; // Adjust the import path as necessary

export default function GitHubProfileFinder() {
    const [userName, setUserName] = useState('M-ahmad144');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        fetchGithubUserData();
        setUserName('');
    };

    const fetchGithubUserData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
            } else {
                console.error('User not found');
                setUserData(null);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUserData(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the user name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">Search</button>
                </div>
            </form>

            {loading && <p>Loading...</p>}
            {!loading && !userData && <p className="alert alert-warning">User not found</p>}
            {!loading && userData && <GithubUserCard userData={userData} />}
        </div>
    );
}
