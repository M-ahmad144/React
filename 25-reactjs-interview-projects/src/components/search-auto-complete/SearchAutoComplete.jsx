import React, { useEffect, useState } from 'react';
import UserList from './UserList';


export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);


    const fetchUsersData = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://dummyjson.com/users');
            if (res.ok) {
                const data = await res.json();
                if (data && Array.isArray(data.users)) {
                    setUsers(data.users.map(userItem => ({
                        firstName: userItem.firstName,
                    })));
                }
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query.length > 1) {
            const filtered = users.filter(user =>
                user.firstName.toLowerCase().includes(query)
            );
            setFilteredUsers(filtered);
            setDropdownVisible(filtered.length > 0);
        } else {
            setFilteredUsers([]);
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        fetchUsersData();
    }, []);

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title text-center mb-4">Search AutoComplete</h5>
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            value={searchQuery}
                            name='search-user'
                            type="text"
                            placeholder="Search user by first name..."
                        />
                    </div>
                    {loading ? (
                        <p className="text-center">Loading...</p>
                    ) : (
                        dropdownVisible && <UserList users={filteredUsers} />
                    )}
                </div>
            </div>
        </div>
    );
}
