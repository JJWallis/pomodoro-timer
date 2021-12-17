import { useState } from 'react'

export type handleChange = () => void

type UseToggle = (initialState?: boolean | undefined) => [boolean, handleChange]

export const useToggle: UseToggle = (initialState?: boolean) => {
   const [isToggled, setIsToggled] = useState(initialState ?? false)

   const handleChange = () => setIsToggled((prev) => !prev)

   return [isToggled, handleChange]
}
