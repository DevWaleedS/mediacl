import React from 'react';
import './Comments.css';
import '../../index.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Comments = ({ avatar, title }) => {
	return (
		<div className={title === 'Falikaz' ? 'comment-block widget ml-80' : 'comment-block widget'}>
			<div className='comment-meta'>
				<div className='row mb-20'>
					<div className='col-1 me-4'>
						<div className='avatar'>
							<LazyLoadImage src={avatar} alt='avatar' effect='blur' className='rounded ' width='65px' />
						</div>
					</div>
					<div className='col-10 '>
						<div className='comment-title'>
							<h4>{title}</h4>
							<span>MAY 09, 2021 AT 10:45 AM</span>
						</div>
					</div>
				</div>
			</div>
			<div className='comment-desc'>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
				</p>
				<button className='reply-btn'>reply</button>
			</div>
		</div>
	);
};
export default Comments;
