import React, { ComponentType, useState } from 'react'

type Options = {
   defaultState: string | number | boolean
}

export function withNumberInput<T>(
   Component: ComponentType<T>,
   { defaultState }: Options
) {
   return (props: Omit<T, 'state' | 'updateState'>) => {
      const [state, setState] = useState(defaultState)
      const updateState = (newState: Options['defaultState']) =>
         setState(newState)

      return (
         <Component {...(props as T)} state={state} updateState={updateState} />
      )
   }
}
