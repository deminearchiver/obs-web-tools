import React from 'react'
import BorderRenderer from './BorderRenderer'

const Border = () => {
  return (
    <div className="border-page">
      


      <BorderRenderer width={500} height={400} borderRadius={30} strokeWidth={10} className="preview" />

    </div>
  )
}

export default Border