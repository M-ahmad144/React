import React, { useState } from 'react';
import MenuList from './menu-list';

export default function MenuItem({ item }) {
    const [displayChildren, setDisplayChildren] = useState({});

    const handleToggleClick = (label) => {
        setDisplayChildren({ ...displayChildren, [label]: !displayChildren[label] });
    };

    return (
        <li className="list-group-item">

            <div className="d-flex justify-content-between align-items-center">

                <span>{item.label}</span>
                {item.children && item.children.length > 0 && (
                    <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleToggleClick(item.label)}
                    >
                        {displayChildren[item.label] ? '-' : '+'}
                    </button>
                )}
            </div>
            {item.children && item.children.length > 0 && displayChildren[item.label] && (

                <MenuList list={item.children} />

            )}
        </li>
    );
}
