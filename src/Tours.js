import React, { useState, useEffect } from 'react'
import Tour from './Tour'
import Loading from './Loading'
let url = 'https://course-api.com/react-tours-project'
const Tours = () => {
  const [loading, SetLoading] = useState(true)
  const [tours, setTours] = useState([])
  const RemoveTour = (id) => {
    const remove = tours.filter((tour) => tour.id !== id)
    setTours(remove)
  }
  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      SetLoading(false)
      setTours(data)
      console.log(data)
    } catch (error) {
      SetLoading(false)
      console.log(error)
    }
  }
  const handleRefresh = () => {
    fetchTours()
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (loading) {
    return <Loading />
  }
  // if (tours.length < 1) {
  //   return <h1>No Tour Available</h1>
  // }

  return (
    <>
      <section className='container'>
        <div className='row'>
          <div className='col-md-5 mx-auto mt-4'>
            <h1 className='mb-0 text-center text-light'>
              {tours.length < 1 ? `No Tour Available ` : 'Available Tours'}
            </h1>
            <center>
              <div className='line mb-5'></div>
            </center>
            <Tour
              tour={tours}
              RemoveTour={RemoveTour}
              handleRefresh={handleRefresh}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Tours
