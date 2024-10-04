import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../icon/icon';

import styles from './header.module.scss';
import { appRoute, spriteNames } from '../../const';
import Logo from '../../../img/logo.svg';

import userImage from '../../../img/user-image.jpg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Link to={appRoute.MAIN}>
          <img
            src={String(Logo)}
            className={styles.logo}
            alt="logo"
            width={124}
            height={24}
          />
        </Link>
        <div className={styles.profileNav}>
          <button
            className={styles.favoritesBtn}
            type="button"
            aria-label="favorite-btn"
          >
            <Icon width={24} height={24} name={spriteNames.favorite} />
          </button>
          <button
            className={styles.notificationBtn}
            type="button"
            aria-label="notification-btn"
          >
            <Icon width={24} height={24} name={spriteNames.notification} />
          </button>
          <Link className={styles.profileLink} to={appRoute.EDITPROFILE}>
            <img src={userImage} alt="profile-avatar" width={20} height={20} />
            <span>Ivan1234</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
