import React, { useState } from 'react';
import './OurTeamsPage.css';
import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import OurTeam from '../Our-Team/OurTeam';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';

import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import member_1 from '../../assets/our-team/member1.jpg';
import member_2 from '../../assets/our-team/member2.jpg';
import member_3 from '../../assets/our-team/member3.jpg';
import member_4 from '../../assets/our-team/member4.jpg';
import member_5 from '../../assets/our-team/member5.jpg';
import member_6 from '../../assets/our-team/member6.jpg';

const OurTeamsPage = () => {
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
		{
			id: 4,
			image: member_4,
			name: 'Dr. Addition Smith',
			job: 'Dentist',
			instagramIcon: AiOutlineInstagram,
			twitterIcon: FaTwitter,
			linkedinInIcon: FaLinkedinIn,
		},
		{
			id: 5,
			image: member_5,
			name: 'Dr. Mahfuz Riad',
			job: 'Chiropractor',
			instagramIcon: AiOutlineInstagram,
			twitterIcon: FaTwitter,
			linkedinInIcon: FaLinkedinIn,
		},
		{
			id: 6,
			image: member_6,
			name: 'Dr. David Benjamin ',
			job: 'Cardiologist',
			instagramIcon: AiOutlineInstagram,
			twitterIcon: FaTwitter,
			linkedinInIcon: FaLinkedinIn,
		},
	]);
	
	return (
		<div className='page-wrapper'>
			<Navbar />
			<Banner bannerTitle='Our Team' />

			<OurTeam teams={teams} />

			<Footer />
			<BackToTop />
		</div>
	);
};

export default OurTeamsPage;
