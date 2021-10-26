import React from "react";

const Manga = (props) => {
  const mname = props.name;
  const desc = props.desc;
  const gen1 = props.genre;
  const gen2 = props.altgenre;
  const imgsrc = "https://thiscatdoesnotexist.com/";

  return (
    <div className="mt-4 ml-4 table table-fixed border-collapse">
      <tr className="">
        <td className="w-1/4" rowSpan="6">
          <img src={imgsrc} className="w-full shadow-lg rounded-lg" />
        </td>
        <td
          className="font-bold text-3xl text-left border text-top h-1/4"
          rowSpan="1"
        >
          Name of Manga
        </td>
      </tr>
      <tr className="">
        <td className="text-lg border p-0 m-0 h-1/4" style={{verticalAlign:'top'}} rowSpan="1">
          <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word',}} className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          mattis dignissim maximus. Integer ac nunc ac felis malesuada suscipit.
          Nam pretium tempus urna non consequat. Aenean nulla justo, porta
          tempus justo suscipit, tincidunt sollicitudin ligula. Praesent viverra
          hendrerit lacinia. Nulla ac nisi vulputate, feugiat metus nec,
          dignissim quam. Mauris vitae euismod augue. Mauris vehicula ut nunc in
          viverra. Sed tempor.</p>
        </td>
      </tr>
      <tr className="table-row border">Published: 2021</tr>
      <tr className="table-row border">Genre: Thriller</tr>
      <tr className="table-row border">.</tr>
      <tr className="table-row border">.</tr>
      <tr className="table-row border">
        <td className="text-2xl">
          Rating:
        </td>
      </tr>
    </div>
  );
};

export default Manga;
