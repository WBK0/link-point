import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSlice } from "../../../store/userSlice";
import { filterByGroup } from "../../../store/productsListSlice";

type Groups = {
  uuid: string,
  name: string,
  image: {
    slug: string,
    uuid: string,
    url: string
  }
}[]

const ProductsGroup = () => {
  const [groups, setGroups] = useState<Groups | null>(null);

  const userSlice = useSelector((value : {user: UserSlice}) => value.user)
  const dispatch = useDispatch();

  const getProductsGroup = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/product-groups`, {
        headers: {
          Authorization: `Bearer ${userSlice.API_TOKEN}`,
          accept: 'application/json'
        }
      })

      const json = await response.json();

      setGroups(json.product_groups)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductsGroup();
  }, [])

  const handleChangeGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterByGroup(e.target.value));
  }

  return (
    <div>
      <select
        onChange={handleChangeGroup}
        className="ring-2 ring-zinc-500 rounded-full px-1.5 py-0.5"
      >
        {
          groups?.map((value) => (
            <option
              value={value.uuid}
            >
              {value.name}
            </option>
          ))
        }
          <option
            value="all"
          >
            All products
          </option>
      </select>
    </div>
  )
}

export default ProductsGroup;