import { useEffect, useState } from "react";

function Product(props) {
    const [isPreview, setIsPreview] = useState(false);

    const {isSelected, code, name, image, description, price, stock, showDetails} = props;
    console.log("name=", name, "images=", image);

    if (name === undefined || name === null || 
        image === undefined || image === null)
    return;
    
    return (
        <div className="Product-container">
        <div className="Product">
            <div className="Name">{name}</div>
            <img src={image[0].url} alt={name} />
        </div>
        <div className="Button-container">
            <button className="Preview-button" onClick={() => setIsPreview(!isPreview)}>Preview</button>
            <button className="Details-button" 
                onClick={() => {
                    const productToShow = {
                        price: price,
                        imageUrl: image[0].url,
                        description: description,
                        status: stock,
                        code: code,
                        name: name
                    }
                    console.log(productToShow);
                    return showDetails(productToShow);
                } }
            >
                Details
            </button>
        </div>
        {isPreview && 
            <div className="Preview">
                <div className="Code"> {code} </div>
                <div className="Price"> {price?.formattedValue} </div>
            </div>
        }
        </div>
    );
}
    

export default Product;