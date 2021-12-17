import { useState } from 'react'

export type handleChange = () => void

export function useToggle(initialState?: boolean) {
   const [isToggled, setIsToggled] = useState(initialState ?? false)

   const handleChange = () => setIsToggled((prev) => !prev)

   return { isToggled, handleChange }
}
