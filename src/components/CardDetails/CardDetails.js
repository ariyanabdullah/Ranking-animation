import React, { useState } from "react";
import "./CardDetails.css";

const CardDetails = ({ animation }) => {
  // console.log(animation);

  const { images, rank, title, aired, rating } = animation;
  const [expand, setExpand] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
        className={`${
          expand
            ? "mainCard card bg-base-100 shadow-xl"
            : "card  w-[200px] h-[300px] mx-auto  bg-base-100 shadow-xl"
        }`}
      >
        <figure>
          <img className="w-full h-[250px]" src={images.jpg.image_url} alt="" />
        </figure>

        <div className=" absolute bg-[#d45b9f] px-3 font-bold text-xl rounded-r-xl rounded-br-none right-0 top-0 badge-secondary">
          {rank}
        </div>

        <p className="text-center text-sm font-semibold">{title}</p>

        <div className="ml-4">
          {expand && (
            <p className="  text-xl font-bold mt-3 block">
              Relase Date:{" "}
              <span className="text-sm font-semibold ">{aired.string}</span>{" "}
            </p>
          )}
          {expand && (
            <p className="  text-xl font-bold mt-3 block">
              Latest:{" "}
              <span className="text-sm font-semibold ">
                {aired.to ? <>{aired.to}</> : <>Now</>}
              </span>{" "}
            </p>
          )}

          {expand && (
            <p className="  text-xl font-bold mt-3 block">
              Ratings: <span className="text-sm font-semibold ">{rating}</span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
