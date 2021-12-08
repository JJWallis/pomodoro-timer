import { useRef } from 'react'

export const useRender = () => {
   let render = useRef(0)
   console.log(render.current++)
}
