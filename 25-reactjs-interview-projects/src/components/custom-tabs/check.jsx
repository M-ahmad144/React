import React, { useState } from 'react';

export default function Check({ tabsContent, onChange }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnClick = (index) => {
        setCurrentIndex(index);
        onChange(index);
    };

    return (
        <div>
            <div>
                {/* header */}
                {tabsContent && tabsContent.map((item, index) => (
                    <button
                        onClick={() => handleOnClick(index)}
                        key={item.label}>
                        {item.label}
                    </button>
                ))}
            </div>
            <div>
                {/* content section */}
                {tabsContent[currentIndex] && tabsContent[currentIndex].content ? (
                    <p>{tabsContent[currentIndex].content}</p>
                ) : null}
            </div>
        </div>
    );
}
