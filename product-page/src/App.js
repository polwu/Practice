import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import Product from "./Product";
import Details from "./Details";

function App() {
  const [detailsToShow, setDetailsToShow] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [numOfProductsInPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [productDetails, setProductDetails] = useState([]);
  
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

  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(
      result => {
        setIsLoading(false);
        let currentPageProductDetails = result.products;
        setProductDetails(currentPageProductDetails);
      },
      error => {
        setIsLoading(false);
        console.error(error);
      }
    )
  }, []);

  const indexOfLastProductInPage = currentPage * numOfProductsInPage;
  const indexOfFirstProductInPage = indexOfLastProductInPage - numOfProductsInPage;
  const currentPageProducts = productDetails.slice(indexOfFirstProductInPage, indexOfLastProductInPage);

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
        {currentPageProducts?.map((product, key) => { 
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
