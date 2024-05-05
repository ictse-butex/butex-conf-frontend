import React from 'react';

const AboutConference = () => {
    return (
        <div className='flex flex-col justify-center items-center m-10 space-y-2'>
            <div >
                <div className='mx-auto mb-6 max-w-fit  text-center text-gray-500 dark:text-gray-400'>The Faculty of Textile Chemical Engineering (FTCE) of Bangladesh University of Textiles (BUTEX) is
                    going to organize the <span className='font-bold'>“2nd International Conference on Textile Science and Engineering (ICTSE-2024)”</span>
                    which will be held on 23 May 2024 in BUTEX, Dhaka, Bangladesh. The main focus of the conference is to provide a platform for scholars, researchers, and professionals around the world for interdisciplinary discussions on the latest advancements,
                    challenges, and solutions covering a broad spectrum of Textile Science and Technology.</div>



                <div className='mx-auto mb-6 max-w-7xl text-center text-gray-500 dark:text-gray-400'>We invite all prospective researchers around the world to submit original research papers,
                    case studies, and innovative work in the format of research papers/ posters. The full paper will be peer-reviewed before its final acceptance.
                    Submissions should adhere to the conference template and guidelines available on the conference website.</div>

                <div className='mx-auto mb-6 max-w-4xl text-center text-gray-500 dark:text-gray-400'>Accepted articles will be published in two forms: the full papers will be published as post-conference e-proceedings on the conference website as well as printed books respectively.
                    In addition, some accepted articles will be presented as poster during the conference</div>

                <div className='text-center mt-10'>
                    <p className='mb-3 text-gray-500 dark:text-gray-400 font-bold text-2xl'>Prof. Dr. Shah Alimuzzaman</p>

                    <p className='mb-3 text-gray-500 dark:text-gray-400'>Conference Chair, ICTSE- 2024</p>

                    <p className='mb-3 text-gray-500 dark:text-gray-400'>Vice Chancellor</p>

                    <p className='mb-3 text-gray-500 dark:text-gray-400'>Bangladesh University of Textiles (BUTEX)</p>

                    <p className='mb-3 text-gray-500 dark:text-gray-400'>Dhaka - 1208, Bangladesh</p>
                </div>
                <div className='text-center mt-10'>
                    <p className='mb-3 text-gray-500 dark:text-gray-400 font-semibold text-2xl'>Conference Venue</p>
                    <p className='mb-3 text-gray-500 dark:text-gray-400'>    Bangladesh University of Textiles (BUTEX)</p>

                    <p className='mb-3 text-gray-500 dark:text-gray-400'>    92 Shaheed Tajuddin Ahmed Avenue</p>

                    <p className='mb-3 text-gray-500 dark:text-gray-400'>    Tejgaon Industrial Area,</p>

                    <p className='mb-3 text-gray-500 dark:text-gray-400'>    Dhaka - 1208, Bangladesh</p>
                </div>

            </div>

        </div>

    );
};

export default AboutConference;