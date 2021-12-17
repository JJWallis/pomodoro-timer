import { useState, ChangeEvent } from 'react'

export function useToggle(initialState?: boolean) {
   const [isToggled, setIsToggled] = useState(initialState ?? false)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      setIsToggled((prev) => !prev)

   return [isToggled, handleChange]
}
