import React from 'react';
import UserContext from '../../contexts/UserContext';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const sidebarRender = user => {
    return (
      <div className={styles.container}>
        <img src={user.imageSrc} alt={`${user.firstName} ${user.lastName}`} />
        <h1>{user.firstName}</h1>
        <h1>{user.lastName}</h1>
      </div>
    );
  };

  return <UserContext>{sidebarRender}</UserContext>;
};

export default Sidebar;
