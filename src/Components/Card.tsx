import './Card.css';
import Button from './Button';

const Card = () => {
  return (
    <div className="card">
    <img src="https://villaadejebeachhotel.com/wp-content/uploads/2022/04/garachico-tenerife.jpg" alt="traveltips" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Tenerife</h2>
        <p className="card-description">Are you travelling to Tenerife? This is what you want and need to do in Tenerife!</p>
        <Button/>
      </div>
    </div>
  );
};

export default Card;
