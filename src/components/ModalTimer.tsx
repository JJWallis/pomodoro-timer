import React, { FC } from 'react'

interface Props {
   label: string
}

const ModalTimer: FC<Props> = ({ label }) => {
   return (
      <>
         <label htmlFor={label}>{label}</label>
         <input type="number" id={label} />
      </>
   )
}

export default ModalTimer
