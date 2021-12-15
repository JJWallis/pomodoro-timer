import { useContext } from 'react'
import { ModalContext } from '../context/modalContext'

export function useUserTest() {
   const context = useContext(ModalContext)
   if (!context)
      throw new Error(
         'useModalContext must be used within a useModalContextProivder'
      )
   return context
}
