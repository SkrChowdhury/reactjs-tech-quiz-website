import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizDetails = () => {
  const quizDetails = useLoaderData();
  const quizes = quizDetails.data.questions;
  console.log(quizDetails);

  return (
    <div>
      <h2 className="mt-10 font-extrabold text-deep-purple-accent-400 text-3xl">
        Quiz of {quizDetails.data.name}
      </h2>
      {quizes.map((quiz) => (
        <SingleQuiz key={quizes.id} quiz={quiz}></SingleQuiz>
      ))}
    </div>
  );
};

export default QuizDetails;
