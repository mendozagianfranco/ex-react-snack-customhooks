import { useEffect, useState } from 'react';

export default function useKeyPress(key) {
    const [isPressed, setIsPressed] = useState(false);
    useEffect(() => {
        const checkKeyPress = (e) => {
            if (e.code !== key) return;
            if (e.type === 'keydown') {
                setIsPressed(true);
            }
            if (e.type === 'keyup') {
                setIsressed(false);
            }
        };
        window.addEventListener('keydown', checkKeyPress);
        window.addEventListener('keyup', checkKeyPress);
        return () => {
            window.removeEventListener('keydown', checkKeyPress);
            window.removeEventListener('keyup', checkKeyPress);
        };
    }, []);

    return [key, isPressed];
}