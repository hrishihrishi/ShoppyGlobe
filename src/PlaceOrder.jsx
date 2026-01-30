import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export default function PlaceOrder() {
    const [products, setProducts] = useState();
    const params = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
    }, [params.id])
    // console.log(products)
    return (
        <div>
            <h1>Place Order</h1>
        </div>
    )
}