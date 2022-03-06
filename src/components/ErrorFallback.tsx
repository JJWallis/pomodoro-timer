import React, { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
   return <div></div>
}

export default ErrorFallback
