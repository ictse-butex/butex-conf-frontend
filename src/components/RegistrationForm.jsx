import React, { useState } from 'react';
import axios from 'axios';
import ReactLoading from "react-loading";

import { ToastContainer, toast, Bounce} from 'react-toastify';    

import '../style/form.css'
import { redirect } from 'react-router-dom';
import Modal from './PaymentConfirmationModal'

const RegistrationForm = () => {
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [registrationType, setRegistrationType] = useState("")
  const [affiliation, setAffiliation] = useState("")
  const [hasDietaryRestriction, setHasDietaryRestriction] = useState(false)
  const [dietaryRestriction, setDietaryRestriction] = useState("")
  const [paperID, setPaperID] = useState("")
  const [paperTitle, setPaperTitle] = useState("")
  const [loading, setLoading] = useState(false)

  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)

  const handleClose = (e) => {
    e.preventDefault();
    // location.replace('/registration')
    setLoading(false)
  }

  const handleProceed = async (e) => {
    e.preventDefault();   

    let payload = {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "registration_type": registrationType,
        "organization_name": affiliation,
        "has_dietary_restrictions": hasDietaryRestriction,
        "is_presenter": registrationType === "PRESENTER",
        // "paper_id": paperID === '' ? null : paperID,
        // "paper_title": paperTitle === '' ? null : paperTitle 
    }
    
    if(payload['has_dietary_restrictions']){
        payload["dietary_restrictions"] = dietaryRestriction
    }

    if (payload['is_presenter']){
        payload['paper_id'] = paperID
        payload['paper_title'] = paperTitle
    }


    const baseUrl = process.env.API_URL
    
    console.log(payload)

    setLoading(true)
    console.log('before call')
    
    try{
        const resp = await (await axios.post(`${baseUrl}/register/get-session/`, payload))
        setModalData(resp.data)
    }catch (error){
        console.log('error config ', error.message)
        console.log("error res ", error?.response?.data)
        toast.error(JSON.stringify(error?.response?.data) || "something went wrong", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
        setLoading(false)
        return 
    }
    console.log('after call')
    
    setLoading(false)
    setShowModal(true)

    // window.location.replace(resp.data.redirect_url)

    // Add your form submission logic here
  };

  return (
    <>  
        {
            loading  && 
            <div class='overlay'>
                <button className="close-button" onClick={handleClose}>&times;</button>
                <div className='loading-container'>
                    <ReactLoading type='spin' color='#357F70'/> 
                <p className='text-white'>Please wait</p>
                </div>
            </div>

        }

        <ToastContainer />
        <Modal showModal={showModal} setShowModal={setShowModal} data={modalData}/>
        

        <form className='w-full ' onSubmit={handleProceed}>
            <div className='text-center p-5 pt-20 pb-44'>
                {/* first name */}
                <div className="w-full md:w-full px-3 mb-6 md:mb-0 flex p-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/6 pt-3" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-first-name" type="text" placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>


                {/* last name */}
                <div className="w-full md:w-full px-3 mb-6 md:mb-0 flex p-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/6 pt-3" htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-last-name" type="text" placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                

                {/* Email */}
                <div className="w-full md:w-full px-3 mb-6 md:mb-0 flex p-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/6 pt-3" htmlFor="grid-email">
                        Email
                    </label>
                    <input 
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-email" type="email" placeholder="example@mail.com"
                        value={email.trim()}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                
                
                {/* registration type */}
                <div className="w-full md:w-full px-3 mb-6 md:mb-0 flex p-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/6 pt-3" htmlFor="registration-type">Registration Type</label>
                    <select
                        className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                        id="registrationType"
                        name="registrationType"
                        value={registrationType}
                        onChange={(e) => setRegistrationType(e.target.value)}
                        required
                    >
                        <option value="">Select Registration Type</option>
                        <option value="LOCAL_DELEGATE">Local Delegate</option>
                        <option value="LOCAL_STUDENT">Local Student</option>
                        <option value="INTERNATIONAL_STUDENT">International Student</option>
                        <option value="ASEAN_DELEGATE">ASEAN Delegate</option>
                        <option value="SAARC_DELEGATE">SAARC Delegate</option>
                        <option value="OTHER_FOREIGN_DELEGATE">Other foreign delegate</option>
                        <option value="ACCOMPANYING_PERSON">Accompanying person</option>
                        <option value="PRESENTER">Presenter</option>
                    </select>
                </div>

                {/* paper_id */}
                {registrationType === "PRESENTER" && 
                    <div className='w-full md:w-full px-3 mb-6 md:mb-0 flex p-5'>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/6 pt-3" htmlFor="affiliation">Paper ID</label>
                        <input
                        type="text"
                        id="paper_id"
                        name="paper_id"
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        value={paperID}
                        onChange={(e) => setPaperID(e.target.value)}
                        required
                        />
                    </div>
                }

                {registrationType === "PRESENTER" && 
                    <div className='w-full md:w-full px-3 mb-6 md:mb-0 flex p-5'>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/6 pt-3" htmlFor="affiliation">Paper Title</label>
                        <input
                        type="text"
                        id="paper_title"
                        name="paper_title"
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                        value={paperTitle}
                        onChange={(e) => setPaperTitle(e.target.value)}
                        required
                        />
                    </div>
                }


                {/* affiliate */}
                <div className='w-full md:w-full px-3 mb-6 md:mb-0 flex p-5'>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/6 pt-3" htmlFor="affiliation">Affiliation or Organization Name</label>
                    <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                    required
                    />
                </div>

                <div className='flex'>
                    {/* has dietary restriction */}
                    <div className='w-1/6 px-3 mb-6 md:mb-0 flex p-5'>
                        <input
                            type="checkbox"
                            id="hasDietaryRestriction"
                            name="hasDietaryRestriction"
                            checked={hasDietaryRestriction}
                            onChange={(e) => setHasDietaryRestriction(e.target.checked)}
                        />
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-1/6 pt-3"  htmlFor="hasDietaryRestriction">Dietary restriction?</label>
                    </div>
                    {hasDietaryRestriction && (
                        <div className='w-full md:w-full px-3 mb-6 md:mb-0 flex p-5'>
                        <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                            type="text"
                            id="dietaryRestrictions"
                            name="dietaryRestrictions"
                            placeholder="Write down things you're allergic to."
                            value={dietaryRestriction}
                            onChange={(e) => setDietaryRestriction(e.target.value)}
                        />
                        </div>
                    )}
                </div>
                <button type="submit" onSubmit={handleProceed}>Proceed</button>
            </div>
        </form>
        
    </>
  );
};

export default RegistrationForm;
