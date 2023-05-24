import { useDispatch, useSelector } from 'react-redux';
import CardProduct from '../../components/card/CardProduct';
import FilterMenu from '../../components/filterMenu/FilterMenu'
import MasterLayoutAdmin from '../../layouts/MasterLayout';
import "./productManager.css"
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { getDataProduct } from '../../redux/features/product/productSlice';

export default function ProductManage() {
  const dispatch = useDispatch();
  const productStore = useSelector(
    (state: RootState) => state.products
  );
  const dataProduct = productStore.dataProduct;

  console.log(dataProduct, "dataUserStore");

  useEffect(() => {
    dispatch(getDataProduct({
      role: 1,
    }));
  }, [dispatch]);

  return (
    <MasterLayoutAdmin>
      <FilterMenu titleFilter="Products" indexType={1} /* setIndexRole={} */ />
      <div style={{ marginBottom: '10px' }} className='wrapper_boxFood'>
        {
          dataProduct ? dataProduct.map((data: {
            category_id: number,
            food_id: number,
            food_name: string,
            image: string,
            price: string,
            quantity: string,
          }) => (
            <>
              <CardProduct idProduct={data.food_id} nameProduct={data.food_name} price={data.price} quantity={data.quantity} category_id={data.category_id} imgProduct="https://mamuka.rest/upload/resize_cache/iblock/55c/600_600_1/p95576pcxe6qn9nylze6xug1jzunqnog.jpg" />
            </>
          )) : null
        }
      </div>
    </MasterLayoutAdmin>
  )
}
