export type ModalContextData = {
   state: Data
   updateState: (timer: string, newState: number) => void
   incremenet: (timer: string) => void
   decremement: (timer: string) => void
}

export type ModalContextProvider = <T>(
   Component: React.ComponentType<T>
) => React.ComponentType<T>

export type ModalStateKeys = keyof Data

export interface Data {
   pomodoro: number
   shortbreak: number
   longbreak: number
}
