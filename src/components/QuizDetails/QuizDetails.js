import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails)
    return (
        <div>
            <h2>Quiz Details</h2>
            
        </div>
    );
};

export default QuizDetails;