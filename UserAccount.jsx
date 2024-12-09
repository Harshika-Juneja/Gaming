import React, { useState } from 'react'
import SignIn from './SignIn';
import SignUp from "./SignUp";

function UserAccount() {
  return (
<>
<div className='header-block header-block-right'>
<div className='header-buttons'>
   <SignIn/>
   <SignUp/>

</div>
</div>

</>
  )
}

export default UserAccount
