import React from "react";
import Recommendations from "./Recommendations";

const Manga = (props) => {
  const mname = props.name;
  const desc = props.desc;
  const gen1 = props.genre;
  const gen2 = props.altgenre;
  const imgsrc = "https://thiscatdoesnotexist.com/";

  return (
    <div>
      <div className="mt-4 ml-4 table table-fixed">
        <tr className="">
          <td className="w-1/4" rowSpan="6">
            <img src={imgsrc} className="w-full shadow-lg rounded-lg" />
          </td>
          <td
            className="font-bold text-3xl text-left text-top h-1/4"
            rowSpan="1"
          >
            Name of Manga
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque mattis dignissim maximus. Integer ac nunc ac felis
              malesuada suscipit. Nam pretium tempus urna non consequat. Aenean
              nulla justo, porta tempus justo suscipit, tincidunt sollicitudin
              ligula. Praesent viverra hendrerit lacinia. Nulla ac nisi
              vulputate, feugiat metus nec, dignissim quam. Mauris vitae euismod
              augue. Mauris vehicula ut nunc in viverra. Sed tempor.
            </p>
          </td>
        </tr>
        <tr className="table-row border text-lg">
          <td>Published: 2021</td>
        </tr>
        <tr className="table-row border text-lg">
          <td>Genre: Crime, Mecha</td>
        </tr>
        <tr className="table-row border">&nbsp;</tr>
        <tr className="table-row border">
          <td className="inline align-center">
            <div className="btn btn-lg btn-primary">Read Now</div>
            <div className="btn btn-lg btn-accent btn-outline ml-4">
              Add to list
            </div>
          </td>
        </tr>
        <tr className="table-row border">
          <td className="text-2xl flex-inline">
            <p className="">Rating</p>
            <div
              className="tooltip tooltip-bottom"
              data-tip="70% users liked this"
            >
              <progress
                class="progress progress-primary"
                value="70"
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
