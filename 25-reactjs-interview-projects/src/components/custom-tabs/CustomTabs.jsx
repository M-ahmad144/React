import React, { useState } from 'react';

export default function CustomTabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleOnClick = (index) => {
        setCurrentTabIndex(index);
        onChange(index);
    };

    return (
        <div className="container mt-4">
            <ul className="nav nav-tabs">

                {tabsContent.map((tabsItem, index) => (
                    <li className="nav-item" key={tabsItem.label}>
                        <button
                            className={`nav-link ${currentTabIndex === index ? 'active' : ''}`}
                            onClick={() => handleOnClick(index)}
                        >
                            {tabsItem.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="tab-content mt-3">
                {tabsContent[currentTabIndex] && (
                    <div className="tab-pane fade show active">
                        {tabsContent[currentTabIndex].content}
                    </div>
                )}
            </div>
        </div>
    );
}




