import React from 'react';
import Form from '../../Components/From/Form';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import '../Login/Login.css';

const Register = () => {
	return (
		<section className=' login-page'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-5 col-lg-6 col-md-8'>
						<Form
							form_Title={<img src={logo} alt='logo' />}
							name_input={<input type='text' className='form-control' placeholder='Name' name='name' />}
							email_input={<input type='email' className='form-control' placeholder='Email' name='email' />}
							user_name_input={<input type='text' className='form-control' placeholder='User Name' name='user name' />}
							passWord_input={<input type='password' className='form-control' placeholder='PassWord' name='password' />}
							submit_btn={
								<Link data-toggle='tab' to='/mediacl/login' type='submit' className=' btn-lg submit-btn w-100'>
									login
								</Link>
							}
							do_you_have_any_account='Already have an account?'
							login_btn={
								<Link type='button' class=' mb-30 btn-lg login_btn w-100 mb-0' to='/mediacl/login'>
									Register Now
								</Link>
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Register;
