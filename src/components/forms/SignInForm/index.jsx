import { Formik, Form, Field } from 'formik';
import React from 'react';
import { SIGN_IN_SCHEMA } from '../../../utils/validationShemas';
import Input from '../Input';
import styles from './SignInForm.module.scss';
const initialsValues = {
  email: '',
  password: '',
};

const SignInForm = props => {
  const onSubmit = (values, formikBag) => {};
  return (
    <Formik
      initialValues={initialsValues}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        console.log(formikProps);
        return (
          <Form className={styles.formSignIn}>
            <Input
              name='email'
              placeholder='Email'
            />
            <Input
              name='password'
              placeholder='Password'
            />
            <Field
              className={styles.fieldLoginStyleSignIn}
              type='submit'
              value='LOGIN'
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
