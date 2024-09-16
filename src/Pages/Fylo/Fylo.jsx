import React, { useEffect, useState } from "react";

export default function Fylo() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
    setTheme(theme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if ("theme" in localStorage) {
      let mode = JSON.stringify(localStorage.getItem("theme"));
      setTheme(JSON.parse(mode));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <div
      className={`${theme == "dark" ? "dark" : "light"} min-h-screen w-full bg-white`}
    >
      <div className="min-h-screen w-full font-opensans duration-200 dark:bg-darkBlue dark:text-white">
        {/* Header */}
        <div className="container mx-auto flex flex-col items-center justify-between space-y-5 p-10 md:flex-row md:space-y-0">
          <div className="h-16 w-44 bg-logo-light-mode bg-no-repeat dark:bg-logo-dark-mode"></div>
          <div className="flex items-center space-x-5">
            <a href="#" className="duration-200 hover:text-accentCyan">
              Features
            </a>
            <a href="#" className="duration-200 hover:text-accentCyan">
              Testimonials
            </a>

            {/* DarkMode toggle */}
            <button
              className="rounded-lg p-2.5 text-sm text-gray-500 duration-200 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              onClick={toggleTheme}
            >
              <svg
                id="theme-toggle-dark-icon"
                class="h-5 w-5 dark:hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>

              <svg
                id="theme-toggle-light-icon"
                class="hidden h-5 w-5 dark:block"
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

        {/* Hero */}
        <div className="w-full bg-curvy-light-mode bg-contain bg-bottom bg-no-repeat dark:bg-curvy-dark-mode pb-12">
          <img
            src="/img/assets/Fylo/illustration-intro.png"
            className="mx-auto px-16"
          />
          <h1 className="mx-auto mt-20 max-w-2xl text-center text-3xl font-bold md:text-4xl">
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="mx-auto mt-10 max-w-sm text-center text-sm md:max-w-xl md:text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="mx-auto mt-12 block rounded-full bg-accentCyan px-12 py-3 hover:opacity-80 hover:scale-105 duration-200 text-white">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}
