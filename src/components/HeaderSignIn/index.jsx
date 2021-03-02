import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './HeaderSignIn.module.scss';

const HeaderSignIn = () => {
  return (
    <div className={styles.containerHeaderSignIn}>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <div>
        <Link to='/signUp' className={styles.linkHeaderSignIn}>
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default HeaderSignIn;
