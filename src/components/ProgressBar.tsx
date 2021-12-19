import React, { FC, useEffect, useState } from 'react'
import { ProgressMeter } from '../containers/ProgressBar.styled'
import { useTimerContext } from '../hooks/useTimerContext'

const ProgressBar: FC = () => {
   const [progressWidth, setProgressWidth] = useState(0)
   const { timerLength } = useTimerContext()

   useEffect(() => {
      // when timer changes (prevTimerRef.current.timer) - reset progress bar to 0
      // unless pomodoro - dynamic math
      setProgressWidth((prev) => prev + 1)
      if (timerLength === 0) setProgressWidth(0)
   }, [timerLength])

   return <ProgressMeter progressAmount={progressWidth} />
}

export default ProgressBar
