import React,{useState} from 'react';
import { IoMdClose } from "react-icons/io";
const SignUp=({onSwitchToSignIn}) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleShowModal = () => {
      setIsVisible(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }
    };
    const handleHideModal = () => {
        setIsVisible(false);
        document.body.style.overflow = 'unset';
    }
  return (
    <>
        <a className='btn link-btn sign-up' onClick={handleShowModal}>
        Sign Up
        </a>
        {isVisible && (
            <div className="modal-overlay" onClick={handleHideModal}>
             <div className="modal-content-wrapper signup-wrapper">
            <div className='modal-content signup-modal-content'>
            <button onClick={handleHideModal} className="login-close-btn">
              <IoMdClose className='btn-close'/>
            </button>
            <div className='signup-page-wrapper'>
            <div className='signup-form-wrapper'>
            <div className='form-text'>
            <h2 className='form-title signup-title'>Welcome On Board!</h2>
            <p className='form-text'>Fill in your personal details now!</p>
            </div>
            <div className='signin-form'>
              <form className='login-form'>
              <div className="form-group">
                <input className='login-input' type="email" id="email" name="email" placeholder='Your E-mail Address' autoComplete='off'required />
              </div>
              <div className="form-group">
                <input className='login-input' type="password" id="password" name="password"  autoComplete='off' placeholder='Your Password' required />
              </div>
              <div class="login-form-forgot-password-wrapper">
                <a class="login-form-forgot-password-link" href="/">
                Need help?</a></div>
              <button type className="signin-btn">NEXT</button>
              <div class="login-form-footer">
                <span>Already have an account?</span>
                <button class="login-form-sign-up-link link"  onClick={onSwitchToSignIn}>
                Sign in</button>
              </div>
            </form>
            </div>
            </div>
            {/* <div className='signup-img'>
                <img src={authbanner} className=""  href="/"/>
            </div> */}
            </div>
            </div>
          </div>   
            </div>
        )}
    </>
  )
}

export default SignUp
