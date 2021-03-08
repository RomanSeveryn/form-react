import { Formik, Form, Field } from 'formik';
import React from 'react';
import { SIGH_UP_SCHEMA } from '../../../utils/validationShemas';
import Input from '../Input';
import styles from './SignUpForm.module.scss';

const initialsValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  // picked: '',
};

const SignUpForm = props => {
  const onSubmit = (values, formikBag) => {};
  return (
    <Formik
      initialValues={initialsValues}
      validationSchema={SIGH_UP_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        console.log(formikProps);
        return (
          <Form className={styles.formSignUp}>
            <Input className={styles.inputSignUp} name='firstName' placeholder='First Name' />
            <Input className={styles.inputSignUp} name='lastName' placeholder='Last Name' />
            <Input className={styles.inputSignUp} name='displayName' placeholder='Display Name' />
            <Input className={styles.inputSignUp} name='email' placeholder='Email Address' />
            <Input className={styles.inputSignUp} name='password' placeholder='Password' />
            <Input className={styles.inputSignUp} name='passwordConfirm' placeholder='Password Confirmation' />

            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <div className={styles.radioButtonSignUp}>
                  <Field type='radio' name='picked' value='One' />
                Join As a Buyer
                <span>I am looking for a Name, Logo or Tagline for my
                business, brand or product.</span> 
                </div>
                
              </label>

              <label>
                <div className={styles.radioButtonSignUp}>
                  <Field type='radio' name='picked' value='Two' />
                Join As a Creative or Marketplace Seller I plan to submit name
                ideas, Logo designs or sell names in Domain Marketplace.
                </div>
                
              </label>
              {/* <div>Picked: {values.picked}</div> */}
            </div>
            <Field className={styles.fieldSubmitSignUp} type='submit' value='Create account' />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
