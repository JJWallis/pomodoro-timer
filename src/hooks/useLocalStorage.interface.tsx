export type InitialValue =
   | { pomodoro: number; shortbreak: number; longbreak: number }
   | { accent: string }
   | {
        identifier: string
        family: string
     }
   | (() => string)
