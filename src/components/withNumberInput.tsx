import React, { ComponentType, useState } from 'react'

type Options = {
   formState: string | number | boolean
}

export function withNumberInput<T>(
   Component: ComponentType<T>,
   { formState }: Options
) {
   return (props: Omit<T, 'state' | 'updateState'>) => {
      const [state, setState] = useState(formState)
      const updateState = (newValue: string) => setState(newValue)

      return (
         <Component {...(props as T)} state={state} updateState={updateState} />
      )
   }
}
