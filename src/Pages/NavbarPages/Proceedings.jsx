import React from 'react';

const Proceedings = () => {
    return (
        <div className='m-10'>

            <div className='mx-auto mb-6 max-w-6xl text-center text-gray-500 dark:text-gray-400'>The accepted articles will be published in three forms: the Abstract Proceedings will be made available as hard-copy and the full 
            papers will be published as post-conference e-proceedings on the conference website as well as printed books respectively.</div>


            <div className='mx-auto mb-6 max-w-fit  text-center text-gray-500 dark:text-gray-400'>
                <p className='mx-auto mb-6 max-w-2xl  text-center text-gray-500 dark:text-gray-400 font-semibold text-3xl'>Previous Proceedings</p>
                <span className='mx-auto mb-6 max-w-2xl  text-center text-gray-500 dark:text-gray-400'>Please visit <a href="https://www.butex.edu.bd/conference-2022/" class="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline"> https://www.butex.edu.bd/conference-2022/ </a>to view the proceedings of the 1st International Conference 
                    on Textile Science & Engineering (ICTSE- 2022).</span>
            </div>
        </div>
    );
};

export default Proceedings;