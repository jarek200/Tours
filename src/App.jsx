import { useState, useEffect } from 'react'
import { Loading, Tours, Tour } from './components'
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const removeTour = id => setTours(tours.filter(tour => tour.id !== id))

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) return <Loading />

  return (
    <main className='main'>
      <Tours tours={tours} removeTour={removeTour} />
      {tours.length === 0 && (
        <button className='btn btn-block ' onClick={() => fetchTours()}>
          Get Tours
        </button>
      )}
    </main>
  )
}
export default App
