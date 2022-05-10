import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(0)

  const handleRating = (rate: Number) => {
    setRating(rate)
  }
  function sumar(params){
    setRating(rating + 20)
    if (rating >= 100){
      setRating (rating)
    }
}
function restar(params){
    if(rating > 1){
        setRating(rating - 20)
    }
}

  return (
    <div className='App'>
      <button onClick={restar}>-</button>
      <Rating onClick={handleRating} ratingValue={rating} />
        <h1>accountant: {rating}</h1>
          <button onClick={sumar}>+</button>
    </div>
  )
}