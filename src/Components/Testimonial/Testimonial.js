import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import '../Testimonial/Testimonial.css';
import '../../index.css';

import images_wrapper from '../../assets/testimonial/image-wide.png';
import doctor_1 from '../../assets/testimonial/doctor-1.jpg';
import doctor_2 from '../../assets/testimonial/doctor-2.jpg';
import doctor_3 from '../../assets/testimonial/doctor-3.jpg';
import doctor_4 from '../../assets/testimonial/doctor-4.jpg';
import doctor_5 from '../../assets/testimonial/doctor-5.jpg';
import doctor_6 from '../../assets/testimonial/doctor-6.jpg';

// Animations
import animation_1 from '../../assets/testimonial/animation-1.png';
import animation_2 from '../../assets/header/animation-1.png';
import animation_3 from '../../assets/header/animation-2.png';
import animation_4 from '../../assets/testimonial/animation-4.png';

const Testimonial = () => {
	return (
		<section className='testimonial-section section-space'>
			<div className='container'>
				<div className='heading-row text-center'>
					<h6 className='title m-auto'>Testimonial</h6>
					<h2 className='heading'>
						See What Are The Patients
						<br />
						Saying About us
					</h2>
				</div>
				<div className='row align-items-center'>
					<div className='col-lg-6 text-center'>
						<div className='image-wrapper'>
							<LazyLoadImage src={images_wrapper} alt='doctors' effect='blur' className='img-fluid' />
							<div className='doctors-container'>
								<LazyLoadImage className='doctor-1' src={doctor_1} alt='doctor_1' effect='blur' />
								<LazyLoadImage className='doctor-2' src={doctor_2} alt='doctor_2' effect='blur' />
								<LazyLoadImage className='doctor-3' src={doctor_3} alt='doctor_3' effect='blur' />
								<LazyLoadImage className='doctor-4' src={doctor_4} alt='doctor_4' effect='blur' />
								<LazyLoadImage className='doctor-5' src={doctor_5} alt='doctor_5' effect='blur' />
								<LazyLoadImage className='doctor-6' src={doctor_6} alt='doctor_6' effect='blur' />
							</div>
						</div>
					</div>
					<div className='col-lg-6 '>
						<Swiper className='myTestimonialSwiper' loop={true} navigation={true} pagination={false} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard]}>
							<SwiperSlide>
								<div className='testimonial-wrapper'>
									<div className='testimonial-content'>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
											maecena ssuspendisse ultrices gravida.
										</p>
									</div>
									<div className='clint-info'>
										<h5 className='clint-name'>John Deo</h5>
										<p>patient</p>
									</div>
									<div className='quote-icon'>
										<div className='quote-left'>
											<FaQuoteLeft />
										</div>
										<div className='quote-right'>
											<FaQuoteRight />
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='testimonial-wrapper'>
									<div className='testimonial-content'>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
											maecena ssuspendisse ultrices gravida.
										</p>
									</div>
									<div className='clint-info'>
										<h5 className='clint-name'>John Deo</h5>
										<p>patient</p>
									</div>
									<div className='quote-icon'>
										<div className='quote-left'>
											<FaQuoteLeft />
										</div>
										<div className='quote-right'>
											<FaQuoteRight />
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
			<div className='animations'>
				<img className='testimonial-animation-1' src={animation_1} alt='animation-1' />
				<img className='testimonial-animation-2' src={animation_2} alt='animation-2' />
				<img className='testimonial-animation-3' src={animation_3} alt='animation-3' />
				<img className='testimonial-animation-4' src={animation_4} alt='animation-4' />
			</div>
		</section>
	);
};
export default Testimonial;
