import React from 'react';
import '../../index.css';

export default function AddCommentForm() {
	return (
		<form action='#'>
			<div className='row'>
				<div className='form-group mb-10 col-lg-6'>
					<input className='form-control w-100' type='text' name='Author' placeholder='Author' id='author' />
				</div>
				<div className='form-group mb-10 col-lg-6'>
					<input className='form-control w-100' type='email' name='Author' placeholder='Email' id='email' />
				</div>
			</div>

			<div className='form-group mb-10'>
				<textarea className='form-control w-100' type='text' name='Comment' placeholder='Comment' id='comment' />
			</div>
			<div className='form-group mb-10'>
				<button type='submit' name='Submit Comment' id='comment' className="submit-comment-btn">
					Submit Comment
				</button>
			</div>
		</form>
	);
}
