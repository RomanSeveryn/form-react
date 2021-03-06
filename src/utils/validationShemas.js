import * as Yup from 'yup';

export const NAME_SHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}$/, 'Name must be a valid name')
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email('Test check for email')
  .required();

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    'Password must contain 8 char and so on...'
  )
  .required();

export const PASSWORD_CONFIRM_SCHEMA = Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGH_UP_SCHEMA = Yup.object({
  firstName: NAME_SHEMA,
  lastName: NAME_SHEMA,
  displayName: NAME_SHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirm: PASSWORD_CONFIRM_SCHEMA,
});
