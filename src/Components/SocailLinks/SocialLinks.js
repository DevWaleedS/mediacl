import React from 'react';
import './SocialLinks.css';
import '../../index.css';

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const SocialLinks = () => {
	return (
		<div className='social-wrapper'>
			<span>
				<FaFacebookF />
			</span>
			<span>
				<AiOutlineInstagram />
			</span>
			<span>
				<FaLinkedinIn />
			</span>
			<span>
				<FaTwitter />
			</span>
		</div>
	);
};

export default SocialLinks;
