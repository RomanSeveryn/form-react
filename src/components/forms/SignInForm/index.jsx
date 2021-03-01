import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { SIGN_IN_SCHEMA } from '../../../utils/validationShemas';
import Input from '../Input';
import styles from './SignInForm.module.scss'
const initialsValues = {
  email: '',
  password: '',
};

const SignInForm = props => {
  const onSubmit = (values, formikBag) => {

  }
  return (
    <Formik
      initialValues={initialsValues}
      validationSchema={SIGN_IN_SCHEMA}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        console.log(formikProps)
        return (
          <Form className={styles.formSignIn}>

            <Input className={styles.inputStyleSignIn} name='email' placeholder='Email' />
            <Input className={styles.inputStyleSignIn} name='password' placeholder='Password' />
            <Field className={styles.inputStyleSignIn} type="submit" value="Submit" />

          </Form>
        )
      }}
    </Formik>
  );
}

export default SignInForm;
