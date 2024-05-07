import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { ProductsListSlice } from "../../../store/productsListSlice";
import { ProductsType } from "../../../types/ProductsType";

const Product = ({ displayProducts } : { displayProducts: ProductsType | null }) => {
  const productsListSlice = useSelector((value: {productsList: ProductsListSlice}) => value.productsList);

  return (
    <>
      {
      displayProducts && displayProducts.length > 0 ? displayProducts
        ?.filter((value) => value.product_group_uuid === productsListSlice.groupFilter || productsListSlice.groupFilter === 'all')
        .sort((a, b) => {
          if (productsListSlice.sortBy === 'date') {
            if (productsListSlice.orderBy === 'asc') {
              return new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
            } else {
              return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            }
          } else {
            if (productsListSlice.orderBy === 'asc') {
              return a.price - b.price
            } else {
              return b.price - a.price
            }
          }
        })
        .map((product) => (
          <div className="w-full flex border-b-2 border-zinc-600 py-6">
            <div>
              <img
                src={product.main_image.url}
                alt={product.name}
                className="aspect-square mb-3 max-w-32"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <p className="font-bold text-2xl">
                {
                  product.name
                }
              </p>
              <p className="font-bold text-lg">
                {product.price} zł
              </p>
            </div>
            <div className="flex flex-1 justify-end items-center">
            <Link to={`/product/${product.product_group_uuid}/${product.uuid}`}
              className="bg-blue-500 text-white rounded-full font-bold px-6 py-1 h-min hover:bg-blue-600"
              type="button"
            >
              Product page
            </Link>
            </div>  
          </div>
        )) 
        : <div className="mx-auto mt-12">
            <p className="text-2xl font-bold text-center">
              No products found
            </p>
          </div>
      }
    </>
  )
}

export default Product;