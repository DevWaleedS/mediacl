import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import '../Header/Header.css';
import '../../index.css';

const Header = () => {
	return (
		<Fragment>
			<header>
				<Navbar />
				<Hero />
			</header>
		</Fragment>
	);
};
export default Header;
