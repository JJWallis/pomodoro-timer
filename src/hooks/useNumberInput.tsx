import { useState } from 'react'

export function useNumberInput(initialState: number) {
   const [state, setState] = useState(() => initialState ?? 0)

   const updateState = (newState: string) => {
      const parsed = Number(newState)
      if (!isFinite(parsed)) return
      setState(parsed)
   }

   return [state, updateState]
}
