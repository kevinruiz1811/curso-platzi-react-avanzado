import { useState } from "react";

export function useLocalStorage(key, initialvalue) {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item !== null ? JSON.parse(item) : initialvalue
        } catch (error) {
            return initialvalue;
        }
    });

    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setValue(value);
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setLocalStorage];
}