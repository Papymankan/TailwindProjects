import React, { useState } from "react";

export default function Bookmark() {
  const [showMenu, setShowMenu] = useState(false);
  const [tab, setTab] = useState(1);

  return (
    <div className="min-h-screen w-full overflow-hidden bg-white font-rubik">
      {/* Header */}
      <div className="container sticky mx-auto flex items-center justify-between px-4 py-8">
        <svg
          width="148"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          className="z-20"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
              fill="#242A45"
              fill-rule="nonzero"
            />
            <g>
              <circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5" />
              <path
                d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
                fill="#FFF"
              />
            </g>
          </g>
        </svg>

        <div className="hidden items-center space-x-10 md:flex">
          <a href="#" className="text-lg uppercase text-grayishBlue">
            features
          </a>
          <a href="#" className="text-lg uppercase text-grayishBlue">
            download
          </a>
          <a href="#" className="text-lg uppercase text-grayishBlue">
            FAQ
          </a>
          <a
            href="#"
            className="rounded-md bg-softRed px-8 py-2 text-lg uppercase text-white"
          >
            Login
          </a>
        </div>

        <button
          className={`z-50 block h-8 w-8 cursor-pointer ${!showMenu && "space-y-1.5"} lg:hidden ${showMenu && "-space-y-0.5"} z-20`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div
            className={`w-8 border-2 border-grayishBlue duration-200 ${showMenu && "rotate-45"}`}
          ></div>
          <div
            className={`w-8 border-2 border-grayishBlue duration-200 ${showMenu && "hidden"}`}
          ></div>
          <div
            className={`w-8 border-2 border-grayishBlue duration-200 ${showMenu && "-rotate-45"}`}
          ></div>
        </button>
      </div>

      {/* Hero */}
      <div className="overflow-hidde relative w-full">
        <div className="container mx-auto mt-10 flex flex-col items-center justify-between px-4 lg:flex-row-reverse">
          {/* Hero Image */}
          <div className="relative mx-auto lg:mx-0 lg:w-1/2">
            <div className="bg-hero"></div>
            <img
              src="/img/assets/Bookmark/illustration-hero.svg"
              alt=""
              className="relative z-10 overflow-x-visible lg:top-24 xl:top-0"
            />
          </div>

          {/* Hero text */}
          <div className="flex-1">
            <h1 class="text-center text-3xl font-semibold lg:text-left lg:text-6xl">
              A Simple Bookmark Manager
            </h1>
            <p class="mx-auto mt-4 max-w-md text-center text-lg text-gray-400 lg:mx-0 lg:text-left lg:text-2xl">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <div class="mt-4 flex w-full items-center justify-center space-x-4 lg:justify-start">
              <a
                href="#"
                class="rounded border-2 border-softBlue bg-softBlue p-4 text-sm font-semibold text-white shadow-md duration-200 hover:bg-white hover:text-softBlue md:text-base"
              >
                Get It On Chrome
              </a>
              <a
                href="#"
                class="rounded border-2 border-gray-300 bg-gray-300 p-4 text-sm font-semibold text-black shadow-md duration-200 hover:bg-white hover:text-gray-600 md:text-base"
              >
                Get It On Firefox
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}

      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-center text-4xl font-semibold">Features</h2>
        <p className="mx-auto mt-5 max-w-sm text-center text-grayishBlue">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <div
          id="tabs-section"
          className="container relative mx-auto my-6 mt-8 px-6"
        >
          {/* Tabs links */}
          <div className="mx-auto flex max-w-xl flex-col justify-center space-y-4 md:flex-row md:items-center md:space-x-10 md:space-y-0 md:border-b-2">
            <div
              class="flex cursor-pointer justify-center border-b-2 text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-0"
              onClick={()=>setTab(1)}
            >
              <span
                className={`relative top-0.5 ${tab == 1 && "border-b-4 border-softRed"} py-4 duration-200`}
              >
                Simple Bookmarking
              </span>
            </div>

            <div
              class="flex cursor-pointer justify-center border-b-2 text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-0"
              onClick={()=>setTab(2)}
            >
              <span
                className={`relative top-0.5 ${tab == 2 && "border-b-4 border-softRed"} py-4 duration-200`}
              >
                Speedy Searching
              </span>
            </div>

            <div
              class="flex cursor-pointer justify-center border-b-2 text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-0"
              onClick={()=>setTab(3)}
            >
              <span
                className={`relative top-0.5 ${tab == 3 && "border-b-4 border-softRed"} py-4 duration-200`}
              >
                Easy Sharing
              </span>
            </div>
          </div>

          {tab == 1 && (
            <div className="container flex flex-col space-y-10 py-16 lg:flex-row lg:space-x-12 lg:space-y-0">
              {/* features images */}
              <div className="relative mx-auto lg:mx-0 lg:w-1/2">
                <div className="bg-tabs"></div>
                <img
                  src="/img/assets/Bookmark/illustration-features-tab-1.svg"
                  alt=""
                  className="relative z-10 w-full overflow-x-visible xl:left-32 xl:w-auto"
                />
              </div>
              {/* features text */}
              <div className="mx-auto lg:mx-0 lg:w-1/2">
                <h2 className="text-center text-4xl font-semibold md:text-left">
                  Bookmark in one click
                </h2>
                <p className="mx-auto mt-5 max-w-sm text-center text-grayishBlue lg:mx-0 lg:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <a
                  href="#"
                  class="mt-5 block rounded border-2 border-softBlue bg-softBlue p-4 text-center text-sm font-semibold text-white shadow-md duration-200 hover:bg-white hover:text-softBlue md:text-base lg:inline-block"
                >
                  More info
                </a>
              </div>
            </div>
          )}

          {tab == 2 && (
            <div className="container flex flex-col space-y-10 py-16 lg:flex-row lg:space-x-12 lg:space-y-0">
              {/* features images */}
              <div className="relative mx-auto lg:mx-0 lg:w-1/2">
                <div className="bg-tabs"></div>
                <img
                  src="/img/assets/Bookmark/illustration-features-tab-2.svg"
                  alt=""
                  className="relative z-10 w-full overflow-x-visible xl:left-32 xl:w-auto"
                />
              </div>
              {/* features text */}
              <div className="mx-auto lg:mx-0 lg:w-1/2">
                <h2 className="text-center text-4xl font-semibold lg:text-left">
                  Intelligent search
                </h2>
                <p className="mx-auto mt-5 max-w-sm text-center text-grayishBlue lg:mx-0 lg:text-left">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <a
                  href="#"
                  class="mt-5 block rounded border-2 border-softBlue bg-softBlue p-4 text-center text-sm font-semibold text-white shadow-md duration-200 hover:bg-white hover:text-softBlue md:text-base lg:inline-block"
                >
                  More info
                </a>
              </div>
            </div>
          )}

          {tab == 3 && (
            <div className="container flex flex-col space-y-10 py-16 lg:flex-row lg:space-x-12 lg:space-y-0">
              {/* features images */}
              <div className="relative mx-auto lg:mx-0 lg:w-1/2">
                <div className="bg-tabs"></div>
                <img
                  src="/img/assets/Bookmark/illustration-features-tab-3.svg"
                  alt=""
                  className="relative z-10 w-full overflow-x-visible xl:left-32 xl:w-auto"
                />
              </div>
              {/* features text */}
              <div className="mx-auto lg:mx-0 lg:w-1/2">
                <h2 className="text-center text-4xl font-semibold md:text-left">
                  Share your bookmarks
                </h2>
                <p className="mx-auto mt-5 max-w-sm text-center text-grayishBlue lg:mx-0 lg:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable a link that you can send at the click of a
                  button.
                </p>
                <a
                  href="#"
                  class="mt-5 block rounded border-2 border-softBlue bg-softBlue p-4 text-center text-sm font-semibold text-white shadow-md duration-200 hover:bg-white hover:text-softBlue md:text-base lg:inline-block"
                >
                  More info
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
