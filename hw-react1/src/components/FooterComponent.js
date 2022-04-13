function FooterComponent () {
	return (
		<footer className="page-footer">
			<div className="container">
				<div className="footer-middle wrap-content">
					<div className="footer-middle-contact col-3">
						<div className="middle-contact-mobile">
							<h3>Contact</h3>
							<i className="fa-solid fa-caret-down"></i>
						</div>
						<ul className="contact-list">
							<li className="contact-item">
								<a href="" className="logo">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/footer-logo.png"
										alt="logo"
									/>
								</a>
							</li>
							<li className="contact-item">
								<i className="fa-solid fa-location-dot"></i>
								<span>184 Main Rd E, St Albans <br />
                  VIC 3021, Australia
                </span>
							</li>
							<li className="contact-item">
								<i className="fa-solid fa-envelope"></i>
								<a href="mailto:contact@company.com"> contact@company.com</a>
							</li>
							<li className="contact-item">
								<i className="fa-solid fa-phone"></i>
								<span>+001 2233 456</span>
							</li>
							<li className="contact-item">
								<ul className="contact-list-icon">
									<li className="contact-icon">
										<a href=""><i className="fa-brands fa-facebook-f"></i></a>
									</li>
									<li className="contact-icon">
										<a href=""><i className="fa-brands fa-twitter"></i></a>
									</li>
									<li className="contact-icon">
										<a href=""><i className="fa-brands fa-instagram"></i></a>
									</li>
									<li className="contact-icon">
										<a href=""><i className="fa-brands fa-invision"></i></a>
									</li>
									<li className="contact-icon">
										<a href=""><i className="fa-solid fa-paragraph"></i></a>
									</li>
								</ul>
							</li>
						</ul>
					</div>

					<div className="footer-middle-col col-2">
						<h3 className="footer-tille">Categories</h3>
						<i className="fa-solid fa-caret-down"></i>
						<ul>
							<li><a href="">Celebrations</a></li>
							<li><a href="">Events</a></li>
							<li><a href="">Home Decor</a></li>
							<li><a href="">Seasonal Bouquet</a></li>
							<li><a href="">Wedding Decor</a></li>
						</ul>
					</div>

					<div className="footer-middle-col col-2">
						<h3 className="footer-tille">Useful links</h3>
						<i className="fa-solid fa-caret-down"></i>
						<ul>
							<li><a href="">Contact us</a></li>
							<li><a href="">Privacy Policy</a></li>
							<li><a href="">Shipping & Delivery</a></li>
							<li><a href="">Terms & Conditions</a></li>
							<li><a href="">Returns & Exchanges</a></li>
						</ul>
					</div>

					<div className="footer-middle-signup col-5">
						<h3 className="footer-tille">Newsletter Signup</h3>
						<p>
							Subscribe to our newsletter and get 10% off your first purchase
						</p>
						<form action="" className="email-submit">
							<input
								type="email"
								name="email"
								placeholder="Your email address"
							/>
							<button type="submit" className="btn-submit btn-primary">
								Subscribe
							</button>
						</form>
						<ul className="logo-list">
							<li>
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/amazon.svg"
									alt="logo"
								/>
							</li>
							<li>
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/american_express.svg"
									alt="logo"
								/>
							</li>
							<li>
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/apple_pay.svg"
									alt="logo"
								/>
							</li>
							<li>
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/bitcoin.svg"
									alt="logo"
								/>
							</li>
							<li>
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/paypal.svg"
									alt="logo"
								/>
							</li>
							<li>
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/f_pay.svg"
									alt="logo"
								/>
							</li>
							<li>
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/sofort.svg"
									alt="logo"
								/>
							</li>
							<li>
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/visa.svg"
									alt="logo"
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container wrap-content">
					<p>
						Copyright © 2021 <span>Kalles</span> all rights reserved. Powered by
						<a href="">The4</a>
					</p>
					<ul className="footer-menu wrap-content">
						<li><a href="">Shop</a></li>
						<li><a href="">About Us</a></li>
						<li><a href="">Contact US</a></li>
						<li><a href="">Blog</a></li>
					</ul>
					<div className="menu-mobile">
						<ul className="menu-mobile-list wrap-content">
							<li className="menu-mobile-item col-2-5">
								<a href="">
									<i className="fa-solid fa-house"></i>
									<p>Home</p>
								</a>
							</li>
							<li className="menu-mobile-item col-2-5">
								<a href="">
									<i className="fa-solid fa-heart"></i>
									<p>Wishlist</p>
								</a>
							</li>
							<li className="menu-mobile-item col-2-5">
								<a href="">
									<i className="fa-solid fa-cart-arrow-down"></i>
									<p>Cart</p>
								</a>
							</li>
							<li className="menu-mobile-item col-2-5">
								<a href="">
									<i className="fa-solid fa-user"></i>
									<p>Account</p>
								</a>
							</li>
							<li className="menu-mobile-item col-2-5">
								<a href="">
									<i className="fa-solid fa-magnifying-glass"></i>
									<p>Search</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default FooterComponent;
