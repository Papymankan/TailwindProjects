import React from "react";

export default function TestimonailGrid() {
  return (
    <>
      <div className="font-grid min-h-screen w-full bg-gray-200">
        <div className="container mx-auto max-w-7xl border-2 border-black p-2 md:p-10">
          <div className="text-white">
            <div className="relative rounded-xl bg-purple-700 p-10">
              <img
                src="/img/assets/Testimonial-grid/bg-pattern-quotation.svg"
                className="absolute right-10 top-8 z-0 scale-125 md:right-24 md:scale-150"
                alt=""
              />
              <div className="z-20 flex items-center">
                <img
                  src="/img/assets/Testimonial-grid/image-daniel.jpg"
                  className="rounded-full border-2"
                  alt=""
                />
                <div className="ml-5">
                  <h3 className="text-lg font-bold opacity-90">Daniel Clifford</h3>
                  <p className="text-gray-200">Verified Graduate</p>
                </div>
              </div>
              <div className="relative z-50 mt-10 text-xl font-bold">
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny's worth.
              </div>
              <p class="mt-6 line-clamp-6 opacity-70">
                "I was an EMT for many years before I joined the bootcamp. I've
                been looking to make a transition and have heard some people who
                had an amazing experience here. I signed up for the free intro
                course and found it incredibly fun! I enrolled shortly
                thereafter. The next 12 weeks was the best - and most grueling -
                time of my life. Since completing the course, I've successfully
                switched careers, working as a Software Engineer at a VR
                startup. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ratione vero repudiandae, quasi atque officiis eum
                consectetur odio amet dolorem deleniti repellat expedita aut
                sunt laudantium cum itaque nam voluptatum quod! Quo totam sequi
                omnis deserunt? Sit nam molestiae excepturi, perspiciatis labore
                deleniti eum, eligendi quisquam quod sed nobis exercitationem
                tempora! "
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
