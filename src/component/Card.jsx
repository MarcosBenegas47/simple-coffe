import React from "react";
import start_fill from "./../assets/Star_fill.svg"
import start from "./../assets/Star.svg"
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
            {rating ? (
              <>
                <img src={start_fill} />
                <p className="rating">
                  {rating} (<span className="votes">{votes} votes</span>)
                </p>
              </>
            ) : (
              <>
                <img src={start} />
                <p className="votes">
                  No Rating 
                </p>
              </>
            )}
          </div>
          {!available && <p className="noAvailable">Sold out</p>}
        </div>
      </div>
    </section>
  );
};

export default Card;
