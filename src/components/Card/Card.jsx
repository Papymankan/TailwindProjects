import React from "react";
import { Link } from "react-router-dom";

export default function Card({ to, title , src , mode}) {
  return (
    <Link to={to} className="w-full ">
      <div className="group mt-6 w-full cursor-pointer rounded-md bg-slate-300 p-4 shadow-2xl transition-all hover:scale-105 flex flex-col">
        <img
          src={src}
          className="mx-auto aspect-video w-full rounded-md bg-cover bg-center object-cover"
        />
        <h3 className="mt-6 text-xl text-slate-900">{title}</h3>
        <h4 className={`px-2 mt-2 py-1 rounded-full self-start text-white ${mode == 'Component' ? 'bg-orange-500' : 'bg-softBlue'}`}>{mode}</h4>
      </div>
    </Link>
  ); 
}
