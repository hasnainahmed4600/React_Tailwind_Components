import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  <div className="p-8 bg-gray-800">
    <div className="max-w-7xl mx-auto">
      
  <div>
    <div>
      <nav className="sm:hidden" aria-label="Back">
        <a href="/" className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
          <svg className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-500" data-todo-x-description="Heroicon name: solid/chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
</svg>
          Back
        </a>
      </nav>
      <nav className="hidden sm:flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          <li>
            <div>
              <a href="/" className="text-gray-400 hover:text-gray-500">
                </a><a href="/" className="text-sm font-medium text-gray-400 hover:text-gray-200">Jobs</a>
              
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="flex-shrink-0 h-5 w-5 text-gray-500" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
              <a href="/" className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">Engineering</a>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="flex-shrink-0 h-5 w-5 text-gray-500" data-todo-x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
</svg>
              <a href="/" aria-current="page" className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">Back End Developer</a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div className="mt-2 md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
          Back End Developer
        </h2>
      </div>
      <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
          Edit
        </button>
        <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
          Publish
        </button>
      </div>
    </div>
  </div>

    </div>
  </div>
</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
