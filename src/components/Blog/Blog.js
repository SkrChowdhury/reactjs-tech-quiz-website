import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
        <div className="p-8 rounded shadow-xl sm:p-16 bg-slate-50">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                What is the purpose
                <br /> of{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  React Router?
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700 text-justify">
                <strong>Answer:</strong>
                <br />
                React Router, and dynamic, client-side routing, allows us to
                build a single-page web application with navigation without the
                page refreshing as the user navigates. React Router uses
                component structure to call components, which display the
                appropriate information.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
        <div className="p-8 rounded shadow-xl sm:p-16 bg-slate-50">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                How does
                <br />{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  Context API Works?
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700 text-justify">
                <strong>Answer:</strong>
                <br />
                React.createContext() is all you need. It returns a consumer and
                a provider. Provider is a component that as it's names suggests
                provides the state to its children. It will hold the "store" and
                be the parent of all the components that might need that store.
                Consumer as it so happens is a component that consumes and uses
                the state.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="p-8 rounded shadow-xl sm:p-16 bg-slate-50">
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                React's{' '}
                <span className="inline-block text-deep-purple-accent-400">
                  useRef() Hook
                </span>
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="mb-4 text-base text-gray-700 text-justify">
                <strong>Answer:</strong>
                <br />
                The useRef Hook is a function that returns a mutable ref object
                whose .current property is initialized with the passed argument
                (initialValue). The returned object will persist for the full
                lifetime of the component.
                <br />
                There are two main uses of useRef : Accessing the DOM nodes or
                React elements and keeping a mutable variable.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
