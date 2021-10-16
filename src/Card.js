import React from "react";


function Card() {
  return (
    <div className="card bordered shadow-lg w-1/6 min-w-24">
      <figure>
        <img src="https://thiscatdoesnotexist.com/" class></img>
      </figure>

      <div className="card-body">
        <h2 className="card-title">Name of manga</h2>
        <p>brief description about manga</p>
        <div class="inline-block">
          <div class="badge mx-2 badge-primary">genre1</div>
          <div class="badge mx-2 badge-secondary">genre2</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
