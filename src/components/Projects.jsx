export default function Projects() {
    return (
      <div className="bg-white">
        <div className=" py-10 max-w-lg sm:px-6 sm:py-10 px-8 mr-3 ml-3">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-xl sm:px-10 md:pt-24 lg:flex lg:gap-x-20  lg:pt-0">
            
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
              <h2 className="text-xl font-bold tracking-tight text-center text-white sm:text-3xl">
                Mental Health.
                <br />
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <button
                  href="#"
                  className="rounded-md  bg-white px-3.5 py-2.5 mb-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 justify-center focus-visible:outline-white" 
                >
                  Get started
                </button>
                
              </div>
            </div>
            {/* <div className="relative mt-16 h-80 lg:mt-8"> */}
              {/* <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                width={1824}
                height={1080}
              /> */}
            </div>
          </div>
        </div>
      // </div>
    )
  }