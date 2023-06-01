import { useState, useEffect } from 'react';
import {Loading, Tours, Tour} from './components'
const url = 'https://course-api.com/react-tours-project';

const App = () => {
const [tours, setTours] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
  try {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setTours(data))
  }
  catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}, [])
console.log(tours)
if (loading) return <Loading />

  return <h2>Tours Starter</h2>;
};
export default App;
