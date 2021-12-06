import React, { useState, ComponentType } from 'react'

export type toggle = () => void
export type isToggled = boolean
type options = {
   initialState: boolean
}

export function withToggler<T>(
   Component: ComponentType<T>,
   { initialState }: options
) {
   return (hocProps: Omit<T, 'isToggled' | 'toggle'>) => {
      const [isToggled, setIsToggled] = useState(initialState)
      const toggle = () => setIsToggled(!isToggled)

      return (
         <Component
            isToggled={isToggled}
            toggle={toggle}
            initialState={initialState}
            {...(hocProps as T)}
         />
      )
   }
}
