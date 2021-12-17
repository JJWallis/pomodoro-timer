export type ModalContextData = {
   state: Data
   updateState: (timer: string, newState: number) => void
}

export type ModalContextProvider = <T>(
   Component: React.ComponentType<T>
) => React.ComponentType<T>

export interface Data {
   pomodoro: number
   shortbreak: number
   longbreak: number
}
