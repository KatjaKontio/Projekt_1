import { useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import './../timer/Timercomponent.css'


const music = require("../../../shared/audio/sound.wav");

export const Timercomponent = (props: { expiryTimestamp: any, name: any }) => {
  const { expiryTimestamp } = props
 
 


 const audio = new Audio (music)



  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => { window.navigator.vibrate([300, 100, 300, 100, 300]);
    audio.play();
} 

});

  useEffect(() => {




  }, [])


  return (
    <div className="timerWrapper">
      <div className="timerNumber">
        <span> {hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className="buttonWrapper">
        <button className="buttonTimer" onClick={start}>Start</button>
        <button className="buttonTimer" onClick={pause}>Pause</button>
        <button className="buttonTimer" onClick={() => {
          // Restarts to 5 minutes timer
          const time: any = new Date();
          time.setSeconds(time.getSeconds() + 3600);
          restart(time)
        }}>Restart</button>

        <h1>
          {props.name}
        </h1>
      </div>
    </div>
  );


}

