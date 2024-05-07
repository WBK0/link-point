import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserSlice } from "../../store/userSlice";
import ProductsGroup from "./components/ProductsGroup";
import ProductsSort from "./components/ProductsSort";
import Product from "./components/Product";
import { ProductsType } from "../../types/ProductsType";
import Loader from "../../components/Loader";
import Searchbar from "./components/Searchbar";
import Wrapper from "../../components/Wrapper";

const ProductsList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductsType | null>(null);
  const [displayProducts, setDisplayProducts] = useState<ProductsType | null>(null);
  const [search, setSearch] = useState("");

  const userSlice = useSelector((value : {user: UserSlice}) => value.user);

  const getProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${userSlice.API_TOKEN}`,
          accept: 'application/json'
        }
      });

      const json = await response.json();

      setProducts(json.products);
      setDisplayProducts(json.products);
    } catch (error: unknown) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearch(e.target.value);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true)
      setDisplayProducts(() => {
        return products?.filter((value) => value.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || []
      })
      setLoading(false);
    }, 700) 

    return () => clearTimeout(timeout);
  }, [search, products])

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Wrapper>
      <div className="max-w-5xl mx-auto">
        <div className="pt-8">
          <Searchbar
            search={search}
            handleSearch={handleSearch}
          />
          <div className="flex w-full justify-end items-center mt-2 ">
            <ProductsSort />
            <ProductsGroup />
          </div>
        </div>
        <div 
          className="flex flex-wrap mt-8"
        >
          {
            !loading 
              ? <Product displayProducts={displayProducts} />
            : <div className="mx-auto mt-12">
                <Loader />
              </div>
          }
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductsList;