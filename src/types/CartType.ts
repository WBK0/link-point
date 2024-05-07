export type CartType = {
  items: {
    amount: number,
    product: {
      uuid: string,
      name: string,
      price: number,
      main_image: {
        url: string
      }
    }
  }[],
  total_price: number
} | null