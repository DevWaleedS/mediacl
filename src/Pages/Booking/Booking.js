import React from 'react';

import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Banner from '../../Components/Banner/Banner';
import Account from '../../Components/Account/Account';



const Booking = () => {
	return (
		<div className='page-wrapper'>
			<Navbar />
			<Banner bannerTitle="Booking" />
			<Account/>
			<Footer />
			<BackToTop />
		</div>
	);
};

export default Booking;
