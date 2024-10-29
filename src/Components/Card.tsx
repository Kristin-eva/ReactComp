import './Card.css';
import Button from './Button';
// added type Props and all the strings
type Props={
    title: string;
    description: string;
    img: string;
}
// Added {title, description,img}:Props to make props
// Then I changed the information to {img(instead of the img address), title (instead of Tenerife), description(instead of one description)} after each class
const Card = ({title, description, img}:Props) => {
  return (
    <div className="card">
    <img src={img} alt="traveltips" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Button/>
      </div>
    </div>
  );
};

export default Card;
