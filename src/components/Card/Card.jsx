import React from "react";
import { Link } from "react-router-dom";

export default function Card({to , title}) {
  return (
    <Link to={to} className="w-full sm:w-1/2 md:w-[31%]">
      <div className="group mt-6 cursor-pointer w-full rounded-md bg-white p-4 shadow-2xl hover:scale-105 transition-all">
        <img src="/img/test.png" className="w-90 mx-auto rounded-md group-hover:w-full bg-cover bg-center" />
        <h3 className="mt-6 text-xl text-slate-900">{title}</h3>
      </div>
    </Link>
  );
}
