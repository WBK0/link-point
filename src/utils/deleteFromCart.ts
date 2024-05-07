const deleteFromCart = (id: string) => {
  fetch(`${import.meta.env.VITE_API_URL}/carts/items`, {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({
      items: [id]
    })
  })
}

export default deleteFromCart;