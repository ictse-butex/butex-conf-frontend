import React from 'react';
import '../../style/registration-status.css' // Import CSS for styling
import { useParams } from 'react-router-dom';


import ErrorPage from '../Error';

const RegistrationStatus = () => {

  const handleGetReceipt = () => {
    // Code to get receipt
  };

  const params = useParams() 
  const regStat = params.status 
  console.log(params)

  return (
    

    <div className="registration-container">
      {/* <img src='https://i.pngimg.me/thumb/f/720/freesvgorg94051.jpg'/> */}
      <h2>Registration {regStat === 'success' ? 'Successful' : 'Failed'}!</h2>
      {regStat === 'success' ? <p>Thank you for registering. <br/>Please check your email. </p> : <p>Please Try Again.</p>}
      <button className="btn-homepage" onClick={() => location.replace('/')}>Go to Homepage</button>
    </div>
  );
}

export default RegistrationStatus;