import React from 'react';

const About = () => {
	return (
    <div className="about-wrapper">
      <div className="about-left">
        <h1 className="subheader">Page Not Found</h1>
        <p className="body-text">The page you have requested cannot be found on our server. Go home <a href="/">Home</a></p>
        <p className="body-text">We stock a heap of great products, all trying to do better by our planet and we have a wide range of different services we offer, from fresh cut peant butter, soap refills and more. Head on over to the offerings page to get a full list.</p>
        <p className="body-text">We’re really conscious of different diets and have crafted a search engine of our products so you can find what you’re looking for.</p>
      </div>
      <div className="about-right">
        <img className="about-image" src={ require('../assets/jeri-about.png') } alt="about" />
      </div>
    </div>
	)
};

export default About;
