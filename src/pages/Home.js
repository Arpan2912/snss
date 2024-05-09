import React, { useEffect, useState } from 'react';
import AboutUs from '../components/AboutUsHomePage';
import Services from '../components/Services';
// import Team from '../components/Team';
import ContactUs from '../components/ContactUs';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { seo } from '../utils';

const Home = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		seo();
	}, []);


	useEffect(() => {
		const handleResize = () => {
			const isMobileDevice = window.innerWidth <= 768; // Adjust the threshold as needed
			setIsMobile(isMobileDevice);
		};

		// Initial check on mount
		handleResize();

		// Add event listener for window resize
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div
		// className={styles.container}
		>

			{/* <body> */}
			{/* <Header></Header> */}
			<PageHeader img="logo.png" showTagline={true} backgroundImage={isMobile ? "../assets/img/home-bg-mobile.jpg" : "../assets/img/home-bg-min.jpg"} backgroundSize="cover"></PageHeader>
			<main id="main">
				<AboutUs></AboutUs>

				<Services></Services>

				{/* <Team></Team> */}

				<ContactUs isHomePage={true}></ContactUs>

			</main>

			<div id="preloader"></div>
			<Link to="/" className="back-to-top d-flex align-items-center justify-content-center"><i
				className="bi bi-arrow-up-short"></i></Link>



			{/* </body> */}

		</div>
	)

}

export default Home;