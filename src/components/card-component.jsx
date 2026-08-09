import topImage from '../assets/DSC_2263.JPG'
import './card.css';

function Card({name} = props) {

    return (
        <div className="card cardMargin" style={{ width: "18rem" }}>
        <img src={topImage} className="card-img-top headerImage" alt="image" /> 
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    )
}

export default Card;