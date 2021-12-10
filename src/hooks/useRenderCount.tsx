import { useRef } from 'react'

export const useRenderCount = () => {
   let render = useRef(0)
   console.log(render.current++)
}
