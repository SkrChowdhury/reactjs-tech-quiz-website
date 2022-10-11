import React from 'react';
import SingleQuizOptions from '../SingleQuizOptions/SingleQuizOptions';
import { EyeIcon } from '@heroicons/react/24/solid';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({ quiz }) => {
  const options = quiz.options;
  const notify = () =>
    toast.success(`🦄 ${quiz.correctAnswer}`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  return (
    <div>
      <div className="  px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-8 ">
        <div className="  p-4 rounded shadow-xl sm:p-10 bg-slate-50">
          <p className="text-lg text-start font-semibold">{quiz.question}</p>
          <div className=" cursor-pointer grid lg:grid-cols-2 md:grid-cols-1">
            {options.map((option) => (
              <SingleQuizOptions
                key={quiz.id}
                option={option}
                quiz={quiz}
              ></SingleQuizOptions>
            ))}
          </div>
          <div className="flex justify-center">
            <EyeIcon
              onClick={notify}
              className="cursor-pointer h-8 w-8 text-blue-700"
            ></EyeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;
