import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SimpleThemeChange = () => {
    // State to manage the theme
    const [theme, setTheme] = useState('dark');

    // Function to toggle between 'dark' and 'light' themes
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`container-fluid ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ minHeight: '100vh' }}>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            Theme Changer
                        </h5>
                        <p className="card-text">
                            Current Theme: <strong>{theme}</strong>
                        </p>

                        <button className="btn btn-primary" onClick={toggleTheme}>
                            Change Theme
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleThemeChange;
