import React from 'react'
import "../style/ErrorPage.css"

const errorPage = () => {
  return (
    <div className='content'>
        <div className="content">
        <h1 className="error-heading">Oops! Something went wrong.</h1>
        <p className="error-description">We apologize for the inconvenience. Please try again later.</p>
      </div>
    </div>
  )
}

export default errorPage