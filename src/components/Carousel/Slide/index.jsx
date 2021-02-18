import React from 'react';
import styles from './slide.module.css';

const Slide = (props) => {
  const { image, title, description, prevBtn, nextBtn } = props;
  return (
    <div>
      <div className={styles.imgWrapper}>
        <div className={styles.responsiveHelper}>
          <img className={styles.image} src={image} alt={title} />
          <button className={styles.btnPrev} onClick={prevBtn}> {'<'} </button>
          <button className={styles.btnNext} onClick={nextBtn}> {'>'} </button>
        </div>
      </div>

      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Slide;
