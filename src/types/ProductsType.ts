export type ProductsType = {
  uuid: string,
  name: string,
  price: number,
  created_at: Date,
  updated_at: Date,
  product_group_uuid: string,
  slug: string,
  main_image: {
    uuid: string,
    url: string,
    slug: string
  }
}[]