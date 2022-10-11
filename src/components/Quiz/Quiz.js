import React from 'react';

const Quiz = () => {
  return (
    <div>
      <div class="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded">
        <div class="mb-4 text-center">
          <p class="text-xl font-medium tracking-wide text-white">
            Starter Plan
          </p>
          <div class="flex items-center justify-center">
            {/* <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                      $39
                    </p>
                    <p class="text-lg text-gray-500">/ month</p> */}

            <img src="" alt="" />
          </div>
        </div>

        <button
          type="submit"
          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Start Practice
        </button>
      </div>
      <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
      <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
      <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
    </div>
  );
};

export default Quiz;
