import { ProductType } from "../../../types/ProductType";

type DetailsProps = {
  product: ProductType,
  handleAddToCart: () => void
}

const Details = ({ product, handleAddToCart } : DetailsProps) => {
  return (
    <div
      className="flex flex-col items-center flex-1 justify-center"
    >
      <h1
        className="text-3xl"
      >
        {product.name}
      </h1>
      <p
        className="text-xl"
      >
        {product.price} zł
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition-colors"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  )
}

export default Details;