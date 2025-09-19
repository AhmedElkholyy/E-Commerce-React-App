import { Link } from "react-router-dom";


function Product(props) {
  let imagestyle;

  if (props.photosize) {
    imagestyle = { width: "200px", height: "200px" };
  } else {
    imagestyle = { height: "300px" };
  }

  return (
    <>
      <div className="card" style={{ height: "525px"  }}>
        <img
          src={props.product.image}
          className="card-img-top"
          alt={props.product.title}
          style={imagestyle}
        />
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">Price: {props.product.price}$</p>

          {props.showdesc && (
            <p className="card-text">{props.product.description}</p>
          )}


          
        </div>
           {props.showButton && (
            <Link
              to={`/product/${props.product.id}`}
              className="btn btn-primary"
            >
              Details
            </Link>
          )}
      </div>
    </>
  );
}

export default Product;
