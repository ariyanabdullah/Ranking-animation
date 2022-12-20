import React from "react";
import { useEffect, useState } from "react";
import CardDetails from "../CardDetails/CardDetails";
import "./Card.css";
const Card = () => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?limit=20")
      .then((res) => res.json())
      .then((data) =>
        setAnime(
          data.data?.sort(function (a, b) {
            if (a?.rank > b?.rank) {
              return 1;
            }
            if (a?.rank < b?.rank) {
              return -1;
            }
            return 0;
          })
        )
      );
  }, []);

  return (
    <div className="my-12">
      <div className=" wXs">
        {anime?.map((animation) => (
          <CardDetails key={animation.mal_id} animation={animation}>
            {" "}
          </CardDetails>
        ))}
      </div>
    </div>
  );
};

export default Card;
