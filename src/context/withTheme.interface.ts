export type Update = ((newTheme: string) => void) | ((newFont: string) => void)
export interface CurrentTheme {
   identifier: string
   accent?: string
   family?: string
}
