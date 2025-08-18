import { useEffect, useState } from "react"


const Warmup = () => {
  const [products, setProducts] = useState([]) 
  const [isLoading, setIsLoading] = useState(false)
  const [inputContext, setInputContext] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const fetchedData = async () => {
      try{
        setIsLoading(true)
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

  const inputHandler = (e) => {
    setInputContext(e.target.value)
  }

  useEffect(() => {
    fetchedData()
  }, [])

  const handleGuest = () => {
    setName("Guest")
    setEmail("Guest@Guest.com")
  }

  return(
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} /><br /><br />

      <h1>{!name ? "" : `Hello ${name}`}</h1>
      <h1>{!email ? "" : `Email: ${email}`}</h1>

      <button onClick={handleGuest}>Continue as Guest!</button>

      {}

      <h1>-------------------------------------------------------------------------</h1>

      {/* <input type="text" onChange={inputHandler} value={inputContext} /><br /><br />
      <h1>Hello, {inputContext}</h1>

      <button onClick={fetchedData}>Reload</button>

      {isLoading && <h1>RELOADING...</h1>}

      {products.map((product) => (
        <div key={product.id}>
          <h1>Name: {product.title}</h1>
          <h3>Description: {product.description}</h3>
          <h2>Price: {product.price}</h2>
        </div>
      ))} */}
    </>
  )
}

export default Warmup