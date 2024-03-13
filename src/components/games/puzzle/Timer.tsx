import {useState, useRef, useEffect} from 'react';

interface Props{
    isStarted: boolean;
    checkWinner: boolean | undefined;
    stoppedTime: string;
    setStoppedTime: (time: string) => void;
    highestScore: string;
    setHighestScore: (time: string) => void;
}

const Timer = ({isStarted, checkWinner,stoppedTime, setStoppedTime, highestScore, setHighestScore} : Props) => {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<number>();

    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const milliseconds = Math.floor((ms % 1000)/10);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const start = () => {
            if (!isRunning) {
                const startTime = Date.now() - time;
                intervalRef.current = window.setInterval(() => {
                    setTime(Date.now() - startTime);
                }, 10);
                setIsRunning(true);
            }
        };

        const stop = () => {
            setIsRunning(false);
            clearInterval(intervalRef.current);
            setStoppedTime(formatTime(time));
            if (parseInt(highestScore.replace(/:/g, '')) === 0 ||
                (parseInt(stoppedTime.replace(/:/g, '')) < parseInt(highestScore.replace(/:/g, '')))) {
                setHighestScore(stoppedTime);
            }
        };

        const reset = () => {
            clearInterval(intervalRef.current);
            setTime(0);
            setIsRunning(false);
        };

        if (isStarted && !checkWinner) {
            start();
        } else if (isStarted && checkWinner) {
            stop();
        } else {
            reset();
        }
    }, [isStarted, checkWinner, isRunning, time, setStoppedTime, stoppedTime, highestScore, setHighestScore]);

    return (
        <div>
            <h1>{formatTime(time)}</h1>
        </div>
    );
};

export default Timer;
