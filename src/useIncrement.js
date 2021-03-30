import {useEffect} from 'react';

const useIncrement = (state) => {
    useEffect(() => {
        document.title = state === 0 ? "Chats" : `Chats(${state})`;
    }, [state]);
}

export default useIncrement;
