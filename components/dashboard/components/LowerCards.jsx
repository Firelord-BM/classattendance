import React from "react";
import Classes from "./Classes";
import GraphMain from "./GraphMain";

export default function LowerCards() {
  const myData = {
    labels: ["January", "February", "March", "April"],
    values: [10, 20, 40, 30],
  };
  return (
    <div className="  w-[95%]  flex items-center justify-between md:p-10 mt-0  ">
      <div className="w-1/4">
        <Classes />
      </div>
      <div className="w-3/5">
        <GraphMain data={myData} />
      </div>
    </div>
  );
}
