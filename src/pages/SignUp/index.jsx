import React from 'react';
import SignUpForm from '../../components/forms/SignUpForm';
import HeaderSignUp from '../../components/HeaderSignUp';

const SignUpPage = props => {
  const onSubmit = values => {
    console.log(values)
  }
  return (
    <div>
      <HeaderSignUp/>
      <h1>CREATE AN ACCOUNT</h1>
      <h3>We always keep your name and email address private.</h3>

      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
}

export default SignUpPage;
