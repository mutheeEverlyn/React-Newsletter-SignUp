import './App.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import desktopImage from './assets/illustration-sign-up-desktop.svg';
import mobileImage from './assets/illustration-sign-up-mobile.svg';
import iconList from './assets/icon-list.svg';
import * as yup from 'yup';

function App() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ email: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track if form is submitted successfully

  const validationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Valid email required'),
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log('Form submitted', formData);
      setError('');
      setIsFormSubmitted(true); 
    } catch (err: any) {
      setError(err.errors[0]);
      setIsFormSubmitted(false); 
    }
  };

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <div className='content'>
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li><img src={iconList} alt='list icon' /> Product discovery and building what matters</li>
          <li><img src={iconList} alt='list icon' /> Measuring to ensure updates are a success</li>
          <li><img src={iconList} alt='list icon' /> And much more!</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email Address</label>
          <div className="input-group">
            <input
              type='email'
              placeholder='email@company.com'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className={error ? 'error' : ''}
            />
            {error && <p className='error-message'>{error}</p>}
          </div>
          {/* Conditionally render Link based on form submission state */}
          {isFormSubmitted ? (
            <button type='submit'>
              <Link to="/success" style={{ textDecoration: 'none', color: 'white' }}>Subscribe to monthly newsletter</Link>
            </button>
          ) : (
            <button type='submit'>Subscribe to monthly newsletter</button>
          )}
        </form>
      </div>
      <div className='image'>
        <img src={mobileImage} alt='mobile image' className='mobileImage' />
        <img src={desktopImage} alt='desktop image' className='desktopImage' />
      </div>
    </div>
  );
}

export default App;
