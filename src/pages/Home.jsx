import { useMemo, useEffect, useState } from "react";
import ProductCart from "../components/carts/Cart";

const Home = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
           setProducts(data.map((products) => ({...products, isFavorite: false})));
        } catch (error) {
          console.error("Error fetching products", error);
        }
      }
      
      fetchProducts();
    },[])

    const memoizedProducts = useMemo(() => products, [products]);

    console.log('ProductCart re-rendered with products:', products);
    return (
      <div className="Carts-div">
       {memoizedProducts.length === 0 ? (<p>Loading...</p>) : ( memoizedProducts.map((product) => (
        <ProductCart products={product} key={product.id}/>
       ))
      )};
    </div>
  );
};

export default Home;