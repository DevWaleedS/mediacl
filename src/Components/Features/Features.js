import React from 'react';
import './Features.css';
import '../../index.css';

const Features = () => {
	return (
		<section className='features section-space'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-3 col-sm-6 mb-30'>
						<div className='feature-box '>
							<h2 className='counter '>120</h2>
							<h5 className='feature-title'>Years With You</h5>
							<p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
						</div>
					</div>
					<div className='col-xl-3 col-sm-6 mb-30'>
						<div className='feature-box'>
							<h2 className='counter '>400</h2>
							<h5 className='feature-title'>Awards</h5>
							<p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
						</div>
					</div>
					<div className='col-xl-3 col-sm-6 mb-30'>
						<div className='feature-box'>
							<h2 className='counter '>250</h2>
							<h5 className='feature-title'>Doctors</h5>
							<p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
						</div>
					</div>
					<div className='col-xl-3 col-sm-6 mb-30'>
						<div className='feature-box'>
							<h2 className='counter '>800</h2>
							<h5 className='feature-title'>Satisfied Client</h5>
							<p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Features;
