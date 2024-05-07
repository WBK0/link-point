import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserSlice } from "../../store/userSlice";
import { useEffect, useState } from "react";
import { addToCart } from "../../store/cartStore";
import { ProductType } from "../../types/ProductType";
import Image from "./components/Image";
import Details from "./components/Details";
import Loader from "../../components/Loader";
import Wrapper from "../../components/Wrapper";

const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const { group, uuid } = useParams();
  const userSlice = useSelector((value: {user: UserSlice}) => value.user);
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/product-groups/${group}/products/${uuid}`, {
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${userSlice.API_TOKEN}`
        }
      })

      const json = await response.json();

      setProduct(json.product);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [group, uuid])

  const handleAddToCart = async () => {
    dispatch(addToCart(product!.uuid));
  }

  return (
    <Wrapper>
      <div className="max-w-5xl mx-auto flex flex-wrap min-h-screen items-center">
        {
          product ? (
            <div className="flex justify-between flex-wrap w-full">
              <Image 
                product={product}
              />
              <Details 
                product={product}
                handleAddToCart={handleAddToCart}
              />
            </div>
          ) : (
            <div className="mx-auto mt-12">
              <Loader />
            </div>
          )
        }
      </div>
    </Wrapper>
  )
}

export default Product;