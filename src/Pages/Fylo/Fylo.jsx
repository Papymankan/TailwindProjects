import React from "react";

export default function Fylo() {
  return (
    <div className="dark min-h-screen w-full bg-white">
      <div className="dark:bg-darkBlue font-opensans min-h-screen w-full dark:text-white">
        {/* Header */}
        <div className="container mx-auto flex flex-col items-center justify-between space-y-5 border-2 border-white p-10 md:flex-row md:space-y-0">
          <div className="bg-logo-light-mode dark:bg-logo-dark-mode h-16 w-44 bg-no-repeat"></div>
          <div className="flex items-center space-x-5">
            <a href="#" className="hover:text-accentCyan duration-200">
              Features
            </a>
            <a href="#" className="hover:text-accentCyan duration-200">
              Testimonials
            </a>

            {/* DarkMode toggle */}
            <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 duration-200">
              <svg
                id="theme-toggle-dark-icon"
                class="dark:hidden h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>

              <svg
                id="theme-toggle-light-icon"
                class="dark:block hidden h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
