import React, {
   ComponentType,
   createContext,
   useContext,
   useState,
} from 'react'

interface Data {
   pomodoro: string
   shortBreak: string
   longBreak: string
}

type ModalContextData = {
   state: Data
   setState: React.Dispatch<React.SetStateAction<Data>>
}

type TestProvider = <T>(Component: ComponentType<T>) => ComponentType<T>

export const ModalContext = createContext<ModalContextData | null>(null)

export const withUserTest: TestProvider = (Component) => (props) => {
   const [state, setState] = useState<Data>({
      pomodoro: '',
      shortBreak: '',
      longBreak: '',
   })

   // update state method

   return (
      <ModalContext.Provider value={{ state, setState }}>
         <Component {...props} />
      </ModalContext.Provider>
   )
}

export function useUserTest() {
   const context = useContext(ModalContext)
   if (!context)
      throw new Error('useUserTest must be used within a UserTestProvider')
   return context
}
