import React from 'react';
import classes from './Splash.css';

const splash = (props) =>{
  return(
    <div className={classes.Splash}>
      <h1>Help bridge the gap</h1>
      <h1 className={classes.subHeading}>Learn American Sign Language</h1>
      <button>Learn More</button>
    </div>
  )
}

export default splash;
