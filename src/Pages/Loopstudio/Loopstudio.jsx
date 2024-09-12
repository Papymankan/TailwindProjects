import React, { useState } from "react";

export default function Loopstudio() {

  const [showMenu , setShowMenu] = useState(false)

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero */}
      <div className="loopstudio-hero w-full px-6 py-12">
        {/* Nav */}
        <div className="flex items-center justify-between">
          <svg width="192" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.694 26.324a2.694 2.694 0 002.695-2.697V2.697a2.694 2.694 0 10-5.389 0v20.93a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.978 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zm21.887 4.648c5.921 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.979 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zM55.487 32a2.694 2.694 0 002.694-2.696v-5.677c1.277 1.526 3.05 2.839 5.921 2.839 4.503 0 8.65-3.477 8.65-9.827v-.071c0-6.35-4.218-9.827-8.65-9.827-2.8 0-4.609 1.312-5.92 3.086V9.58a2.694 2.694 0 10-5.39 0v19.725A2.694 2.694 0 0055.488 32zm7.232-10.11c-2.517 0-4.608-2.094-4.608-5.251v-.071c0-3.158 2.091-5.25 4.608-5.25 2.518 0 4.645 2.092 4.645 5.25v.07c0 3.193-2.127 5.251-4.645 5.251zm19.087 4.576c4.113 0 7.268-1.916 7.268-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.985-1.313 1.135 0 2.589.462 4.113 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.064-.284c-1.205 0-2.127.923-2.127 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164zm15.612-.036c1.17 0 2.092-.142 3.085-.532a2.194 2.194 0 001.382-2.022 2.248 2.248 0 00-2.233-2.235c-.107 0-.461.035-.638.035-1.206 0-1.738-.603-1.738-1.845v-8.124h2.376a2.3 2.3 0 002.304-2.306 2.3 2.3 0 00-2.304-2.306h-2.376V4.718a2.694 2.694 0 10-5.389 0v2.377h-.177a2.3 2.3 0 00-2.304 2.306 2.3 2.3 0 002.304 2.306h.177v9.011c0 4.4 2.234 5.712 5.531 5.712zm13.024.036c2.73 0 4.325-1.455 5.566-3.051v.212a2.694 2.694 0 105.39 0V9.58a2.694 2.694 0 10-5.39 0v8.124c0 2.554-1.311 3.867-3.368 3.867-2.056 0-3.261-1.313-3.261-3.867V9.579a2.694 2.694 0 10-5.39 0v9.827c0 4.363 2.376 7.06 6.453 7.06zm21.994 0c2.8 0 4.609-1.313 5.92-3.087v.248a2.694 2.694 0 105.39 0V2.697a2.694 2.694 0 10-5.39 0v6.882c-1.276-1.526-3.048-2.838-5.92-2.838-4.503 0-8.65 3.476-8.65 9.827v.07c0 6.35 4.218 9.828 8.65 9.828zm1.383-4.577c-2.518 0-4.645-2.093-4.645-5.25v-.071c0-3.193 2.127-5.25 4.645-5.25 2.517 0 4.608 2.092 4.608 5.25v.07c0 3.158-2.091 5.251-4.608 5.251zm16.108-16.71c1.702 0 3.014-.993 3.014-2.554v-.07c0-1.562-1.312-2.52-3.014-2.52-1.702 0-3.013.958-3.013 2.52v.07c0 1.561 1.311 2.555 3.013 2.555zm0 21.145a2.694 2.694 0 002.694-2.697V9.58a2.694 2.694 0 10-5.388 0v14.048a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.361-9.827-10.246-9.827-5.921 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.36 9.828 10.246 9.828zm.07-4.648c-2.977 0-4.998-2.448-4.998-5.25v-.071c0-2.803 1.843-5.18 4.928-5.18 2.978 0 4.999 2.448 4.999 5.25v.072c0 2.802-1.844 5.18-4.928 5.18zm19.23 4.577c4.112 0 7.267-1.916 7.267-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.986-1.313 1.134 0 2.588.462 4.112 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.063-.284c-1.206 0-2.128.923-2.128 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
          {/* Nav links */}
          <div className="hidden items-center space-x-8 font-josefin text-lg font-semibold text-white md:flex">
            <div className="group cursor-pointer">
              <a href="#" className="px-2 pb-1">
                About
              </a>
              <div className="w-full border-t-2 opacity-0 transition-all duration-200 group-hover:opacity-100"></div>
            </div>
            <div className="group cursor-pointer">
              <a href="#" className="px-2 pb-1">
                Careers
              </a>
              <div className="w-full border-t-2 opacity-0 transition-all duration-200 group-hover:opacity-100"></div>
            </div>
            <div className="group cursor-pointer">
              <a href="#" className="px-2 pb-1">
                Events
              </a>
              <div className="w-full border-t-2 opacity-0 transition-all duration-200 group-hover:opacity-100"></div>
            </div>
            <div className="group cursor-pointer">
              <a href="#" className="px-2 pb-1">
                Products
              </a>
              <div className="w-full border-t-2 opacity-0 transition-all duration-200 group-hover:opacity-100"></div>
            </div>
            <div className="group cursor-pointer">
              <a href="#" className="px-2 pb-1">
                Support
              </a>
              <div className="w-full border-t-2 opacity-0 transition-all duration-200 group-hover:opacity-100"></div>
            </div>
          </div>
          {/* Nav Hamburger */}
          <button className={`z-50 h-8 w-8 block md:hidden cursor-pointer hamburger space-y-2 ${showMenu && 'space-y-0'}`} onClick={()=>setShowMenu(!showMenu)}>
            <div className={`hamburger-top w-8 border duration-200 ${showMenu && 'rotate-45'}`}></div>
            <div className={`hamburger-top w-8 border duration-200 ${showMenu && 'hidden'}`}></div>
            <div className={`hamburger-top w-8 border duration-200 ${showMenu && '-rotate-45'}`}></div>
          </button>

          <div className={`absolute top-0 bottom-0 left-0 right-0 w-full min-h-screen ${showMenu ? 'flex' : 'hidden'} flex-col pl-10 bg-black z-40 text-white pt-32 space-y-3 text-xl overflow-hidden font-josefin`}>
            <div className="cursor-pointer hover:scale-105  duration-200">
              <a href="#" className="">
                About
              </a>
            </div>
            <div className="cursor-pointer hover:scale-105 duration-200">
              <a href="#" className="">
                Careers
              </a>
            </div>
            <div className="cursor-pointer hover:scale-105 duration-200">
              <a href="#" className="">
                Events
              </a>
            </div>
            <div className="cursor-pointer hover:scale-105 duration-200">
              <a href="#" className="">
                Products
              </a>
            </div>
            <div className="cursor-pointer hover:scale-105 duration-200">
              <a href="#" className="">
                Support
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto my-32 max-w-lg border-2 p-4 font-josefin text-4xl uppercase text-white md:mx-0 md:p-10 md:text-6xl">
          impressive experiences that deliver
        </div>
      </div>

      {/* feature section */}
      <div className="relative mx-auto my-20 flex max-w-6xl flex-col px-16 py-10 text-gray-900 md:flex-row md:px-0">
        <img
          src="/img/assets/Loopstudio/desktop/image-interactive.jpg"
          className="hidden md:block"
        />
        <img
          src="/img/assets/Loopstudio/mobile/image-interactive.jpg"
          className="md:hidden"
        />

        <div className="mt-12 bg-white font-josefin md:absolute md:right-0 md:top-72 md:mt-0 md:py-12 md:pl-10 lg:top-48 lg:py-20 lg:pl-20">
          <h1 className="text-center text-4xl font-semibold uppercase md:max-w-lg md:text-left md:text-5xl md:font-normal">
            The leader in interactive vr
          </h1>
          <p className="mt-8 text-center font-semibold md:max-w-md md:text-left">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      {/* Images section */}

      <div className="w-full px-5 font-josefin md:px-16">
        <div className="flex w-full items-center justify-between">
          <h1 className="w-full text-center text-5xl uppercase md:w-auto md:text-left">
            Our Creations
          </h1>
          <button className="hidden rounded-sm border-2 border-black px-10 py-3 font-semibold tracking-widest duration-200 hover:bg-black hover:text-white md:block">
            SEE ALL
          </button>
        </div>
        <div className="hidden w-full flex-wrap justify-between md:flex">
          <div className="group relative mt-10 w-[23%] overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-3 text-2xl uppercase text-white transition-colors duration-200 lg:p-10">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                the curiosity
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/desktop/image-curiosity.jpg"
            />
          </div>
          <div className="group relative mt-10 w-[23%] overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-3 text-2xl uppercase text-white transition-colors duration-200 lg:p-10">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                deep earth
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/desktop/image-deep-earth.jpg"
            />
          </div>
          <div className="group relative mt-10 w-[23%] overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-3 text-2xl uppercase text-white transition-colors duration-200 lg:p-10">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                make it fisheye
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/desktop/image-fisheye.jpg"
            />
          </div>
          <div className="group relative mt-10 w-[23%] overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-3 text-2xl uppercase text-white transition-colors duration-200 lg:p-10">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                from up above vr
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/desktop/image-from-above.jpg"
            />
          </div>
          <div className="group relative mt-10 w-[23%] overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-3 text-2xl uppercase text-white transition-colors duration-200 lg:p-10">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                night arcade
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/desktop/image-night-arcade.jpg"
            />
          </div>
          <div className="group relative mt-10 w-[23%] overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-3 text-2xl uppercase text-white transition-colors duration-200 lg:p-10">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                pocket borealis
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/desktop/image-pocket-borealis.jpg"
            />
          </div>
          <div className="group relative mt-10 w-[23%] overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-3 text-2xl uppercase text-white transition-colors duration-200 lg:p-10">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                soccer team vr
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/desktop/image-soccer-team.jpg"
            />
          </div>
          <div className="group relative mt-10 w-[23%] overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-3 text-2xl uppercase text-white transition-colors duration-200 lg:p-10">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                the grid
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/desktop/image-grid.jpg"
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap justify-between md:hidden">
          <div className="group relative mt-6 w-full overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-4 text-2xl uppercase text-white transition-colors duration-200">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                the curiosity
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/mobile/image-curiosity.jpg"
            />
          </div>
          <div className="group relative mt-6 w-full overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-4 text-2xl uppercase text-white transition-colors duration-200">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                deep earth
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/mobile/image-deep-earth.jpg"
            />
          </div>
          <div className="group relative mt-6 w-full overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-4 text-2xl uppercase text-white transition-colors duration-200">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                make it fisheye
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/mobile/image-fisheye.jpg"
            />
          </div>
          <div className="group relative mt-6 w-full overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-4 text-2xl uppercase text-white transition-colors duration-200">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                from up above vr
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/mobile/image-from-above.jpg"
            />
          </div>
          <div className="group relative mt-6 w-full overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-4 text-2xl uppercase text-white transition-colors duration-200">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                night arcade
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/mobile/image-night-arcade.jpg"
            />
          </div>
          <div className="group relative mt-6 w-full overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-4 text-2xl uppercase text-white transition-colors duration-200">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                pocket borealis
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/mobile/image-pocket-borealis.jpg"
            />
          </div>

          <div className="group relative mt-6 w-full overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-4 text-2xl uppercase text-white transition-colors duration-200">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                soccer team vr
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/mobile/image-soccer-team.jpg"
            />
          </div>

          <div className="group relative mt-6 w-full overflow-hidden">
            <div className="images-container absolute right-0 top-0 z-10 flex h-full w-full items-end p-4 text-2xl uppercase text-white transition-colors duration-200">
              <p className="max-w-36 duration-200 group-hover:scale-110 group-hover:font-semibold group-hover:text-black">
                the grid
              </p>
            </div>
            <img
              className="w-full object-cover transition duration-200 group-hover:scale-105"
              src="/img/assets/Loopstudio/mobile/image-grid.jpg"
            />
          </div>
        </div>
        <button className="mt-10 block w-full rounded-sm border-2 border-black px-10 py-3 font-semibold tracking-widest duration-200 hover:bg-black hover:text-white md:hidden">
          SEE ALL
        </button>
      </div>

      {/* footer */}

      <div className="mt-16 flex w-full flex-col items-center bg-black px-10 py-6 text-white md:flex-row md:justify-between font-josefin">
        <div>
          <svg width="192" height="32" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.694 26.324a2.694 2.694 0 002.695-2.697V2.697a2.694 2.694 0 10-5.389 0v20.93a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.978 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zm21.887 4.648c5.921 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.36-9.827-10.246-9.827-5.92 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.361 9.828 10.246 9.828zm.071-4.648c-2.978 0-4.999-2.448-4.999-5.25v-.071c0-2.803 1.844-5.18 4.928-5.18 2.979 0 5 2.448 5 5.25v.072c0 2.802-1.844 5.18-4.929 5.18zM55.487 32a2.694 2.694 0 002.694-2.696v-5.677c1.277 1.526 3.05 2.839 5.921 2.839 4.503 0 8.65-3.477 8.65-9.827v-.071c0-6.35-4.218-9.827-8.65-9.827-2.8 0-4.609 1.312-5.92 3.086V9.58a2.694 2.694 0 10-5.39 0v19.725A2.694 2.694 0 0055.488 32zm7.232-10.11c-2.517 0-4.608-2.094-4.608-5.251v-.071c0-3.158 2.091-5.25 4.608-5.25 2.518 0 4.645 2.092 4.645 5.25v.07c0 3.193-2.127 5.251-4.645 5.251zm19.087 4.576c4.113 0 7.268-1.916 7.268-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.985-1.313 1.135 0 2.589.462 4.113 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.064-.284c-1.205 0-2.127.923-2.127 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164zm15.612-.036c1.17 0 2.092-.142 3.085-.532a2.194 2.194 0 001.382-2.022 2.248 2.248 0 00-2.233-2.235c-.107 0-.461.035-.638.035-1.206 0-1.738-.603-1.738-1.845v-8.124h2.376a2.3 2.3 0 002.304-2.306 2.3 2.3 0 00-2.304-2.306h-2.376V4.718a2.694 2.694 0 10-5.389 0v2.377h-.177a2.3 2.3 0 00-2.304 2.306 2.3 2.3 0 002.304 2.306h.177v9.011c0 4.4 2.234 5.712 5.531 5.712zm13.024.036c2.73 0 4.325-1.455 5.566-3.051v.212a2.694 2.694 0 105.39 0V9.58a2.694 2.694 0 10-5.39 0v8.124c0 2.554-1.311 3.867-3.368 3.867-2.056 0-3.261-1.313-3.261-3.867V9.579a2.694 2.694 0 10-5.39 0v9.827c0 4.363 2.376 7.06 6.453 7.06zm21.994 0c2.8 0 4.609-1.313 5.92-3.087v.248a2.694 2.694 0 105.39 0V2.697a2.694 2.694 0 10-5.39 0v6.882c-1.276-1.526-3.048-2.838-5.92-2.838-4.503 0-8.65 3.476-8.65 9.827v.07c0 6.35 4.218 9.828 8.65 9.828zm1.383-4.577c-2.518 0-4.645-2.093-4.645-5.25v-.071c0-3.193 2.127-5.25 4.645-5.25 2.517 0 4.608 2.092 4.608 5.25v.07c0 3.158-2.091 5.251-4.608 5.251zm16.108-16.71c1.702 0 3.014-.993 3.014-2.554v-.07c0-1.562-1.312-2.52-3.014-2.52-1.702 0-3.013.958-3.013 2.52v.07c0 1.561 1.311 2.555 3.013 2.555zm0 21.145a2.694 2.694 0 002.694-2.697V9.58a2.694 2.694 0 10-5.388 0v14.048a2.694 2.694 0 002.694 2.697zm15.506.213c5.92 0 10.317-4.435 10.317-9.898v-.071c0-5.464-4.361-9.827-10.246-9.827-5.921 0-10.317 4.434-10.317 9.898v.07c0 5.464 4.36 9.828 10.246 9.828zm.07-4.648c-2.977 0-4.998-2.448-4.998-5.25v-.071c0-2.803 1.843-5.18 4.928-5.18 2.978 0 4.999 2.448 4.999 5.25v.072c0 2.802-1.844 5.18-4.928 5.18zm19.23 4.577c4.112 0 7.267-1.916 7.267-6.138v-.07c0-3.478-3.084-4.755-5.743-5.642-2.057-.71-3.865-1.206-3.865-2.27v-.071c0-.745.674-1.313 1.986-1.313 1.134 0 2.588.462 4.112 1.207.355.177.603.248.993.248 1.205 0 2.162-.923 2.162-2.129 0-.922-.496-1.632-1.276-2.022-1.843-.922-3.9-1.454-5.885-1.454-3.83 0-6.949 2.164-6.949 6.03v.072c0 3.69 3.014 4.93 5.673 5.711 2.091.639 3.935 1.03 3.935 2.2v.07c0 .852-.71 1.42-2.27 1.42-1.524 0-3.332-.568-5.14-1.703a2.066 2.066 0 00-1.063-.284c-1.206 0-2.128.923-2.128 2.129 0 .851.461 1.49 1.028 1.845 2.305 1.49 4.822 2.164 7.162 2.164z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>

          <div className="mt-3 flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
            <div className="cursor-pointer hover:scale-105">
              <a href="#" className="">
                About
              </a>
            </div>
            <div className="cursor-pointer hover:scale-105">
              <a href="#" className="">
                Careers
              </a>
            </div>
            <div className="cursor-pointer hover:scale-105">
              <a href="#" className="">
                Events
              </a>
            </div>
            <div className="cursor-pointer hover:scale-105">
              <a href="#" className="">
                Products
              </a>
            </div>
            <div className="cursor-pointer hover:scale-105">
              <a href="#" className="">
                Support
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-4 md:justify-end justify-center md:mt-0 mt-5">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
              <path
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
              <path
                d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
            <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
              <path
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                fill="#FFF"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <p className="mt-5">
          ©2024 Loopstudio, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
