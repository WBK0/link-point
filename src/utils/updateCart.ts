
const updateCart = async (state: any) => {
  fetch(`${import.meta.env.VITE_API_URL}/carts`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({
      items: state.cart
    })
  })
}

export default updateCart;