import { useEffect, useState } from 'react';

export default function useDate() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const updateDate = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(updateDate);
    }, [date]);
    return date;
}