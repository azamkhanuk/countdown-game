import {useState, useRef} from "react";

const TimerChallenge = ({title, targetTime}) => {
    const timer = useRef()
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        timer = setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
        setTimerStarted(true)
    }

    const handleStop = () => {
      clearTimeout(timer)
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Time expired!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className="">
                {timerStarted ? 'Time is running...' : 'Time is inactive'}
            </p>
        </section>
    );

}
export default TimerChallenge;
