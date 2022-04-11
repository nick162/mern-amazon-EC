import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href="/">amazon</a>
      </header>
      <main>
        <h1>Feature Products</h1>
        <div className="products">
          {data.Products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p><strong>$</strong>{product.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
