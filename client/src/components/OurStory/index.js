import React from 'react';
import Fade from 'react-reveal/Fade';
import Bros from '../../images/bros.jpeg';
import './style.css';

function OurStory() {
  return (
    <Fade bottom cascade>
    <section id="our-story">
        <div className="ourstory">
          <h2>Our Story...</h2>
          <p><span>Newna Bros</span> was founded in 1991 in Alta, Utah. Our business was founded by brothers, Bryce and Jon Mora, and started as a small equipment store for Skis and Snowboards. For over 20 years, Newna Bros has provided excellent customer service and high-quality gear.
          <br></br>
          <br></br>
          <span>Newna Bros</span>  is now the go-to equipment store, with 6 different locations servicing over 20 trails within Newna Slopes - the busiest ski attraction in Utah! Our mission is the same as its always been: To provide the people of Newna Slopes the best, high quality, and most up-to-date equipment possible. </p>
          <img src={Bros} alt="brothers" />
        </div>
    </section>
    </Fade>
  );
}

export default OurStory;