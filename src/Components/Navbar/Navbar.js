import React, { Fragment, useRef, useState } from 'react';

import logo from '../../assets/logo/logo.png';
import mobile_logo from '../../assets/logo/mobile-logo.png';
import '../Navbar/Navbar.css';
import '../../index.css';
import { BsSearch } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiArrowDropRightLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BsPlus } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const navRef = useRef();
	const [navbar, setNavbar] = useState(false);

	const changeNavbarBg = () => {
		if (window.scrollY >= 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	window.addEventListener('scroll', changeNavbarBg);

	const navToggle = () => {
		navRef.current.classList.toggle('show-nav');
	};

	return (
		<Fragment>
			<nav className={navbar ? 'navbar navbar-expand-lg pt-3 pb-3 fixed-top' : 'navbar navbar-expand-lg pt-3 pb-3'}>
				<div className='container-fluid'>
					<NavLink className='navbar-brand' to='/'>
						<img src={logo} alt='logo' />
					</NavLink>

					<div className='mobile-search' to='search'>
						<BsSearch />
					</div>

					<button className='navbar-toggler' type='button' onClick={navToggle}>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div ref={navRef} className='navbar-collapse justify-content-between' id='navbarSupportedContent'>
						<div className='inner-logo'>
							<NavLink className='navbar-brand ' to='/'>
								<img src={mobile_logo} alt='logo' />
							</NavLink>
						</div>
						<ul className='navbar-nav '>
							<li className='nav-item'>
								<NavLink className='nav-link ' aria-current='page' to='/'>
									Home
								</NavLink>
							</li>
							<li className='nav-item dropdown'>
								<NavLink className='nav-link ' to='test' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
									Pages
									<BsPlus />
								</NavLink>
								<ul className='dropdown-menu'>
									<li>
										<NavLink className='dropdown-item' to='/about_us'>
											About us
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' to='/our_team'>
											Our team
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' to='/faq'>
											FAQ's
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' to='/booking'>
											Booking
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' to='/error'>
											Error 404
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' to='/login'>
											Login / Register
										</NavLink>
									</li>
								</ul>
							</li>
							<li className='nav-item dropdown'>
								<NavLink className='nav-link ' to='services' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
									Services
									<BsPlus />
								</NavLink>
								<ul className='dropdown-menu'>
									<li>
										<NavLink className='dropdown-item' to='/service'>
											Service
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' to='/service_detail'>
											Service Detail
										</NavLink>
									</li>
								</ul>
							</li>
							<li className='nav-item dropdown'>
								<NavLink className='nav-link ' to='blog' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
									Blog
									<BsPlus />
								</NavLink>
								<ul className='dropdown-menu'>
									<li>
										<NavLink className='dropdown-item' to='/blogs'>
											Blogs
										</NavLink>
									</li>
									<li>
										<NavLink className='dropdown-item' to='/blogs_details'>
											Blogs Details
										</NavLink>
									</li>
								</ul>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link ' to='/contact_us'>
									Contact us
								</NavLink>
							</li>
						</ul>
						<ul className='navbar-nav  align-items-center'>
							<li className='nav-item search'>
								<NavLink className='nav-link ' to='search'>
									<BsSearch />
								</NavLink>
							</li>
							<li className='nav-item phone'>
								<NavLink className='nav-link ' to='phone'>
									<span>
										<BsFillTelephoneFill />
									</span>
									<span>(+01) 999 888 777</span>
								</NavLink>
							</li>
							<li className='nav-item contact'>
								<NavLink className='nav-link contact' to='contact_us'>
									<button>
										<span>Contact us</span> <RiArrowDropRightLine />
									</button>
								</NavLink>
							</li>
						</ul>
						<div className='social-icon'>
							<ul className='social-list'>
								<li className='social-item'>
									<NavLink className='social-link ' aria-current='page' to='facebook'>
										<FaFacebookF />
									</NavLink>
								</li>
								<li className='social-item'>
									<NavLink className='social-link ' aria-current='page' to='google'>
										<FaGoogle />
									</NavLink>
								</li>
								<li className='social-item'>
									<NavLink className='social-link ' aria-current='page' to='linkedin'>
										<FaLinkedinIn />
									</NavLink>
								</li>
								<li className='social-item'>
									<NavLink className='social-link ' aria-current='page' to='twitter'>
										<FaTwitter />
									</NavLink>
								</li>
							</ul>
						</div>
						<div className='close-icon' onClick={navToggle}>
							<AiOutlineClose />
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};
export default Navbar;
