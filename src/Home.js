import React from "react";
import Card from "./Card"
import Recommendations from "./Recommendations";

const Home = (props) => {

    const data=[
        {
            id: 1, name: "Manga name 1", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        {
            id: 2, name: "Manga name 1", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        {
            id: 3, name: "Manga name 1", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        {
            id: 4, name: "Manga name 1", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        {
            id: 5, name: "Manga name 1", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        
    ]

  return (
    <div className="mt-4 ml-4 font-bold">
        <br />
      <h2 className="text-4xl">Trending now</h2>
      <div className="mt-4 flex gap-4 w-1/6 md:flex-shrink-0">
           {
               data.map(mangaInfo => {
                   return(
                       <span className="min-w-full">
                        <Card name={mangaInfo.name} artlink={mangaInfo.art} desc={mangaInfo.des} genre={mangaInfo.g1} altgenre={mangaInfo.g2}/>
                        </span>
                   )
               })
           }
      </div>
      <br/>
      <br/>
      <h2 className="text-4xl">New Additions</h2>
      <div className="mt-4 mb-8 flex gap-4 w-1/6">
           {
               data.map(mangaInfo => {
                   return(
                       <span className="min-w-full">
                        <Card name={mangaInfo.name} artlink={mangaInfo.art} />
                        </span>
                   )
               })
           }
      </div>
      <Recommendations />
    </div>
  );
}

export default Home;
