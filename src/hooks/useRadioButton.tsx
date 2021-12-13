import { useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import RadioButton from '../components/RadioButton'

interface Options {
   initialState: string
}

export function useRadioButton({ initialState }: Options) {
   const [selectedOption, setSelectedOption] = useState(initialState)
}
