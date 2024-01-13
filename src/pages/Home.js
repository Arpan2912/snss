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
				{/* <section id="team" className="team">
					<div className="container" data-aos="fade-up">

						<div className="section-title">
							<h2>Team</h2>
							<p>Check our Team</p>
						</div>

						<div className="row">

							<div className="col-lg-6 col-md-6 d-flex align-items-stretch">
								<div className="member" data-aos="fade-up" data-aos-delay="100">
									<div className="member-img">
										<img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""></img>
										<div className="social">
											<a href=""><i className="bi bi-twitter"></i></a>
											<a href=""><i className="bi bi-facebook"></i></a>
											<a href=""><i className="bi bi-instagram"></i></a>
											<a href=""><i className="bi bi-linkedin"></i></a>
										</div>
									</div>
									<div className="member-info">
										<h4>Niranjan Shah</h4>
										<span>Chief Executive Officer</span>
									</div>
								</div>
							</div>

							<div className="col-lg-6 col-md-6 d-flex align-items-stretch">
								<div className="member" data-aos="fade-up" data-aos-delay="200">
									<div className="member-img">
										<img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""></img>
										<div className="social">
											<a href=""><i className="bi bi-twitter"></i></a>
											<a href=""><i className="bi bi-facebook"></i></a>
											<a href=""><i className="bi bi-instagram"></i></a>
											<a href=""><i className="bi bi-linkedin"></i></a>
										</div>
									</div>
									<div className="member-info">
										<h4>Sanyam Shah</h4>
										<span>Chief Executive Officer</span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section> */}
				<ContactUs isHomePage={true}></ContactUs>
				{/* <section id="contact" className="contact">
					<div className="container" data-aos="fade-up">

						<div className="section-title">
							<h2>Contact</h2>
							<p>Contact Us</p>a
						</div>

						<div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.161103491086!2d72.80758461414905!3d21.185758187777687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e775165b577%3A0x1a65169761d366af!2sNeelgagan%20Apartment%2C%20Surat%20-%20Dumas%20Rd%2C%20Athwa%20Gate%2C%20Surat%2C%20Gujarat%20395001!5e0!3m2!1sen!2sin!4v1654945367413!5m2!1sen!2sin"
								style={{ border: 0, width: '100%', height: '270px' }}
								allowfullscreen="" loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>

						<div className="row mt-5">

							<div className="col-lg-4">
								<div className="info">
									<div className="address">
										<i className="bi bi-geo-alt"></i>
										<h4>Location:</h4>
										<p>A-101, Nilgagan Apartment, opp. bank of baroda, Athwagate</p>
									</div>

									<div className="email">
										<i className="bi bi-envelope"></i>
										<h4>Email:</h4>
										<p>info@snssindia.in</p>
									</div>

									<div className="phone">
										<i className="bi bi-phone"></i>
										<h4>Call:</h4>
										<p>+91 9825860488</p>
										<p>+91 9904003198</p>
									</div>

								</div>

							</div>

							<div className="col-lg-8 mt-5 mt-lg-0">

								<form action="forms/contact.php" method="post" role="form" className="php-email-form">
									<div className="row">
										<div className="col-md-6 form-group">
											<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required></input>
										</div>
										<div className="col-md-6 form-group mt-3 mt-md-0">
											<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required></input>
										</div>
									</div>
									<div className="form-group mt-3">
										<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required></input>
									</div>
									<div className="form-group mt-3">
										<textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
									</div>
									<div className="my-3">
										<div className="loading">Loading</div>
										<div className="error-message"></div>
										<div className="sent-message">Your message has been sent. Thank you!</div>
									</div>
									<div className="text-center"><button type="submit">Send Message</button></div>
								</form>

							</div>

						</div>

					</div>
				</section> */}

			</main>

			<div id="preloader"></div>
			<Link to="/" className="back-to-top d-flex align-items-center justify-content-center"><i
				className="bi bi-arrow-up-short"></i></Link>



			{/* </body> */}

		</div>
	)

}

export default Home;