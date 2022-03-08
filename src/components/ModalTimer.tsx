import React, { FC } from 'react'
import { useModalContextDispatch } from '../hooks/useModalContextDispatch'
import { Input } from '../styles/Input.styled'
import { InputContainer } from '../containers/InputContainer.styled'
import { NumberInputLabel } from '../styles/Label.styled'
import { Arrow } from '../styles/Icon.styled'
import { GridItemModal } from '../containers/GridContainerModal.styled'

interface Props {
   label: string
   val: number
}

const ModalTimer: FC<Props> = ({ label, val }) => {
   const dispatch = useModalContextDispatch()

   return (
      <GridItemModal>
         <NumberInputLabel htmlFor={label}>
            {label.replace('b', ' b')}
         </NumberInputLabel>
         <InputContainer>
            <Input
               readOnly
               type="number"
               id={label}
               value={val}
               onChange={(e) =>
                  dispatch({
                     type: 'UPDATE_TIMER',
                     timer: label,
                     amount: Number(e.target.value),
                  })
               }
            />
            <Arrow
               width="14"
               height="7"
               focusable="true"
               aria-label="Increase timer amount by one minute"
               onClick={() =>
                  dispatch({ type: 'INCREMENT_TIMER', timer: label })
               }
            >
               <path d="M1 6l6-4 6 4" />
            </Arrow>
            <Arrow
               downwards
               width="14"
               height="7"
               focusable="true"
               aria-label="Descrease timer amount by one minute"
               onClick={() =>
                  dispatch({ type: 'DECREMENT_TIMER', timer: label })
               }
            >
               <path d="M1 1l6 4 6-4" />
            </Arrow>
         </InputContainer>
      </GridItemModal>
   )
}

export default ModalTimer
