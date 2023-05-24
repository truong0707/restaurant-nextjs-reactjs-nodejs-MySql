import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from '@/styles/styleComponent/cardProduct.module.css';

interface MyCardProductProps {
  img: string;
  nameProduct: string;
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
    <div onMouseLeave={handleMoves} className={styles.card_product}>
      <img onMouseEnter={handleMove} className={styles.imageFood} src={props.img} alt='' />
      {showBackDrop ? <div className={styles.backdrop_card_product}>
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
          <p><b>205$</b></p>
        </li>
      </ul>
    </div>
  );
}
