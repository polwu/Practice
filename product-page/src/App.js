import "./App.css";
import React, { useCallback, useState } from "react";
import Product from "./Product";
import Details from "./Details";
import data from "./data.json"; //TODO: should use fetch API

function App() {
  const [detailsToShow, setDetailsToShow] = useState(null);
  
  const returnToHomePage = useCallback( 
    () => setDetailsToShow(null), 
    []
  );
  const showDetails = useCallback(
    productDetails => setDetailsToShow(productDetails),
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
            stock={product.stock}
            showDetails={showDetails}
          /> );
        })}
      </div>
    }
    </div>
  );
}

export default App;
