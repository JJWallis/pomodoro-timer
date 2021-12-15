import { useContext } from 'react'
import { TimerContext } from '../context/timerContext'

export function useTimerContext() {
   const context = useContext(TimerContext)
   if (!context)
      throw new Error('useAppContext must be used within a AppContextProvider')
   return context
}
