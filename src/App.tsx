import './App.scss'
import { useState } from 'react';
import desktopImage from './assets/illustration-sign-up-desktop.svg';
import mobileImage from './assets/illustration-sign-up-mobile.svg'
import iconList from './assets/icon-list.svg';
import * as yup from 'yup';
// import { EmailValidation } from './Validations/EmailValidation';
function App() {

  const [error,setError]=useState('');
  const validationSchema=yup.string().required('Email is required').email("valid email required");
  
  const[formData,setFormData]=useState('')
  const handleSubmit=async (e :any)=>{
  e.preventDefault();
  try{
    await validationSchema.validate(formData,{abortEarly: false})
    console.log("form submitted",formData)
  }
catch(error){
  console.log(error.inner);
}
  };

  return (
    <div className='container'>
      <div className='content'>
       <h1>Stay Updated</h1>
       <p>Join 60,000+ products managers receiving monthly updates on:</p>
       <p><img src={iconList} alt='list icon'/> Product discovery and building what matters</p>
       <p><img src={iconList} alt='list icon'/> Measuring to ensure updates are a success</p>
       <p><img src={iconList} alt='list icon'/> And much more!</p>
       <form onSubmit={handleSubmit}>
         <label htmlFor='email'>Email Address</label><br/>
         
         <p><input type="email" placeholder='email@company.com' name='email'  value={FormData.name}/></p>
         <p><button type='submit'>submit to monthly newsletter</button></p>
       </form>
      </div>
      <div className='image'>
      <img src={mobileImage} alt='mobile image' className='mobileImage'/>
      <img src={desktopImage} alt='desktop image' className='desktopImage'/>
      </div>
    </div>
  )
}

export default App
