import React from "react";

const GitBox = ({ color }) => {
  return (
    <div
      className=" h-2.5 w-2.5 rounded-[1.5px] bg-amber-200"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default GitBox;
