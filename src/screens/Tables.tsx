const Tables = () => {
  return (

    <main className="relative h-screen overflow-hidden">
      <div className="flex items-start justify-between">

        <div className="flex flex-col w-full md:space-y-4">

          <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
            <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
              <div className="w-full md:w-6/12">
                <div className="overflow-hidden bg-white shadow-lg rounded-lg">
                  <div className="gap-4">
                    <img className="" src="/src/assets/img/BannerADMINUCC.png" alt="" />
                  </div>
                  <div className="items-center justify-center text-center px-4 py-6 space-x-4">
                    <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    <p className="text-sm font-semibold text-gray-700 border-b border-gray-200 py-6">
                      Adela Parkson
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center w-full space-x-4 md:w-1/2">
                <div className="w-1/2">
                  <div className="relative w-full px-4 py-6 bg-white shadow-lg rounded-lg">
                    <p className="text-2xl font-bold text-black dark:text-white">
                      12
                    </p>
                    <p className="text-sm text-gray-400">
                      Active projects
                    </p>
                    <div className="block p-4 m-auto bg-white rounded-lg shadow">
                      <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                        <div className="w-3/4 h-full text-center text-xs text-white bg-indigo-500 rounded-full">
                          75%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-full text-center bg-white shadow-lg rounded-lg">
                  <div className="flex flex-col justify-between h-full">
                    <span className="MdCloudDone"></span>
                    <p className="px-6 py-2 text-gray-600 dark:text-gray-100 text-md">
                      User
                      <span className="font-bold text-gray-800 dark:text-white">
                        23722873
                      </span>
                      has been deleted form database.
                    </p>
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  );
};

export default Tables;
