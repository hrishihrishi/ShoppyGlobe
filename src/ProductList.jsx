import { useEffect, useState } from "react"


export function ProductList() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
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
                        <div key={product.id}>{product.title}</div>
                    ))
                )
            }

        </div>
    )
}