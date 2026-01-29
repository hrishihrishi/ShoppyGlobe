import { useEffect, useState } from "react"
import { ProductItem } from "./ProductItem"


export function ProductList() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                // Store the fetched data in the component’s state. 
                setProducts(data);
                setLoading(false);
                console.log(data[0])
            })
            .catch(err => {
                console.log('Error fetching: ', err)
            })
    }, [])

    return (
        <div>
            <h1>ProductList</h1>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                )
            }

        </div>
    )
}