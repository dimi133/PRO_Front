import Products from "./Products";

function App() {
  const products = [
    {id: 1, name: 'Macbook Air', price: 1500},
    {id: 2, name: 'Samsung s23 Ultra', price: 1300},
    {id: 3, name: 'Sony WH-1000xm4', price: 300},
    {id: 4, name: 'Monitor', price: 150},
    {id: 5, name: 'Printer', price: 100}
  ]
  return (
    <div>
      {
      products.map(products => <Products key={products.id} {...products} />)
      }
    </div>
  );
}

export default App;
