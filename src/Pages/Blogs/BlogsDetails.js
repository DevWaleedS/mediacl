import React from 'react';
import './Blogs.css';
import '../../index.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BackToTop from '../../Components/BackToTop/BackToTop';
import Banner from '../../Components/Banner/Banner';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { GoQuote } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';

import blog_image from '../../assets/pages/blog-details/pic1.jpg';
import desc_image1 from '../../assets/pages/blog-details/post-img-1.jpg';
import desc_image2 from '../../assets/pages/blog-details/post-img-2.jpg';
import blog_avatar_1 from '../../assets/testimonial/doctor-3.jpg';
import blog_avatar_2 from '../../assets/pages/blog-details/avatar-1.jpg';
import blog_avatar_3 from '../../assets/pages/blog-details/avatar-2.jpg';
import recent_post_img_1 from '../../assets/pages/blog-details/aside-pic-1.jpg';
import recent_post_img_2 from '../../assets/pages/blog-details/aside-pic-2.jpg';
import recent_post_img_3 from '../../assets/pages/blog-details/aside-pic-3.jpg';
import gallery_1 from '../../assets/pages/blog-details/gallery-1.jpg';
import gallery_2 from '../../assets/pages/blog-details/gallery-2.jpg';
import gallery_3 from '../../assets/pages/blog-details/gallery-3.jpg';
import gallery_4 from '../../assets/pages/blog-details/gallery-4.jpg';
import gallery_5 from '../../assets/pages/blog-details/gallery-5.jpg';
import gallery_6 from '../../assets/pages/blog-details/gallery-6.jpg';

import Comments from '../../Components/Comments/Comments';
import SocialLinks from '../../Components/SocailLinks/SocialLinks';
import AddCommentForm from '../../Components/AddCommentForm/AddCommentForm';

