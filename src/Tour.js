import React, { useState } from 'react'

const Tour = ({ tour, RemoveTour, handleRefresh }) => {
  const [readmore, setReadmore] = useState(false)
  let btnText
  if (readmore) {
    btnText = 'Read Less'
  } else {
    btnText = 'Read More'
  }
  const readClick = () => {
    if (readmore) {
      setReadmore(false)
    } else {
      setReadmore(true)
    }
  }
  if (tour.length < 1) {
    return (
      <div className='container text-center'>
        <button className='btn btn-primary' onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    )
  }
  return (
    <>
      {/* tour one */}
      {tour.map((tour) => {
        const { id, image, info, name, price } = tour
        return (
          <div className='card mt-4 py-3' key={id}>
            <div className='card-header'>
              <img src={image} class='card-img-top' alt='' />
            </div>
            <div className='card-body'>
              <div className='group'>
                <h4 className='title'>{name}</h4>
                <p className='price'>${price}</p>
              </div>

              <p className='info'>
                {readmore ? info : `${info.substring(0, 100)}... `}
                <button className='none' onClick={readClick}>
                  {btnText}
                </button>
              </p>
              <div className='text-center'>
                <button
                  className='interest btn btn-outline-danger'
                  onClick={() => RemoveTour(id)}
                >
                  Not Interested
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Tour
