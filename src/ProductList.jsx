import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import Loader from "./components/loader"


export default function ProductList() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')

    // fetch ALL products from fakeStore API
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

    // search functionality, renders only filtered products (based on search query)
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setProducts(filteredProducts)
    }



    return (
        <div>
            <h1 className="text-4xl font-extrabold text-green-600 italic p-4">Buy Products:</h1>

            {/* search bar with functionality ! */}
            <input onChange={handleSearchChange} type="text" placeholder="Search Products" className="bg-white w-md px-3 py-1 ml-[30%] rounded-md border-2 border-gray-400"/>
            <button className="bg-green-500 text-white px-4 py-1 rounded-md ml-2">Search</button>
            {
                loading ? (
                    // show loader while fetching products
                    <Loader />
                ) : (
                    // render products using map function
                    products.map((product) => (
                        <ProductItem key={product.id} id={product.id} />
                    ))
                )
            }

        </div>
    )
}