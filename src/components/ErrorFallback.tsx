import React, { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'
import ErrorMsg from '../styles/ErrorMsg.styled'

const ErrorFallback: FC<FallbackProps> = ({ error }) => {
   return (
      <div role="alert">
         <ErrorMsg>
            {error.message || 'Something went wrong'} <br />
            Please reload and try again
         </ErrorMsg>
      </div>
   )
}

export default ErrorFallback
