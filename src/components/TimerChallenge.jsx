import {useState} from "react";

const TimerChallenge = ({title, targetTime}) => {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const handleStart = () => {
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
        setTimerStarted(true)
    }

    const handleStop = () => {
      
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>Time expired!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
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
