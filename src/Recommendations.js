import React from "react";
import Card from "./Card"

const Recommendations = (props) => {

    const data=[
        {
            id: 1, name: "Recommended Manga 1", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        {
            id: 2, name: "Recommended Manga 2", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        {
            id: 3, name: "Recommended Manga 3", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        {
            id: 4, name: "Recommended Manga 4", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        {
            id: 5, name: "Recommended Manga 5", art: "https://thiscatdoesnotexist.com/", des: "this is a manga about xyz stuff", g1: "crime", g2: "mecha"
        },
        
    ]

  return (
    <div className="mt-4 ml-4 font-bold">
        <br />
      <h2 className="text-4xl">You might like</h2>
      <div className="mt-4 flex gap-4 w-1/6">
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
    </div>
  );
}

export default Recommendations;
