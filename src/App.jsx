import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [users, getUsers] = useState([])


  const fetchUserData = () => {
    fetch("http://localhost:8080/user/2")
      .then(response => {
        return response.json()
      })
      .then(data => {
        getUsers(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])



  return (

    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className='card'>
        <div>
          {JSON.stringify(users)}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
