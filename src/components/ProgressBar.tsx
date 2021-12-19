import React, { FC, useEffect, useState } from 'react'
import { ProgressMeter } from '../containers/ProgressBar.styled'
import { useTimerContext } from '../hooks/useTimerContext'

const ProgressBar: FC = () => {
   const [progressWidth, setProgressWidth] = useState(50)
   const { timerLength } = useTimerContext()

   useEffect(() => {
      setProgressWidth((prev) => prev + 1)
      if (timerLength === 0) setProgressWidth(0)
   }, [timerLength])

   return <ProgressMeter progressAmount={progressWidth} />
}

export default ProgressBar
