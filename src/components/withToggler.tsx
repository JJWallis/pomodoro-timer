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

// We’re setting our parameter type to ComponentType<T>. Now, within the scope of this function, T denotes the props type of the target component.
// We’re also setting the hocProps type to T to enforce that our HOC component receives the same props as the target.
// Generics = TypeScript can dynamically calculate all of the props our original component accepts and enforce the same restriction for the HOC
// Now our HOC accepts props of type hocProps: Omit<T, "count" | "startTimer" | "endTimer">. Using Omit, we created a new type that expects all of the same props T except for count, startTimer, and endTimer.
// Since Omit creates a new type, we had to use a workaround {...(hocProps as T)} to let TypeScript know that we expect the hocProps to be almost identical to T except for the props we omitted.
