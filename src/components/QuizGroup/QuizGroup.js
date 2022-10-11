import React from 'react';
import Quiz from '../Quiz/Quiz';

const QuizGroup = ({topics}) => {
  return (
    <div>
      <div className="relative w-full h-full">
        <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Quizes</span>
              </span>{' '}
              for Programmers
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Try ours Quizes to sharpen your knowledge and win awards achieving places among top 50
            </p>
          </div>
          <div className="grid  gap-10 md:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
            {
              topics.data.map(subject=> <Quiz key={subject.id} subject={subject}></Quiz>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizGroup;
