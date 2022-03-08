export type WithModalContext = <T>(
   Component: React.ComponentType<T>
) => React.ComponentType<T>

export type ModalStateKeys = keyof Data

export type ModalActions =
   | {
        type: 'UPDATE_TIMER'
        timer: string
        amount: number
     }
   | {
        type: 'INCREMENT_TIMER'
        timer: string
     }
   | {
        type: 'DECREMENT_TIMER'
        timer: string
     }

export interface Data {
   pomodoro: number
   shortbreak: number
   longbreak: number
}
