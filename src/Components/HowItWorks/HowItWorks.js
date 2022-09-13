import React from 'react';
import { Link } from 'react-router-dom';
import '../HowItWorks/HowItWorks.css';
import '../../index.css';

import { RiArrowDropRightLine } from 'react-icons/ri';

import animation_1 from '../../assets/header/animation-1.png';
import animation_2 from '../../assets/how-it-works/animation-2.png';
import animation_3 from '../../assets/how-it-works/animation-3.png';

const HowItWorks = () => {
	return (
		<section className='hw-works-section .section-space'>
			<div className='container-sm'>
				<div className='heading-row text-center'>
					<h6 className='title m-auto'>Working Process</h6>
					<h2 className='heading'>How we works?</h2>
				</div>
				<div className='row justify-content-center'>
					<div className='col-lg-4 col-sm-6 mb-30'>
						<div className='work-box mt-20'>
							<div className='work-num-box'>01</div>
							<div className='work-content'>
								<h5 className='box-title mb-10'>Make Appointmnet</h5>
								<p>It is a long established fact that a reader will be distracted by the readable content of.</p>
							</div>
							<Link className='view-more-btn' to='booking'>
								View More <RiArrowDropRightLine />
							</Link>
						</div>
					</div>
					<div className='col-lg-4 col-sm-6 mb-30'>
						<div className='work-box bg-orange'>
							<div className='work-num-box'>02</div>
							<div className='work-content'>
								<h5 className='box-title mb-10'>Take Treatment</h5>
								<p>It is a long established fact that a reader will be distracted by the readable content of.</p>
							</div>
							<Link className='view-more-btn' to='booking'>
								View More <RiArrowDropRightLine />
							</Link>
						</div>
					</div>
					<div className='col-lg-4 col-sm-6 mb-30'>
						<div className='work-box mt-20'>
							<div className='work-num-box'>03</div>
							<div className='work-content'>
								<h5 className='box-title mb-10'>Registration</h5>
								<p>It is a long established fact that a reader will be distracted by the readable content of.</p>
							</div>
							<Link className='view-more-btn' to='booking'>
								View More <RiArrowDropRightLine />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='animations'>
				<img className='works-animation-1' src={animation_1} alt='animation-1' />
				<img className='works-animation-2' src={animation_2} alt='animation-2' />
				<img className='works-animation-3' src={animation_3} alt='animation-4' />
			</div>
		</section>
	);
};
export default HowItWorks;
