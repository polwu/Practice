function Details(props) {

    const {price, imageUrl, description, status, code, name, returnToHomePage} = props;
    console.log(props);

    const displayPrice = price ? price.formattedValue : null;

    return (
        <div className="Details-container">
        <div className="Details-image">
            <div>{imageUrl ? <img src={imageUrl} alt={code}/> : "No Image"}</div>
        </div>
        <div className="Details">
            <div className="Name">{name}</div>
            <div className="Price">{displayPrice ? displayPrice : "Unkown Price"}</div>
            <div>{status?.stockLevelStatus?.code}</div>
        </div>
        <div className="Details-description">
            <div>{description}</div>
        </div>
        <div className="Button-container">
            <button className="Return-button" onClick={() => returnToHomePage()}>Back</button>
        </div>
        </div>
    )
}

export default Details;