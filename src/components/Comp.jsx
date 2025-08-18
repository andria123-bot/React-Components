import { useState } from "react"

const Comp = () => {
  const [count, setCount] = useState(0)

  const plus = () => {
    setCount(prev => prev + 1)
  }

  const reset = () => {
    setCount(0)
  }

  const minus = () => {
    setCount(prev => prev - 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={plus}>+ 1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={minus}>- 1</button>
    </div>
  )
}

export default Comp
