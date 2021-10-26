import React from "react";

const Manga = (props) => {
  const mname = props.name;
  const desc = props.desc;
  const gen1 = props.genre;
  const gen2 = props.altgenre;
  const imgsrc = props.artlink;

  return (
    <div className="mt-4 ml-4">
      <div className="space-x-4 h-1/4">
        <img src={imgsrc} className="w-1/4 shadow-lg float-left rounded-lg" />
        <div className="ml-8">
          <a className="text-3xl float-center ml-4">{mname}</a>
          <br />
          <a className="text-xl italic ml-4">by chengis gjan</a>
          <br />
          <br />
          <a className="text-lg ml-4">{desc}</a>
          <br />
          <br />
          <a className="font-bold ml-4">key: </a>
          <a className="">value</a>
          <a className="font-bold ml-4">key: </a>
          <a className="">value</a>
          <a className="font-bold ml-4">key: </a>
          <a className="">value</a>
          <a className="font-bold ml-4">key: </a>
          <a className="">value</a>
        </div>
      </div>
      <p className="text-bold text-lg mb-8 float-none">Rating:</p>
    </div>
  );
};

export default Manga;
