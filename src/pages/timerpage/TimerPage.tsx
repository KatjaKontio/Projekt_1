import React from 'react'
import { Timercomponent } from './timer/Timercomponent'

export const TimerPage = () => {
  const expiryTimestamp:any = new Date()
 
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5); // 10 minutes timer
  return (
    <div>
      <Timercomponent expiryTimestamp={expiryTimestamp}></Timercomponent>
    </div>
  )
}
