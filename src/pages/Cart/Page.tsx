import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSlice } from "../../store/userSlice";
import { addAmount, removeAmount, removeFromCart } from "../../store/cartStore";
import Table from "./components/Table"
import { CartType } from "../../types/CartType";
import Wrapper from "../../components/Wrapper";

const Cart = () => {
  const [cart, setCart] = useState<CartType>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if(cart?.items){
      setTotalPrice(cart.items.reduce((acc, item) => acc + item.amount * item.product.price, 0))
    }
  }, [cart])

  const dispatch = useDispatch();

  const userSlice = useSelector((value: {user: UserSlice}) => value.user);
  const getCart = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/carts`, {
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${userSlice.API_TOKEN}`
        }
      })

      const json = await response.json();

      setCart(json.cart);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCart();
  }, [])

  const handleRemoveAmount = async (uuid: string) => {
    dispatch(removeAmount(uuid));

    if(cart?.items){
      setCart({
        ...cart,
        items: cart?.items.map((item) => {
          if(item.amount === 1) {
            return item;
          }
          if(item.product.uuid === uuid) {
            item.amount -= 1;
          }
          return item;
        })
      })
    }
  }

  const handleAddAmount = async (uuid: string) => {
    dispatch(addAmount(uuid));

    if(cart?.items){
      setCart({
        ...cart,
        items: cart?.items.map((item) => {
          if(item.product.uuid === uuid) {
            item.amount += 1;
          }
          return item;
        })
      })
    }
  }

  const handleRemoveItem = async (uuid: string) => {
    dispatch(removeFromCart(uuid));

    if(cart?.items){
      setCart({
        ...cart,
        items: cart?.items.filter((item) => item.product.uuid !== uuid)
      })
    }
  }

  return (
    <Wrapper>
      <div className="max-w-5xl mx-auto">
        <Table 
          cart={cart}
          handleRemoveAmount={handleRemoveAmount}
          handleAddAmount={handleAddAmount}
          handleRemoveItem={handleRemoveItem}
        />
        <div className="flex mt-8 justify-end">
          <h1>Total: {Number(totalPrice).toFixed(2)} PLN</h1>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cart;