import React from 'react'

const ReachOut = () => {
  return (
    <div className="reachout-container">
      <h2 className="reachout-title">Thank You for Your Order!</h2>
      <div className="reachout-content">
        <p className="reachout-message">Your order has been received successfully.</p>
        <p className="reachout-info">For special offers and inquiries, please contact us:</p>
        <div className="reachout-email">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <a href="mailto:vankadarajeevanguptha@gmail.com" className="reachout-link">
            vankadarajeevanguptha@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default ReachOut
