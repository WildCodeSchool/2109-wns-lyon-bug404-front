import React from "react";

export const Nav = ({ page }: any) => {
  return (
    <div className="nav bg-slate-400 h-16 p-2 flex ">
      <h2>{page}</h2>
    </div>
  );
};