const BlogsDetails = () => {
	return (
		<div className='page-wrapper'>
			<Navbar />
			<Banner bannerTitle='Blog Details' />

			<section className='section-space service-details'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50'>
							<div className='blog-wrapper'>
								<div className='blog-image mb-30'>
									<LazyLoadImage src={blog_image} alt='blog' effect='blur' className='img-fluid rounded' />
								</div>
								<div class='blog-meta mb-20'>
									<div className='row align-items-center '>
										<div className='col-2 align-items-center'>
											<div class='blog-details'>
												<img class='avatar  rounded-circle  me-1' src={blog_avatar_1} alt='avatar one' width='30px' />
												<a href='/#'>
													<h6>Sonar Moyna</h6>
												</a>
											</div>
										</div>

										<div className='col-2'>
											<div class='calender'>
												<span className='me-1'>
													<FaRegCalendarAlt />
												</span>
												21 July 2022
											</div>
										</div>
									</div>
								</div>
								<div className='blog-title mb-20'>
									<h3>Precious Tips To Help You Get Better.</h3>
								</div>
								<div className='blog-desc mb-30'>
									<p className='mb-30'>
										You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh
										button to generate a new list of unique titles.
									</p>
									<div className='blog-quote mb-30'>
										<div className='row align-items-center'>
											<div className='col-2 text-center '>
												<div className='quote-icon'>
													<GoQuote />
												</div>
											</div>
											<div className='col-9'>
												<p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.</p>
											</div>
										</div>
									</div>
									<p className='mb-30'>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
										of type and scrambled it to make a type specimen book.
									</p>

									<div className='desc-images mb-30'>
										<div className='row'>
											<div className='col-lg-6'>
												<LazyLoadImage src={desc_image1} alt='blog' effect='blur' className='img-fluid ' />
											</div>
											<div className='col-lg-6'>
												<LazyLoadImage src={desc_image2} alt='blog' effect='blur' className='img-fluid ' />
											</div>
										</div>
									</div>

									<p className='mb-20'>
										You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh
										button to generate a new list of unique titles.
									</p>
									<p className='mb-30'>
										It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
										containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
									</p>

									<div className='desc-footer '>
										<div className='row'>
											<div className='col-6'>
												<div className='tags'>
													<span className='tags-title'>Tags: </span>
													<span>Health</span>
													<span>Groth</span>
													<span>Life</span>
												</div>
											</div>
											<div className='col-6'>
												<div className='share'>
													<span className='share-title'>Share: </span>
													<span className='iocns'>
														<SocialLinks />
													</span>
												</div>
											</div>
										</div>
									</div>

									<div className='author widget '>
										<div className='row'>
											<div className='col-2'>
												<LazyLoadImage src={blog_avatar_2} alt='author' className='rounded' />
											</div>
											<div className='col-8'>
												<div className='author-title'>
													<h3>Sonar Z. Moyna</h3>
												</div>
												<div className='author-desc mb-20'>
													<p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
												</div>
												<div className='author-social-links'>
													<SocialLinks />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='comments-wrapper'>
									<div className='comments-title '>
										<h3 className='blog-heading'>8 Comments</h3>
									</div>

									<Comments avatar={blog_avatar_3} title='George' />
									<Comments avatar={blog_avatar_2} title='Falikaz' />
									<Comments avatar={blog_avatar_3} title='Sonar' />
									<Comments avatar={blog_avatar_2} title='Michel' />
								</div>

								<div className='form-container widget'>
									<div className='form-title mb-30'>
										<h3 className='blog-heading'> Leave a Reply</h3>
									</div>

									<AddCommentForm />
								</div>
							</div>
						</div>

						<div className='col-md-12 col-lg-5 col-xl-4 mb-30'>
							<aside className=' sticky-top'>
								<div className='search-widget widget'>
									<div className='search-form'>
										<input type='search' name='search' placeholder='Enter Your Keyword...' />
										<a href='/#'>
											<FiSearch />
										</a>
									</div>
								</div>

								<div className='recent-Posts-widget widget'>
									<div className='recent-Posts-wrapper'>
										<div className='recent-post-title mb-30'>
											<h3 className='blog-heading'>Recent Posts</h3>
										</div>
										<div className='posts-wrapper'>
											<div className='recent-post mb-10 pb-3'>
												<div className='row'>
													<div className='col-4'>
														<LazyLoadImage src={recent_post_img_1} alt='blog' effect='blur' className='img-fluid rounded' />
													</div>
													<div className='col-8'>
														<div className='post-title'>
															<h5>Precious Tips To Help You Get Better.</h5>
														</div>
														<div className='post-date'>
															<spna className='post-date-icon'>
																<FaRegCalendarAlt />
															</spna>
															<span>22 July 2020</span>
														</div>
													</div>
												</div>
											</div>
											<div className='recent-post mb-10 pb-3'>
												<div className='row'>
													<div className='col-4'>
														<LazyLoadImage src={recent_post_img_3} alt='blog' effect='blur' className='img-fluid rounded' />
													</div>
													<div className='col-8'>
														<div className='post-title'>
															<h5>Ten Doubts You Should Clarify About.</h5>
														</div>
														<div className='post-date'>
															<spna>
																<FaRegCalendarAlt />
															</spna>
															<span>18 July 2021</span>
														</div>
													</div>
												</div>
											</div>
											<div className='recent-post '>
												<div className='row'>
													<div className='col-4'>
														<LazyLoadImage src={recent_post_img_2} alt='blog' effect='blur' className='img-fluid rounded' />
													</div>
													<div className='col-7'>
														<div className='post-title'>
															<h5>The 10 Steps Needed For Putting.</h5>
														</div>
														<div className='post-date'>
															<span>
																<FaRegCalendarAlt />
															</span>
															<span>21 July 2021</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='our-gallery-widget widget'>
									<div className='our-gallery-wrapper'>
										<div className='our-gallery-title mb-30'>
											<h3 className='blog-heading'>Our Gallery</h3>
										</div>

										<div className='gallery'>
											<div className='row mb-1'>
												<div className='col-4'>
													<LazyLoadImage src={gallery_1} alt='blog' effect='blur' className='img-fluid' />
												</div>
												<div className='col-4'>
													<LazyLoadImage src={gallery_2} alt='blog' effect='blur' className='img-fluid ' />
												</div>
												<div className='col-4'>
													<LazyLoadImage src={gallery_3} alt='blog' effect='blur' className='img-fluid ' />
												</div>
											</div>
											<div className='row'>
												<div className='col-4'>
													<LazyLoadImage src={gallery_4} alt='blog' effect='blur' className='img-fluid ' />
												</div>
												<div className='col-4'>
													<LazyLoadImage src={gallery_5} alt='blog' effect='blur' className='img-fluid' />
												</div>
												<div className='col-4'>
													<LazyLoadImage src={gallery_6} alt='blog' effect='blur' className='img-fluid ' />
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='tags-widget widget'>
									<div className='tags-container'>
										<div className='tags-title mb-30'>
											<h3 className='blog-heading'>Tags</h3>
										</div>
										<div className='tags-wrapper'>
											<div className='row mb-20'>
												<div className='col-3 me-4'>
													<span className='tag'>Improvement</span>
												</div>
												<div className='col-2 me-3'>
													<span className='tag'>Health</span>
												</div>
												<div className='col-2'>
													<span className='tag'>Life</span>
												</div>
												<div className='col-2'>
													<span className='tag'>Covid</span>
												</div>
											</div>
											<div className=' row mb-20'>
												<div className='col-2 me-3'>
													<span className='tag'>Healthy</span>
												</div>
												<div className='col-2 me-3'>
													<span className='tag'>Growth</span>
												</div>
												<div className='col-2 '>
													<span className='tag'>Education</span>
												</div>
											</div>
											<div className=' row mb-20'>
												<div className='col-2 me-4'>
													<span className='tag'>Manage</span>
												</div>
												<div className='col-2'>
													<span className='tag'>General</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</section>
			<Footer />
			<BackToTop />
		</div>
	);
};
export default BlogsDetails;
