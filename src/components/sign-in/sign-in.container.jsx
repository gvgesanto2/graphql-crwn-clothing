import React from 'react';

import SignIn from './sign-in.component';
import SignInWithGoogleMutation from '../../mutations/sign-in-with-google/sign-in-with-google.component';

const SignInContainer = () => {
  return (
    <SignInWithGoogleMutation>
      <SignIn />
    </SignInWithGoogleMutation>
  );
}

export default SignInContainer;