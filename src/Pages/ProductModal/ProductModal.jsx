import React from "react";

export default function ProductModal() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center rounded-lg bg-white p-10 shadow-lg md:flex-row md:items-start md:space-x-9">
          <div className="overflow-hidden">
            <img
              src="/img/assets/headphone.png"
              className="h-40 object-contain transition duration-200 hover:scale-110"
            />
          </div>
          <div className="flex max-w-80 flex-col items-center md:block">
            <span className="mt-4 rounded-full bg-black px-2 py-1 text-xs text-white md:mt-0">
              free shipping
            </span>
            <h1 className="mt-3 text-center text-xl font-bold md:text-left">
              Razer Kraken Kitty Edit Gaming Headset Quartz
            </h1>
            <p className="mt-6 text-sm line-through">$799</p>
            <h1 className="mt-2 text-4xl font-bold">$599</h1>
            <p className="mt-3 text-xs text-slate-400">
              The offer is valid until April 3rd or as long as stock last
            </p>

            <button className="group mt-8 w-full rounded-xl border-b-8 border-blue-700 bg-blue-700 text-center text-white duration-100 hover:border-b-0 hover:border-t-8">
              <div className="w-full rounded-xl bg-blue-500 p-3 group-hover:bg-blue-700">
                Add to cart
              </div>
            </button>

            <div className="group mt-4 flex items-center text-xs">
              <span className="mr-2 rounded-full bg-green-400 p-1.5 group-hover:animate-ping"></span>{" "}
              50+ pcs in stock
            </div>
            <div className="mt-5 flex w-full flex-col items-center justify-between md:flex-row">
              <div className="flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg border-2 p-2 px-3 shadow-sm duration-150 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg md:w-auto">
                <img src="/img/assets/weight.png" className="h-7" />
                <span>Add to cart</span>
              </div>
              <div className="mt-2 flex w-full cursor-pointer items-center justify-center space-x-2 rounded-lg border-2 p-2 px-3 shadow-sm duration-150 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg md:mt-0 md:w-auto">
                <img src="/img/assets/heart.png" className="h-7" />
                <span>Add to wishlist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
