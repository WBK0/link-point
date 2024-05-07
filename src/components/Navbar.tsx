import { Link } from "react-router-dom";
import cartsvg from "../../assets/cart.svg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state: { cart: any}) => state.cart);

  return (
    <div
      className="bg-blue-500 text-white p-4 fixed top-0 left-0 w-full z-10 flex justify-between items-center"
    >
      <div>
        <Link to="/" className="text-white font-bold text-xl">Home</Link>
        <Link to="/cart" className="text-white font-bold text-xl ml-4">Cart</Link>
        <Link to="/order" className="text-white font-bold text-xl ml-4">Order</Link>
      </div>
      <Link
        className="relative pt-2 pr-2"
        to="/cart"
      >
        <img
          src={cartsvg}
          alt="cart"
          className="w-8 h-8"
        />
        <div 
          className="absolute text-red-500 font-bold rounded-full w-5 h-5 bg-white flex justify-center items-center top-0 right-0"
        >
          {cart.length || 0}
        </div>

      </Link>
    </div>
  )
}

export default Navbar;