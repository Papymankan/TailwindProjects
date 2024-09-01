import React from "react";
import { Link } from "react-router-dom";

export default function Card({ to, title }) {
  return (
    <Link to={to} className="w-full sm:w-1/2 md:w-[31%]">
      <div className="group mt-6 w-full cursor-pointer rounded-md bg-slate-300 p-4 shadow-2xl transition-all hover:scale-105">
        <img
          src="/img/test.png"
          className="mx-auto aspect-video w-full rounded-md bg-cover bg-center object-cover"
        />
        <h3 className="mt-6 text-xl text-slate-900">{title}</h3>
      </div>
    </Link>
  );
}
