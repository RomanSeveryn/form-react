import React from 'react';
import SignUpForm from '../../components/forms/SignUpForm';
import HeaderSignUp from '../../components/HeaderSignUp';
import styles from './SignUp.module.scss';

const SignUpPage = props => {
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <div className={styles.containerPageSignUp}>
      <HeaderSignUp />
      <div className={styles.containerHeadingSignUp}>
        <h1 className={styles.headingSignUpCreateAccount}>CREATE AN ACCOUNT</h1>
        <h3>
          We always keep your name and email address private.
        </h3>
      </div>

      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpPage;
