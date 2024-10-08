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
            <a href="#features" className="duration-200 hover:text-accentCyan">
              Features
            </a>
            <a
              href="#Testimonials"
              className="duration-200 hover:text-accentCyan"
            >
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
        <div className="w-full bg-curvy-light-mode bg-contain bg-bottom bg-no-repeat pb-12 dark:bg-curvy-dark-mode">
          <img
            src="/img/assets/Fylo/illustration-intro.png"
            className="mx-auto px-16"
          />
          <h1 className="mx-auto mt-20 max-w-2xl px-5 text-center text-3xl font-bold md:text-4xl">
            All your files in one secure location, assessible anywhere.
          </h1>
          <p className="mx-auto mt-10 max-w-sm px-5 text-center text-sm md:max-w-xl md:text-lg">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button className="mx-auto mt-12 block rounded-full bg-accentCyan px-12 py-3 text-white duration-200 hover:scale-105 hover:opacity-80">
            Get Started
          </button>
        </div>

        {/* Feature Boxes */}
        <div
          id="features"
          className="w-full bg-gray-50 py-10 dark:bg-darkBlue1"
        >
          <div className="container mx-auto flex flex-col flex-wrap items-start md:flex-row">
            {/* Feature 1 */}
            <div className="mt-12 flex w-full flex-col items-center px-4 md:w-1/2">
              <svg width="83" height="88" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M2.476 53.466h71.117v-7.983H2.476v7.983zm49.237 11.977h3.943v3.529H20.413v-3.529h3.942c.656 0 1.185-.529 1.185-1.183v-8.427h24.988v8.427c0 .654.53 1.183 1.185 1.183zM2.476 43.116h71.117V2.95H2.476v40.165zM1.29.585C.635.585.105 1.114.105 1.768V54.65c0 .655.53 1.184 1.185 1.184h21.88v7.243h-3.943c-.655 0-1.185.532-1.185 1.184v5.895c0 .652.53 1.184 1.185 1.184h37.615c.654 0 1.185-.532 1.185-1.184V64.26c0-.652-.531-1.184-1.185-1.184h-3.944v-7.243h21.88c.655 0 1.186-.53 1.186-1.184V1.77c0-.655-.531-1.184-1.185-1.184H1.29z"
                    fill="#62E0D9"
                  />
                  <path
                    d="M36.412 47.92c-.654 0-1.185.53-1.185 1.184a1.185 1.185 0 0 0 2.37 0c0-.653-.531-1.184-1.185-1.184"
                    fill="#62E0D9"
                  />
                  <g transform="translate(55.377 23.07)" stroke="#62E0D9">
                    <rect
                      stroke-width="1.641"
                      fill=""
                      x=".821"
                      y=".821"
                      width="25.621"
                      height="52.795"
                      rx="2.462"
                    />
                    <path
                      stroke-width="1.458"
                      fill="#FFF"
                      d="M.729 6.646h25.803v1H.729zM.729 44.515h25.803v1H.729z"
                    />
                    <ellipse
                      stroke-width="1.01"
                      cx="13.038"
                      cy="48.519"
                      rx="1.185"
                      ry="1.183"
                    />
                  </g>
                  <g>
                    <path
                      d="M45.4 15.969h-.197l-5.235 2.07-5.927-2.07-5.531 1.874c-.198.098-.395.197-.395.493v14.89c0 .297.197.494.494.494h.197l5.235-2.071 5.927 2.07 5.531-1.873c.198-.099.395-.296.395-.493V16.462c0-.296-.197-.493-.494-.493zM39.968 30.76l-5.927-1.997V17.448l5.927 1.997v11.316z"
                      fill="#62E0D9"
                    />
                    <path
                      d="M30.485 15.969c-1.32 0-2.37.917-2.37 2.07 0 1.54 2.37 3.847 2.37 3.847s2.371-2.308 2.371-3.846c0-1.154-1.05-2.071-2.37-2.071zm0 2.958c-.51 0-.911-.361-.911-.821 0-.46.4-.822.911-.822s.912.361.912.822c0 .46-.401.821-.912.821z"
                      fill="#FFF"
                    />
                  </g>
                </g>
              </svg>
              <h2 className="mt-6 text-center text-xl font-bold">
                Access your file from anywhere
              </h2>
              <p className="max-w-m mt-5 text-center">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="mt-12 flex w-full flex-col items-center px-4 md:w-1/2">
              <svg width="70" height="88" xmlns="http://www.w3.org/2000/svg">
                <g
                  stroke="#62E0D9"
                  stroke-width="3.064"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path d="M43.703 35.501l-12.23 12.474-8.999-9.177-4.499 4.589 13.497 13.766L52.08 36.137l-4.5-4.589z" />
                  <path d="M56.916 9.85c-5.342 0-10.653-1.136-15.482-3.484-2.313-1.113-4.679-2.533-6.724-4.302-2.045 1.769-4.411 3.189-6.725 4.302C23.157 8.714 17.847 9.85 12.504 9.85H1.914v40.59c0 7.11 2.817 13.945 7.827 18.893 7.356 7.25 24.97 16.674 24.97 16.674s17.612-9.424 24.968-16.674c5.01-4.948 7.827-11.784 7.827-18.893V9.85h-10.59z" />
                  <path d="M58.94 24.532v26.249c0 4.742-1.903 9.34-5.219 12.615-4.612 4.547-15.127 10.77-19.01 13-3.886-2.233-14.41-8.463-19.017-13.004-3.314-3.272-5.214-7.869-5.214-12.611V18.927h2.024c6.707 0 13.334-1.499 19.167-4.333a44.31 44.31 0 0 0 3.04-1.61c.972.565 2 1.11 3.064 1.623 5.814 2.826 12.434 4.32 19.141 4.32h2.024v5.605z" />
                </g>
              </svg>
              <h2 className="mt-6 text-center text-xl font-bold">
                Security you can trust
              </h2>
              <p className="max-w-m mt-5 text-center">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="mt-12 flex w-full flex-col items-center px-4 md:w-1/2">
              <svg width="86" height="71" xmlns="http://www.w3.org/2000/svg">
                <g
                  stroke="#62E0D9"
                  stroke-width="1.3"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                >
                  <path
                    d="M33.897 11.338v2.027-2.027zm0 40.551v2.028-2.028zm20.31-18.248h-2.031 2.031zm-40.62 0h-2.032 2.031zm19.294 8.11c-.78 0-1.56-.296-2.153-.89l-13.08-13.057 4.308-4.3L32.881 34.41 60.176 7.16l4.31 4.3-29.45 29.4a3.04 3.04 0 0 1-2.155.89zm23.154-30.417C50.283 5.104 42.039 1.2 32.88 1.2 15.495 1.2 1.4 15.271 1.4 32.627s14.095 31.428 31.481 31.428c17.386 0 31.481-14.072 31.481-31.428 0-6.018-1.694-11.64-4.63-16.417l-3.697-4.876zM51.7 15.616a25.346 25.346 0 0 0-18.82-8.333c-14.022 0-25.388 11.346-25.388 25.344 0 13.999 11.366 25.345 25.388 25.345 14.022 0 25.388-11.346 25.388-25.345 0-4.329-1.087-8.402-3.002-11.966l-3.566-5.045z"
                    stroke-linecap="round"
                  />
                  <path d="M55.368 40.484c0 2.48-2.015 4.49-4.498 4.49a4.494 4.494 0 0 1-4.497-4.49c0-2.48 2.015-4.49 4.497-4.49a4.494 4.494 0 0 1 4.498 4.49z" />
                  <path
                    d="M50.87 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.248 2.248 0 0 0 2.249 2.245v8.979a2.247 2.247 0 0 0 2.249 2.245h4.497a2.247 2.247 0 0 0 2.249-2.245v-8.98a2.248 2.248 0 0 0 2.248-2.244V49.16a3.34 3.34 0 0 0-1.907-3.033c-1.226-.57-2.94-1.154-4.839-1.154z"
                    stroke-linecap="round"
                  />
                  <path d="M68.86 40.484c0 2.48-2.014 4.49-4.498 4.49a4.493 4.493 0 0 1-4.497-4.49c0-2.48 2.014-4.49 4.497-4.49a4.493 4.493 0 0 1 4.497 4.49z" />
                  <path
                    d="M64.362 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.247 2.247 0 0 0 2.249 2.245v8.979a2.248 2.248 0 0 0 2.249 2.245h4.497a2.247 2.247 0 0 0 2.248-2.245v-8.98a2.247 2.247 0 0 0 2.25-2.244V49.16a3.34 3.34 0 0 0-1.908-3.033c-1.226-.57-2.941-1.154-4.839-1.154z"
                    stroke-linecap="round"
                  />
                  <path d="M82.351 40.484c0 2.48-2.013 4.49-4.497 4.49a4.493 4.493 0 0 1-4.497-4.49c0-2.48 2.013-4.49 4.497-4.49a4.493 4.493 0 0 1 4.497 4.49z" />
                  <path
                    d="M77.854 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.247 2.247 0 0 0 2.249 2.245v8.979a2.248 2.248 0 0 0 2.248 2.245h4.498a2.247 2.247 0 0 0 2.248-2.245v-8.98a2.247 2.247 0 0 0 2.249-2.244V49.16a3.34 3.34 0 0 0-1.907-3.033c-1.226-.57-2.941-1.154-4.839-1.154z"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
              <h2 className="mt-6 text-center text-xl font-bold">
                Access your file from anywhere
              </h2>
              <p className="max-w-m mt-5 text-center">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="mt-12 flex w-full flex-col items-center px-4 md:w-1/2">
              <svg width="91" height="71" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M85.588 59C88.025 59 90 57.144 90 54.853V9.236c0-1.526-1.318-2.764-2.941-2.764L85.589 59zM15 12.048v40.047C15 55.908 18.098 59 21.92 59h63.668a4.147 4.147 0 0 1-4.152-4.143V3.762A2.766 2.766 0 0 0 78.668 1h-16.61l-5.536 8.286H17.768A2.766 2.766 0 0 0 15 12.048z"
                    stroke="#62E0D9"
                    stroke-width="1.405"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M41.28 27.561v3.201c0 1.061.841 1.92 1.88 1.92h3.13m2.505 0v-.219c0-.679-.264-1.33-.734-1.811l-4.794-4.902a2.48 2.48 0 0 0-1.772-.75h-13.99C26.12 25 25 26.147 25 27.561v26.89c0 1.414 1.121 2.56 2.505 2.56H46.29c1.383 0 2.505-1.146 2.505-2.56v-8.963"
                    fill="#62E0D9"
                  />
                  <path
                    d="M33.766 49.33v3.84h3.757l11.898-12.164-3.757-3.841-11.898 12.164zm15.655-8.324l1.328-1.358a1.951 1.951 0 0 0 0-2.717l-1.1-1.124a1.85 1.85 0 0 0-2.657 0l-1.328 1.358 3.757 3.841z"
                    stroke="#FFF"
                    stroke-width=".803"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.01 37.805h12.523m-12.524 3.841h11.272m-11.272 3.842h7.514"
                    stroke="#FFF"
                    stroke-width=".803"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g>
                    <path
                      d="M32.367 59.432c0 1.972-1.61 3.572-3.596 3.572H3.596c-1.985 0-3.596-1.6-3.596-3.572v-17.86C0 39.6 1.61 38 3.596 38h25.175c1.985 0 3.596 1.6 3.596 3.572v17.86zM10.789 44.55a2.987 2.987 0 0 1-2.997 2.976 2.987 2.987 0 0 1-2.997-2.976 2.987 2.987 0 0 1 2.997-2.977 2.987 2.987 0 0 1 2.997 2.977z"
                      fill="#62E0D9"
                    />
                    <path
                      stroke="#FFF"
                      stroke-width=".65"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M26.786 58.656L19.737 51.2 16.8 54.307l-4.112-4.349-8.224 8.698"
                    />
                  </g>
                </g>
              </svg>
              <h2 className="mt-6 text-center text-xl font-bold">
                Security you can trust
              </h2>
              <p className="max-w-m mt-5 text-center">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
          </div>
        </div>

        {/* Stay Productive */}
        <div className="w-full bg-gray-50 py-10 dark:bg-darkBlue1">
          <div className="container mx-auto flex flex-col items-center md:flex-row">
            <div className="w-full px-3 md:w-1/2">
              <img
                src="/img/assets/Fylo/illustration-stay-productive.png"
                className=""
              />
            </div>
            <div className="flex w-full flex-col items-center px-3 md:w-1/2 md:items-start">
              <h2 className="mx-auto mt-8 max-w-md text-center text-2xl font-bold md:mx-0 md:mt-0 md:text-left md:text-4xl">
                Stay productive, wherever you are
              </h2>
              <p class="text-md mt-10 text-center md:text-left md:text-lg">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>

              <p class="text-md mt-10 text-center md:text-left md:text-lg">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>

              <div className="mt-7">
                <a
                  href="#"
                  className="flex items-center border-b-2 text-center text-accentCyan md:text-left"
                >
                  See how Fylo works
                  <img src="/img/assets/Fylo/icon-arrow.svg" className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div
          id="Testimonials"
          className="w-full bg-gray-50 py-10 pb-80 dark:bg-darkBlue1"
        >
          <div className="container mx-auto">
            <img
              src="/img/assets/Fylo/bg-quotes.png"
              className="mb-4 ml-2 block w-10 md:w-20"
            />

            <div className="flex w-full flex-col items-stretch space-y-5 px-5 md:flex-row md:space-x-5 md:space-y-0">
              {/* comment 1 */}
              <div className="flex flex-col justify-between rounded-lg bg-gray-100 p-6 dark:bg-darkBlue3 md:w-1/3 lg:p-10">
                <p class="text-sm leading-5 md:text-lg">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="mt-6 flex w-full items-center">
                  <img
                    src="/img/assets/Fylo/profile-1.jpg"
                    className="mr-4 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="line-clamp-1 text-lg font-semibold">
                      Satish Patel
                    </h3>
                    <p className="text-sm font-light text-slate-300">
                      Founder & CEO. Huddle
                    </p>
                  </div>
                </div>
              </div>

              {/* comment 2 */}
              <div className="flex flex-col justify-between rounded-lg bg-gray-100 p-6 dark:bg-darkBlue3 md:w-1/3 lg:p-10">
                <p class="text-sm leading-5 md:text-lg">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="mt-6 flex w-full items-center">
                  <img
                    src="/img/assets/Fylo/profile-2.jpg"
                    className="mr-4 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="line-clamp-1 text-lg font-semibold">
                      Bruce McKenzie
                    </h3>
                    <p className="text-sm font-light text-slate-300">
                      Founder & CEO. Huddle
                    </p>
                  </div>
                </div>
              </div>

              {/* comment 3 */}
              <div className="flex flex-col justify-between rounded-lg bg-gray-100 p-6 dark:bg-darkBlue3 md:w-1/3 lg:p-10">
                <p class="text-sm leading-5 md:text-lg">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="mt-6 flex w-full items-center">
                  <img
                    src="/img/assets/Fylo/profile-3.jpg"
                    className="mr-4 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="line-clamp-1 text-lg font-semibold">
                      Eva Boyd
                    </h3>
                    <p className="text-sm font-light text-slate-300">
                      Founder & CEO. Huddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Early access */}
        <div className="w-full bg-gray-100 px-4 dark:bg-darkBlue2">
          <div className="relative -top-32 mx-auto max-w-4xl space-y-5 rounded-md bg-gray-200 px-16 py-8 text-center dark:bg-darkBlue3">
            <h2 className="text-2xl font-bold">Get early access today</h2>
            <p class="text-sm">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <div className="flex w-full flex-col space-y-5 md:flex-row md:space-x-4 md:space-y-0">
              <input
                type="text"
                className="flex-1 rounded-full px-8 py-3 text-center text-black focus:outline-0 md:text-left"
                placeholder="email@example.com"
              />
              <button className="mx-auto block w-full rounded-full bg-accentCyan px-12 py-3 text-white duration-200 hover:scale-95 hover:opacity-80 md:w-auto">
                Get Started For Free
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-gray-100 px-4 pb-12 dark:bg-darkBlue2">
          <div className="container mx-auto">
            <div className="flex w-full justify-center md:justify-start">
              <div className="h-16 w-44 bg-logo-light-mode bg-no-repeat dark:bg-logo-dark-mode"></div>
            </div>
            <div className="mt-6 flex w-full flex-col items-center justify-between space-y-5 md:flex-row md:items-start md:space-x-5 md:space-y-0">
              {/* Footer Address */}
              <div className="max-w-xs">
                <div className="flex w-full items-start justify-center md:justify-start">
                  <svg
                    width="21"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1"
                  >
                    <path
                      d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
                      fill={theme == "dark" ? "white" : "black"}
                      fill-rule="evenodd"
                    />
                  </svg>
                  <p className="ml-1 tracking-wider">+1-543-123-4567</p>
                </div>

                <div className="mt-4 flex w-full items-start justify-center md:justify-start">
                  <svg
                    width="21"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M-2-4h24v24H-2z" />
                      <path
                        d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
                        fill={theme == "dark" ? "white" : "black"}
                      />
                    </g>
                  </svg>
                  <p className="ml-1 tracking-wider">example@fylo.com</p>
                </div>

                <div className="mt-4 flex w-full items-start justify-center text-center md:justify-start md:text-left">
                  <svg
                    width="25"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1"
                  >
                    <path
                      d="M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z"
                      fill={theme == "dark" ? "white" : "black"}
                      fill-rule="evenodd"
                    />
                  </svg>
                  <p className="ml-1 tracking-wider">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, non.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-x-5 md:space-y-0">
                {/* Footer Links */}
                <div className="flex flex-col items-start space-y-8 md:flex-row md:space-x-8 md:space-y-0">
                  {/* col 1 */}
                  <div className="flex flex-col space-y-2 text-center md:text-left">
                    <a href="#" className="duration-200 hover:text-accentCyan">
                      About Us
                    </a>
                    <a href="#" className="duration-200 hover:text-accentCyan">
                      Jobs
                    </a>
                    <a href="#" className="duration-200 hover:text-accentCyan">
                      Press
                    </a>
                    <a href="#" className="duration-200 hover:text-accentCyan">
                      Blog
                    </a>
                  </div>

                  {/* col 2 */}
                  <div className="flex flex-col space-y-2 text-center md:text-left">
                    <a href="#" className="duration-200 hover:text-accentCyan">
                      Contact Us
                    </a>
                    <a href="#" className="duration-200 hover:text-accentCyan">
                      Terms
                    </a>
                    <a href="#" className="duration-200 hover:text-accentCyan">
                      Privacy
                    </a>
                  </div>
                </div>

                {/* Footer Socials */}
                <div className="flex items-center space-x-3">
                  <div className="cursor-pointer rounded-full border-2 border-gray-400 p-2 dark:border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="gray"
                      fill="transparent"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="4" y="4" width="16" height="16" rx="4" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                    </svg>
                  </div>

                  <div className="cursor-pointer rounded-full border-2 border-gray-400 p-2 dark:border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="0.5"
                      stroke="gray"
                      fill="gray"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </div>

                  <div className="cursor-pointer rounded-full border-2 border-gray-400 p-2 dark:border-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class=""
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="0.5"
                      stroke="gray"
                      fill="gray"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
