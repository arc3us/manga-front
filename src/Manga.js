import React,  { useState, useEffect } from "react";
import Recommendations from "./Recommendations";
import {
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
      meanScore

    }
  }
`;

const Manga = (props) => {

  const { errors, loading, data } = useQuery(animes);
  const [title, setTitle]= useState([]);
  const [art, setArt] = useState([]);
  const [gen1, setGen1] = useState([]);
  const [gen2, setGen2] = useState([]);
  const [des, setDes] = useState([]);
  const [mScore, setMscore] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    if (data) {
        setTitle(data.Media.title.romaji);
        setArt(data.Media.coverImage.large);
        setGen1(data.Media.genres[0]);
        setGen2(data.Media.genres[1]);
        setDes(data.Media.description);
        setMscore(data.Media.meanScore);
        setDate(data.Media.startDate);
    }
  }, [data]);


  return (
    <div>
      <div className="mt-4 ml-4 table table-fixed">
        <tr className="">
          <td className="w-1/4" rowSpan="6">
            <img src={art} className="w-full shadow-lg rounded-lg" />
          </td>
          <td
            className="font-bold text-3xl text-left text-top h-1/4"
            rowSpan="1"
          >
            {title}
          </td>
        </tr>
        <tr className="">
          <td
            className="text-lg p-0 m-0 h-1/4"
            style={{ verticalAlign: "top" }}
            rowSpan="1"
          >
            <p
              style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
              className="text-xl"
            >
              {des}
            </p>
          </td>
        </tr>
        <tr className="table-row border text-lg">
          <td>Started: {date}</td>
        </tr>
        <tr className="table-row border text-lg">
          <td>Genre: {gen1}, {gen2}</td>
        </tr>
        <tr className="table-row border">&nbsp;</tr>
        <tr className="table-row border">
          <td className="inline align-center">
            <div className="btn btn-lg btn-primary">Watch Now</div>
            <div className="btn btn-lg btn-accent btn-outline ml-4">
              Add to list
            </div>
          </td>
        </tr>
        <tr className="table-row border">
          <td className="text-2xl flex-inline">
            <p className="">Rating:   {mScore}%</p>
            <div data-tip={mScore}
              className="tooltip tooltip-bottom"
            >
              <progress
                class="progress progress-primary"
                value={mScore}
                max="100"
              ></progress>
            </div>
          </td>
        </tr>
        <br />
      </div>
      <Recommendations />
    </div>
  );
};

export default Manga;
