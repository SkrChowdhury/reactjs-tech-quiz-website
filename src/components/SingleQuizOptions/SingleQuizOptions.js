import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingleQuizOptions = ({ option, quiz }) => {
  console.log(option);
  const [isActive, setIsActive] = useState(false);
  const handleOnclick = () => {
    if (option === quiz.correctAnswer) {
      setIsActive((current) => !current);
      toast.success('Wow ! You Got It Right');
    } else {
      toast.error('Oho ! Wrong ! Try Again');
    }
  };
  return (
    <div>
      <div className=" py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
        <div className=" relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div
            onClick={handleOnclick}
            className={
              isActive
                ? 'relative p-3 bg-green-600 text-white rounded-sm'
                : 'relative p-3 bg-white rounded-sm'
            }
          >
            <div className="flex flex-row items-center lg:flex-row">
              <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="font-normal text-xs leading-5">{option}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuizOptions;
