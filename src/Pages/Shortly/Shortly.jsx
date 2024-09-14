import React, { useEffect, useState } from "react";

export default function Shortly() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = () => {
    if (inputValue.length == 0) {
      setError("Please type your link");
    } else {
      if (validURL(inputValue)) {
        setError("");
      } else {
        setError("Please type a valid link");
      }
    }
  };

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i",
    );
    return !!pattern.test(str);
  }

  return (
    <>
      <div className="min-h-screen w-full bg-white">
        {/* navbar */}
        <div className="relative flex w-full items-center justify-between px-12 py-10">
          <div className="flex items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" width="121" height="33">
              <path
                fill="#34313D"
                d="M16.715 7.932c-.068-.09-.306-.26-.714-.51s-.918-.51-1.53-.782-1.281-.51-2.006-.714a8.005 8.005 0 00-2.176-.306c-1.995 0-2.992.669-2.992 2.006 0 .408.107.748.323 1.02.215.272.532.516.952.731.419.215.946.414 1.58.595l1.406.393.805.219c1.156.317 2.198.663 3.128 1.037.929.374 1.717.839 2.363 1.394a5.647 5.647 0 011.496 2.023c.35.793.527 1.745.527 2.856 0 1.36-.255 2.51-.765 3.451-.51.94-1.185 1.7-2.023 2.278-.84.578-1.802.997-2.89 1.258-1.088.26-2.21.391-3.366.391a19.68 19.68 0 01-5.44-.799c-.884-.26-1.74-.572-2.567-.935A14.358 14.358 0 01.53 22.28l2.448-4.862c.09.113.385.329.884.646.498.317 1.116.635 1.853.952.736.317 1.558.6 2.465.85.906.25 1.824.374 2.754.374 1.972 0 2.958-.6 2.958-1.802 0-.453-.148-.827-.442-1.122-.295-.295-.703-.561-1.224-.799a12.455 12.455 0 00-1.504-.56l-1.702-.495-.976-.288c-1.111-.34-2.074-.708-2.89-1.105-.816-.397-1.49-.856-2.023-1.377a5.003 5.003 0 01-1.19-1.802c-.261-.68-.391-1.473-.391-2.38 0-1.27.238-2.391.714-3.366a7.266 7.266 0 011.938-2.465 8.435 8.435 0 012.839-1.513c1.076-.34 2.215-.51 3.417-.51.838 0 1.666.08 2.482.238.816.159 1.598.363 2.346.612.748.25 1.445.533 2.09.85.647.317 1.242.635 1.786.952l-2.448 4.624zM40.139 25h-5.44V14.97c0-1.156-.227-2.006-.68-2.55-.454-.544-1.077-.816-1.87-.816-.318 0-.663.074-1.037.221a4.173 4.173 0 00-1.088.646 5.827 5.827 0 00-.97 1.003 4.4 4.4 0 00-.68 1.292V25h-5.44V.18h5.44v9.962a6.786 6.786 0 012.602-2.465c1.076-.578 2.26-.867 3.553-.867 1.201 0 2.17.21 2.907.629.736.42 1.303.952 1.7 1.598.396.646.663 1.371.799 2.176.136.805.204 1.592.204 2.363V25zm12.34.34c-1.519 0-2.873-.25-4.063-.748-1.19-.499-2.193-1.173-3.01-2.023a8.54 8.54 0 01-1.852-2.958 9.97 9.97 0 01-.63-3.519c0-1.224.21-2.397.63-3.519a8.54 8.54 0 011.853-2.958c.816-.85 1.819-1.53 3.009-2.04s2.544-.765 4.063-.765c1.519 0 2.867.255 4.046.765 1.179.51 2.176 1.19 2.992 2.04a8.754 8.754 0 011.87 2.958 9.736 9.736 0 01.646 3.519 9.97 9.97 0 01-.63 3.519 8.54 8.54 0 01-1.852 2.958c-.816.85-1.82 1.524-3.01 2.023-1.19.499-2.543.748-4.062.748zM48.5 16.092c0 1.405.374 2.533 1.122 3.383.748.85 1.7 1.275 2.856 1.275a3.59 3.59 0 001.564-.34c.476-.227.89-.544 1.24-.952a4.57 4.57 0 00.834-1.479 5.632 5.632 0 00.306-1.887c0-1.405-.374-2.533-1.122-3.383-.748-.85-1.689-1.275-2.822-1.275a3.702 3.702 0 00-2.84 1.292 4.57 4.57 0 00-.832 1.479 5.632 5.632 0 00-.306 1.887zm27.776-4.284c-1.315.023-2.505.238-3.57.646-1.065.408-1.836 1.02-2.312 1.836V25h-5.44V7.15h4.998v3.604c.612-1.201 1.4-2.142 2.363-2.822.963-.68 1.989-1.031 3.077-1.054h.544c.113 0 .227.011.34.034v4.896zm14.074 12.24a21.71 21.71 0 01-2.567.884c-.963.272-1.932.408-2.907.408-.68 0-1.32-.085-1.92-.255a4.286 4.286 0 01-1.582-.816c-.453-.374-.81-.867-1.07-1.479-.262-.612-.392-1.349-.392-2.21v-9.316h-2.278V7.15h2.278V1.472h5.44V7.15h3.638v4.114h-3.638v7.446c0 .59.147 1.014.442 1.275.295.26.669.391 1.122.391.408 0 .827-.068 1.258-.204.43-.136.805-.283 1.122-.442l1.054 4.318zM92.627.18h5.44v18.462c0 1.36.578 2.04 1.734 2.04.272 0 .572-.04.901-.119.329-.08.63-.198.901-.357l.714 4.08c-.68.317-1.462.567-2.346.748-.884.181-1.711.272-2.482.272-1.564 0-2.765-.408-3.604-1.224-.839-.816-1.258-1.995-1.258-3.536V.18zm11.456 27.506c.454.159.879.272 1.275.34a6.4 6.4 0 001.071.102c.658 0 1.168-.227 1.53-.68.363-.453.692-1.27.986-2.448l-6.8-17.85h5.61l4.148 13.192 3.57-13.192h5.1l-6.8 20.74a7.106 7.106 0 01-2.55 3.587c-1.224.918-2.674 1.377-4.352 1.377a8.17 8.17 0 01-1.377-.119 7.516 7.516 0 01-1.41-.391v-4.658z"
              />
            </svg>

            <div className="ml-16 hidden items-center space-x-8 text-lg font-semibold text-grayishViolet lg:flex">
              <a href="#" className="duration-200 hover:text-black">
                Features
              </a>
              <a href="#" className="duration-200 hover:text-black">
                Pricing
              </a>
              <a href="#" className="duration-200 hover:text-black">
                Resources
              </a>
            </div>
          </div>

          <div className="hidden items-center space-x-5 lg:flex">
            <button className="px-4 py-3 text-grayishViolet duration-200 hover:text-black">
              Login
            </button>

            <button className="rounded-full bg-cyan px-8 py-3 text-white duration-200 hover:opacity-70">
              Sign Up
            </button>
          </div>
        </div>

        {/* hero */}

        <div className="flex w-full flex-col-reverse items-center justify-between px-12 lg:flex-row">
          <div className="flex w-full flex-col items-center py-16 lg:w-[50%] lg:items-start">
            <h1 className="text-center font-poppins text-4xl font-bold text-veryDarkViolet md:text-5xl lg:text-left lg:text-7xl">
              More than just shorter links
            </h1>
            <p className="mt-6 w-full text-center text-xl font-semibold text-grayishViolet lg:max-w-md lg:text-left lg:text-2xl">
              Build your brand's recognition and get detailed insights on how
              your links are performing
            </p>
            <button className="mx-auto mt-10 rounded-full bg-cyan px-12 py-5 text-2xl font-extrabold text-white duration-200 hover:opacity-70 lg:mx-0">
              Get Started
            </button>
          </div>

          <div className="h-auto w-full md:w-[70%] lg:w-[50%]">
            <img
              src="/img/assets/Shortly/illustration-working.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="relative mt-24 w-full space-y-4 bg-gray-100 px-4 py-8">
          {/* link input */}
          <div className="relative mx-auto -mt-24 flex max-w-4xl flex-col items-center justify-between space-x-5 rounded-xl bg-veryDarkBlue p-8 md:flex-row">
            <input
              type="text"
              placeholder="shorten a link here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full flex-1 rounded-xl px-4 py-3 text-lg placeholder:text-yellow-500 focus:outline-none"
            />
            <button
              className="mt-5 rounded-xl bg-cyan px-6 py-3 text-lg text-white md:mt-0"
              onClick={submitHandler}
            >
              Shorten it !
            </button>

            <p className="absolute bottom-2 left-7 text-sm italic text-red">
              {error}
            </p>
          </div>

          {/* shorten Links */}

          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between rounded-xl bg-white p-6 md:flex-row">
            <p className="text-center text-lg font-bold md:text-left">
              https://frontendmentor.io
            </p>
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="mr-6 font-bold text-cyan">https://rel.ink/k4IKyk</p>
              <button class="mt-2 rounded-lg bg-cyan p-2 px-8 text-white hover:opacity-70 focus:outline-none md:mt-0">
                Copy
              </button>
            </div>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between rounded-xl bg-white p-6 md:flex-row">
            <p className="text-center text-lg font-bold md:text-left">
              {" "}
              https://twitter.com/frontendmentor
            </p>
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="mr-6 font-bold text-cyan">https://rel.ink/gxOXp9</p>
              <button class="mt-2 rounded-lg bg-cyan p-2 px-8 text-white hover:opacity-70 focus:outline-none md:mt-0">
                Copy
              </button>
            </div>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between rounded-xl bg-white p-6 md:flex-row">
            <p className="text-center text-lg font-bold md:text-left">
              https://linkedin.com/frontend-mentor
            </p>
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="mr-6 font-bold text-cyan">https://rel.ink/gob3X9</p>
              <button class="mt-2 rounded-lg bg-cyan p-2 px-8 text-white hover:opacity-70 focus:outline-none md:mt-0">
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Statistics */}
        <div className="w-full bg-gray-100 pb-40 font-poppins">
          <div className="w-full py-20">
            <h1 className="text-center text-4xl font-bold">
              Advanced Statistics
            </h1>
            <p className="mx-auto mt-6 max-w-sm text-center text-lg font-semibold text-grayishViolet">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          {/* Chainned boxes*/}
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 lg:flex-row">
            {/* box 1 */}
            <div className="relative flex max-w-xl flex-col items-center rounded-xl bg-white p-8 lg:max-w-xs">
              <div className="absolute -top-10 rounded-full bg-black p-5 lg:left-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                  <path
                    fill="#2BD0D0"
                    d="M36.406 11.719c.648 0 1.172.524 1.172 1.172v24.765h1.25a1.172 1.172 0 110 2.344H1.172a1.172 1.172 0 110-2.344h1.25V24.61c0-.647.524-1.172 1.172-1.172H8.28c.648 0 1.172.525 1.172 1.172v13.047h2.344v-8.36c0-.646.524-1.171 1.172-1.171h4.687c.648 0 1.172.525 1.172 1.172v8.36h2.344V19.921c0-.647.524-1.172 1.172-1.172h4.687c.648 0 1.172.525 1.172 1.172v17.734h2.344V12.891c0-.648.524-1.172 1.172-1.172zm-1.172 2.344h-2.343v23.593h2.343V14.063zm-9.375 7.03h-2.343v16.563h2.343V21.094zm-9.375 9.376h-2.343v7.187h2.343V30.47zM7.11 25.78H4.766v11.875h2.343V25.781zM34.062 0a3.52 3.52 0 013.516 3.516 3.52 3.52 0 01-3.516 3.515c-.72 0-1.389-.217-1.947-.59l-4.073 3.055a3.52 3.52 0 01-3.355 4.567 3.496 3.496 0 01-1.514-.344l-4.689 4.688c.22.459.344.973.344 1.515a3.52 3.52 0 01-3.515 3.515 3.52 3.52 0 01-3.488-3.949l-3.45-1.724a3.503 3.503 0 01-2.438.986 3.52 3.52 0 01-3.515-3.516 3.52 3.52 0 013.515-3.515 3.52 3.52 0 013.488 3.949l3.45 1.725a3.503 3.503 0 013.952-.643l4.689-4.688a3.496 3.496 0 01-.344-1.515 3.52 3.52 0 013.515-3.516c.72 0 1.39.218 1.948.59l4.073-3.054A3.52 3.52 0 0134.063 0zm-18.75 18.75c-.646 0-1.171.526-1.171 1.172 0 .646.525 1.172 1.171 1.172.647 0 1.172-.526 1.172-1.172 0-.646-.525-1.172-1.172-1.172zm-9.374-4.688c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.172 1.171 1.172.647 0 1.172-.526 1.172-1.172 0-.646-.525-1.171-1.171-1.171zm18.75-4.687c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.172 1.172 1.172.646 0 1.171-.526 1.171-1.172 0-.646-.525-1.172-1.172-1.172zm9.375-7.031c-.647 0-1.172.526-1.172 1.172 0 .646.525 1.171 1.172 1.171.646 0 1.171-.525 1.171-1.171s-.525-1.172-1.172-1.172z"
                  />
                </svg>
              </div>
              <h2 className="mt-10 text-xl font-bold lg:self-start">
                Brand Recognition
              </h2>
              <p className="text-l mx-auto mt-6 max-w-md text-center font-semibold text-grayishViolet lg:self-start lg:text-left">
                {" "}
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>

            <div className="relative -top-8 hidden bg-cyan px-4 py-1.5 lg:block"></div>
            <div className="block bg-cyan px-1.5 py-12 lg:hidden"></div>

            {/* box 2 */}
            <div className="relative flex max-w-xl flex-col items-center rounded-xl bg-white p-8 lg:top-8 lg:mt-0 lg:max-w-xs">
              <div className="absolute -top-10 rounded-full bg-black p-5 lg:left-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                  <path
                    fill="#2BD0D0"
                    d="M19.968 0c11.01 0 19.969 8.958 19.969 19.968s-8.958 19.969-19.969 19.969C8.958 39.937 0 30.979 0 19.968 0 8.958 8.958 0 19.968 0zm7.805 35.579c-4.863-2.402-10.746-2.402-15.609 0a17.339 17.339 0 007.804 1.862 17.34 17.34 0 007.805-1.862zm-6.556-33.02V6.24H18.72V2.56a17.362 17.362 0 00-9.492 3.656l2.798 2.797-1.765 1.765L7.373 7.89a17.41 17.41 0 00-4.678 9.582h4.793v2.497H2.496c0 5.805 2.857 10.943 7.227 14.122 6.217-3.714 14.274-3.714 20.49 0 4.37-3.179 7.228-8.317 7.228-14.123h-4.992v-2.496h4.793a17.41 17.41 0 00-4.678-9.582l-2.888 2.888-1.765-1.765 2.798-2.797a17.362 17.362 0 00-9.492-3.657zm-2.437 8.292c.332-1.034 2.045-1.034 2.377 0 .635 1.978 3.804 11.955 3.804 14.11a4.997 4.997 0 01-4.993 4.992 4.997 4.997 0 01-4.992-4.992c0-2.155 3.17-12.132 3.804-14.11zm1.188 4.567c-1.233 4.047-2.496 8.522-2.496 9.543a2.5 2.5 0 002.496 2.496 2.5 2.5 0 002.497-2.496c0-1.02-1.263-5.496-2.497-9.543z"
                  />
                </svg>
              </div>
              <h2 className="mt-10 text-xl font-bold lg:self-start">
                Detailed records
              </h2>
              <p className="text-l mx-auto mt-6 max-w-md text-center font-semibold text-grayishViolet lg:self-start lg:text-left">
                {" "}
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>

            <div className="relative -top-8 hidden bg-cyan px-4 py-1.5 lg:block"></div>
            <div className="block bg-cyan px-1.5 py-12 lg:hidden"></div>

            {/* box 3 */}
            <div className="relative flex max-w-xl flex-col items-center rounded-xl bg-white p-8 lg:top-16 lg:mt-0 lg:max-w-xs">
              <div className="absolute -top-10 rounded-full bg-black p-5 lg:left-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                  <path
                    fill="#2BD0D0"
                    d="M46.608 6.02a.975.975 0 00-.927-.047l-7.624 3.591a8.283 8.283 0 00-4.728 6.837l-.196 2.436-3.95 6.561v-2.801c0-.01-.006-.017-.006-.027a.974.974 0 00-.046-.284l-1.838-5.514 3.753-7.504a.984.984 0 00-.099-1.03l-5.9-7.867a1.019 1.019 0 00-1.573 0L17.573 8.24a.984.984 0 00-.093 1.03l3.753 7.503-1.838 5.514a.974.974 0 00-.047.284v3.951l-6.127-9.299c-.007-.01-.02-.017-.026-.026a.995.995 0 00-.211-.215c-.02-.013-.036-.03-.056-.042-.02-.013-.022-.02-.035-.027l-3.605-2.085-1.497-2.271L5.628 9.27a.983.983 0 00-1.147-.386L.654 10.227a.983.983 0 00-.491 1.468l2.705 4.107 1.492 2.27.492 4.137a.36.36 0 00.01.04c.004.02.009.041.015.061a.973.973 0 00.116.295c.007.01.007.023.014.033.007.01 14.624 22.165 14.695 22.225A4.87 4.87 0 0024.255 48c.4 0 .8-.05 1.19-.145a4.886 4.886 0 003.028-2.235l13.08-21.698 2.065-1.307a8.343 8.343 0 002.66-2.721 8.259 8.259 0 001.18-4.651l-.383-8.42a.984.984 0 00-.467-.803zm-7.122 17.524l-1.522 2.527-5.054-3.048 1.524-2.527 5.052 3.048zM21.315 38.446V23.58h5.9v5.08l-5.9 9.786zm1.693-20.766h2.515l1.31 3.933h-5.136l1.31-3.933zm1.257-6.885a.983.983 0 110-1.966.983.983 0 010 1.966zm0-8.194l4.75 6.331-3.39 6.78h-.377v-3.13a2.95 2.95 0 10-1.966 0v3.13h-.376l-3.39-6.78 4.75-6.331zM10.53 17.818l-.29.19-3.621 2.387-.333-2.787a.982.982 0 00-.156-.424l-1.081-1.642L6.69 14.46l1.081 1.642a.988.988 0 00.329.31l2.429 1.406zm-6.122-6.826l1.2 1.822-1.642 1.082-1.475-2.232 1.917-.672zm5.249 9.755l2.458-1.624 7.233 10.972v10.726L7.193 22.371l2.464-1.624zm17.135 23.851a2.95 2.95 0 11-5.052-3.048l7.425-12.315h.017v-.027l2.712-4.499 2.527 1.526 2.53 1.52-10.16 16.843zm17.807-25.724a6.353 6.353 0 01-2.028 2.073l-1.747 1.107-2.852-1.717-2.852-1.717.162-2.065a6.318 6.318 0 013.604-5.213L45.18 8.38l.125 2.74a.973.973 0 00-.295.014l-2.382.59a5.986 5.986 0 00-4.425 4.524.983.983 0 001.919.43 4.032 4.032 0 012.977-3.043l2.297-.57.103 2.262a6.304 6.304 0 01-.9 3.548z"
                  />
                </svg>
              </div>
              <h2 className="mt-10 text-xl font-bold lg:self-start">
                Fully customizable
              </h2>
              <p className="text-l mx-auto mt-6 max-w-md text-center font-semibold text-grayishViolet lg:self-start lg:text-left">
                {" "}
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section relative flex w-full items-center justify-center bg-darkViolet py-32">
          <div className="flex flex-col items-center justify-center px-4">
            <h1 className="z-20 text-center font-bold text-white text-3xl md:text-4xl lg:text-5xl">
              Boost your links today
            </h1>
            <button className="z-10 mx-auto mt-10 rounded-full bg-cyan px-12 py-5 text-xl lg:text-2xl font-extrabold text-white duration-200 hover:opacity-70 lg:mx-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
