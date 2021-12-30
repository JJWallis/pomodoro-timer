export type HandleToggle = () => void
export type UseToggle = (
   initialState?: boolean | undefined
) => [boolean, HandleToggle]
