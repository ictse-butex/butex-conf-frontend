import React, { useState } from 'react';

import '../style/form.css'

const RegistrationForm = () => {
  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [registrationType, setRegistrationType] = useState("")
  const [affiliation, setAffiliation] = useState("")
  const [hasDietaryRestriction, setHasDietaryRestriction] = useState(false)
  const [dietaryRestriction, setDietaryRestriction] = useState("")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    console.log(
        firstName,
        lastName,
        email,
        registrationType,
        hasDietaryRestriction,
        dietaryRestriction
    )
    // Add your form submission logic here
  };

  return (
    <form className='w-full ' onSubmit={handleSubmit}>
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
                </select>
            </div>


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
            <button type="submit">Submit</button>
        </div>
    </form>
  );
};

export default RegistrationForm;
