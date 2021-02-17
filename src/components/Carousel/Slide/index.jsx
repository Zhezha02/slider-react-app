import React from 'react';
import styles from './slide.module.css';

const Slide = (props) => {
  const { image, title, description } = props;
  return (
    <>
      <div className={styles.imgWrapper}>
        <div className={styles.responsiveHelper}>
          <img className={styles.image} src={image} alt={title} />
        </div>
      </div>

      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default Slide;
