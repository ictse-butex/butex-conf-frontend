import React, { useEffect, useState } from 'react';
import RegistrationForm  from '../../components/RegistrationForm';
import { ToastContainer, toast, Bounce} from 'react-toastify';    


import '../../style/form.css'


import useIsMobile from '../../useIsMobile';

const Registration = () => {
    const isMobile = useIsMobile() 

    const [accepted, setAccepted] = useState(false)

    return (
        <div className='bg-white'>
            <div className={`bg-white ${accepted ? 'hide' : 'show'}` }>
                <p className='text-center mb-3 pt-10 pb-5 text-gray-500 dark:text-gray-400'>Registration for the 2nd International Conference on Textile Science and Engineering will be opened on <b>5 April 2024.</b></p>
                <p className='text-center mb-3 pb-5 text-gray-500 dark:text-gray-400'>Last date of registration is <b>16 May 2024.</b></p>

                {/* <p className='text-center mb-3 text-gray-500 dark:text-gray-400'>All registration information including pricing and inclusions is outlined below:</p> */}
                <div className='text-center mt-10 mb-10  '>
                    <div className='border-2 mx-auto w-2/3'>
                        <p  className="font-bold m-3 text-gray-500 dark:text-gray-400 text-2xl underline">Registration Fees</p>

                        <div className="grid grid-cols-3 gap-4 m-3 bg-blue ">
                            <div className="bg-gray-200 text-gray-700 dark:text-gray-700 p-4">Category</div>
                            <div className="bg-gray-200 text-gray-700 dark:text-gray-700 p-4">Early Bird (05/04/2024)</div>
                            <div className="bg-gray-200 text-gray-700 dark:text-gray-700 p-4">Late</div>
                            
                            <div className=" text-gray-700 dark:text-gray-700 p-4">Local delegate</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">BDT 1500</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">BDT 2000</div>
                            
                            <div className=" text-gray-700 dark:text-gray-700 p-4">Local student</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">BDT 750</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">BDT 1000</div>
                            
                            <div className=" text-gray-700 dark:text-gray-700 p-4">International student</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">USD 25</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">USD 30</div>
                            
                            <div className=" text-gray-700 dark:text-gray-700 p-4">SAARC/ASEAN delegate</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">USD 80</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">USD 100</div>
                            
                            <div className=" text-gray-700 dark:text-gray-700 p-4">Others Foreign delegate</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">USD 40</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">USD 50</div>
                            
                            <div className=" text-gray-700 dark:text-gray-700 p-4">Accompanying person</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">BDT 800</div>
                            <div className=" text-gray-700 dark:text-gray-700 p-4">BDT 1000</div>
                            
                        </div>
                    </div>
                    <button className="border px-4 py-2 my-1 rounded bg-[#357F70] text-white" onClick={() => setAccepted(!accepted)}>Contiune to registration</button>
                </div>
            </div>
            <div className={`${accepted ? 'show' : 'hide'}`}>
                <RegistrationForm/>
            </div>
        </div>
    );
};

export default Registration;