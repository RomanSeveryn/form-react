import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import styles from './Input.module.scss';

const Input = ({ name, ...rest }) => {
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, form, meta }) => {
          console.log(meta);

          const classNames = cx(styles.input, styles.inputStyleSignIn,{
            [styles.validInput]: meta.touched && !meta.error,
            [styles.errorInput]: meta.touched && meta.error,
          });

          return (
            <input type='text' {...field} className={classNames} {...rest} />
          );
        }}
      </Field>
      <ErrorMessage name={name} component='span' className={styles.errorMessage} />
    </label>
  );
};

export default Input;
