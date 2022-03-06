import React, { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'
import { ErrorReset } from '../styles/Button.styled'
import ErrorMsg from '../styles/ErrorMsg.styled'

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
   return (
      <div role="alert">
         <ErrorMsg>
            Something went wrong: <br />
            {error.message}
         </ErrorMsg>
         <ErrorReset onClick={resetErrorBoundary}>Try again</ErrorReset>
      </div>
   )
}

export default ErrorFallback
