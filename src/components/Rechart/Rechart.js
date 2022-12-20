import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Rechart.css";

const Rechart = () => {
  const [anime, setAnime] = useState();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?limit=20")
      .then((res) => res.json())
      .then((data) =>
        setAnime(
          data?.data.sort((a, b) => Date.parse(a.year) - Date.parse(b.year))
        )
      );
  }, []);

  // custom start

  const CustomTooltip = (allData) => {
    console.log(allData);

    const { active, label, payload } = allData;
    const getOne = anime?.find((a) => a?.year === label);

    console.log(getOne);

    if (getOne?.year === label) {
      return (
        <div className="custom-tooltip bg-base-200 py-1 px-2 rounded border-4 border-emerald-600">
          <p className="font-semibold"> {getOne?.year}</p>
          <p className="font-semibold">Rank: {getOne?.rank}</p>
          <p className="font-semibold">{getOne?.title}</p>
        </div>
      );
    }

    return null;
  };

  // cuast end

  // console.log(anime);

  return (
    <div className="flex justify-center my-32">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={200}
          data={anime}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="" horizontal="true" vertical="" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <defs>
            <linearGradient id="grad1" x1="10%" y1="20%" x2="100%" y2="20%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(9 165 86)", stopOpacity: "10" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#rgb(55 41 249)", stopOpacity: "20" }}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="rank"
            stroke="#7fb4ba"
            fill="url(#grad1)"
          ></Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
