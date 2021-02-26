import React from 'react';
import UserContext from '../../contexts/UserContext';
import styles from './PageHeader.module.scss';

const Header = () => {
  const renderHeader = user => {
    return (
      <header>
        <div className={styles.container}>
          <p className={styles.userName}>{user.firstName}</p>
          <img
            className={styles.userPhoto}
            src={user.imageSrc}
            alt={`${user.firstName} ${user.lastName}`}
          />
        </div>
      </header>
    );
  };

  return <UserContext.Consumer>{renderHeader}</UserContext.Consumer>;
};

export default Header;
