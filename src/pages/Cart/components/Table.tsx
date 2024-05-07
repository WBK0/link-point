import { CartType } from "../../../types/CartType";
import Tbody from "./Tbody";
import Thead from "./Thead";

type TableProps = {
  cart: CartType,
  handleRemoveAmount: (uuid: string) => void,
  handleAddAmount: (uuid: string) => void,
  handleRemoveItem: (uuid: string) => void
}

const Table = ({ cart, handleRemoveAmount, handleAddAmount, handleRemoveItem } : TableProps) => {
  return (
    <table
      className="w-full gap-8 mt-8"
    >
      <Thead />
      <Tbody 
        cart={cart}
        handleRemoveAmount={handleRemoveAmount}
        handleAddAmount={handleAddAmount}
        handleRemoveItem={handleRemoveItem}
      />
    </table>
  )
}

export default Table;