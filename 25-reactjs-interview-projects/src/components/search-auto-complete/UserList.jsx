import React from 'react';

export default function UserList({ users }) {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.firstName}
                </li>
            ))}
        </ul>
    );
}
