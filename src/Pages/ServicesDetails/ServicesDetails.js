import React from 'react';
import './ServicesDetails.css';
import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Banner from '../../Components/Banner/Banner';
import Fqa from '../Fqa/Fqa';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoIosArrowForward } from 'react-icons/io';

import service_image from '../../assets/pages/service-details/pic1.jpg';
import pdf_image from '../../assets/pages/service-details/pdf-img.png';
import doc_image from '../../assets/pages/service-details/doc-img.png';

const ServicesDetails = () => {
	return (
		<div className='page-wrapper'>
			<Navbar />
			<Banner bannerTitle='Services Details' />
			<section className='section-space service-details'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 mb-30'>
							<div className='service-image mb-30'>
								<LazyLoadImage src={service_image} alt='service' effect='blur' className='img-fluid rounded' />
							</div>
							<div className='content-wrapper mb-30'>
								<div className='service-heading mb-30'>
									<h2 className='section-title mb-15'>Why Medical Had Been So Popular Till</h2>
									<p className='mb-0'>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
										of type and scrambled it to make a type specimen book
									</p>
								</div>
								<div className='row align-items-center'>
									<div className='col-md-6 mb30'>
										<ul className='list-check-squer mb-0 ps-0'>
											<li>Then along come two they</li>
											<li>That’s just a little bit more than</li>
											<li>Standard dummy text ever since</li>
											<li>Simply dummy text of the printing</li>
											<li>Make a type specimen book</li>
										</ul>
									</div>
									<div className='col-md-6 mb-30'>
										<div className='skillbar-box mb-30'>
											<h6 className='skill-title'>Advanced Technology</h6>
											<div className='skillbar appear'>
												<p className='skillbar-bar' style={{ width: '96%' }}></p>
												<span className='skill-bar-percent'>96%</span>
											</div>
										</div>
										<div className='skillbar-box mb-30'>
											<h6 className='skill-title'>Certified Engineers</h6>
											<div className='skillbar appear'>
												<p className='skillbar-bar' style={{ width: '79%' }}></p>
												<span className='skill-bar-percent'>79%</span>
											</div>
										</div>
										<div className='skillbar-box mb-0'>
											<h6 className='skill-title'>6 years Experience</h6>
											<div className='skillbar appear'>
												<p className='skillbar-bar' style={{ width: '75%' }}></p>
												<span className='skill-bar-percent'>75%</span>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className='questions-wrapper'>
								<div className='service-heading mb-30'>
									<h4 className='section-title mb-10'>Popular Questions</h4>
									<p className='mb-0'>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
								</div>

								<Fqa />
							</div>
						</div>
						<div className='col-lg-4'>
							<aside className=' sticky-top'>
								
								<div className='widget'>
									<ul className='service-menu'>
										<li className='active'>
											<a href='/service-detail'>
												<span>Engine Diagnostics</span>
												<IoIosArrowForward />
											</a>
										</li>
										<li>
											<a href='/service-detail'>
												<span>Lube Oil and Filters</span>
												<IoIosArrowForward />
											</a>
										</li>
										<li>
											<a href='/service-detail'>
												<span>Belts and Hoses</span>
												<IoIosArrowForward />
											</a>
										</li>
										<li>
											<a href='/service-detail'>
												<span>Air Conditioning</span>
												<IoIosArrowForward />
											</a>
										</li>
										<li>
											<a href='/service-detail'>
												<span>Brake Repair</span>
												<IoIosArrowForward />
											</a>
										</li>
										<li>
											<a href='service-detail'>
												<span>Tire and Wheel Services</span>
												<IoIosArrowForward />
											</a>
										</li>
									</ul>
								</div>
								
								<div className='widget'>
									<div className='brochure-bx'>
										<h5 className='title-head'>Download</h5>
										<a className='download-link' href='/service-detail'>
											<img src={pdf_image} alt='pdf_image' className='img-fluid' />
											<h5 className='download-title'>Download our Brochures</h5>
											<span>Download</span>
										</a>
										<a className='download-link' href='/service-detail'>
											<img src={doc_image} alt='doc_image' className='img-fluid' />
											<h5 className='download-title'>Our Company Details</h5>
											<span>Download</span>
										</a>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</section>

			<Footer />
			<BackToTop />
		</div>
	);
};

export default ServicesDetails;
