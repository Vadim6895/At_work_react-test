import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';
import { appRoute } from '../../const';
// import Logo from '../../../img/logo-full.svg';

function Header() {
  return (
    <header>
      <Link to={appRoute.MAIN}>
        <img
          src="../../../img/logo-full.svg"
          className={styles.logo}
          alt="logo"
        />
      </Link>
    </header>
  );
}

export default Header;
