import React from 'react'

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border hover:shadow-xl transition-all">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Card
