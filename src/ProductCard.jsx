function ProductCard(props){
    return(
        <article className="product">
        <img
          src={props.image? props.image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019"}
          alt=""
        />
        <div className="productDetails">
          <h3 className="h6">{props.tittle}</h3>
          <div>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>☆ </span>
          </div>
          <div className="priceAndButton">
            <span className="p">${props.price}</span>
            <button className="button buttonPrimary">Add to cart</button>
          </div>
        </div>
      </article>
    );
}

export default ProductCard