import React from 'react';
import './Error404.css';
import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Banner from '../../Components/Banner/Banner';
import { Link } from 'react-router-dom';

const Error404 = () => {
	return (
		<div className='page-wrapper'>
			<Navbar />
			<Banner bannerTitle='Page Not Found' />
			<section className='error-section section-space'>
				<div className='container'>
					<div className='wrapper '>
						<h2 className='error-title'>
							4<span></span>4
						</h2>
						<h3 className='error-text'>The Page you were looking for, couldn't be found.</h3>
						<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
						<div className='btns-box'>
							<Link className='btn-error-primary me-2' to='/mediacl/'>
								Back
							</Link>
							<Link className='btn-error-primary' to='/mediacl/'>
								Back To Home
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
			<BackToTop />
		</div>
	);
};
export default Error404;
