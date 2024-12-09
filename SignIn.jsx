import React,{useState} from 'react'
import { IoMdClose } from "react-icons/io";
// import { useHistory } from 'react-router-dom';
const SignIn=({onSwitchToSignUp}) =>{
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();

    const handleShowModal = () => {
      setIsVisible(true)
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }
    };
    const handleHideModal = () =>{ 
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Sign in with:', { email, password });
      // history.push('/dashboard');
    };
  return (
    <>
       <a className='btn link-btn btn-outline' onClick={handleShowModal} >
        Sign In 
       </a>
       {isVisible && (
        <div className="modal-overlay" onClick={handleHideModal}>
          <div className="modal-content-wrapper">
            <div className='modal-content'>
            <button onClick={handleHideModal} className="login-close-btn"><IoMdClose className='btn-close'/></button>
            <div className='signin-page'>
            <h2 className='form-title'>Welcome!</h2>
            <div className='signin-form'>
              <form className='login-form' onSubmit={handleSubmit}>
              <div className="form-group">
                <input className='login-input' type="email" id="email" name="email" placeholder='Your E-mail Address' 
                  value={email} autoComplete='off' onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
              <div className="form-group">
                <input className='login-input' type="password" id="password" name="password"  autoComplete='off' placeholder='Your Password'
                 value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div class="login-form-forgot-password-wrapper">
                <a class="login-form-forgot-password-link" href="/">
                Need help?</a></div>
              <button type="submit" className="signin-btn">SIGN IN</button>
              <div class="login-form-footer">
                <span>Don’t have an account?</span>
                <button class="login-form-sign-up-link link" href="/signup"  onClick={onSwitchToSignUp} >
                Sign up</button>
              </div>
            </form>
            </div>
            </div>
            </div>
          </div>
        </div>
)}
    </>
  )
}

export default SignIn
