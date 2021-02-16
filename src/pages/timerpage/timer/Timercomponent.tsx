import { useEffect } from 'react'
import { useTimer } from 'react-timer-hook'
import './../timer/Timercomponent.css'
/*import Sound from './../../../shared/sound/sound.wav'*/


export const Timercomponent = (props: { expiryTimestamp: any }) => {
  const { expiryTimestamp } = props
 /*const audio = new Audio (Sound)*/

 const x = document.getElementById("")


  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => { window.navigator.vibrate([300, 100, 300, 100, 300]);
   /* audio.play();*/
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
          time.setSeconds(time.getSeconds() + 5);
          restart(time)
        }}>Restart</button>
      </div>
    </div>
  );


}

