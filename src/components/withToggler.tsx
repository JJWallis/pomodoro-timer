import React, { useState, ComponentType } from 'react'

export function withToggler<T>(Component: ComponentType<T>) {
   return (hocProps: Omit<T, 'isToggled' | 'toggle'>) => {
      const [isToggled, setIsToggled] = useState(false)
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
