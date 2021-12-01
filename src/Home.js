import React, { useState, useEffect } from "react";

import Card from "./Card";
import Recommendations from "./Recommendations";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  gql,
  useQuery,
} from "@apollo/client";


const animes = gql`
  query Trending {
    Media(id: 17) {
      title {
        english
        romaji
      }
      coverImage {
        large
      }
      genres
      description
    }
  }
`;

const Home = (props) => {

  const { errors, loading, data } = useQuery(animes);
  const [title, setTitle]= useState([]);
  const [art, setArt] = useState([]);
  const [gen1, setGen1] = useState([]);
  const [gen2, setGen2] = useState([]);
  const [des, setDes] = useState([]);

  useEffect(() => {
    if (data) {
        setTitle(data.Media.title.romaji);
        setArt(data.Media.coverImage.large);
        setGen1(data.Media.genres[0]);
        setGen2(data.Media.genres[1]);
        setDes(data.Media.description);
    }
  }, [data]);

  return (
    <div className="mt-4 ml-4 font-bold">
      <br />
      <h2 className="text-4xl">Trending now</h2>
      <div className="mt-4 flex gap-4 w-1/6 md:flex-shrink-0">
        {
          <Card
            name={title} artlink={art} genre={gen1} altgenre={gen2} 
          />
        }
      </div>
      <br />
      <br />
      <h2 className="text-4xl">New Additions</h2>
      <div className="mt-4 mb-8 flex gap-4 w-1/6">
        {/* {data.map((mangaInfo) => {
          return (
            <span className="min-w-full">
              <Card name={mangaInfo.name} artlink={mangaInfo.art} />
            </span>
          );
        })} */}
      </div>
      <Recommendations />
    </div>
  );
};

export default Home;
