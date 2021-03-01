import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { SIGN_IN_SCHEMA } from '../../../utils/validationShemas';
import Input from '../Input';

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
          <Form>
            <Input name='email' placeholder='Email'/>
            <Input name='password' placeholder='Password'/>
            <Field type="submit" value="Submit" />

          </Form>
        )
      }}
    </Formik>
  );
}

export default SignInForm;
