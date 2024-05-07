import arrowDown from '../../../../assets/arrow-down.svg';
import arrowUp from '../../../../assets/arrow-up.svg';
import arrowDownUp from '../../../../assets/arrow-down-up.svg'
import { useDispatch, useSelector } from 'react-redux';
import { ProductsListSlice, orderByAsc, orderByDesc, sortByDate, sortByPrice } from '../../../store/productsListSlice';

const ProductsSort = () => {
  const productListSlice = useSelector((value: {productsList: ProductsListSlice}) => value.productsList);

  const dispatch = useDispatch();

  const handleSort = (sortBy: 'date' | 'price') => {
    if (productListSlice.sortBy === sortBy) {
      if (productListSlice.orderBy === 'asc') {
        dispatch(orderByDesc());
      } else {
        dispatch(orderByAsc());
      }
    } else {
      if (sortBy === 'date') {
        dispatch(sortByDate());
      } else {
        dispatch(sortByPrice());
      }
    }
  }

  return (
    <div className='flex-1 flex justify-end mr-2'>
      <div className="group">
        <button
          onClick={() => handleSort('date')}
        >
          <img
            src={productListSlice.sortBy === 'date' ? productListSlice.orderBy === 'asc' ? arrowUp : arrowDown : arrowDownUp}
            alt="Sort"
            className="w-7 h-7 inline-block"
          />  
        </button>
        <div className="absolute bg-gray-800 text-white p-1 text-sm -mt-16 rounded-lg hidden group-hover:block w-fit">
          Sort by date
        </div>
      </div>
      <div className="group">
        <button
          onClick={() => handleSort('price')}
        >
          <img
            src={productListSlice.sortBy === 'price' ? productListSlice.orderBy === 'asc' ? arrowUp : arrowDown : arrowDownUp}
            alt="Sort"
            className="w-7 h-7 inline-block"
          />
        </button>
        <div className="absolute bg-gray-800 text-white p-1 text-sm -mt-16 rounded-lg hidden group-hover:block w-fit">
          Sort by price
        </div>
      </div>
    </div>
  )
}

export default ProductsSort;