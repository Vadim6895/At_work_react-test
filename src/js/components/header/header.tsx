import React from 'react';

import styles from './header.module.scss';

function Header() {
  return (
    <header>
      <div className={styles.logo} />
    </header>
  );
}

export default Header;
