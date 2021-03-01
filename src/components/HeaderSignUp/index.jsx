import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from './HeaderSignUp.module.scss'

const HeaderSignUp = () => {
  return (
    <div className={styles.containerHeaderSignUp}>
      <div>
        <img src={logo} alt="logo"/>
      </div>
      <div>
        <Link to='/signIn' className={styles.linkHeaderSignUp}>SignIn</Link>
      </div>
    </div>
  );
}

export default HeaderSignUp;
