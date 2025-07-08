import { useEffect, useState } from 'react';

export default function useKeyPress(key) {
    const [isEnterPressed, setIsEnterPressed] = useState(false);
    useEffect(() => {
        const checkKeyPress = (e) => {
            if (e.code !== key) return;
            if (e.type === 'keydown') {
                setIsEnterPressed(true);
            }
            if (e.type === 'keyup') {
                setIsEnterPressed(false);
            }
        };
        window.addEventListener('keydown', checkKeyPress);
        window.addEventListener('keyup', checkKeyPress);
        return () => {
            window.removeEventListener('keydown', checkKeyPress);
            window.removeEventListener('keyup', checkKeyPress);
        };
    }, []);

    return [key, isEnterPressed];
}