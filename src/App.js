import React, { useEffect, useState } from 'react'
import { Form } from './components/Form'
import { Elements } from './components/Elements'

const App = () => {
  const url = 'https://7ys8lfh4mc.execute-api.eu-west-1.amazonaws.com/beta/coding-challenge/configuration'

  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const sortBy = (key) => {
    return (first, second) => (first[key] > second[key]) ? 1 : ((second[key] > first[key]) ? -1 : 0)
  }

  const fetchData = async () => {
    await fetch('url-data.json', 
      {
        method: 'GET',
        credentials: 'include',
        headers: { 
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then((result) => {
        setResult(result)
      })
  }

  useEffect(() => {
    fetchData()  
  }, [])


  useEffect(() => {
    if (result.data) {
      const sortedData = result.data.concat().sort(sortBy('order'))
      setResult(sortedData)
      setIsLoading(false)
    }
  }, [result])

  return (
    !isLoading &&
    <Form {...result} >
      { result.map(data => <Elements {...data} />) }
    </Form>
  )
}

export default App
