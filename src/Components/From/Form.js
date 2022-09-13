import React from 'react';
import './Form.css';
import '../../index.css';

const Form = ({
	form_Title,
	select_department,
	select_doctor,
	name_input,
	email_input,
	user_name_input,
	passWord_input,
	new_passWord_input,
	phone_number_input,
	date_input,
	submit_btn,
	login_btn,
	forget_password,
	do_you_have_any_account,
	textarea,
}) => {
	return (
		<div className='form-wrapper'>
			<h3 className='from-title'>{form_Title}</h3>
			<form action='#'>
				<div className='form-group'>{user_name_input}</div>
				<div className='form-group'>{name_input}</div>
				<div className='form-group'>{email_input}</div>
				<div className='form-group'>{phone_number_input}</div>
				<div className='form-group'>{select_department}</div>
				<div className='form-group'>{select_doctor}</div>
				<div className='form-group'>{passWord_input}</div>
				<div className='form-group'>{new_passWord_input}</div>
				<div className='form-group'>{date_input}</div>
				<div className='form-group'>{textarea}</div>
				<div class='form-group'>
					{login_btn}
					{forget_password}
				</div>
				<div className='text-center'>
					<p className='mt-5'>{do_you_have_any_account}</p>
					{submit_btn}
				</div>
			</form>
		</div>
	);
};

export default Form;
