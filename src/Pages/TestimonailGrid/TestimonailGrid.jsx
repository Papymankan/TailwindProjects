import React from "react";

export default function TestimonailGrid() {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-200 font-grid">
        <div className="container mx-auto max-w-7xl border-2 border-black p-2 md:p-10">
          <div className="text-white">
            {/* Box 1 */}
            <div className="relative rounded-xl bg-purple-700 p-10">
              <img
                src="/img/assets/Testimonial-grid/bg-pattern-quotation.svg"
                className="absolute right-10 top-8 z-0 scale-125 md:right-24 md:scale-150"
                alt=""
              />
              <div className="z-20 flex items-center">
                <img
                  src="/img/assets/Testimonial-grid/image-daniel.jpg"
                  className="rounded-full border-2 border-purple-300"
                  alt=""
                />
                <div className="ml-5">
                  <h3 className="text-lg font-bold opacity-90">
                    Daniel Clifford
                  </h3>
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

            {/* Box 2 */}
            <div className="relative rounded-xl bg-gray-600 p-10">
              <div className="flex items-center">
                <img
                  src="/img/assets/Testimonial-grid/image-jonathan.jpg"
                  className="rounded-full border-2 border-purple-300"
                  alt=""
                />
                <div className="ml-5">
                  <h3 className="text-lg font-bold opacity-90">
                    Jonathan Walters
                  </h3>
                  <p className="text-gray-200">Verified Graduate</p>
                </div>
              </div>
              <div className="relative mt-10 text-xl font-bold">
                The team was very supportive and kept me motivated
              </div>
              <p class="mt-6 line-clamp-6 opacity-70">
                "I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I've made in myself. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Atque ipsam veritatis natus
                illum ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum
                rem necessitatibus facere nihil deleniti assumenda vel velit
                neque quia, nisi ipsum laudantium impedit eveniet iste.
                Pariatur, exercitationem consequuntur praesentium a est eum
                velit quos maiores ipsum facere tempora!"
              </p>
            </div>

            {/* Box 3 */}
            <div className="hidden relative rounded-xl bg-white p-10 text-gray-900">
              <div className="flex items-center">
                <img
                  src="/img/assets/Testimonial-grid/image-kira.jpg"
                  className="rounded-full border-2 border-purple-300"
                  alt=""
                />
                <div className="ml-5">
                  <h3 className="text-lg font-bold opacity-90">Kira Whittle</h3>
                  <p className="text-gray-200">Verified Graduate</p>
                </div>
              </div>
              <div className="relative mt-10 text-xl font-bold">
                Such a life-changing experience. Highly recommended!
              </div>
              <p class="mt-6 line-clamp-6 opacity-70">
                "Before joining the bootcamp, I've never written a line of code.
                I needed some structure from professionals who can help me learn
                programming step by step. I was encouraged to enroll by a former
                student of theirs who can only say wonderful things about the
                program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I've often referred to it
                during interviews as an example of my developent experience. It
                certainly helped me land a job as a full-stack developer after
                receiving multiple offers. 100% recommend!"
              </p>
            </div>

            {/* Box 4 */}
            <div className="relative rounded-xl bg-white p-10 text-gray-900">
              <div className="flex items-center">
                <img
                  src="/img/assets/Testimonial-grid/image-jeanette.jpg"
                  className="rounded-full border-2 border-purple-300"
                  alt=""
                />
                <div className="ml-5">
                  <h3 className="text-lg font-bold opacity-90">
                    Jeanette Harmon
                  </h3>
                  <p className="text-gray-200">Verified Graduate</p>
                </div>
              </div>
              <div className="relative mt-10 text-xl font-bold">
                An overall wonderful and rewarding experience
              </div>
              <p class="mt-6 line-clamp-6 opacity-70">
                "Thank you for the wonderful experience! I now have a job I
                really enjoy, and make a good living while doing something I
                love."
              </p>
            </div>

            {/* Box 5 */}
            <div className="relative rounded-xl bg-gray-900 p-10">
              <div className="flex items-center">
                <img
                  src="/img/assets/Testimonial-grid/image-patrick.jpg"
                  className="rounded-full border-2 border-purple-300"
                  alt=""
                />
                <div className="ml-5">
                  <h3 className="text-lg font-bold opacity-90">
                    Patrick Abrams
                  </h3>
                  <p className="text-gray-200">Verified Graduate</p>
                </div>
              </div>
              <div className="relative mt-10 text-xl font-bold">
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </div>
              <p class="mt-6 line-clamp-6 opacity-70">
                "The staff seem genuinely concerned about my progress which I
                find really refreshing. The program gave me the confidence
                necessary to be able to go out in the world and present myself
                as a capable junior developer. The standard is above the rest.
                You will get the personal attention you need from an incredible
                community of smart and amazing people."
              </p>
            </div>

            {/* Box 6 */}
            <div className="relative rounded-xl bg-white p-10 text-gray-900">
              <div className="flex items-center">
                <img
                  src="/img/assets/Testimonial-grid/image-kira.jpg"
                  className="rounded-full border-2 border-purple-300"
                  alt=""
                />
                <div className="ml-5">
                  <h3 className="text-lg font-bold opacity-90">Kira Whittle</h3>
                  <p className="text-gray-200">Verified Graduate</p>
                </div>
              </div>
              <div className="relative mt-10 text-xl font-bold">
                Such a life-changing experience. Highly recommended!
              </div>
              <p class="mt-6 line-clamp-6 opacity-70">
                "Before joining the bootcamp, I've never written a line of code.
                I needed some structure from professionals who can help me learn
                programming step by step. I was encouraged to enroll by a former
                student of theirs who can only say wonderful things about the
                program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I've often referred to it
                during interviews as an example of my developent experience. It
                certainly helped me land a job as a full-stack developer after
                receiving multiple offers. 100% recommend!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
