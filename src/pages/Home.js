import React from 'react';
import AboutUs from '../components/AboutUsHomePage';
import Services from '../components/Services';
// import Team from '../components/Team';
import ContactUs from '../components/ContactUs';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div
		// className={styles.container}
		>

			{/* <body> */}
			{/* <Header></Header> */}
			<PageHeader img="logo.png" showTagline={true}></PageHeader>
			<main id="main">
				<AboutUs></AboutUs>
				{/* <section id="about" className="about">
					<div className="container" data-aos="fade-up">

						<div className="row">
							<div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
								<img src="assets/img/about.jpg" className="img-fluid" alt=""></img>
							</div>
							<div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
								<h3>About Us</h3>
								<p className="fst-italic">
									S N S S & Co is a firm of young Chartered Accountants, run by professionals having expertise in the
									different domains at Surat, Gujarat, India. Our diversified domain consists of audit, taxations and
									consulting of corporate clients as well as Medium & Small sized entities. <br />
								</p>
								<p>
									Our cross-border service portfolio includes International taxation, transfer pricing, FEMA compliances,
									structuring of mid sized entities, business valuations etc. We also conduct statutory audits for banks,
									corporate entities and LLPs.
								</p>
								<p>
									We place emphasis on professional ethics, Innovation and continuous skill enhancements coupled with proper
									use of technology play an important role. Our professional approach blended with personal touch has earned
									us enormous confidence of all our clients, which is reflected in an enduring business relationship that we
									enjoy with them as also in the consistent growth in portfolio of our services. We hold ourselves
									responsible to the profession, clients, society at large and to the nation.
								</p>
							</div>
						</div>

					</div>
				</section> */}

				<Services></Services>
				{/* <section id="services" className="services">
					<div className="container" data-aos="fade-up">

						<div className="section-title">
							<h2>Services</h2>
							<p>Check our Services</p>
						</div>

						<div className="row">
							<div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
								<div className="icon-box">
									<h4><a href="">Audit & Assurance</a></h4>
									<hr />
									<ul>
										<li>
											<p>statutory audit, tax audit, internal audit, concurrent
												audit, management audit, compliance review audit, fraud investigation audit, GST audit, and
												information
												system audit services.</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
								data-aos-delay="200">
								<div className="icon-box">
									<h4><a href="">Domestic taxation</a></h4>
									<hr />
									<ul>
										<li>
											<p>Tax efficient business structuring</p>
										</li>
										<li>
											<p>Preparation and filing of Tax Returns</p>
										</li>
										<li>
											<p>Representation before the Taxation Authorities</p>
										</li>
										<li>
											<p>Appearing before the Appellate Authority</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in"
								data-aos-delay="300">
								<div className="icon-box">
									<h4><a href="">Indirect Tax</a></h4>
									<hr />
									<ul>
										<li>
											<p>GST Registration, Return, Audit</p>
										</li>
										<li>
											<p>Monthly consulting for routine GST compliances</p>
										</li>
										<li>
											<p>GST Compliance Review</p>
										</li>
										<li>
											<p>Refund of Input Tax Credit</p>
										</li>
										<li>
											<p>Impact analysis of GST applicability to Industry</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
								<div className="icon-box">
									<h4><a href="">International Taxation</a></h4>
									<hr />
									<ul>
										<li>
											<p>Guiding benchmarking principles for establishment of Place of Effective Management (POEM)</p>
										</li>
										<li>
											<p>Assisting structuring especially for green field entities wants to set up business operations
												in/Outside India</p>
										</li>
										<li>
											<p>Advising on routine and non routine international transactions with an emphasis on global tax
												efficiency, DTAAs, BEPS, Multi lateral Agreement signed between the countries etc.</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
								<div className="icon-box">
									<h4><a href="">NRI Consulting</a></h4>
									<hr />
									<ul>
										<li>
											<p>As one of the CA firms in Ahmedabad, our team of professionals aids you with services that are
												related
												to corporate law, FEMA compliance, Foreign Trade Policy (FTP) compliance, US GAAP/IFRS conversion,
												business valuation, and merger and acquisition.</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
								<div className="icon-box">
									<h4><a href="">FEMA Consulting</a></h4>
									<hr />
									<ul>
										<li>
											<p>Compliances for Foreign Direct investment as well as transfer of shares, debentures & securities
												between Residents and Non - Residents in India and outside India.</p>
										</li>
										<li>
											<p>Reporting in Single Master Form (Erstwhile separate reporting for FC-GPR , FC-TRS , ODI etc).</p>
										</li>
										<li>
											<p>Compliances for Overseas Direct Investment (ODI) by Indian residents.</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
								<div className="icon-box">
									<h4><a href="">Valuations Advisory</a></h4>
									<hr />
									<ul>
										<li>
											<p>Assisting in development & review of financial model/projections</p>
										</li>
										<li>
											<p>Valuation of intellectual property(IP) like trade name, brand name, goodwill, customer contracts
											</p>
										</li>
										<li>
											<p>Valuation of Shares & Securities as required under RBI law or Companies act.</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
								<div className="icon-box">
									<h4><a href="">Business Setup</a></h4>
									<hr />
									<ul>
										<li>
											<p>As one of the CA firms in Ahmedabad, our team of professionals aids you with services that are
												related
												to corporate law, FEMA compliance, Foreign Trade Policy (FTP) compliance, US GAAP/IFRS conversion,
												business valuation, and merger and acquisition.</p>
										</li>
									</ul>
								</div>

							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
								<div className="icon-box">
									<h4><a href="">RERA Consulting</a></h4>
									<hr />
									<ul>
										<li>
											<p>As one of the CA firms in Ahmedabad, our team of professionals aids you with services that are
												related
												to corporate law, FEMA compliance, Foreign Trade Policy (FTP) compliance, US GAAP/IFRS conversion,
												business valuation, and merger and acquisition.</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
								<div className="icon-box">
									<h4><a href="">Startup Consulting</a></h4>
									<hr />
									<ul style={{ textAlign: 'left' }}>
										<li>
											<p>Guiding on legal structuring of entities</p>
										</li>
										<li>
											<p>Guiding on Investment Instruments</p>
										</li>
										<li>
											<p>Start Up registration, valuation</p>
										</li>
										<li>
											<p>Review of Start Up’s Business Plan </p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section> */}
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