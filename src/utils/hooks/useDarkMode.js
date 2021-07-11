import { useState, useEffect } from 'react';

export const modes = {
    DARK: '(prefers-color-scheme: dark)',
    LIGHT: '(prefers-color-scheme: light)'
};

export default function useDarkMode() {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    useEffect(() => {
        if (!window.matchMedia) {
            setIsDarkMode(false);
        }

        setIsDarkMode(window.matchMedia(modes.DARK));

    }, []);

    return { isDarkMode };
};
