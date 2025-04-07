import { useState, useMemo } from 'react';

function App() {
  const [name, setName] = useState("")

  const greetResult = useMemo(() => {
    return "Hello " + name
  }, [name])

  const handleSubmit = (e) => {
    e.preventDefault()
    setName(e.target.name.value)
  }

  console.log(greetResult)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" required />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
