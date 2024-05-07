import { CartType } from "../../../types/CartType"

type TbodyProps = {
  cart: CartType,
  handleRemoveAmount: (uuid: string) => void,
  handleAddAmount: (uuid: string) => void,
  handleRemoveItem: (uuid: string) => void
}

const Tbody = ({ cart, handleRemoveAmount, handleAddAmount, handleRemoveItem} : TbodyProps) => {
  return (
    <tbody>
      {
        cart?.items && cart?.items.map((item: any) => (
          <tr
            key={item.product.uuid}
            className="border-b-2 border-gray-300"
          >
            <td>
              <img 
                src={item.product.main_image.url}
                alt={item.product.slug}
                className="h-16"
              />
            </td>
            <td>
              {item.product.name}
            </td>
            <td>
              <button
                className="bg-red-500 text-white px-2 py-1 hover:bg-red-600 rounded-full mr-1.5"
                onClick={() => handleRemoveAmount(item.product.uuid)}
              >
                -
              </button>
              {item.amount}
              <button
                className="bg-green-500 text-white px-2 py-1 hover:bg-green-600 rounded-full ml-1.5"
                onClick={() => handleAddAmount(item.product.uuid)}
              >
                +
              </button>
            </td>
            <td>
              {item.product.price} PLN
            </td>
            <td>
              {Number(item.product.price * item.amount).toFixed(2)} PLN
            </td>
            <td>
              <button
                className="bg-red-500 text-white px-2 py-1 hover:bg-red-600 rounded-full"
                onClick={() => handleRemoveItem(item.product.uuid)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))
      }
    </tbody>
  )
}
export default Tbody