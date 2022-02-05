import { useState } from 'react'
import { UseToggle } from './useToggle.interface'

export const useToggle: UseToggle = (initialState?: boolean) => {
   const [isToggled, setIsToggled] = useState(initialState ?? false)

   const handleChange = () => setIsToggled((prevValue) => !prevValue)

   return [isToggled, handleChange]
}
