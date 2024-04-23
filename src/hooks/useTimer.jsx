import { useEffect, useState } from "react";

const useTimer = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const formattedHours = hours % 12 || 12;

            setCurrentTime(`${formattedHours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`);
        }, 0);
       
        return () => clearInterval(intervalId);
    }, []);

    return {currentTime};
}

export default useTimer;