import { useEffect, useState } from "react";

function Product(props) {
    const [isPreview, setIsPreview] = useState(false);
    const [isDetailsShown, setIsDetailsShown] = useState(false);
    useEffect(() => console.log(`Product named ${name} clicked Details button, isDetailsShown=${isDetailsShown}`));

    const {isSelected, code, name, image, description, price} = props;
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
            <button className="Details-button" onClick={() => setIsDetailsShown(!isDetailsShown)}>Details</button>
        </div>
        {isPreview && 
            <div className="Preview">
                <div className="code"> {code} </div>
                <div className="price"> {price?.formattedValue} </div>
            </div>
        }
        </div>
    );
}
    

export default Product;