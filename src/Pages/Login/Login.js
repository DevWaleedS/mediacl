import React from 'react';
import Form from '../../Components/From/Form';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
	const navigate = useNavigate();

	return (
		<section className=' login-page'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-xl-5 col-lg-6 col-md-8'>
						<Form
							form_Title={<img src={logo} alt='logo' />}
							user_name_input={<input type='text' className='form-control' placeholder='User Name' name='user name' />}
							passWord_input={<input type='password' className='form-control' placeholder='PassWord' name='password' />}
							login_btn={
								<button type='button' class=' mb-30 btn-lg login_btn w-100' onClick={() => navigate('/')}>
									login
								</button>
							}
							forget_password={
								<Link data-toggle='tab' to='/form-forget-password' className='forget-password'>
									Forgot Password
								</Link>
							}
							do_you_have_any_account="Don't have any account?"
							submit_btn={
								<Link data-toggle='tab' to='/register' type='submit' className=' btn-lg submit-btn w-100'>
									Register
								</Link>
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Login;
