import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading'
import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Welcome to our restaurant, a culinary destination where exquisite flavors and exceptional dining experiences await. Step into our inviting and stylishly designed space, where every detail has been carefully crafted to create a warm and inviting ambiance</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='welcome' />
    </div>
    
  </div>
  
);

export default Header;
