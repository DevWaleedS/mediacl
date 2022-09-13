import React, { useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './BackToTop.css';

const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;

		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div className='back-to-top-wrapper' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
			<div className='icon'>
				<MdKeyboardArrowUp />
			</div>
		</div>
	);
};
export default BackToTop;
