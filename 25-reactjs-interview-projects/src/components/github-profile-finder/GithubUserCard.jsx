import React from 'react';

export default function GithubUserCard({ userData }) {
    return (
        <div className="card border-0 shadow-sm rounded-3">
            {/* User Image */}
            <img src={userData.avatar_url} className="card-img-top mx-auto d-block mt-3 rounded-circle border border-3 border-light" alt="avatar" style={{ width: '150px', height: '150px' }} />

            <div className="card-body text-center">
                {/* User Name */}
                <h5 className="card-title mb-0">{userData.name}</h5>

                {/* User Details */}
                <ul className="list-group list-group-flush mt-3">
                    <li className="list-group-item border-0">
                        <span className="fw-bold">Followers:</span> {userData.followers}
                    </li>
                    <li className="list-group-item border-0">
                        <span className="fw-bold">Following:</span> {userData.following}
                    </li>
                    <li className="list-group-item border-0">
                        <span className="fw-bold">Public Repos:</span> {userData.public_repos}
                    </li>
                </ul>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4 rounded-pill py-2 px-4">
                    Visit GitHub Profile
                </a>
            </div>
        </div>
    );
}
