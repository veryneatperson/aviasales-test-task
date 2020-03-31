import React from 'react';

import styles from './Header.module.scss';
import logo from './Logo.png';

const Header = () => (
  <header className={styles.Header}>
    <img className={styles.Logo} src={logo} alt="Logo" />
  </header>
);

export default Header;
