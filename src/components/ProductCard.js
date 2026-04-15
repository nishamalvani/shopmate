import { useTitle } from "../hooks/useTitle";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  useTitle("Home");
  const {name, price,image} =product;
  return (
    <div className='productCard'>
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <div className='action'>
        <p>${price}</p>
        <button>Add to cat</button>
      </div>
      

    </div>
  )
}
