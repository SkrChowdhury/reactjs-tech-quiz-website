import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col content-center items-center bg-red-50 h-screen">
      <p className="error-text font-bold text-red-900 py-10">404</p>
      <p className="text-4xl  font-thin  ">Please Enter a Valid URL</p>
    </div>
  );
};

export default ErrorPage;
