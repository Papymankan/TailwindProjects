import React from "react";

export default function Clipboard() {
  return (
    <div className="min-h-screen w-full bg-white font-clipboard">
      <div className="flex w-full flex-col items-center px-5 pt-40">
        <img
          src="/img/assets/Clipboard/bg-header-desktop.png"
          className="absolute left-0 right-0 top-0 hidden w-full md:block"
        />
        <img
          src="/img/assets/Clipboard/bg-header-mobile.png"
          className="absolute left-0 right-0 top-0 block w-full md:hidden"
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
        <h1 className="section-title z-10">
          A history of everything you copy{" "}
        </h1>
        <p className="z-10 mt-5 max-w-2xl text-center text-xl text-slate-500 md:max-w-3xl md:text-2xl">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices
        </p>
        <div className="z-10 mt-8 flex w-full flex-col items-center justify-center space-y-3 md:flex-row md:space-x-5 md:space-y-0">
          <button className="w-full rounded-full bg-strongCyan px-16 py-3 text-lg text-white duration-200 hover:opacity-80 md:w-auto md:px-8">
            Download for iOS
          </button>
          <button className="w-full rounded-full bg-lightBlue px-16 py-3 text-lg text-white duration-200 hover:opacity-80 md:w-auto md:px-8">
            Download for Mac
          </button>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center px-5">
        <h1 className="section-title">Keep track of your snippet</h1>
        <p className="z-10 mt-5 max-w-2xl text-center text-xl text-slate-500 md:max-w-3xl md:text-2xl">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS app will help you organize everything.
        </p>
      </div>
      <div className="relative my-20 flex flex-col items-center px-10 md:my-44 md:flex-row">
        <div className="md:mr-16 md:w-1/2 lg:mr-24">
          <img
            src="/img/assets/Clipboard/image-computer.png"
            className="right-[60%] top-[-20%] md:absolute"
          />
        </div>
        <div className="mt-10 flex w-full flex-col items-start md:mt-0 md:w-auto">
          <div className="flex w-full flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-darkGrayishBlue">
              Quick Search
            </h2>
            <p className="mt-2 max-w-96 text-center text-lg font-light text-darkGrayishBlue md:text-left">
              Easily search snippets by content, category, web address,
              application and more.
            </p>
          </div>
          <div className="mt-12 flex w-full flex-col items-center md:mt-5 md:items-start lg:mt-10">
            <h2 className="text-2xl font-bold text-darkGrayishBlue">
              iCloud Sync
            </h2>
            <p className="mt-2 max-w-96 text-center text-lg font-light text-darkGrayishBlue md:text-left">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="mt-12 flex w-full flex-col items-center md:mt-5 md:items-start lg:mt-10">
            <h2 className="text-2xl font-bold text-darkGrayishBlue">
              Completely History
            </h2>
            <p className="mt-2 max-w-96 text-center text-lg font-light text-darkGrayishBlue md:text-left">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-24 flex flex-col items-center px-5">
        <h1 className="section-title">Access clipboard anywhere</h1>
        <p className="z-10 mt-5 max-w-2xl text-center text-xl text-slate-500 md:max-w-3xl md:text-2xl">
          Whether you are on the go, or at your computer, you can access all
          your clipboard snippets in a few simple clicks.
        </p>
      </div>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </div>
  );
}
