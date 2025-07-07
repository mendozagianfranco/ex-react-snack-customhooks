import { useEffect, useState } from 'react';

export default function useCustomPointer(component) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition(curr => ({
                ...curr,
                x: e.clientX,
                y: e.clientY
            }));
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: position.y,
            left: position.x,
            transform: 'translate(-50%,-50%)',
            cursor: 'none'
        }}>
            {component}
        </div>
    );
}