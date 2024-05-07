export type ProductType = {
  uuid: string,
  name: string,
  price: number,
  created_at: Date,
  updated_at: Date,
  product_group_uuid: string,
  slug: string,
  images: {
    uuid: string,
    url: string,
    slug: string
  }[]
}