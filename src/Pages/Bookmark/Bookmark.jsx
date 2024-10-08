import React, { useEffect, useState } from "react";

export default function Bookmark() {
  const [showMenu, setShowMenu] = useState(false);
  const [tab, setTab] = useState(1);
  const [accordion, setAccordion] = useState(2);

 const CheckWidth = ()=>{
    if(window.innerWidth > 976){
      setShowMenu(false)
    }
 }

  window.addEventListener('resize' , CheckWidth)

  return (
    <div className="relative min-h-screen w-full overflow-hidden scroll-smooth bg-white font-rubik">
      {/* Header */}
      <div className="container mx-auto flex items-center justify-between px-4 py-8">
        <svg
          width="148"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          className="z-50"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
              fill={showMenu ? "white" : "#242A45"}
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

        <div className="hidden items-center space-x-10 lg:flex">
          <a href="#features" className="text-lg uppercase text-grayishBlue">
            features
          </a>
          <a href="#download" className="text-lg uppercase text-grayishBlue">
            download
          </a>
          <a href="#FAQ" className="text-lg uppercase text-grayishBlue">
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

        {showMenu && (
          <div className="fixed bottom-0 left-0 right-0 top-0 z-20 flex lg:hidden h-screen w-screen flex-col items-center bg-veryDarkBlue2 px-16 py-24 text-white opacity-90">
            <a
              href="#features"
              className="w-full py-3 text-center text-xl uppercase"
              onClick={()=>setShowMenu(false)}
            >
              features
            </a>
            <a
              href="#download"
              className="w-full border-t-2 border-gray-500 py-3 text-center text-xl uppercase"
              onClick={()=>setShowMenu(false)}
            >
              download
            </a>
            <a
              href="#FAQ"
              className="w-full border-y-2 border-gray-500 py-3 text-center text-xl uppercase"
              onClick={()=>setShowMenu(false)}
            >
              FAQ
            </a>
            <a
              href="#"
              className="mt-3 w-full border-2 border-white py-3 text-center text-xl uppercase duration-200 hover:bg-white hover:text-veryDarkBlue2 rounded-lg"
            >
              Login
            </a>
          </div>
        )}
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
      <div className="container mx-auto mt-16 px-4" id="features">
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
              onClick={() => setTab(1)}
            >
              <span
                className={`relative top-0.5 ${tab == 1 && "border-b-4 border-softRed"} py-4`}
              >
                Simple Bookmarking
              </span>
            </div>

            <div
              class="flex cursor-pointer justify-center border-b-2 text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-0"
              onClick={() => setTab(2)}
            >
              <span
                className={`relative top-0.5 ${tab == 2 && "border-b-4 border-softRed"} py-4`}
              >
                Speedy Searching
              </span>
            </div>

            <div
              class="flex cursor-pointer justify-center border-b-2 text-center text-gray-600 hover:text-softRed md:w-1/3 md:border-0"
              onClick={() => setTab(3)}
            >
              <span
                className={`relative top-0.5 ${tab == 3 && "border-b-4 border-softRed"} py-4`}
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

      {/* Download boxes */}
      <div className="container mx-auto mt-16 px-4" id="download">
        <h2 className="text-center text-4xl font-semibold">
          Download the extension
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-center text-grayishBlue">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>

        <div className="mx-auto my-10 flex max-w-5xl flex-col items-center space-y-10 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative w-full rounded-xl px-1 py-8 shadow-xl lg:w-1/3">
            <img
              src="/img/assets/Bookmark/logo-chrome.svg"
              alt=""
              className="mx-auto"
            />
            <h1 className="mt-4 text-center text-xl font-bold">
              Add to Chrome
            </h1>
            <p className="mx-auto mt-2 max-w-sm text-center text-grayishBlue">
              Minimum Version 62
            </p>
            <div className="mt-6 h-2 w-full bg-dots bg-repeat-x"></div>
            <div className="mt-5 w-full px-5">
              <a
                href="#"
                class="mt-5 block rounded border-2 border-softBlue bg-softBlue p-4 text-center text-sm font-semibold text-white shadow-md duration-200 hover:bg-white hover:text-softBlue md:text-base"
              >
                App & Install Application
              </a>
            </div>
          </div>

          <div className="relative w-full rounded-xl px-1 py-8 shadow-xl lg:top-8 lg:w-1/3">
            <img
              src="/img/assets/Bookmark/logo-firefox.svg"
              alt=""
              className="mx-auto"
            />
            <h1 className="mt-4 text-center text-xl font-bold">
              Add to FireFox
            </h1>
            <p className="mx-auto mt-2 max-w-sm text-center text-grayishBlue">
              Minimum Version 55
            </p>
            <div className="mt-6 h-2 w-full bg-dots bg-repeat-x"></div>
            <div className="mt-5 w-full px-5">
              <a
                href="#"
                class="mt-5 block rounded border-2 border-softBlue bg-softBlue p-4 text-center text-sm font-semibold text-white shadow-md duration-200 hover:bg-white hover:text-softBlue md:text-base"
              >
                App & Install Application
              </a>
            </div>
          </div>

          <div className="relative w-full rounded-xl px-1 py-8 shadow-xl lg:top-16 lg:w-1/3">
            <img
              src="/img/assets/Bookmark/logo-opera.svg"
              alt=""
              className="mx-auto"
            />
            <h1 className="mt-4 text-center text-xl font-bold">
              Add to Chrome
            </h1>
            <p className="mx-auto mt-2 max-w-sm text-center text-grayishBlue">
              Minimum Version 49
            </p>
            <div className="mt-6 h-2 w-full bg-dots bg-repeat-x"></div>
            <div className="mt-5 w-full px-5">
              <a
                href="#"
                class="mt-5 block rounded border-2 border-softBlue bg-softBlue p-4 text-center text-sm font-semibold text-white shadow-md duration-200 hover:bg-white hover:text-softBlue md:text-base"
              >
                App & Install Application
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className={`container mx-auto mt-40 px-4`} id="FAQ">
        <h2 className="text-center text-4xl font-semibold">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-center text-grayishBlue">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>

        <div className="mx-auto mt-10 h-[500px] max-w-2xl overflow-hidden md:h-[450px] lg:h-[405px]">
          <div className="mb-4 w-full border-b">
            <div
              className="veryDarkBlue2 group flex w-full cursor-pointer items-center justify-between py-4 text-lg"
              onClick={() => {
                if (accordion == 2) {
                  setAccordion(0);
                } else {
                  setAccordion(2);
                }
              }}
            >
              <p className="duration-200 group-hover:text-softRed">
                What is Bookmark ?
              </p>
              <button>
                <img
                  src="/img/assets/Bookmark/icon-arrow.svg"
                  alt=""
                  className={`${accordion == 2 && "rotate-180"} duration-300`}
                />
              </button>
            </div>
            <div
              className={`w-full overflow-hidden text-justify text-grayishBlue ${accordion != 2 ? "max-h-0" : "max-h-screen"} mb-2 transition-all duration-300 ease-in-out`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </div>
          </div>

          <div className="mb-4 w-full border-b">
            <div
              className="veryDarkBlue2 group flex w-full cursor-pointer items-center justify-between py-4 text-lg"
              onClick={() => {
                if (accordion == 1) {
                  setAccordion(0);
                } else {
                  setAccordion(1);
                }
              }}
            >
              <p className="duration-200 group-hover:text-softRed">
                How can I request a new browser ?
              </p>
              <button>
                <img
                  src="/img/assets/Bookmark/icon-arrow.svg"
                  alt=""
                  className={`${accordion == 1 && "rotate-180"} duration-300`}
                />
              </button>
            </div>
            <div
              className={`w-full overflow-hidden text-justify text-grayishBlue ${accordion != 1 ? "max-h-0" : "max-h-screen"} mb-2 transition-all duration-300 ease-in-out`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </div>
          </div>

          <div className="mb-4 w-full border-b">
            <div
              className="veryDarkBlue2 group flex w-full cursor-pointer items-center justify-between py-4 text-lg"
              onClick={() => {
                if (accordion == 3) {
                  setAccordion(0);
                } else {
                  setAccordion(3);
                }
              }}
            >
              <p className="duration-200 group-hover:text-softRed">
                Is ther a mobile app ?
              </p>
              <button>
                <img
                  src="/img/assets/Bookmark/icon-arrow.svg"
                  alt=""
                  className={`${accordion == 3 && "rotate-180"} duration-300`}
                />
              </button>
            </div>
            <div
              className={`w-full overflow-hidden text-justify text-grayishBlue ${accordion != 3 ? "max-h-0" : "max-h-screen"} mb-2 transition-all duration-300 ease-in-out`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </div>
          </div>

          <div className="mb-4 w-full">
            <div
              className="veryDarkBlue2 group flex w-full cursor-pointer items-center justify-between py-4 text-lg"
              onClick={() => {
                if (accordion == 4) {
                  setAccordion(0);
                } else {
                  setAccordion(4);
                }
              }}
            >
              <p className="duration-200 group-hover:text-softRed">
                What about other Chromium browsers ?
              </p>
              <button>
                <img
                  src="/img/assets/Bookmark/icon-arrow.svg"
                  alt=""
                  className={`${accordion == 4 && "rotate-180"} duration-300`}
                />
              </button>
            </div>
            <div
              className={`w-full overflow-hidden text-justify text-grayishBlue ${accordion != 4 ? "max-h-0" : "max-h-screen"} mb-2 transition-all duration-300 ease-in-out`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellat amet doloribus consequuntur eos similique provident
              tempora voluptates iure quia fuga dicta voluptatibus culpa
              mollitia recusandae delectus id suscipit labore?
            </div>
          </div>
        </div>
      </div>

      {/* Up to date */}

      <div className="w-full bg-softBlue py-20 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl">35,000+ Already Joined</h3>
          <h1 className="mx-auto mt-8 max-w-xl text-center text-4xl font-bold">
            Stay up-to-date with what we're doing
          </h1>
          <div className="mt-8 flex w-full flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <input
              type="text"
              className="min-w-72 rounded-md p-2 text-lg text-black"
              placeholder="Bookmark@example.com"
            />
            <a
              href="#"
              className="rounded-md bg-softRed px-8 py-2 text-lg uppercase text-white duration-200 hover:opacity-80"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="w-full bg-veryDarkBlue2 py-10">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
          <div className="flex flex-col items-center space-y-5 text-grayishBlue md:flex-row md:space-x-10 md:space-y-0">
            <svg
              width="148"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              className="z-20"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z"
                  fill="white"
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
            <a
              href="#"
              className="text-lg uppercase duration-200 hover:text-white md:pl-8"
            >
              features
            </a>
            <a
              href="#"
              className="text-lg uppercase duration-200 hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-lg uppercase duration-200 hover:text-white"
            >
              Contact
            </a>
          </div>
          <div className="mt-6 flex items-center space-x-6 md:mt-0">
            <img
              src="/img/assets/Bookmark/icon-twitter.svg"
              alt=""
              className="cursor-pointer"
            />
            <img
              src="/img/assets/Bookmark/icon-facebook.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
