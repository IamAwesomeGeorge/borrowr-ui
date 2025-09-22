import { useState } from 'react'
import BrLogo from '/Br.svg'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={BrLogo} className="logo" alt="Borrowr logo" />
      </div>
      <h1>Borrowr</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Coming soon: A platform to borrow books!
        </p>
      </div>
    </>
  )
}

export default App
