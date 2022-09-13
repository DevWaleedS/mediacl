import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { NavLink } from 'react-router-dom';

import './OurTeam.css';
import '../../index.css';

// Animations
import animation_1 from '../../assets/services/animation-1.png';
import animation_2 from '../../assets/header/animation-3.png';
import animation_3 from '../../assets/create-account/animation-2.png';
import animation_4 from '../../assets/about/animation-1.png';
import animation_5 from '../../assets/testimonial/animation-4.png';

const OurTeam = ({ teams }) => {
	const team = teams.map((team) => (
		<div className='col-lg-4 col-sm-6 mb-30' key={team.id}>
			<div className='member-card'>
				<div className='member-image'>
					<LazyLoadImage className='img-fluid' src={team.image} alt={team.name} effect='blur' />
				</div>

				<div className='member-content'>
					<h5 className='member-title'>{team.name}</h5>
					<h6 className='member-text'> {team.job}</h6>
					<div className='member-icon'>
						<ul>
							<li className='social-item'>
								<NavLink className='social-link ' aria-current='page' to='instagram'>
									{team.instagramIcon}
								</NavLink>
							</li>
							<li className='social-item'>
								<NavLink className='social-link ' aria-current='page' to='linkedin'>
									{team.linkedinInIcon}
								</NavLink>
							</li>
							<li className='social-item'>
								<NavLink className='social-link ' aria-current='page' to='twitter'>
									{team.twitterIcon}
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	));
	return (
		<section className='our-team section-space'>
			<div className='container'>
				<div class='heading-row text-center'>
					<h6 class='title m-auto'>Our Doctor</h6>
					<h2 class='heading'>Meet Best Doctors</h2>
				</div>
				<div className='row justify-content-center'>{team}</div>
			</div>

			<div className='animations'>
				<img className='ourTeam-animation-1' src={animation_1} alt='animation-1' />
				<img className='ourTeam-animation-2' src={animation_2} alt='animation-2' />
				<img className='ourTeam-animation-3' src={animation_3} alt='animation-3' />
				<img className='ourTeam-animation-4' src={animation_4} alt='animation-4' />
				<img className='ourTeam-animation-5' src={animation_5} alt='animation-5' />
			</div>
		</section>
	);
};
export default OurTeam;
