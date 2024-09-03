import React from "react";

export default function ImageGallery() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="rounded-xl bg-white p-3 shadow-lg sm:p-6">
          <div className="flex items-center justify-end">
            <div className="cursor-pointer border-b-2 border-white p-4 font-semibold duration-200 hover:border-black">
              Vector
            </div>
            <div className="cursor-pointer border-b-2 border-white p-4 font-semibold duration-200 hover:border-black">
              Illustrations
            </div>
            <div className="cursor-pointer border-b-2 border-white p-4 font-semibold duration-200 hover:border-black">
              Images
            </div>
            <div className="cursor-pointer border-b-2 border-white p-4 font-semibold duration-200 hover:border-black">
              Icons
            </div>
          </div>
          <div className="mt-5 flex flex-col items-center justify-between sm:flex-row">
            <div className="flex w-full items-center justify-between border-b-2 p-3 sm:w-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-60 focus:outline-none md:w-80"
              />
              <i
                class="fa fa-search text-xl text-slate-400 duration-200 hover:scale-x-125"
                aria-hidden="true"
              ></i>
            </div>
            <button className="mt-5 w-full rounded-lg border-2 border-black bg-black px-12 py-3 text-white hover:bg-white hover:text-black sm:mt-0 sm:w-auto">
              Upload
            </button>
          </div>

          <div className="mt-4 flex max-w-[966px] flex-wrap justify-evenly">
            <div className="group my-2 sm:h-48 lg:h-60">
              <img
                src="/img/assets/imagegallery-1.jpg"
                className="h-full w-full"
              />
              <div className="gallery-layer relative bottom-14 left-0 right-0 flex w-full items-center justify-between px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p>Abstract Painting</p>
                  <span>245 likes . 35 shares</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </div>
            </div>
            <div className="group my-2 sm:h-48 lg:h-60">
              <img
                src="/img/assets/imagegallery-2.jpg"
                className="h-full w-full"
              />
              <div className="gallery-layer relative bottom-14 left-0 right-0 flex w-full items-center justify-between px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p>Abstract Painting</p>
                  <span>245 likes . 35 shares</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </div>
            </div>
            <div className="group my-2 sm:h-48 lg:h-60">
              <img
                src="/img/assets/imagegallery-3.jpg"
                className="h-full w-full"
              />
              <div className="gallery-layer relative bottom-14 left-0 right-0 flex w-full items-center justify-between px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p>Abstract Painting</p>
                  <span>245 likes . 35 shares</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </div>
            </div>
            <div className="group my-2 sm:h-48 lg:h-60">
              <img
                src="/img/assets/imagegallery-4.jpg"
                className="h-full w-full"
              />
              <div className="gallery-layer relative bottom-14 left-0 right-0 flex w-full items-center justify-between px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p>Abstract Painting</p>
                  <span>245 likes . 35 shares</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </div>
            </div>
            <div className="group my-2 sm:h-48 lg:h-60">
              <img
                src="/img/assets/imagegallery-5.jpg"
                className="h-full w-full"
              />
              <div className="gallery-layer relative bottom-14 left-0 right-0 flex w-full items-center justify-between px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p>Abstract Painting</p>
                  <span>245 likes . 35 shares</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </div>
            </div>
            <div className="group my-2 sm:h-48 lg:h-60">
              <img
                src="/img/assets/imagegallery-6.jpg"
                className="h-full w-full"
              />
              <div className="gallery-layer relative bottom-14 left-0 right-0 flex w-full items-center justify-between px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p>Abstract Painting</p>
                  <span>245 likes . 35 shares</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bookmark"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.2"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
