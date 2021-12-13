import { useState, useEffect } from 'react'

function getSavedValue(key: string, initialValue: string | (() => string)) {
   const savedValue = localStorage.getItem(key)
   if (savedValue) return JSON.parse(savedValue)
   else if (initialValue instanceof Function) return initialValue()
   else return initialValue
}

export function useLocalStorage(key: string, initialValue: string) {
   const [value, setValue] = useState(() => getSavedValue(key, initialValue))

   useEffect(
      () => localStorage.setItem(key, JSON.stringify(value)),
      [value, key]
   )

   return [value, setValue]
}
