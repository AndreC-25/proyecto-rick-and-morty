import { Link } from 'react-router-dom';
import style from './Card.module.css'

export default function Card({id, name, species, gender, image, onClose}) {
  return (
    <div className={style.container}>
      <div className={style.divButton}>
        <button onClick={() => {onClose(id)}} className={style.closeButton}>
          X
        </button>
        </div>
        <div className={style.divImg}>
          <Link to={`/detail/${id}`}>
            <img  src={image} alt="" />
          </Link>
          <h2 className={style.nombre}>{name}</h2>
        </div>
        <div className={style.divData}>
          <h2>{gender}</h2>
          <h2>{species}</h2>
        </div>
    </div>
  );
}
