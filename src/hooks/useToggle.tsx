import React, { useState, ChangeEvent } from 'react'

export function useToggle(initialState?: boolean) {
   const [toggled, setToggled] = useState(initialState ?? false)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      setToggled(e.target.checked)

   return { toggled, handleChange }
}
