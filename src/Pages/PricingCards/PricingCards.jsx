import React from "react";

export default function PricingCards() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col space-y-6 md:flex-row md:items-center md:justify-between md:space-x-6 md:space-y-0">
        <div className="rounded-xl bg-zinc-500 p-3">
          <div className="flex flex-col items-center rounded-xl bg-zinc-600 py-6">
            <h3 className="text text-slate-300">BASIC</h3>
            <h1 className="mt-8 font-serif text-5xl text-slate-200">100GB</h1>
            <p className="mt-3 text-sm text-slate-300">$1.99/month</p>
            <button className="mt-8 rounded-lg border-2 border-violet-500 px-10 py-3 text-slate-300 transition duration-300 hover:border-violet-600 hover:bg-violet-600">
              Purchase
            </button>
            <hr className="mt-10 w-full border-zinc-500" />
            <span className="mx-6 mt-7 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>
              100 GB storage
            </span>
            <span className="mx-6 mt-3 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>
              Option to add members
            </span>
            <span className="mx-6 mt-3 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>
              Extra member benefits
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-violet-500 p-3 scale-105">
          <div className="flex flex-col items-center rounded-xl bg-zinc-600 py-6">
            <h3 className="text text-slate-300">STANDARD</h3>
            <h1 className="mt-8 font-serif text-5xl text-slate-200">200GB</h1>
            <p className="mt-3 text-sm text-slate-300">$3.99/month</p>
            <button className="mt-8 rounded-lg border-2 border-violet-500 bg-violet-500 px-10 py-3 text-slate-300 transition duration-300 hover:border-violet-600 hover:bg-violet-600">
              Purchase
            </button>
            <hr className="mt-10 w-full border-zinc-500" />
            <span className="mx-6 mt-7 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>
              200 GB storage
            </span>
            <span className="mx-6 mt-3 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>
              Option to add members
            </span>
            <span className="mx-6 mt-3 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>
              Extra member benefits
            </span>
          </div>
        </div>

        <div className="rounded-xl bg-zinc-500 p-3">
          <div className="flex flex-col items-center rounded-xl bg-zinc-600 py-6">
            <h3 className="text text-slate-300">PREMIUM</h3>
            <h1 className="mt-8 font-serif text-5xl text-slate-200">2TB</h1>
            <p className="mt-3 text-sm text-slate-300">8.99/month</p>
            <button className="mt-8 rounded-lg border-2 border-violet-500 px-10 py-3 text-slate-300 transition duration-300 hover:border-violet-600 hover:bg-violet-600">
              Purchase
            </button>
            <hr className="mt-10 w-full border-zinc-500" />
            <span className="mx-6 mt-7 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>2 TB
              storage
            </span>
            <span className="mx-6 mt-3 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>
              Option to add members
            </span>
            <span className="mx-6 mt-3 flex w-full items-center justify-center text-sm font-medium text-slate-200">
              <i className="fa fa-check mr-3" aria-hidden="true"></i>
              Extra member benefits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
