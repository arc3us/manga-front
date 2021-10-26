import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Card = (props) => {
  const mname = props.name;
  const desc = props.desc;
  const gen1 = props.genre;
  const gen2 = props.altgenre;
  const imgsrc = props.artlink;

  return (
    <div className="card bordered shadow-lg">
      <Link
        to={{
          pathname: "/Manga",
          state: {
            name: mname,
          },
        }}
      >
        <figure>
          <img src={imgsrc}></img>
        </figure>

        <div className="card-body">
          <h2 className="card-title">{mname}</h2>
          <p>{desc}</p>
          <div class="inline-block">
            <div class="badge mx-2 badge-primary">{gen1}</div>
            <div class="badge mx-2 badge-secondary">{gen2}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
