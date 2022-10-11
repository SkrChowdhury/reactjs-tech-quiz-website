import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ subject }) => {
  return (
    <div>
      <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded">
        <div className="mb-4 text-center">
          <p className="text-xl font-medium tracking-wide text-white">
            {subject.name}
          </p>
          <div className="flex items-center justify-center ">
            {/* <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                      $39
                    </p>
                    <p className="text-lg text-gray-500">/ month</p> */}

            <img className="w-full" src={subject.logo} alt="" />
          </div>
        </div>

        <Link
          to={`/quiz/${subject.id}`}
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Start Practice
        </Link>
      </div>
      <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
      <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
      <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
    </div>
  );
};

export default Quiz;
