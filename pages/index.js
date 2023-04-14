import { useState } from "react"

export default function Home() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Counter App</h1>
            <div>
              <h2>{count}</h2>
              <div className="button-row">
              <button 
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
              <button 
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
              >
                Decrement
              </button>
              <button 
                onClick={() => setCount(0)}
                disabled={count === 0}
              >
                Reset
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
