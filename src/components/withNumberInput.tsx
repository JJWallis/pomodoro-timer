import React, { ComponentType, useState } from 'react'

export function withNumberInput<T>(Component: ComponentType<T>) {
   return (props: Omit<T, 'state' | 'updateState'>) => {
      const [numberState, setNumberState] = useState(0)

      return (
         <Component
            {...(props as T)}
            state={numberState}
            updateState={setNumberState}
         />
      )
   }
}
