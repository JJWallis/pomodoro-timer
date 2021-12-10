import { useState, ChangeEvent } from 'react'

export function useToggle(initialState?: boolean) {
   const [toggled, setToggled] = useState(initialState ?? false)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setToggled((prev) => !prev)
   }

   // useReducer state in Modal Colours or custom hook

   return { toggled, handleChange }
}
