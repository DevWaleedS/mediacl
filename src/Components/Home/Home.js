import React, { Fragment } from 'react';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import HowItWorks from '../HowItWorks/HowItWorks.js';
import Account from '../Account/Account';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import News from '../News/News';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop.js';

const Home = () => {
	return (
		<Fragment>
			<Header />
			<AboutUs />
			<HowItWorks />
			<Account />
			<Services />
			<Testimonial />
			<News />
			<Footer />
			<BackToTop />
		</Fragment>
	);
};

export default Home;
