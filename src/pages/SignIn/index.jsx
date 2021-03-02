import React from 'react';
import HeaderSignIn from '../../components/HeaderSignIn';
import SignInForm from '../../components/forms/SignInForm';
import styles from './SignIn.module.scss';
const SignInPage = props => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.containerPageSignIn}>
      <HeaderSignIn />

      <h1 className={styles.headingSignInPage}>LOGIN to your account</h1>

      <SignInForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignInPage;
