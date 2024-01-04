import React from "react";
import start from "./../assets/Star_fill.svg"
import "./card.css";
const Card = ({ id, name, img, popular, price, rating, votes, available }) => {
  return (
    <section>
      <div className="imagen-text">
        {popular && <p className="text-popular">Popular</p>}

        <img className="imagen" src={img} />
      </div>
      <div>
        <div className="name-price">
          <h3 className="name">{name}</h3>
          <p className="price">{price}</p>
        </div>
        <div className="rating-noAvailable">
          <div className="rating-votes">
            <img src={start} />
            <p className="rating">
              {rating} (<span className="votes">{votes} votes</span>)
            </p>
          </div>
          {!available && <p className="noAvailable">Sold out</p>}
        </div>
      </div>
    </section>
  );
};

export default Card;
