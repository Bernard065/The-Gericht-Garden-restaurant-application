import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">At Gericht Garden Restaurant, we believe that food is a language that speaks to the soul. It has the power to evoke emotions, create lasting memories, and bring people together. As the head chef at Gericht Garden, I am honored to share my culinary passion and philosophy with you.</p>
        </div>
        <p className="p__opensans"> We believe in the power of creativity and innovation. Our team of skilled chefs is constantly exploring new flavors, experimenting with unique combinations, and pushing the boundaries of culinary boundaries. We strive to offer a menu that surprises and delights our guests, presenting them with unexpected twists on familiar favorites. </p>
      </div>

      <div className="app__chef-sign">
        <p>Bernard Bebeni</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;