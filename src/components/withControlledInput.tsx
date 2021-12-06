import React, { ComponentType, useState } from 'react'

export function withNumberInput<T>(Component: ComponentType<T>) {
   return (props: Omit<T, 'state' | 'updateState'>) => {
      const [state, setState] = useState(0)
      const updateState = (newState: string) => {
         if (newState) setState(Number(newState))
      }

      return (
         <Component {...(props as T)} state={state} updateState={updateState} />
      )
   }
}
