import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(amt: number) {
    setCount((p) => (p += amt))
  }

  return (
    <div className='App'>
      <>
        <h1>Hello Counter</h1>
        <div className='wrapper'>
          <button onClick={() => handleClick(-1)}>
            <span className='material-icons'>remove</span>
          </button>
          <p>{count}</p>
          <button onClick={() => handleClick(1)}>
            <span className='material-icons'>add</span>
          </button>
        </div>
      </>
    </div>
  )
}

export default App
