import { useState } from 'react';

export default function useSwitch(initialValue = false) {
    const [state, setState] = useState(initialValue);

    function toggle() {
        setState(curr => !curr);
    }

    return [state, toggle];
}