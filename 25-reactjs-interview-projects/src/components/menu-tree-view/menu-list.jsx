import React from 'react';
import MenuItem from './menu-item';

export default function MenuList({ list = [] }) {
    return (
        <ul className="list-group">
            {list && list.length ? (
                list.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))
            ) : null}
        </ul>
    );
}
