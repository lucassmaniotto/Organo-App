import './index.css';

const Card = ({name, image, charge, color}) => {
  return (<div className="card__wrapper">
    <div className="card__header" style={{ backgroundColor: color}}>
        <img src={image} alt={name} className='card__img'/>
    </div>
    <div className='card__footer'>
        <h4 className='card__name'>{name}</h4>
        <h3 className='card__charge'>{charge}</h3>
    </div>
  </div>
  )
}

export default Card;