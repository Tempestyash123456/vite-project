// frontend/src/App.jsx 
import { useState, useEffect } from 'react'
import Select from 'react-select'
import JsonInput from './components/JsonInput'
import ResponseDisplay from './components/ResponseDisplay'
import './App.css'

const ROLL_NUMBER = "22BDO10019" 

function App() {
  const [response, setResponse] = useState(null)
  const [selectedFields, setSelectedFields] = useState([])

  useEffect(() => {
    document.title = ROLL_NUMBER
  }, [])

  const options = [
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'numbers', label: 'Numbers' },
    { value: 'highest_alphabet', label: 'Highest alphabet' }
  ]

  const handleSubmit = async (data) => {
    try {
      const res = await fetch('http://localhost:3000/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      const responseData = await res.json()
      setResponse(responseData)
    } catch (err) {
      alert('Error calling API')
    }
  }

  return (
    <div className="container">
      <h1>BFHL API Test</h1>
      <JsonInput onSubmit={handleSubmit} />
      
      {response && (
        <Select
          isMulti
          options={options}
          onChange={setSelectedFields}
          placeholder="Select fields to display"
          className="dropdown"
        />
      )}

      <ResponseDisplay 
        response={response} 
        selectedFields={selectedFields}
      />
    </div>
  )
}

export default App