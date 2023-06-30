import React from 'react'
import './error.css'
const ErrorPage = () => {
    return(
        <div className="error-container">
        <div className="error-content">
          <h1 className="error-heading">Oops!</h1>
          <p className="error-message">
            We apologize, but something went wrong.
          </p>
          <p className="error-description">
            Please try refreshing the page or come back later.
          </p>
        </div>
      </div>
    )
}

export default ErrorPage