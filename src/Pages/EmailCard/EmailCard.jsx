import React from "react";

export default function EmailCard() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="flex flex-col rounded-xl bg-zinc-800 p-2 md:flex-row">
        <div className="overflow-hidden">
          <img
            className="h-80 w-full rounded-xl object-cover transition duration-200 hover:scale-110 md:h-64 md:rounded-l-xl md:rounded-r-none"
            src="/img/assets/emailcard.jpg"
            alt=""
          />
        </div>
        <div className="my-7 p-5">
          <h2 className="text-center font-serif text-2xl text-white md:text-left">
            Get diet and fitness tips in your inbox
          </h2>
          <p className="mt-4 max-w-sm text-center text-sm leading-5 tracking-wide text-white md:text-left">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter
          </p>
          <div className="mt-8 flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full rounded-md border border-slate-500 bg-transparent p-2 px-4 text-center text-sm text-slate-400 focus:outline-none md:w-60 md:text-left"
            />
            <button className="mt-4 w-full rounded-md bg-lime-500 p-2 px-4 text-sm transition duration-200 hover:bg-lime-700 hover:text-white md:ml-4 md:mt-0 md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
