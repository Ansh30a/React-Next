import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-600 dark:text-sky-400 border-2 p-4 text-center rounded-xl'>Learn to integrate tailwind</h1>
    </>
  )
}

export default App
