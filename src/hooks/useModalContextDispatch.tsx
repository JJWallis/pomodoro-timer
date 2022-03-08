import { useContext } from 'react'
import { ModalContextDispatch } from '../context/modalContext'

export function useModalContextDispatch() {
   const context = useContext(ModalContextDispatch)
   if (!context)
      throw new Error(
         'useModalContextDispatch must be used within a ModalContextProvider'
      )
   return context
}
