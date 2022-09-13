import React from 'react';
import './ContactUs.css';
import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Banner from '../../Components/Banner/Banner';
import Form from '../../Components/From/Form';
import { Link } from 'react-router-dom';
import SocialLinks from '../../Components/SocailLinks/SocialLinks';

import { TbMapSearch } from 'react-icons/tb';
import { MdOutlineBadge } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

const ContactUs = () => {
	return (
		<div className='page-wrapper '>
			<Navbar />
			<Banner bannerTitle='Contact Us' />
			<section className='contact-us-page'>
				<div className='container'>
					<div className='contact-us-wrapper '>
						<div className='row '>
							<div className='col-lg-6 mb-30'>
								<div className='contact-us-form-wrapper'>
									<Form
										user_name_input={<input type='text' className='form-control' placeholder='Your Name' name='user name' required />}
										email_input={<input type='email' className='form-control' placeholder='Email' name='email' required />}
										phone_number_input={<input type='phone' className='form-control' placeholder='Phone Number' name='phone' required />}
										select_department={
											<select className='form-select form-control'>
												<option>Select Department</option>
												<option value='1'>One</option>
												<option value='2'>Two</option>
												<option value='3'>Three</option>
											</select>
										}
										textarea={<textarea className='form-control  w-100 ' type='textarea' name='Comment' placeholder='Type	Message' id='comment' />}
										submit_btn={
											<Link data-toggle='tab' to='' type='submit' className=' btn-lg submit-btn w-100 '>
												Submit
											</Link>
										}
									/>
								</div>
							</div>
							<div className='col-lg-6 mb-30'>
								<div className='contact-info-wrapper'>
									<div className='contact-info-container'>
										<h4 className='contact-info-title mb-30'>Contact Us For Any Information</h4>
										<div className='icon-box mb-50'>
											<h6 className='icon-title'>
												<TbMapSearch />
												Location
											</h6>
											<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
										</div>
										<div className='icon-box mb-50'>
											<h6 className='icon-title'>
												<MdOutlineBadge />
												Email & Phone
											</h6>
											<p className='mb-0'>eng.waleed.salah@outlook.com</p>
											<p>(+2) 01010806145</p>
										</div>
										<div className='icon-box mb-50'>
											<h6 className='icon-title'>
												<TbWorld />
												Follow Us
											</h6>
											<SocialLinks />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
			<BackToTop />
		</div>
	);
};
export default ContactUs;
