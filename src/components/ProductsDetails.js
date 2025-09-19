import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsDetails(){
let params = useParams();

const [data, setdata] = useState({});
useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then((response) => response.json())
    .then((data) => setdata(data));
},[])

    return(
        <>
<Product product={data} showButton={false} showdesc={true} photosize={true} />
        </>
    )
}

export default ProductsDetails;