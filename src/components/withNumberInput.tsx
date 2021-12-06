import React, { ComponentType, useState } from 'react'

const withNumberInput = (Component: ComponentType) => {
   return (props: any) => {
      const [numberState, setNumberState] = useState(0)

      return (
         <Component
            {...props}
            state={numberState}
            updateState={setNumberState}
         />
      )
   }
}
