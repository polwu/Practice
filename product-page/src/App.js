import "./App.css";
import React from "react";
import Product from "./Product";
import data from "./data.json"; //TODO: should use fetch API

function App() {
  return (
    <div className="App">
      <div className="Product-list">
        {data.products?.map((product, key) => { 
          console.log("(product.name, product.images, key)=",product.name, product.images, key);
          return (
          <Product
            key={product.code}
            code={product.code}
            name={product.name}
            image={product.images}
            description={product.description}
            price={product.price}
          /> );
        })}
      </div>
    </div>
  );
}

export default App;
