import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export function ProductDetails() {
    const [productDetails, setProductDetails] = useState();
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(params);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => response.json())
            .then(data => {
                // Store the fetched data in the component’s state. 
                setProductDetails(data)
            }).catch(error => {
                console.log(error)
            });
    }, [])
    
    return (
        <div className="flex flex-col p-5 bg-blue-50 rounded-xl m-5 gap-1">
            <h1 className="text-2xl font-bold">Product Details:</h1>
            <div className="lg:flex">
                <img src={productDetails?.image} alt={productDetails?.title} className="sm:size-1/10 md:size-1/7 lg:size-1/10 m-4 rounded-xl" />
                <div className="lg:p-5 lg:text-xl">
                    <h1 className="text-xl font-bold lg:text-2xl lg:my-5">{productDetails?.title}</h1>
                    <p> <i>{productDetails?.description}</i></p>
                    <p className="text-xl text-green-600"> <b>Price: Rs.{productDetails?.price}</b></p>
                    <p> Category: <b>{productDetails?.category}</b></p>
                    <p> Rating: <b>{productDetails?.rating.rate}</b></p>
                </div>
            </div>


            {/* add id to redux slice */}
            <button onClick={() => dispatch(addToCart(product))} className="btn bg-blue-500">Add to Cart</button>
            <button onClick={() => navigate(-1)} className="btn mt-5 bg-gray-500">Go Back</button>
        </div>
    )
}