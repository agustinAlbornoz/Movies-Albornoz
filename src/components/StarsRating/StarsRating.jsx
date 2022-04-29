import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(0)


  const handleRating = (rate: number) => {
    setRating(rate)

  }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating} />
    </div>
  )
}