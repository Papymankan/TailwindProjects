import React from "react";

export default function Loopstudio() {
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

      <div className="w-full md:px-16 px-5 font-josefin">
        <div className="w-full items-center justify-between flex">
          <h1 className="text-5xl uppercase w-full md:w-auto text-center md:text-left">Our Creations</h1>
          <button className="rounded-sm border-2 border-black px-10 py-3 font-semibold duration-200 hover:bg-black hover:text-white hidden md:block tracking-widest">
            SEE ALL
          </button>
        </div>
        <div className="hidden md:flex w-full flex-wrap justify-between">
          <div className="w-[23%] mt-10 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end lg:p-10 p-3 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              the curiosity
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/desktop/image-curiosity.jpg" />
          </div>
          <div className="w-[23%] mt-10 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end lg:p-10 p-3 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              deep earth
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/desktop/image-deep-earth.jpg" />
          </div>
          <div className="w-[23%] mt-10 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end lg:p-10 p-3 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              make it fisheye
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/desktop/image-fisheye.jpg" />
          </div>
          <div className="w-[23%] mt-10 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end lg:p-10 p-3 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              from up above vr
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/desktop/image-from-above.jpg" />
          </div>
          <div className="w-[23%] mt-10 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end lg:p-10 p-3 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              night arcade
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/desktop/image-night-arcade.jpg" />
          </div>
          <div className="w-[23%] mt-10 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end lg:p-10 p-3 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              pocket borealis
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/desktop/image-pocket-borealis.jpg" />
          </div>
          <div className="w-[23%] mt-10 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end lg:p-10 p-3 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              soccer team vr
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/desktop/image-soccer-team.jpg" />
          </div>
          <div className="w-[23%] mt-10 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end lg:p-10 p-3 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              the grid
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/desktop/image-grid.jpg" />
          </div>
        </div>
        <div className="flex md:hidden w-full flex-wrap justify-between">
          <div className="w-full mt-6 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end p-4 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              the curiosity
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/mobile/image-curiosity.jpg" />
          </div>
          <div className="w-full mt-6 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end p-4 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              deep earth
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/mobile/image-deep-earth.jpg" />
          </div>
          <div className="w-full mt-6 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end p-4 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              make it fisheye
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/mobile/image-fisheye.jpg" />
          </div>
          <div className="w-full mt-6 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end p-4 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              from up above vr
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/mobile/image-from-above.jpg" />
          </div>
          <div className="w-full mt-6 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end p-4 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              night arcade
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/mobile/image-night-arcade.jpg" />
          </div>
          <div className="w-full mt-6 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end p-4 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              pocket borealis
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/mobile/image-pocket-borealis.jpg" />
          </div>

          <div className="w-full mt-6 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end p-4 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              soccer team vr
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/mobile/image-soccer-team.jpg" />
          </div>

        
          <div className="w-full mt-6 relative group overflow-hidden">
            <div className="z-10 w-full h-full top-0 right-0 absolute duration-200 transition-colors uppercase images-container flex items-end p-4 text-white text-2xl">
              <p className="max-w-36 group-hover:scale-110 duration-200 group-hover:font-semibold group-hover:text-black">
              the grid
              </p>
            </div>
            <img className="w-full object-cover group-hover:scale-105 duration-200 transition" src="/img/assets/Loopstudio/mobile/image-grid.jpg" />
          </div>
        </div>
        <button className="w-full rounded-sm border-2 border-black px-10 py-3 font-semibold duration-200 hover:bg-black hover:text-white mt-10 tracking-widest block md:hidden">
            SEE ALL
          </button>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
