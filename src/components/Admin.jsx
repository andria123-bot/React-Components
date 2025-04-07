import useLocalStorage from "../hooks/useLocalStorage"

const Admin = () => {
  const {products} = useLocalStorage()
  const handleSubmit = useForm()
  
  return(
    <main>
      <section>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Product Name" required />
          <input type="number" name="price" placeholder="Product Price" required />
          <button>Add Product</button>
        </form>
      </section>
      <section>
        <h2>Products Table</h2>
        {products ? (
          <table style={{border: 1}}>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
            </tr>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </table>
        ) : (
          <h3>No products found</h3>
        )}
      </section>
    </main>
  )
}