import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Form from '../From/Form';
import '../Account/Account.css';
import '../../index.css';

import animation_1 from '../../assets/header/animation-3.png';
import animation_2 from '../../assets/how-it-works/animation-3.png';
import animation_3 from '../../assets/create-account/animation-2.png';
import animation_4 from '../../assets/header/animation-4.png';

import women from '../../assets/create-account/women.png';
import mobile from '../../assets/create-account/mobile.png';
import message from '../../assets/create-account/message.png';
import setting from '../../assets/create-account/setting.png';
import mark from '../../assets/create-account/mark.png';
import location from '../../assets/create-account/location.png';

const Account = () => {
	return (
		<section className='account-section section-space'>
			<div className='container-fluid'>
				<div className='section-wrapper'>
					<div className='container '>
						<div className='row align-items-center'>
							<div className='col-xl-5 col-lg-6 col-md-6'>
								<Form
									form_Title='Book Appointment'
									select_department={
										<select className='form-select form-control'>
											<option>Select Department</option>
											<option value='1'>One</option>
											<option value='2'>Two</option>
											<option value='3'>Three</option>
										</select>
									}
									select_doctor={
										<select className='form-select form-control'>
											<option>Select Doctor</option>
											<option value='1'>One</option>
											<option value='2'>Two</option>
											<option value='3'>Three</option>
										</select>
									}
									user_name_input={<input type='text' className='form-control' placeholder='Your Name' name='user name' />}
									phone_number_input={<input type='number' className='form-control' placeholder='Phone Numbers' name='number' />}
									date_input={<input type='date' className='form-control' name='date' />}
									submit_btn={
										<button type='submit' className=' btn-lg submit-btn '>
											Appointment Now
										</button>
									}
								/>
							</div>
							<div className='col-xl-5 col-lg-6 col-md-6'>
								<div className='images-box'>
									<LazyLoadImage src={mobile} alt='mobile' effect='blur' className='img-fluid' />
									<div className='images-animation'>
										<LazyLoadImage className='message-animation ' src={message} alt='message' effect='blur' />
										<LazyLoadImage className='mark-animation' src={mark} alt='mark' effect='blur' />
										<LazyLoadImage className='setting-animation' src={setting} alt='setting' effect='blur' />
										<LazyLoadImage className='women-animation' src={women} alt='mobile' effect='blur' />
										<LazyLoadImage className='location-animation' src={location} alt='mobile' effect='blur' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='animations '>
				<img className='account-animation-1' src={animation_1} alt='animation-1' />
				<img className='account-animation-2' src={animation_2} alt='animation-2' />
				<img className='account-animation-3' src={animation_3} alt='animation-3' />
				<img className='account-animation-4' src={animation_4} alt='animation-4' />
			</div>
		</section>
	);
};
export default Account;
