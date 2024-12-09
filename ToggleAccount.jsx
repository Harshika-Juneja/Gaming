import React,{useState} from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
function ToggleAccount() {
    const [isSignUp, setIsSignUp] = useState(false);

  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  const switchToSignIn = () => {
    setIsSignUp(false);
  };
  return (
    <>

       {isSignUp ? (
        <SignUp onSwitchToSignIn={switchToSignIn} />
      ) : (
        <SignIn onSwitchToSignUp={switchToSignUp} />
      )}

    </>
  )
}

export default ToggleAccount
