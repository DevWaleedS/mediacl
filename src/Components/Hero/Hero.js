import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import hero_image from '../../assets/header/doctor.png';
import animation_1 from '../../assets/header/animation-1.png';
import animation_2 from '../../assets/header/animation-2.png';
import animation_3 from '../../assets/header/animation-3.png';
import animation_4 from '../../assets/header/animation-4.png';
import animation_5 from '../../assets/header/animation-5.png';

import '../Hero/Hero.css';
import '../../index.css';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='container inner-content'>
				<div className='row align-items-center"'>
					<div className='col-lg-7 col-md-6 col-sm-7 align-self-center '>
						<div className='hero-text'>
							<h6 className='hero-title'>We Provide All Health Care Solution</h6>
							<h1 className='hero-heading'>Protect Your Health And Take Care To Of Your Health</h1>

							<Link className='read-btn orange-btn shadow-drop-center ' to='about-us'>
								read more
							</Link>
						</div>
					</div>
					<div className='col-lg-5 col-md-6 col-sm-5'>
						<div className='hero-image'>
							<div className='image'>
								<LazyLoadImage className='img-fluid' src={hero_image} title='doctor' alt='hero'  effect='blur' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='animations'>
				<img className='animation-1' src={animation_1} alt='animation-1' />
				<img className='animation-2' src={animation_2} alt='animation-2' />
				<img className='animation-3' src={animation_3} alt='animation-3' />
				<img className='animation-4' src={animation_4} alt='animation-4' />
				<img className='animation-5' src={animation_5} alt='animation-5' />
			</div>
		</div>
	);
};

export default Hero;
