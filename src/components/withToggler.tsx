import React, { useState, ComponentType } from 'react'

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
            {...(hocProps as T)}
         />
      )
   }
}
