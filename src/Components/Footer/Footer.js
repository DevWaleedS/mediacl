import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { BsTelephoneFill } from 'react-icons/bs';
import '../Footer/Footer.css';
import '../../index.css';

import animation_1 from '../../assets/footer/animation-1.png';
import animation_2 from '../../assets/how-it-works/animation-2.png';
import animation_3 from '../../assets/create-account/animation-2.png';
import animation_4 from '../../assets/create-account/animation-2.png';

import footer_log from '../../assets/logo.png';
import facebook from '../../assets/footer/facebook.png';
import twitter from '../../assets/footer/twitter.png';
import instagram from '../../assets/footer/instagram.png';
import linkedin from '../../assets/footer/linkedin.png';

const Footer = () => {
	return (
		
		<footer>
			<div className='footer-top'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-3 col-lg-3 col-md-6'>
							<div className='weight info-weight'>
								<div className='footer-logo'>
									<Link to='/'>
										<LazyLoadImage src={footer_log} alt='footer logo' effect='blur' />
									</Link>
								</div>
								<div className='weight-content'>
									<p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
								</div>
								<div className='weight-contact'>
									<div className='icon'>
										<BsTelephoneFill />
									</div>
									<div className='phone'>
									<span>Contact Us</span>
										<a href='tel:+201010806145'>+201010806145</a>
									</div>

								</div>
							</div>
						</div>
						<div className='col-xl-3 col-lg-3 col-6 '>
							<div className='weight footer-weight ml-50'>
								<div className='footer-title'>
									<h3>Quick Links</h3>
								</div>
								<div className='footer-list'>
									<ul>
										<li>
											<Link to='about-us'>
												<span>About Us</span>
											</Link>
										</li>
										<li>
											<Link to='services'>
												<span>Services</span>
											</Link>
										</li>
										<li>
											<Link to='booking'>
												<span>Booking</span>
											</Link>
										</li>
										<li>
											<Link to='faq'>
												<span>Faq's</span>
											</Link>
										</li>
										<li>
											<Link to='blog-grid'>
												<span>Blogs</span>
											</Link>
										</li>
										<li>
											<Link to='team'>
												<span>Our Team</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-xl-3 col-lg-3 col-6'>
							<div className='weight footer-weight'>
								<div className='footer-title'>
									<h3>Our Service</h3>
								</div>
								<div className='footer-list'>
									<ul>
										<li>
											<Link to='service-detail'>
												<span>Dental Care</span>
											</Link>
										</li>
										<li>
											<Link to='service-detail'>
												<span>Cardiac Clinic</span>
											</Link>
										</li>
										<li>
											<Link to='service-detail'>
												<span>Massege Therapy</span>
											</Link>
										</li>
										<li>
											<Link to='service-detail'>
												<span>Cardiology</span>
											</Link>
										</li>
										<li>
											<Link to='service-detail'>
												<span>Precise Diagnosis</span>
											</Link>
										</li>
										<li>
											<Link to='service-detail'>
												<span>Abmbulance Services</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-xl-3 col-lg-3 col-md-6'>
							<div className='weight footer-weight'>
								<div className='footer-title'>
									<h3>Subscribe</h3>
								</div>
								<div className='footer-form'>
									<form className='subscribe-form mb-30'>
										<div className='input-group'>
											<input className='form-control' name='email' placeholder='Email Address' type='email' required />
										</div>
										<button className='btn footer-btn shadow w-100' name='submit' value='Submit' type='submit'>
											Subscribe Now
										</button>
									</form>
								</div>
								<div className='footer-social-links'>
									<ul>
										<li>
											<a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
												<LazyLoadImage src={facebook} alt='facebook' effect='blur' />
											</a>
										</li>
										<li>
											<a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
												<LazyLoadImage src={twitter} alt='twitter' effect='blur' />
											</a>
										</li>
										<li>
											<a href='https://instagram.com/' target='_blank' rel='noreferrer'>
												<LazyLoadImage src={instagram} alt='instagram' effect='blur' />
											</a>
										</li>
										<li>
											<a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
												<LazyLoadImage src={linkedin} alt='linkedin' effect='blur' />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='footer-bottom'>
					<div className='row'>
						<div className='col-12 text-center'>
							<p className='copyright-text'>
								Copyright &copy; 2022 Design &amp; Developed by
								<a href='/#' rel='noreferrer' target='_blank' className='copyright-link'>
									WaleedSalah
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='animations'>
				<img className='footer-animation-1' src={animation_1} alt='animation-1' />
				<img className='footer-animation-2' src={animation_2} alt='animation-2' />
				<img className='footer-animation-3' src={animation_3} alt='animation-3' />
				<img className='footer-animation-4' src={animation_4} alt='animation-4' />
			</div>
		</footer>
	);
};

export default Footer;
