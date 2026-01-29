import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductDetails() {
    const [productDetails, setProductDetails] = useState();
    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setProductDetails(data)
                console.log(data)
            })

    }, [])
    return (
        <div className="flex flex-col p-5 bg-blue-50 rounded-xl m-5 gap-1">
            <h1 className="text-2xl font-bold">Product Details:</h1>
            {productDetails && Object.entries(productDetails).map(([key, value]) => (
                <div key={key} className="flex gap-1">
                    <strong className="text-blue-500 underline">{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
                </div>
            ))}
        </div>
    )
}