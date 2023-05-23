import CardProduct from '../../components/card/CardProduct';
import FilterMenu from '../../components/filterMenu/FilterMenu'
import MasterLayoutAdmin from '../../layouts/MasterLayout';
import "./productManager.css"

export default function ProductManage() {
  return (
    <MasterLayoutAdmin>
      <FilterMenu titleFilter="Products" indexRole={1} /* setIndexRole={} */ />
      <div style={{ marginBottom: '10px' }} className='wrapper_boxFood'>
       <CardProduct img="https://mamuka.rest/upload/resize_cache/iblock/55c/600_600_1/p95576pcxe6qn9nylze6xug1jzunqnog.jpg"/>
       <CardProduct img="https://mamuka.rest/upload/resize_cache/iblock/e91/600_600_1/e6i44m6gb0vbqedscbqx49ptweqcmeda.jpg"/>
       <CardProduct img="https://mamuka.rest/upload/resize_cache/iblock/b8c/600_600_1/b8cc758128181ef8bfbae866c084595f.jpg"/>
       <CardProduct img="https://mamuka.rest/upload/resize_cache/iblock/b8c/600_600_1/b8cc758128181ef8bfbae866c084595f.jpg"/>
       <CardProduct img="https://mamuka.rest/upload/resize_cache/iblock/b8c/600_600_1/b8cc758128181ef8bfbae866c084595f.jpg"/>
      </div>
    </MasterLayoutAdmin>
  )
}