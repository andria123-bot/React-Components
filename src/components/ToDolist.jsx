import { useState } from "react"

const Todolist = () => {
  const [value, setValue] = useState("")
  const [state, setState] = useState([])
  const [kote, setKote] = useState(false)
  const [proKote, setProKote] = useState('')

  function AddTodolist(){
    if(value){
      setState([...state, value])
      setValue('')
    }
  }

  function Remove(index){
    setState(e => e.filter((_, indexx) => indexx !== index))
  }

  function Edit(el){
    setKote(!kote)
    setState(s => s.filter(ell => el === ell ? proKote : ell))
  }

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={AddTodolist}>Submit</button>

      <ol>
        {state.map((el, index) => (
          <li key={index} className="m-3 p-3 bg-gray-300">
            {!kote ? <h1>{el}</h1> : <input value={proKote} onChange={(e) => setProKote(e.target.value)} />}
            <button onClick={() => Edit(el)}>knopka</button>
            <button onClick={() => Remove(index)}>batoni</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Todolist
