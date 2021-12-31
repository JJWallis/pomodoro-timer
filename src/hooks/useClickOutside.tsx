import React, { useRef, useEffect } from 'react'

type UseClickOutside = <T>(
   elRef: React.RefObject<HTMLElement>,
   callback: T
) => void

export const useCLickOutside: UseClickOutside = (elRef, callback) => {
   const callbackRef = useRef<typeof callback>()
   callbackRef.current = callback

   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (
            !elRef?.current?.contains(e.target as Node) &&
            callbackRef.current instanceof Function
         )
            callbackRef.current(e)
      }

      document.addEventListener('click', handleClickOutside, true)
      return () => {
         document.removeEventListener('click', handleClickOutside, true)
      }
   }, [elRef, callbackRef])
}

// instead of referencing callback in useEffect, we can use a ref to reference it
// else infinite loop | ref never changes (only instigated on original hook call)
// but the value it holds will change (dynamic)
