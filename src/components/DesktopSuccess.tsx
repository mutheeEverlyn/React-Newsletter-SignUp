import listIcon from '../assets/icon-list.svg';
import './DesktopSucess.scss'; // Optionally, you can continue using SCSS alongside Tailwind CSS

const DesktopSuccess = () => {
  const navigateToMainPage = () => {
    window.location.href = '/'; // Navigate back to the main page
  };

  return (
    <div className='successContainer'>
      <img src={listIcon} alt='list icon'  />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to your email address. Please open it and click the button to confirm your subscription.
      </p>
      <button
        onClick={navigateToMainPage}
       
      >
        Dismiss message
      </button>
    </div>
  );
};

export default DesktopSuccess;
