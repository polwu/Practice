import "./App.css";
import React, { useCallback, useState } from "react";
import Product from "./Product";
import Details from "./Details";
import data from "./data.json"; //TODO: should use fetch API

function App() {
  const [detailsToShow, setDetailsToShow] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  
  const returnToHomePage = useCallback( 
    () => setDetailsToShow(null), 
    []
  );
  const showDetails = useCallback(
    productDetails => setDetailsToShow(productDetails),
    []
  ); 
  const addProductToSelectedProducts = useCallback(
    product => setSelectedProducts([...selectedProducts, product]),
    [selectedProducts]
  );
  const removeProductFromSelectedProducts = useCallback(
    product => setSelectedProducts(selectedProducts.filter(p => p !== product)),
    [selectedProducts]
  )
  const removeAllProductFromSelectedProducts = useCallback(
    () => setSelectedProducts([]),
    []
  );

  return (
    <div className="App">
    {
      detailsToShow ?
        <Details
          price={detailsToShow.price}
          imageUrl={detailsToShow.imageUrl}
          description={detailsToShow.description}
          status={detailsToShow.status}
          code={detailsToShow.code}
          name={detailsToShow.name}
          returnToHomePage={returnToHomePage}
        />:
      <div className="Product-list-container">
      <div className="Selected-list-container">
        <div className="Selected-list">
          {"Selected: " + selectedProducts.join(", ")}
        </div>
        <div className="Button-container">
          <button className="Clear-button" onClick={() => removeAllProductFromSelectedProducts()}>Clear</button>
        </div>
      </div>
      <div className="Product-list">
        {data.products?.map((product, key) => { 
          console.log("(product.name, product.images, key)=",product.name, product.images, key);
          return (
          <Product
            isSelected={selectedProducts.some(p => p === product.code)}
            selectProduct={addProductToSelectedProducts}
            removeProduct={removeProductFromSelectedProducts}
            key={product.code}
            code={product.code}
            name={product.name}
            image={product.images}
            description={product.description}
            price={product.price}
            stock={product.stock}
            showDetails={showDetails}
          /> );
        })}
      </div>
      </div>
    }
    </div>
  );
}

export default App;
