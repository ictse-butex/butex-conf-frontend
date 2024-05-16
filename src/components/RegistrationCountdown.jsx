import Countdown from 'react-countdown';

// Custom renderer with additional styling
const countdownRenderer = ({ days, hours, minutes, seconds }) => {
  return (

    <div className="grid grid-cols-4 grid-rows-2 gap-4 text-center">
      <div >day</div>
      <div >hour</div>
      <div >min</div>
      <div >sec</div>
      <div className="row-start-2">{days}</div>
      <div className="row-start-2">{hours}</div>
      <div className="row-start-2">{minutes}</div>
      <div className="row-start-2">{seconds}</div>
    </div>

  );
};

// Registration end date
const registrationEndDate = new Date('2024-05-20T00:00:00');

// Component displaying the countdown with styles
const RegistrationCountdown = () => (
   <Countdown date={registrationEndDate} renderer={countdownRenderer} />
);

export default RegistrationCountdown;
