import ProductList from "./ProductList";
import Loader from "./components/loader";

export default function Home() {
    return (
        <div>
            <Loader />
            <div>
                <h1 className='text-4xl font-extrabold text-blue-600 italic p-4'>Welcome Hrishikesh !</h1>
                <p className='text-xl font-bold text-blue-600 italic px-4'> Explore our wide range of products and find the perfect item for you. <br />What are you looking for today...?</p>
            </div>
            <ProductList />
        </div>
    )
}