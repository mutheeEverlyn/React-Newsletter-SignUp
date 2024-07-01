import listIcon from '../assets/icon-list.svg'
// import email from '../App'
const DesktopSuccess = () => {
  return (
    <div className='container'>
      <img src={listIcon} alt='list icon'/>
      <h1>Thanks for subscribing</h1>
      <p>A confirmation email has been sent to .Please open it and click the button your subcription</p>
      <button>Dismiss message</button>
    </div>
  )
}

export default DesktopSuccess
