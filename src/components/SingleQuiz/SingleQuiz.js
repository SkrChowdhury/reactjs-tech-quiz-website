import React from 'react';
import SingleQuizOptions from '../SingleQuizOptions/SingleQuizOptions';

const SingleQuiz = ({ quiz }) => {
  const options = quiz.options;
  return (
    <div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:py-8 ">
        <div className="p-4 rounded shadow-xl sm:p-10 bg-slate-50">
          <p className="text-lg text-start font-semibold">{quiz.question}</p>
          <div className="grid lg:grid-cols-2 md:grid-cols-1">
            {options.map((option) => (
              <SingleQuizOptions key={quiz.id} option={option}></SingleQuizOptions>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuiz;
