import React, { useState } from 'react';
import './AboutUsPage.css';
import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Banner from '../../Components/Banner/Banner';
import AboutUs from '../../Components/AboutUs/AboutUs';
import Testimonial from '../../Components/Testimonial/Testimonial';
import News from '../../Components/News/News';
import Features from '../../Components/Features/Features';
import OurTeam from '../Our-Team/OurTeam';



import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import member_1 from '../../assets/our-team/member1.jpg';
import member_2 from '../../assets/our-team/member2.jpg';
import member_3 from '../../assets/our-team/member3.jpg';


const AboutUsPage = () => {


	const [teams, setTeams] = useState([
		{
			id: 1,
			image: member_1,
			name: 'Dr. Addition Smith',
			job: 'Dentist',
			instagramIcon: AiOutlineInstagram,
			twitterIcon: FaTwitter,
			linkedinInIcon: FaLinkedinIn,
		},
		{
			id: 2,
			image: member_2,
			name: 'Dr. Mahfuz Riad',
			job: 'Chiropractor',
			instagramIcon: AiOutlineInstagram,
			twitterIcon: FaTwitter,
			linkedinInIcon: FaLinkedinIn,
		},
		{
			id: 3,
			image: member_3,
			name: 'Dr. David Benjamin ',
			job: 'Cardiologist',
			instagramIcon: AiOutlineInstagram,
			twitterIcon: FaTwitter,
			linkedinInIcon: FaLinkedinIn,
		},
		// {
		// 	id: 4,
		// 	image: doctor_2,

		// 	name: 'Dr. Addition Smith',
		// 	job: 'Dentist',
		// },
		// {
		// 	id: 5,
		// 	image: doctor_4,

		// 	name: 'Dr. Addition Smith',
		// 	job: 'Dentist',
		// },
		// {
		// 	id: 6,
		// 	image: doctor_5,

		// 	name: 'Dr. Addition Smith',
		// 	job: 'Dentist',
		// },
	]);

	return (
		<div className='page-wrapper'>
			<Navbar />
			<Banner bannerTitle='About Us' />
			<AboutUs />
			<Features />
			<OurTeam teams={teams} />
			<Testimonial />
			<News />
			<Footer />
			<BackToTop />
		</div>
	);
};
export default AboutUsPage;
