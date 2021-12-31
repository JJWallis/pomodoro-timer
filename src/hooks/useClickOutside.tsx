import React, { useRef, useEffect } from 'react'

type UseClickOutside = <T>(
   elRef: React.MutableRefObject<any>,
   callback: T
) => void

export const useCLickOutside: UseClickOutside = (elRef, callback) => {
   const callbackRef = useRef(callback)

   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (
            elRef?.current?.contains(e.target as Node) &&
            callbackRef.current &&
            callbackRef.current instanceof Function
         ) {
            callbackRef.current(e)
         }
      }

      document.addEventListener('click', handleClickOutside, true)
      return () => {
         document.removeEventListener('click', handleClickOutside, true)
      }
   }, [elRef, callback])
}
