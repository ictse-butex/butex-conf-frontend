import React from 'react';

const Registration = () => {
    return (
        <div className='mt-10'>
            <p className='text-center mb-3 text-gray-500 dark:text-gray-400'>Registration for the 2nd International Conference on Textile Science and Engineering will be opened on 5 April 2024.</p>

            <p className='text-center mb-3 text-gray-500 dark:text-gray-400'>All registration information including pricing and inclusions is outlined below:</p>
            <div className='text-center flex  mt-10 mb-10'>
                <div className='border-2 mx-auto max-w-full'>
                    <p legend class="font-bold m-3 text-gray-500 dark:text-gray-400 text-2xl">Registration Fees:</p>
                    {/* 
                    <div className='flex justify-around max-w-fit '>
                        <div>
                            <p className='text-center'>Category</p>
                            <ul class="text-gray-600 text-start  dark:text-gray-300 text-sm mt-2 list-disc list-inside pl-4">
                                <li>Local delegate</li>
                                <li>Local student</li>
                                <li>International student</li>
                                <li>SAARC/ASEAN delegate </li>
                                <li>Others Foreign delegate  </li>
                                <li>Accompanying person</li>
                            </ul>


                        </div>
                        <div>
                            <p className='text-center'>Early Bird (05/04/2024)</p>

                            <ul class="text-gray-600 text-start  dark:text-gray-300 text-sm mt-2  list-inside pl-4">
                                <li><button className=''>BDT 1500</button></li>
                                <li><button className=''>BDT 750 </button></li>
                                <li><button className=''>USD 25</button> </li>
                                <li><button className=''>USD 80</button></li>
                                <li><button className=''>USD 40</button></li>
                                <li><button className=''>BDT 800</button> </li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-center'>Late</p>
                            <ul class="text-gray-600 text-start  dark:text-gray-300 text-sm mt-2  list-inside pl-4">
                                <li>BDT 2000</li>
                                <li>BDT 1000 </li>
                                <li>USD 30 </li>
                                <li>USD 100</li>
                                <li>USD 50</li>
                                <li>BDT 1000 </li>
                            </ul>
                        </div>
                    </div> */}

                    <div className="grid grid-cols-3 gap-4 m-3">
                        <div className=" text-gray-500 dark:text-gray-400 p-4">Category</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">Early Bird (05/04/2024)</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">Late</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">Local delegate</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">BDT 1500</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">BDT 2000</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">Local student</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">BDT 750</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">BDT 1000</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">International student</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">USD 25</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">USD 30</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">SAARC/ASEAN delegate</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">USD 80</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">USD 100</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">Others Foreign delegate</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">USD 40</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">USD 50</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">Accompanying person</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">BDT 800</div>
                        <div className=" text-gray-500 dark:text-gray-400 p-4">BDT 1000</div>
                    </div>


                    {/* The Registration Fees includes:

            Access to all conference sessions
            Access to the exhibition area
            Access to view the posters
            All refreshments on all days of the conference
            We look forward to welcoming you to BUTEX, Dhaka, Bangladesh in May 2024. */}

                </div>
            </div>
        </div>
    );
};

export default Registration;