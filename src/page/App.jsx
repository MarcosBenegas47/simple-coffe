
import React, { useEffect, useState } from 'react'
import '../style/App.css'
import vector from "../assets/vector.svg";
import call_api from '../services/api';
import Card from '../component/card';

const App = () => {
  const [data, setData] =useState([]) 
  useEffect(() => {
    call_api().then((Response) => setData(Response));
  }
  ,[])
  console.log(data)
  

  return (
    <main className="container body-main">
      <section className="section-main">
        <div className="cont-svg">
          <img
            // style={{ height: "150px", width: "100px" }}
            className="svg-vector"
            src={vector}
            alt="svg"
          ></img>
        </div>
        <div className="cont-element">
          <h1 className="title">Our Collection</h1>
          <p className="text-body">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
      </section>
      <section>
        <div>
          <button>All Products</button>
          <button>Available Now</button>
        </div>

        <ul className="card-grid">
          {data?.map((e, i) => (
            <li key={i}>
              {
                <Card
                  id={e.id}
                  name={e.name}
                  price={e.price}
                  popular={e.popular}
                  rating={e.rating}
                  votes={e.votes}
                  available={e.available}
                  img={e.image}
                />
              }
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App