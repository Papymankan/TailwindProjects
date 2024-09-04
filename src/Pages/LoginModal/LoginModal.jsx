import React from "react";

export default function LoginModal() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative flex rounded-2xl bg-white shadow-lg">
          <div className="p-6 md:p-14">
            <h1 className="font-serif text-3xl font-extrabold">Log In</h1>
            <p className="mt-5 max-w-80 text-sm text-slate-400">
              Log in to your account to upload or download pictures, videos or
              music.
            </p>
            <input
              type="text"
              className="mt-8 block w-full rounded-md border-2 p-3 py-5"
              placeholder="Enter your email address"
            />

            <div className="mt-8 flex items-center justify-between">
              <p className="text-blue-500">Forgot password?</p>
              <button className="rounded-md bg-blue-500 p-4 px-5 text-white sm:px-8">
                Next
                <i
                  class="fa fa-arrow-right ml-2 sm:ml-4"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            <div className="mt-10 border-b-2"></div>
            <p className="mt-6 w-full text-center text-sm text-slate-400">
              Or log in with
            </p>
            <div className="mt-6 flex flex-col justify-between md:flex-row">
              <div className="flex items-center justify-center rounded-sm border-2 px-5 py-2 ">
                <img src="/img/assets/facebook.png" className="mr-4 h-8" />
                Facebook
              </div>
              <div className="flex items-center justify-center rounded-sm border-2 px-5 py-2 mt-3 md:mt-0">
                <img src="/img/assets/google.png" className="mr-4 h-8" />
                Google
              </div>
            </div>
          </div>
          <div className="hidden w-96 overflow-hidden rounded-r-2xl md:block">
            <img
              src="/img/assets/login-modal-image.jpg"
              className="h-full w-full scale-105 rounded-r-2xl object-cover duration-200 hover:scale-100"
            />
          </div>
          <div className="group absolute right-4 top-4 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1.5 transition duration-200 hover:-translate-y-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black group-hover:text-gray-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
