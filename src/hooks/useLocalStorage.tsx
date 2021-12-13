import { useState } from 'react'

function getSavedValue(key: string, initialValue: string): string | undefined {
   const savedValue = localStorage.getItem(key)
   return savedValue ? JSON.parse(savedValue) : initialValue
}

export function useLocalStorage(key: string, initialValue: string) {
   const [value, setValue] = useState(initialValue)
   const savedValue = getSavedValue(key, initialValue)

   return [value, setValue]
}
