import React, { FC } from 'react'
import ModalSection from './ModalSection'

const ModalColors: FC = () => {
   return (
      <ModalSection heading="Color">
         <input type="radio" name="theme-toggle" />
         <input type="radio" name="theme-toggle" />
         <input type="radio" name="theme-toggle" />
      </ModalSection>
   )
}

export default ModalColors
