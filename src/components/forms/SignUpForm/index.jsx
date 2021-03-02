import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { SIGH_UP_SCHEMA } from '../../../utils/validationShemas';
import Input from '../Input';

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
          <Form>
            <Input name='firstName' placeholder='First Name' />
            <Input name='lastName' placeholder='Last Name' />
            <Input name='displayName' placeholder='Display Name' />
            <Input name='email' placeholder='Email Address' />
            <Input name='password' placeholder='Password' />
            <Input name='passwordConfirm' placeholder='Password Confirmation' />
            <Field type='submit' value='Submit' />

            <div role='group' aria-labelledby='my-radio-group'>
              <label>
                <Field type='radio' name='picked' value='One' />
                Join As a Buyer I am looking for a Name, Logo or Tagline for my
                business, brand or product.
              </label>
              <label>
                <Field type='radio' name='picked' value='Two' />
                Join As a Creative or Marketplace Seller I plan to submit name
                ideas, Logo designs or sell names in Domain Marketplace.
              </label>
              {/* <div>Picked: {values.picked}</div> */}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
