import { useState } from 'react'

export type handleChange = () => void
type UseToggle = (initialState?: boolean | undefined) => [boolean, handleChange]

export const useToggle: UseToggle = (initialState?: boolean) => {
   const [isToggled, setIsToggled] = useState(initialState ?? false)

   const handleChange = () => setIsToggled((prevValue) => !prevValue)
   // setIsToggled((prevValue) => (newValue ? newValue : !prevValue))

   return [isToggled, handleChange]
}
