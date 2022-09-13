import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHome } from 'react-icons/hi';
import './Banner.css';
import '../../index.css';

import animation_1 from '../../assets/footer/animation-1.png';
import animation_2 from '../../assets/how-it-works/animation-2.png';
import animation_3 from '../../assets/create-account/animation-2.png';

const Banner = ({ bannerTitle }) => {
	return (
		<section className='page-banner'>
			<div className='container'>
				<div className='page-banner-title text-center'>
					<h1> {bannerTitle}</h1>
					<nav aria-label='breadcrumb' className='breadcrumb-row'>
						<ul className='breadcrumb'>
							<li className='breadcrumb-item'>
								<Link to='/mediacl/'>
									<HiOutlineHome />
									Home
								</Link>
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								{bannerTitle}
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className='animations'>
				<img className='banner-animation-1' src={animation_1} alt='animation-1' />
				<img className='banner-animation-2' src={animation_2} alt='animation-2' />
				<img className='banner-animation-3' src={animation_3} alt='animation-3' />
			</div>
		</section>
	);
};
export default Banner;
