import React from "react";

const Main = ({ data }) => {
  return (
    <div>
      {data.media_type === "video" ? (
        <iframe className="video" src={data.url} frameborder="0"></iframe>
      ) : (
        <div className="imgContainer">
          <img
            className="bgImage"
            src={data.hdurl}
            alt={data.title || "bg-image"}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
