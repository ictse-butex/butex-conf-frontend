import React from 'react';

const TimeLine = () => {
    return (
        <>
            {/* <ul className="timeline timeline-vertical">
                <li>
                    <div className="timeline-start timeline-box">First Macintosh computer</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box">iMac</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start timeline-box">iPod</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box">iPhone</div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-start timeline-box">Apple Watch</div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                </li>
            </ul> */}
            
            <div class="bg-[#357F70] p-4">
                <div className='flex justify-center'><h2 class="text-3xl text-white font-bold mb-12">Key Dates</h2></div>

                <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">

                    <div class="flex md:contents flex-row-reverse" >
                        <div
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">New Event 1</h3>
                            <p class="mt-2 leading-6">Description of the first event.</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-yellow-300 rounded-t-full bg-gradient-to-b from-yellow-400 to-yellow-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-yellow-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">New Event 2</h3>
                            <p class="mt-2 leading-6">Description of the second event.</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
                        </div>
                    </div>

                    <div class="flex md:contents flex-row-reverse">
                        <div
                            class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">New Event 3</h3>
                            <p class="mt-2 leading-6">Description of the first event.</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
                        </div>
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-yellow-400 to-yellow-300">
                                </div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
                        </div>
                    </div>

                    <div class="flex md:contents">
                        <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                            <div class="flex items-center justify-center w-6 h-full">
                                <div class="w-1 h-full bg-yellow-300"></div>
                            </div>
                            <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-yellow-400 rounded-full top-1/2"></div>
                        </div>
                        <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                            <h3 class="text-lg font-semibold lg:text-xl">New Event 4</h3>
                            <p class="mt-2 leading-6">Description of the second event.</p>
                            <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
                        </div>
                    </div>

                </div>
            </div>
            
        </>

    );
};

export default TimeLine;