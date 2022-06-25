function Product(props) {

    const {name, image} = props;
    console.log("name=", name, "images=", image);

    if (name === undefined || name === null || 
        image === undefined || image === null)
    return;
    
    return (
        <div className="Product">
            <div className="Name">{name}</div> 
            <img src={image[0].url} alt={name}/> 
        </div>
    );
}

export default Product;