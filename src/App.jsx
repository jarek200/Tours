import { useState, useEffect } from 'react'
import { Loading, Tours, Tour } from './components'
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const removeTour = id => setTours(tours.filter(tour => tour.id !== id))

  useEffect(() => {
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => setTours(data))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  if (loading) return <Loading />
  console.log(tours)
  return (
    <main className='main'>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
