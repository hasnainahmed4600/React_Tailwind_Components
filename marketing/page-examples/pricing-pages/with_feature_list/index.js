import React from "react";
import ReactDOM from "react-dom";

const Component = (props) => (
<>
<div className="" style={{}}>
  
  <div className="bg-white">
    <div className="relative" data-todo-x-data="Components.popover({ open: false, focus: true })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="">
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" data-todo-colon-aria-expanded="open.toString()">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10" data-todo-x-data="Components.popoverGroup()" data-todo-x-init="init()">
            <div className="relative" data-todo-x-data="Components.popover({ open: false, focus: false })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
              <button type="button" data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-todo-colon-className="{ 'text-gray-900': open, 'text-gray-500': !(open) }" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()">
                <span>Solutions</span>
                <svg data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" data-todo-colon-className="{ 'text-gray-600': open, 'text-gray-400': !(open) }" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
              </button>

              
                <div data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-200" data-todo-x-transition-enter-start="opacity-0 translate-y-1" data-todo-x-transition-enter-end="opacity-100 translate-y-0" data-todo-x-transition-leave="transition ease-in duration-150" data-todo-x-transition-leave-start="opacity-100 translate-y-0" data-todo-x-transition-leave-end="opacity-0 translate-y-1" data-todo-x-description="'Solutions' flyout menu, show/hide based on flyout menu state." className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2" data-todo-x-ref="panel" data-todo-at-click-away="open = false">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Analytics
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Get a better understanding of where your traffic is coming from.
                            </p>
                          </div>
                        </a>
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/cursor-click" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Engagement
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Speak directly to your customers in a more meaningful way.
                            </p>
                          </div>
                        </a>
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/shield-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Your customers' data will be safe and secure.
                            </p>
                          </div>
                        </a>
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/view-grid" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Integrations
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Connect with third-party tools that you're already using.
                            </p>
                          </div>
                        </a>
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/refresh" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Automations
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Build strategic funnels that will drive your customers to convert
                            </p>
                          </div>
                        </a>
                      
                    </div>
                    <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                      
                        <div className="flow-root">
                          <a href="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                            <svg className="flex-shrink-0 h-6 w-6 text-gray-400" data-todo-x-description="Heroicon name: outline/play" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
                            <span className="ml-3">Watch Demo</span>
                          </a>
                        </div>
                      
                        <div className="flow-root">
                          <a href="/" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                            <svg className="flex-shrink-0 h-6 w-6 text-gray-400" data-todo-x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
</svg>
                            <span className="ml-3">Contact Sales</span>
                          </a>
                        </div>
                      
                    </div>
                  </div>
                </div>
              
            </div>

            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </a>
            <a href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Docs
            </a>

            <div className="relative" data-todo-x-data="Components.popover({ open: false, focus: false })" data-todo-x-init="init()" data-todo-at-keydown-escape="onEscape" data-todo-at-close-popover-group-window="onClosePopoverGroup">
              <button type="button" data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-todo-colon-className="{ 'text-gray-900': open, 'text-gray-500': !(open) }" data-todo-at-click="toggle" data-todo-at-mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()">
                <span>More</span>
                <svg data-todo-x-state-on="Item active" data-todo-x-state-off="Item inactive" className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" data-todo-colon-className="{ 'text-gray-600': open, 'text-gray-400': !(open) }" data-todo-x-description="Heroicon name: solid/chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
</svg>
              </button>

              
                <div data-todo-x-show="open" data-todo-x-transition-enter="transition ease-out duration-200" data-todo-x-transition-enter-start="opacity-0 translate-y-1" data-todo-x-transition-enter-end="opacity-100 translate-y-0" data-todo-x-transition-leave="transition ease-in duration-150" data-todo-x-transition-leave-start="opacity-100 translate-y-0" data-todo-x-transition-leave-end="opacity-0 translate-y-1" data-todo-x-description="'More' flyout menu, show/hide based on flyout menu state." className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0" data-todo-x-ref="panel" data-todo-at-click-away="open = false">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/support" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Help Center
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Get all of your questions answered in our forums or contact support.
                            </p>
                          </div>
                        </a>
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/bookmark-alt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Guides
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Learn how to maximize our platform to get the most out of it.
                            </p>
                          </div>
                        </a>
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/calendar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Events
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              See what meet-ups and other events we might be planning near you.
                            </p>
                          </div>
                        </a>
                      
                        <a href="/" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/shield-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Security
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Understand how we take your privacy seriously.
                            </p>
                          </div>
                        </a>
                      
                    </div>
                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                          Recent Posts
                        </h3>
                        <ul className="mt-4 space-y-4">
                          
                            <li className="text-base truncate">
                              <a href="/" className="font-medium text-gray-900 hover:text-gray-700">
                                Boost your conversion rate
                              </a>
                            </li>
                          
                            <li className="text-base truncate">
                              <a href="/" className="font-medium text-gray-900 hover:text-gray-700">
                                How to use search engine optimization to drive traffic to your site
                              </a>
                            </li>
                          
                            <li className="text-base truncate">
                              <a href="/" className="font-medium text-gray-900 hover:text-gray-700">
                                Improve your customer experience
                              </a>
                            </li>
                          
                        </ul>
                      </div>
                      <div className="mt-5 text-sm">
                        <a href="/" className="font-medium text-blue-600 hover:text-blue-500"> View all posts <span aria-hidden="true">???</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a href="/" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a href="/" className="whitespace-nowrap bg-blue-100 border border-transparent rounded-md py-2 px-4 inline-flex items-center justify-center text-base font-medium text-blue-700 hover:bg-blue-200">
              Sign up
            </a>
          </div>
        </div>
      </div>

      
        <div data-todo-x-show="open" data-todo-x-transition-enter="duration-200 ease-out" data-todo-x-transition-enter-start="opacity-0 scale-95" data-todo-x-transition-enter-end="opacity-100 scale-100" data-todo-x-transition-leave="duration-100 ease-in" data-todo-x-transition-leave-start="opacity-100 scale-100" data-todo-x-transition-leave-end="opacity-0 scale-95" data-todo-x-description="Mobile menu, show/hide based on mobile menu state." className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" data-todo-x-ref="panel" data-todo-at-click-away="open = false">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg" alt="Workflow">
                </div>
                <div className="-mr-2">
                  <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" data-todo-at-click="toggle">
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  
                    <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/chart-bar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
</svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Analytics
                      </span>
                    </a>
                  
                    <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/cursor-click" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
</svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Engagement
                      </span>
                    </a>
                  
                    <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/shield-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
</svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Security
                      </span>
                    </a>
                  
                    <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/view-grid" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
</svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Integrations
                      </span>
                    </a>
                  
                    <a href="/" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600" data-todo-x-description="Heroicon name: outline/refresh" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
</svg>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Automations
                      </span>
                    </a>
                  
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>

                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a>

                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>

                <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Contact Sales
                </a>
                
                  <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Help Center
                  </a>
                
                  <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Guides
                  </a>
                
                  <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Events
                  </a>
                
                  <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Security
                  </a>
                
              </div>
              <div>
                <a href="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  {/* space */}
                  <a href="/" className="text-blue-600 hover:text-blue-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </div>

    <div className="bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Pricing section with single price and feature list */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-gray-900">Everything you need for </span>
              <span className="text-blue-600">$99 a month</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">Includes every feature we offer plus unlimited projects and unlimited users.</p>
          </div>
          <a href="/" className="mt-8 w-full bg-blue-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0">Get started today</a>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">Everything you need</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one platform</p>
            <p className="mt-4 text-lg text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul className="divide-y divide-gray-200">
              
                <li className="py-4 flex md:py-0 md:pb-4">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Vitae in pulvinar odio id utobortis in inter.</span>
                </li>
              
                <li className="py-4 flex ">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Sed sed id viverra viverra augue eget massa.</span>
                </li>
              
                <li className="py-4 flex ">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Urna, gravida amet, a, integer venenatis.</span>
                </li>
              
                <li className="py-4 flex ">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Lobortis sed pharetra amet vitae eleifend.</span>
                </li>
              
                <li className="py-4 flex ">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Ullamcorper blandit a consequat donec elit aoreet.</span>
                </li>
              
            </ul>
            <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
              
                <li className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Dolor quo assumenda.</span>
                </li>
              
                <li className="py-4 flex ">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Esse rerum distinctio maiores maiores.</span>
                </li>
              
                <li className="py-4 flex ">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Eos enim officiis ratione.</span>
                </li>
              
                <li className="py-4 flex ">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Tempore molestiae aliquid excepturi.</span>
                </li>
              
                <li className="py-4 flex ">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
                  <span className="ml-3 text-base text-gray-500">Perspiciatis eveniet inventore eum et aliquam.</span>
                </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Branded FAQ */}
    <div className="bg-blue-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          Frequently asked questions
        </h2>
        <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
            
              <div>
                <dt className="text-lg leading-6 font-medium text-white">
                  What's the best thing about Switzerland?
                </dt>
                <dd className="mt-2 text-base text-blue-200">
                  I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
            
              <div>
                <dt className="text-lg leading-6 font-medium text-white">
                  Why do you never see elephants hiding in trees?
                </dt>
                <dd className="mt-2 text-base text-blue-200">
                  Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
            
              <div>
                <dt className="text-lg leading-6 font-medium text-white">
                  How do you make holy water?
                </dt>
                <dd className="mt-2 text-base text-blue-200">
                  You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
            
              <div>
                <dt className="text-lg leading-6 font-medium text-white">
                  Why can't you hear a pterodactyl go to the bathroom?
                </dt>
                <dd className="mt-2 text-base text-blue-200">
                  Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
            
              <div>
                <dt className="text-lg leading-6 font-medium text-white">
                  What do you call someone with no body and no nose?
                </dt>
                <dd className="mt-2 text-base text-blue-200">
                  Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
            
              <div>
                <dt className="text-lg leading-6 font-medium text-white">
                  Why did the invisible man turn down the job offer?
                </dt>
                <dd className="mt-2 text-base text-blue-200">
                  He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
              </div>
            
          </dl>
        </div>
      </div>
    </div>

    {/* CTA section */}
    <div className="bg-blue-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <a href="/" className="bg-blue-600 border border-transparent rounded-md py-3 px-5 inline-flex items-center justify-center text-base font-medium text-white hover:bg-blue-700">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Simple footer */}
    <footer className="max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        
          <div className="py-2 px-5">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
        
          <div className="py-2 px-5">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </div>
        
          <div className="py-2 px-5">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Jobs
            </a>
          </div>
        
          <div className="py-2 px-5">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Press
            </a>
          </div>
        
          <div className="py-2 px-5">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Accessibility
            </a>
          </div>
        
          <div className="py-2 px-5">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Partners
            </a>
          </div>
        
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
</svg>
          </a>
        
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
</svg>
          </a>
        
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
          </a>
        
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
</svg>
          </a>
        
          <a href="/" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Dribbble</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
</svg>
          </a>
        
      </div>
      <p className="mt-8 text-center text-base text-gray-500">
        ?? 2020 Workflow, Inc. All rights reserved.
      </p>
    </footer>
  </div>

</div>
</>
);

ReactDOM.render(<Component/>, document.getElementById('root'));
