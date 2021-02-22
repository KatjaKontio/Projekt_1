import React from 'react'
import { Timercomponent } from './timer/Timercomponent'
import { useState } from 'react'

export const TimerPage = () => {
  const expiryTimestamp:any = new Date()
  const [state, setState] = useState("")
 
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 5); // 10 minutes timer
  return (
    <div>
      
      <Timercomponent name="Katja" expiryTimestamp={expiryTimestamp}></Timercomponent>
    <h1>{state}</h1>
    <input onChange={(event) => setState(event.target.value)}/>
    </div>
  )
}
