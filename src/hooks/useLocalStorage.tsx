import { useState } from 'react'

function getSavedValue(key: string, initialValue: string) {}

export function useLocalStorage(key: string, initialValue: string) {
   const [value, setValue] = useState(initialValue)

   return [value, setValue]
}
