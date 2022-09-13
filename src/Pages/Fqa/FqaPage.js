import React from 'react';
import './FqaPage.css';
import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Banner from '../../Components/Banner/Banner';
import News from '../../Components/News/News';
import Fqa from './Fqa';

const FqaPage = () => {
	return (
		<div className='page-wrapper'>
			<Navbar />
			<Banner bannerTitle="Faq's" />
			<Fqa />
			<News />
			<Footer />
			<BackToTop />
		</div>
	);
};

export default FqaPage;
