import { useMemo, useState } from "react"

const UseMemoComp = () => {
  const [input, setInput] = useState("")
  const numbers = [1, 2, 3, 4, 5]
  
  // const numbers = useMemo(() => {
  //   return [1, 2, 3, 4, 5]
  // }, [])

  const sum = useMemo(() => {
    console.log("Calculating Sum.....")
    return numbers.reduce((acc, num) => acc + num, 0)
  },  [numbers])

  return(
    <>
      <p>Sum of numbers: {sum}</p>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Anything" />
    </>
  )
}

export default UseMemoComp