import React, { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch (error) {
            console.error(`Error retrieving localStorage key '${key}':`, error);
            return defaultValue;
        }
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
