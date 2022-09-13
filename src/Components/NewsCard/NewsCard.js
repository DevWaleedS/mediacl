import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import './NewsCard.css';
import '../../index.css';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Mousewheel, FreeMode } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

import { RiArrowDropRightLine } from 'react-icons/ri';
import { FaRegCalendarAlt } from 'react-icons/fa';

const NewsCard = ({ newsCards }) => {
	const cardDetails = newsCards.map(({ cardimage, title, id, avatar, date, author }) => (
		<SwiperSlide key={id}>
			<div className='card blog-card'>
				<div className='card-image mb-10'>
					<Link to='blog-details'>
						<LazyLoadImage className='card-img-top img-fluid' src={cardimage} alt={title} effect='blur' />
					</Link>
				</div>

				<div className='card-body'>
					<div className='news-meta mb-20'>
						<div className='blog-details'>
							<img className='avatar' src={avatar} alt={title} />
							<Link to='blog-details'>
								<h6>{author}</h6>
							</Link>
						</div>

						<div className='calender'>
							<FaRegCalendarAlt /> {date}
						</div>
					</div>

					<Link to='blog-details' className='card-title '>
						<h5>{title}</h5>
					</Link>

					<Link to='blog-details' className='news-btn'>
						view more <RiArrowDropRightLine />
					</Link>
				</div>
			</div>
		</SwiperSlide>
	));

	return (
		<Swiper
			className='myNewsSwiper'
			loop={true}
			loopFillGroupWithBlank={true}
			slidesPerView={3}
			modules={[Mousewheel, FreeMode]}
			
		>
			{cardDetails}
		</Swiper>
	);
};

export default NewsCard;
