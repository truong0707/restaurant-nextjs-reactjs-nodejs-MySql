import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import './card.css'

interface MyCardProductProps {
  imgProduct: string,
  category_id: number,
  idProduct: number,
  nameProduct: string,
  price: string,
  quantity: string,
}
export default function CardProduct(props: MyCardProductProps) {
  const [showBackDrop, setShowBackDrop] = useState(false);
  const handleMove = () => {
    setShowBackDrop(true)
  }
  const handleMoves = () => {
    setShowBackDrop(false)
  }

  return (
    <div onMouseLeave={handleMoves} className='card_product'>
      <img onMouseEnter={handleMove} className='imageFood' src={props.imgProduct} alt='' />
      {showBackDrop ? <div className="backdrop_card_product">
        <ul>
          <li><BiSearchAlt2 /></li>
          <li><AiOutlineDelete /></li>
          <li>s</li>
        </ul>
      </div> : null}

      <ul>
        <li>
          <p>{props.nameProduct}</p>
          <p>Lorem Ipsum Dummy Text</p>
        </li>

        <li>
          <p><b>{props.price}$</b></p>
        </li>
      </ul>
    </div>
  );
}
