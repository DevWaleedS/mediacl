import React from 'react';
import Home from '../Components/Home/Home.js';

import AboutUsPage from '../Pages/About-Us/AboutUsPage';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import OurTeamsPage from '../Pages/Teams/OurTeamsPage.js';
import FqaPage from '../Pages/Fqa/FqaPage.js';
import Booking from '../Pages/Booking/Booking.js';
import Error404 from '../Pages/Error404/Error404.js';
import Login from '../Pages/Login/Login.js';
import ForgetPassword from '../Pages/ForgetPassword/ForgetPassword.js';
import Register from '../Pages/Register/Register.js';
import ServicesPage from '../Pages/ServicesPage/ServicesPage.js';
import ServicesDetails from '../Pages/ServicesDetails/ServicesDetails.js';
import Blogs from '../Pages/Blogs/Blogs.js';
import BlogsDetails from '../Pages/Blogs/BlogsDetails.js';
import ContactUs from '../Pages/ContactUs/ContactUs.js';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='about_us' element={<AboutUsPage />} />
			<Route path='our_team' element={<OurTeamsPage />} />
			<Route path='faq' element={<FqaPage />} />
			<Route path='booking' element={<Booking />} />
			<Route path='*' element={<Error404 />} />
			<Route path='login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/form-forget-password' element={<ForgetPassword />} />
			<Route path='service' element={<ServicesPage />} />
			<Route path='service_detail' element={<ServicesDetails />} />
			<Route path='blogs' element={<Blogs />} />
			<Route path='blogs_details' element={<BlogsDetails />} />
			<Route path='contact_us' element={<ContactUs />} />
		</Routes>
	);
};
export default App;
