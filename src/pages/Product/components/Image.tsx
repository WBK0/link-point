import { ProductType } from "../../../types/ProductType";

const Image = ({ product } : { product: ProductType }) => {
  return (
    <div
      className="flex-1 flex items-center"
    >
      <img src={product.images[0].url} alt={product.slug} className="w-96 h-96" />
    </div>
  )
}

export default Image;