import React from "react";


const Card = (props) => {
  const mname=props.name;
  const desc=props.desc
  const gen1=props.genre
  const gen2=props.altgenre
  const imgsrc=props.artlink


  return (
    <div className="card bordered shadow-lg w-1/6 min-w-24">
      <figure>
        <img src={imgsrc} class></img>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{mname}</h2>
        <p>{desc}</p>
        <div class="inline-block">
          <div class="badge mx-2 badge-primary">{gen1}</div>
          <div class="badge mx-2 badge-secondary">{gen2}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
