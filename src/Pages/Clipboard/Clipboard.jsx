import React from "react";

export default function Clipboard() {
  return (
    <div className="min-h-screen w-full bg-white font-clipboard">
      <div className="flex w-full flex-col items-center px-5 pt-40">
        <img
          src="/img/assets/Clipboard/bg-header-desktop.png"
          className="absolute left-0 right-0 top-0 w-full hidden md:block"
        />
        <img
          src="/img/assets/Clipboard/bg-header-mobile.png"
          className="absolute left-0 right-0 top-0 w-full block md:hidden"
        />
        <svg
          width="125"
          height="125"
          xmlns="http://www.w3.org/2000/svg"
          className="z-10"
        >
          <g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd">
            <circle cx="62.5" cy="62.5" r="57.5" />
            <path
              d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
              stroke-linecap="round"
            />
          </g>
        </svg>
        <h1 className="mt-10 text-center text-3xl font-bold text-darkGrayishBlue md:text-5xl">
          A history of everything you copy{" "}
        </h1>
        <p className="text-md mt-5 max-w-2xl text-center text-slate-500 md:max-w-3xl md:text-2xl">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center space-y-3 md:flex-row md:space-x-5 md:space-y-0">
          <button className="w-full rounded-full bg-strongCyan px-16 py-3 text-lg text-white duration-200 hover:opacity-80 md:w-auto md:px-8">
            Download for iOS
          </button>
          <button className="w-full rounded-full bg-lightBlue px-16 py-3 text-lg text-white duration-200 hover:opacity-80 md:w-auto md:px-8">
            Download for Mac
          </button>
        </div>
      </div>
    </div>
  );
}
