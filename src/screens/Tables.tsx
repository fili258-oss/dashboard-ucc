const Tables = () => {
  return (

    <main className="h-screen w-screen overflow-hidden">
      <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
        <div className="grid grid-cols-3  my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
          <section className="grid bg-white shadow-lg rounded-lg">
            <article className="py-4 px-4">
              <img src="/src/assets/img/BannerADMINUCC.png" className="object-cover rounded-lg" alt="" />
            </article>

            <article className="flex flex-col items-center justify-center p-4 -mt-20">
              <img alt="profil" src="/src/assets/img/persona1.jpg" className="mx-auto object-cover rounded-full h-24 w-24  border-4 border-white" />
              <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 py-6">
                Adela Parkson
              </p>
              <small>
                Product Designer
              </small>
            </article>
          </section>
          <section className="overflow-hidden bg-white shadow-lg rounded-lg">
            <article className="relative flex flex-col justify-between h-full w-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="w-20 h-20 m-auto mt-4 text-blue-950 dark:text-blue-950" viewBox="0 0 2048 1792">
                <path d="M1920 768q53 0 90.5 37.5t37.5 90.5-37.5 90.5-90.5 37.5h-15l-115 662q-8 46-44 76t-82 30h-1280q-46 0-82-30t-44-76l-115-662h-15q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5h1792zm-1435 800q26-2 43.5-22.5t15.5-46.5l-32-416q-2-26-22.5-43.5t-46.5-15.5-43.5 22.5-15.5 46.5l32 416q2 25 20.5 42t43.5 17h5zm411-64v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm384 0v-416q0-26-19-45t-45-19-45 19-19 45v416q0 26 19 45t45 19 45-19 19-45zm352 5l32-416q2-26-15.5-46.5t-43.5-22.5-46.5 15.5-22.5 43.5l-32 416q-2 26 15.5 46.5t43.5 22.5h5q25 0 43.5-17t20.5-42zm-1156-1217l-93 412h-132l101-441q19-88 89-143.5t160-55.5h167q0-26 19-45t45-19h384q26 0 45 19t19 45h167q90 0 160 55.5t89 143.5l101 441h-132l-93-412q-11-44-45.5-72t-79.5-28h-167q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45h-167q-45 0-79.5 28t-45.5 72z">
                </path>
              </svg>

              <p className="mt-4 text-lg text-gray-700">
                Package delivereds
              </p>
              <p className="px-6 py-2 text-xs font-thin text-gray-700">
                Your package was delivered in 1 day and 4 hours by our postal partner
              </p>
              <div className="block p-4 m-auto bg-white rounded-lg shadow w-56">
                <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                  <div className="w-3/4 h-full text-center text-xs text-white bg-indigo-500 rounded-full">
                    75%
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="space-x-2 md:w-1/2 bg-white shadow-lg rounded-lg">
            <article className="relative w-full px-4 py-6 ">
              <article className="block p-4 m-auto bg-white rounded-lg border-dashed border-2 border-gray-200">
                <p className="mt-4  text-gray-700">
                  Upload files
                </p>
                <small className="py-2 text-xs font-thin text-gray-700">
                  PNG, JPG and GIF fiels are allowed
                </small>
              </article>              
            </article>
            <article className="relative w-full">
              <p className="text-gray-600 text-md">
                User has been deleted form database.
              </p>
              <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Get started
              </button>
            </article>

          </section>
        </div>
      </div>


    </main>

  );
};

export default Tables;
