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
          iOS app will help you organize everything
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
              application and more
            </p>
          </div>
          <div className="mt-12 flex w-full flex-col items-center md:mt-5 md:items-start lg:mt-10">
            <h2 className="text-2xl font-bold text-darkGrayishBlue">
              iCloud Sync
            </h2>
            <p className="mt-2 max-w-96 text-center text-lg font-light text-darkGrayishBlue md:text-left">
              Instantly saves and syncs snippets across all your devices
            </p>
          </div>
          <div className="mt-12 flex w-full flex-col items-center md:mt-5 md:items-start lg:mt-10">
            <h2 className="text-2xl font-bold text-darkGrayishBlue">
              Completely History
            </h2>
            <p className="mt-2 max-w-96 text-center text-lg font-light text-darkGrayishBlue md:text-left">
              Retrieve any snippets from the first moment you started using the
              app
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center px-5">
        <h1 className="section-title">Access clipboard anywhere</h1>
        <p className="z-10 mt-5 max-w-2xl text-center text-xl text-slate-500 md:max-w-3xl md:text-2xl">
          Whether you are on the go, or at your computer, you can access all
          your clipboard snippets in a few simple clicks
        </p>
        <img
          src="/img/assets/Clipboard/image-devices.png"
          className="mx-auto mt-10"
          alt=""
        />
      </div>

      <div className="mt-24 flex flex-col items-center px-5">
        <h1 className="section-title">Supercharge your workflow</h1>
        <p className="z-10 mt-5 max-w-2xl text-center text-xl text-slate-500 md:max-w-3xl md:text-2xl">
          We have got the tools to boost your productivity
        </p>
        <div className="mt-20 flex w-full flex-col items-center justify-center space-y-16 md:flex-row md:items-start md:space-x-5 md:space-y-0">
          <div className="flex flex-col items-center">
            <svg width="44" height="40" xmlns="http://www.w3.org/2000/svg">
              <g fill="#9EABB2" fill-rule="nonzero">
                <path d="M11.07 0C8.353 0 6.14 2.192 6.14 4.876l-.179 25.278 2.69.02.179-25.289c0-1.21 1.005-2.196 2.24-2.196h27.027V0H11.071z" />
                <path d="M38.097 0a5.115 5.115 0 00-5.11 5.11v28.37c0 2.052-1.668 3.72-3.72 3.72a3.725 3.725 0 01-3.72-3.72V30.21c0-.743-.601-1.345-1.344-1.345H1.345C.602 28.864 0 29.466 0 30.21v3.272a6.417 6.417 0 006.41 6.409V37.2a3.724 3.724 0 01-3.72-3.72v-1.927h20.168v1.928a6.417 6.417 0 006.41 6.409 6.417 6.417 0 006.409-6.41V12.46h6.185c.743 0 1.345-.602 1.345-1.345V5.11A5.115 5.115 0 0038.097 0zm2.42 9.77h-4.84V5.11a2.423 2.423 0 012.42-2.42 2.423 2.423 0 012.42 2.42v4.66z" />
                <path d="M6.14 37.201h22.813v2.689H6.14zM19.99 7.485h-6.947a1.345 1.345 0 100 2.69h6.947a1.345 1.345 0 100-2.69zM28.057 12.863H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69zM28.057 18.242H13.043a1.345 1.345 0 100 2.69h15.014a1.344 1.344 0 100-2.69zM28.057 23.62H13.043a1.345 1.345 0 100 2.69h15.014a1.345 1.345 0 100-2.69z" />
              </g>
            </svg>
            <h3 className="mt-3 text-2xl font-bold text-darkGrayishBlue">
              Create Blacklists
            </h3>
            <p className="mt-2 max-w-96 text-center text-lg font-light text-darkGrayishBlue">
              Easily search snippets by content, category, web address,
              application and more
            </p>
          </div>

          <div className="flex flex-col items-center">
            <svg width="36" height="32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.872 14.736a235.39 235.39 0 012.192 5.744c.746 2.027 1.536 4.24 2.368 6.64h-5.344a44.4 44.4 0 00-.784-2.368c-.288-.81-.57-1.632-.848-2.432h-8.64c-.278.8-.56 1.621-.848 2.432a44.4 44.4 0 00-.784 2.368H0a371.54 371.54 0 012.368-6.644 233.104 233.104 0 012.192-5.748 206.71 206.71 0 012.112-5.112c.693-1.61 1.413-3.136 2.16-4.736H13.6c.725 1.6 1.44 3.125 2.144 4.736.704 1.61 1.413 3.328 2.128 5.12zM7.968 18.32h6.303c-.34-.96-.671-1.878-.991-2.752a94.407 94.407 0 00-.912-2.4c-.288-.725-.539-1.365-.752-1.92-.214-.555-.384-.992-.512-1.313-.107.32-.267.758-.48 1.313a1241.872 1241.872 0 00-1.648 4.32c-.331.874-.667 1.792-1.008 2.752zM35.04 3.2h-3.2v25.6h3.2V32h-9.6v-3.2h3.2V3.2h-3.2V0h9.6v3.2z"
                fill="#9EABB2"
                fill-rule="nonzero"
              />
            </svg>
            <h3 className="mt-3 text-2xl font-bold text-darkGrayishBlue">
              Plain text snippets
            </h3>
            <p className="mt-2 max-w-96 text-center text-lg font-light text-darkGrayishBlue">
              Remove unwanted formatting from copied text, for a consistent look
            </p>
          </div>

          <div className="flex flex-col items-center">
            <svg width="50" height="32" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M49.059 14.072c-2.585-4.227-6.06-7.623-10.424-10.188C34.27 1.318 29.66.035 24.806.035c-4.854 0-9.464 1.283-13.829 3.849C6.612 6.449 3.137 9.845.554 14.072c-.37.646-.554 1.283-.554 1.91 0 .628.185 1.265.554 1.91 2.583 4.227 6.058 7.624 10.423 10.189 4.365 2.565 8.975 3.847 13.83 3.847 4.853 0 9.463-1.277 13.828-3.833 4.365-2.557 7.84-5.957 10.424-10.202.369-.646.553-1.283.553-1.91 0-.628-.184-1.265-.553-1.911zM18.867 6.5c1.652-1.652 3.631-2.478 5.939-2.478.369 0 .683.13.941.388.258.258.388.572.388.941 0 .37-.13.683-.387.941a1.28 1.28 0 01-.942.388c-1.587 0-2.944.563-4.07 1.689-1.126 1.126-1.688 2.482-1.688 4.07 0 .369-.13.683-.388.941a1.28 1.28 0 01-.941.388c-.37 0-.683-.13-.942-.388a1.282 1.282 0 01-.388-.942c0-2.306.827-4.286 2.478-5.938zm17.969 18.522c-3.701 2.242-7.71 3.364-12.03 3.364-4.319 0-8.329-1.121-12.03-3.364-3.7-2.243-6.777-5.256-9.232-9.04 2.805-4.356 6.321-7.614 10.548-9.773a12.099 12.099 0 00-1.689 6.23c0 3.414 1.214 6.334 3.64 8.762 2.428 2.427 5.349 3.64 8.763 3.64 3.415 0 6.335-1.213 8.762-3.64 2.428-2.427 3.641-5.348 3.641-8.763 0-2.233-.563-4.31-1.689-6.229 4.227 2.16 7.743 5.418 10.548 9.773-2.454 3.784-5.532 6.797-9.232 9.04z"
                fill="#9EABB2"
                fill-rule="nonzero"
              />
            </svg>
            <h3 className="mt-3 text-2xl font-bold text-darkGrayishBlue">
              Sneak preview
            </h3>
            <p className="mt-2 max-w-96 text-center text-lg font-light text-darkGrayishBlue">
              Quick preview of all snippets on your Clipboard for easy access
            </p>
          </div>
        </div>
        <div className="mt-10 flex w-full flex-wrap items-center justify-evenly sm:mt-20">
          <img
            src="/img/assets/Clipboard/logo-google.png"
            className="w-[70%] px-16 py-5 sm:w-1/3 sm:px-8 md:px-12 lg:w-1/5 xl:w-1/6"
            alt=""
          />
          <img
            src="/img/assets/Clipboard/logo-hp.png"
            className="w-[70%] px-16 py-5 sm:w-1/3 sm:px-8 md:px-12 lg:w-1/5 xl:w-1/6"
            alt=""
          />
          <img
            src="/img/assets/Clipboard/logo-ibm.png"
            className="w-[70%] px-16 py-5 sm:w-1/3 sm:px-8 md:px-12 lg:w-1/5 xl:w-1/6"
            alt=""
          />
          <img
            src="/img/assets/Clipboard/logo-microsoft.png"
            className="w-[70%] px-16 py-5 sm:w-1/3 sm:px-8 md:px-12 lg:w-1/5 xl:w-1/6"
            alt=""
          />
          <img
            src="/img/assets/Clipboard/logo-vector-graphics.png"
            className="w-[70%] px-16 py-5 sm:w-1/3 sm:px-8 md:px-12 lg:w-1/5 xl:w-1/6"
            alt=""
          />
        </div>
      </div>

      <div className="mt-20 flex w-full flex-col items-center px-5">
        <h1 className="section-title z-10">Clipboard for iOS and MacOS</h1>
        <p className="z-10 mt-5 max-w-2xl text-center text-xl text-slate-500 md:max-w-3xl md:text-2xl">
          Available for free on the App Store. Downlaod for Mac or iOS, sync
          with iCloud and you are ready to start adding to your Clipboard
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

      <div className="mt-20 flex w-full flex-col items-center justify-between bg-gray-100 px-20 md:flex-row lg:px-40">
        <div>
          <svg
            width="125"
            height="125"
            xmlns="http://www.w3.org/2000/svg"
            className="z-10 scale-50"
          >
            <g
              stroke="#26BBA4"
              stroke-width="10"
              fill="none"
              fill-rule="evenodd"
            >
              <circle cx="62.5" cy="62.5" r="57.5" />
              <path
                d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
        <div className="my-8 flex w-full flex-col md:my-0 md:max-w-80 md:flex-row md:space-x-5">

          <div className="flex flex-col items-center">
            <a href="#" className="mt-2 block w-full md:text-left hover:text-strongCyan duration-100 transition text-center">
              FAQs
            </a>
            <a href="#" className="mt-2 block w-full md:text-left hover:text-strongCyan duration-100 transition text-center">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="mt-2 block w-full md:text-left hover:text-strongCyan duration-100 transition text-center">
              Privacy Policy
            </a>
            <a href="#" className="mt-2 block w-full md:text-left hover:text-strongCyan duration-100 transition text-center">
              Press Kit
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="mt-2 block w-full md:text-left hover:text-strongCyan duration-100 transition text-center">
              Install Guide
            </a>
          </div>

        </div>
        <div className="flex items-center">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              fill="#4C545C"
              fill-rule="nonzero"
            />
          </svg>
          <svg
            width="24"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3"
          >
            <path
              d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              fill="#4C545C"
              fill-rule="nonzero"
            />
          </svg>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              fill="#4C545C"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
