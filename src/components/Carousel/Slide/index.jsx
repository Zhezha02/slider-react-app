import React from 'react';

const Slide = (props) => {
  const{image, title, description} = props;
  return (
    <div>
      <img src={image} alt={title}/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Slide;
