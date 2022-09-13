import React from 'react';
import Form from '../../Components/From/Form';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

const ForgetPassword = () => {
	return (
		<section className='login-page'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-5 col-lg-6 col-md-8'>
						<Form
							form_Title={<img src={logo} alt='logo' />}
							passWord_input={<input type='password' className='form-control' placeholder='PassWord' name='password' />}
							new_passWord_input={<input type='password' className='form-control' placeholder='New PassWord' name='password' />}
							submit_btn={
								<Link data-toggle='tab' to='/mediacl/register' type='submit' className=' btn-lg submit-btn w-100'>
									Register Now
								</Link>
							}
							do_you_have_any_account='Already have an account?'
							login_btn={
								<Link type='button' class=' mb-30 btn-lg login_btn w-100 mb-0' to='/mediacl/'>
									Submit
								</Link>
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default ForgetPassword;
