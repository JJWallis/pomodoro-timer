import { useState, useEffect } from 'react'

type InitialValue = string | number | (() => string)

function getSavedValue(key: string, initialValue: InitialValue) {
   const savedValue = localStorage.getItem(key)
   if (savedValue) return JSON.parse(savedValue)
   else if (initialValue instanceof Function) return initialValue()
   else return initialValue
}

export function useLocalStorage(key: string, initialValue: InitialValue) {
   const [value, setValue] = useState(() => getSavedValue(key, initialValue))

   useEffect(
      () => localStorage.setItem(key, JSON.stringify(value)),
      [value, key]
   )

   return [value, setValue]
}
