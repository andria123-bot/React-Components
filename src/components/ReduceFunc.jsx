import { useState } from "react";

const ReduceFunc = () => {
  const [products, setProducts] = useState([])

  // const parts = [
  //   { id: 1, name: "Intel Core i7-12700K", description: "12-core high-performance CPU, perfect for gaming.", price: 1249, inStock: true },
  //   { id: 2, name: "NVIDIA GeForce RTX 4070", description: "High-end graphics card with ray tracing and AI features.", price: 2899, inStock: true },
  //   { id: 3, name: "Corsair Vengeance 16GB RAM", description: "2x8GB DDR4 3200MHz memory kit for fast multitasking.", price: 399, inStock: false },
  //   { id: 4, name: "Samsung 980 Pro 1TB SSD", description: "Ultra-fast NVMe SSD for quick boot and load times.", price: 599, inStock: true },
  //   { id: 5, name: "ASUS ROG Strix Z690 Motherboard", description: "Powerful motherboard with DDR5 and PCIe 5.0 support.", price: 899, inStock: false },
  //   { id: 6, name: "Cooler Master 750W PSU", description: "Modular power supply with 80+ Gold certification.", price: 299, inStock: true },
  //   { id: 7, name: "NZXT H510 Case", description: "Minimalist case with excellent airflow and cable management.", price: 249, inStock: false },
  // ];

  // const sumOfParts = parts.reduce((acc, item) => acc + item.price, 0)

  const handleFetch = (e) => {
    e.preventDefault()
    const items = fetch("https://fakestoreapi.com/products")
          .then((el) => el.json())
          .then(data => setProducts(data))
          .catch(err => console.log("Error: ", err))
  }

  const sumItems = products.reduce((acc, item) => acc + item.price, 0);

  return(
    <>
      <form onSubmit={handleFetch}>
        <button>Submit</button>
      </form>
      <div>
        {products.map((el) => (
          <div key={el.id}>
            <h3>Title: {el.title}</h3>
            <p>price: {el.price}</p>
            <img src={el.image} alt={el.title} width={100} />
          </div>
        ))}

        {products.length > 0 && (
          <h2>Total Price: {sumItems.toFixed(2)}</h2>
        )}
      </div>
    </>
  )
}

export default ReduceFunc