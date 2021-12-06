import React, { ComponentType, useState } from 'react'

export function withNumberInput<T>(Component: ComponentType<T>) {
   return (props: Omit<T, 'state' | 'updateState'>) => {
      const [numberState, setNumberState] = useState(0)
      const updateState = (newNumber: string) =>
         setNumberState(Number(newNumber))

      return (
         <Component
            {...(props as T)}
            state={numberState}
            updateState={updateState}
         />
      )
   }
}

// refactor - dynamic form state as radio buttons for 3 themes
