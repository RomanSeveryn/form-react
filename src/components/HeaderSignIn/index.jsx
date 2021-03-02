import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './HeaderSignIn.module.scss';

const HeaderSignIn = () => {
  return (
    <div className={styles.containerHeaderSignIn}>
      <div className={styles.padding}>
        <img src={logo} alt='logo' />
      </div>
      <div className={styles.padding}>
        <Link to='/signUp' className={styles.linkHeaderSignIn}>
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default HeaderSignIn;
