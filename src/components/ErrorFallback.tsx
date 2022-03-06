import React, { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'
import ErrorMsg from '../styles/ErrorMsg.styled'

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
   return (
      <div role="alert">
         <ErrorMsg>
            Something went wrong: <br />
            {error.message}
         </ErrorMsg>
         <button onClick={resetErrorBoundary}>Try again</button>
      </div>
   )
}

export default ErrorFallback
