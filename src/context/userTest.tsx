import React, {
   ComponentType,
   createContext,
   FC,
   useContext,
   useState,
} from 'react'

interface Props {
   test: string
}

export const Context = createContext<Props | null>(null)

type TestProvider = <T>(Component: ComponentType<T>) => FC<T>

export const withUserTest: TestProvider = (Component) => (props) => {
   const [test] = useState<{ test: string }>({ test: 'test' })
   return (
      <Context.Provider value={test}>
         <Component {...props} />
      </Context.Provider>
   )
}

export function useUserTest() {
   const context = useContext(Context)
   if (!context)
      throw new Error('useUserTest must be used within a UserTestProvider')
   return context
}
