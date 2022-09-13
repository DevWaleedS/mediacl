import React, { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';

import '../../index.css';

import blogImage_1 from '../../assets/news/pic1.jpg';
import blogImage_2 from '../../assets/news/pic2.jpg';
import blogImage_3 from '../../assets/news/pic3.jpg';
import blogImage_4 from '../../assets/news/pic4.jpg';
import blogImage_5 from '../../assets/news/pic5.jpg';

import doctor_1 from '../../assets/testimonial/doctor-1.jpg';
import doctor_2 from '../../assets/testimonial/doctor-2.jpg';
import doctor_3 from '../../assets/testimonial/doctor-3.jpg';
import doctor_4 from '../../assets/testimonial/doctor-4.jpg';
import doctor_5 from '../../assets/testimonial/doctor-5.jpg';
import doctor_6 from '../../assets/testimonial/doctor-6.jpg';

// Animations
import animation_1 from '../../assets/services/animation-1.png';
import animation_2 from '../../assets/header/animation-3.png';
import animation_3 from '../../assets/create-account/animation-2.png';
import animation_4 from '../../assets/about/animation-1.png';

const News = () => {
	const [newsCards, setNewsCards] = useState([
		{
			id: 1,
			cardimage: blogImage_1,
			avatar: doctor_1,
			date: '18 Nov 2022',
			author: 'Peter Packer',
			title: 'In this hospital there are special surgeon',
		},
		{
			id: 2,
			cardimage: blogImage_2,
			avatar: doctor_2,
			date: '11 Dec 2021',
			author: 'Kalina Mollika',
			title: 'Can you get a diflucan prescription online?',
		},
		{
			id: 3,
			cardimage: blogImage_3,
			avatar: doctor_3,
			date: '21 July 2022',
			author: 'Sonar Moyna',
			title: `Health Will Be A Thing Of The Past And Here's Why `,
		},
		{
			id: 4,
			cardimage: blogImage_4,
			avatar: doctor_4,
			date: '10 Fab 2020',
			author: 'Tamim Waleed',
			title: 'Dental Care for Women is very important',
		},
		{
			id: 5,
			cardimage: blogImage_5,
			avatar: doctor_5,
			author: 'Sameh Adel',
			date: '21 July 2022',
			title: 'In this hospital there are special surgeon',
		},
		{
			id: 6,
			cardimage: blogImage_3,
			avatar: doctor_6,
			author: 'John deo',
			date: '21 Sep 2022',
			title: 'In this hospital there are special surgeon',
		},
	]);

	return (
		<section className='news-section section-space'>
			<div className='container'>
				<div className='heading-row text-center'>
					<h6 className='title m-auto'>Latest News</h6>
					<h2 className='heading'>Our Latest News</h2>
				</div>
				<div className='news-slides'>
					<NewsCard newsCards={newsCards} />
				</div>
			</div>
			<div className='animations'>
				<img className='news-animation-1' src={animation_1} alt='animation-1' />
				<img className='news-animation-2' src={animation_2} alt='animation-2' />
				<img className='news-animation-3' src={animation_3} alt='animation-3' />
				<img className='news-animation-4' src={animation_4} alt='animation-4' />
			</div>
		</section>
	);
};

export default News;
