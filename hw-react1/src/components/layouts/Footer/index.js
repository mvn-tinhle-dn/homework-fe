import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <p>{process.env.REACT_APP_API_TEST}</p>
    </div>
  )
}
