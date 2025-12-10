import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [countToSet, setCountToSet] = useState(0)
  
  const increaseCount = () => {
    if (count >= 10) {
      alert("Value should not be more than 10!!!")
    }
    else {
      setCount(count + 1)
    }
  }
  const dereaseCount = () => {
    if (count <= 0) {
      alert("Value should not be less than 0!!!")
    }
    else {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>Let's Build Our First Project</h1>
      <div className='card'>
        <h1 className='bg-red-500 hover:bg-red-600 focus:outline-2 focus:outline-offset-2 focus:outline-white-500 active:bg-white-700 rounded-2xl'>
          Counter: {count}
        </h1>        
      </div>
      <div>
        <button 
          onClick={() => {increaseCount()}}
          style={{margin: '0 5px'}}
        >
          +1
        </button>

        <button 
          onClick={() => {dereaseCount()}}
          style={{margin: '0 5px'}}
        >
          -1
        </button>

        <button 
          onClick={() => setCount(0)}
          style={{margin: '0 5px'}}
        >
          Reset
        </button>
      </div>

      <div>
        <input 
          style={{
            width: '100px',
            border: '1px solid white',
            margin: '5px 5px 5px 5px',
            padding: '0.5em 1em',
            
          }} 
          value={countToSet}
          onChange={(e) => {setCountToSet(Number(e.target.value))}}
          type='text'
        />
        <button 
          style={{margin: '0 5px'}}
          onClick={() => {
            setCount(Number(countToSet))
            setCountToSet(0)
          }}
        >
          Set to {countToSet}
        </button>
      </div>
    </>
  )
}

export default App
