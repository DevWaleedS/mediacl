import React, { useState } from 'react';
import './Blogs.css';
import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Banner from '../../Components/Banner/Banner';
import News from '../../Components/News/News';





const Blogs = () => {
	

	return (
		<div className='page-wrapper'>
			<Navbar />
			<Banner bannerTitle='Blogs' />
			
			<News />
			<Footer />
			<BackToTop />
		</div>
	);
};
export default Blogs;
