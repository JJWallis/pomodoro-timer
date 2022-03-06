import React, { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
   return (
      <div>
         <p>Whoops,</p>
         <pre>{error.message || 'something went wrong'}</pre>
         <button onClick={resetErrorBoundary}>Please try again</button>
      </div>
   )
}

export default ErrorFallback
