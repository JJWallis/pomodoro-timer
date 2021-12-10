import React, { FC, memo, useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import ModalSection from './ModalSection'
import RadioButton from './RadioButton'

const ModalFonts: FC = () => {
   const [selectedOption, setSelectedOption] = useState('ffNoto')
   const { updateFont } = useContext(ThemeContext)

   const produceRadioButtons = () => {
      const fonts = ['ffNoto', 'ffRoboto', 'ffRobotoMono']
      return fonts.map((font) => (
         <RadioButton
            key={font}
            value={font}
            defaultChecked={selectedOption === font}
            setSelectedOption={setSelectedOption}
            updateFont={updateFont}
            name={font}
         />
      ))
   }

   return <ModalSection heading="Font">{produceRadioButtons()}</ModalSection>
}

export default memo(ModalFonts)
