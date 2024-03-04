import React from 'react';

const CallForPapers = () => {
  return (
    <>
      <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center m-8'>
        <fieldset className='text-start border-2 border-grey-600 rounded-lg px-4 py-2'>
          <legend className="font-bold  text-3xl mb-3 text-gray-500 dark:text-gray-400">Scopes</legend>
          <p className="mb-3 text-gray-500 dark:text-gray-400  text-sm mt-2">The below non-exhaustive list includes:</p>
          <ul className=" text-sm mt-2 list-disc list-inside pl-4 mb-3 text-gray-500 dark:text-gray-400">
            <li>Fibre science</li>
            <li>Technical and smart textiles</li>
            <li>Chemistry of dyes and auxiliaries</li>
            <li>Textile chemical processing</li>
            <li>Nanotechnology in textiles</li>
            <li>Advanced textile materials</li>
            <li>Solid and hazardous waste management</li>
            <li>Wastewater management</li>
            <li>Chemical Safety and Management</li>
            <li>Sustainability and circular economy in textiles</li>
            <li>Textiles and apparel supply chain</li>
            <li>Apparel merchandising and fashion design</li>
            <li>Advanced machinery and automation</li>
            <li>Renewable energy in the textile industry</li>
            <li>Textile Industry 4.0</li>
            <li>Textile Composites</li>
            <li>Nonwovens</li>
            <li>Textile Research and Education</li>
          </ul>
        </fieldset>

        <fieldset className='text-start border-2 border-grey-600 rounded-lg px-4 py-2 '>
          <legend className="font-bold  text-3xl mb-3 text-gray-500 dark:text-gray-400">Abstract Submission</legend>
          <span className='block mb-4 text-gray-500 dark:text-gray-400 '>Before submitting the abstract, ensure you read the prescribed guidelines carefully.</span>
          <a href="#" className="mb-3 underline text-gray-500 dark:text-gray-400  dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline">Click here to download Abstract template</a>
        </fieldset>

        <fieldset className='text-start border-2 border-grey-600 rounded-lg px-4 py-2'>
          <legend className="font-bold  text-3xl text-gray-500 dark:text-gray-400 ">General Guidelines</legend>
          <ul className=" text-sm mt-2 list-disc list-inside pl-4 text-gray-500 dark:text-gray-400 ">
            <li>The suggested abstract submission template must be used</li>
            <li>Abstracts must be submitted in English</li>
            <li>Abstracts must be submitted via the online submission link only. Abstracts submitted via email will not be accepted</li>
            <li>The abstract should not exceed a maximum of 300 words</li>
            <li>A confirmation email will be sent to you when your submission has been received</li>
            <li>The Technical Committee will determine whether abstracts will be accepted based on a peer review process.</li>
            <li>Please ensure that all information is accurate, no edits are permitted after submission</li>
            <li>Presenting authors must be registered participants of the conference.</li>
          </ul>
        </fieldset>

        <fieldset className='text-start border-2 border-grey-600 rounded-lg px-4 py-2'>
          <legend className="font-bold  text-3xl  text-gray-500 dark:text-gray-400 ">Presentation Types</legend>
          <p className=" text-sm mt-2 text-gray-500 dark:text-gray-400 ">In 2024, ICTSE will be welcoming the below presentation types:</p>
          <ul className="text-sm mt-2 list-disc list-inside pl-4 text-gray-500 dark:text-gray-400 ">
            <li>Oral presentation – physical and hybrid mode</li>
            <li>Poster presentation</li>
          </ul>
        </fieldset>

        <fieldset className='text-start border-2 border-grey-600 rounded-lg px-4 py-2'>
          <legend className="font-bold  text-3xl  text-gray-500 dark:text-gray-400 ">Conditions of Acceptance</legend>
          <p className=" text-sm mt-2  text-gray-500 dark:text-gray-400 ">If accepted for the conference, the following conditions will apply:</p>
          <ul className=" text-sm mt-2 list-disc list-inside pl-4  text-gray-500 dark:text-gray-400 ">
            <li>Oral presentations can only be presented by one author</li>
            <li>Presenters must be a listed author on the submission</li>
            <li>Accepted presenters must register, pay, and attend the conference, otherwise the submission will not be included in the conference</li>
            <li>Submissions remain the property of ICTSE and the Program Committee reserves the right to publish and distribute</li>
          </ul>
        </fieldset>

        <fieldset className='text-start border-2 border-grey-600 rounded-lg px-4 py-2'>
          <legend className="font-bold  text-3xl text-gray-500 dark:text-gray-400 ">Terms & Conditions</legend>
          <p className=" text-sm mt-2 text-gray-500 dark:text-gray-400 ">If accepted for the conference, the following conditions will apply:</p>
          <ul className="text-gray-600 dark:text-gray-300 text-sm mt-2 list-disc list-inside pl-4">
            <li>Submitting authors must declare that the abstract submitted is the original work of at least one author/presenter</li>
            <li>Submitting authors must declare that their work does not conflict with any existing copyright agreements with alternate publishers</li>
            <li>If the submission is selected, consent is provided for the presentation slides (oral presenters), video, audio recording, and photos taken during the oral presentation/poster presentation to be used and published by ICTSE 2024 including being provided to delegates of the ICTSE 2024 conference</li>
            <li>Submitting authors provide consent for their presentation materials to be used to assist with promoting ICTSE 2024, future ICTSE events, and on-demand content</li>
          </ul>
        </fieldset>

        <fieldset className='text-start border-2 border-grey-600 rounded-lg px-4 py-2'>
          <legend className="font-bold  text-3xl text-gray-500 dark:text-gray-400 ">Ready to Submit?</legend>
          <ul className=" text-sm mt-2 list-disc list-inside pl-4 text-gray-500 dark:text-gray-400  ">
            <li>Before submitting your abstracts, ensure you have read the guidelines outlined above carefully!</li>
            <li>Click here to submit the Abstract electronically</li>
            <li>Click here to download Full Paper Template</li>
          </ul>
        </fieldset>
      </div>

      { 
      /* <div className='container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5'> 
         <div className='w-full'> 
           <div className='flex flex-col w-full mb-10 sm:flex-row'> 
             <div className='w-full mb-10 sm:mb-0 sm:w-1/2'> 
              {/* <div className='relative h-full ml-0 mr-0 sm:mr-10'>
                <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-500 rounded-lg'></span>
                <div className='relative h-full p-5 bg-white border-2 border-gray-500 rounded-lg'>
                  <div className='flex items-center -mt-1'>
                    <h3 className='my-2 ml-3 text-lg font-bold text-gray-800'>DAPP Development</h3>
                  </div>
                  <p className='mt-3 mb-1 text-xs font-medium text-gray-500 uppercase'>------------</p>
                  <p className='mb-2 text-gray-600'>A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.</p>
                </div>
              </div> 
             </div> 
           </div>
        </div>
      </div> */ }

    </>
  );
};

export default CallForPapers;
