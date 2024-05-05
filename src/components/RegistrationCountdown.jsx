import Countdown from 'react-countdown';

// Custom renderer with additional styling
const countdownRenderer = ({ days, hours, minutes, seconds }) => {
  return (
    <span className='text-[#357F70] '>
      {days} DAYS{' '}
      <span >{hours} HOURS</span>{' '}
      {minutes} MINS{' '}
      <span >{seconds} SECS</span>
    </span>
  );
};

// Registration end date
const registrationEndDate = new Date('2024-05-16T00:00:00');

// Component displaying the countdown with styles
const RegistrationCountdown = () => (
  <div
    style={{
      backgroundColor: '',
    //   padding: '10px',
    //   textAlign: 'center',
    //   borderRadius: '5px',
    //   color:'white'
    }}
  >
    REGISTRATION ENDS IN <br /><b> <Countdown date={registrationEndDate} renderer={countdownRenderer} /></b>
  </div>
);

export default RegistrationCountdown;
