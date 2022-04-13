import '../styles/App.scss';

function App() {
  return (
   <>
	 <header class="page-header">
			<div class="container-fluid">
				<nav class="header-nav wrap-content">
					<i class="fa-solid fa-bars"></i>
					<a href="" class="logo">
						<img
							src="https://themes.the4.co/kalles-html/assets/images/svg/kalles.svg"
							alt="logo"
						/>
					</a>
					<ul class="header-menu wrap-content">
						<li><a href="">DEMO</a></li>
						<li><a href="">SHOP</a></li>
						<li><a href="">PRODUCT</a></li>
						<li><a href="">SALE</a></li>
						<li><a href="">PORTFOLIO</a></li>
						<li><a href="">LOOKBOOK</a></li>
						<li><a href="">BLOG</a></li>
					</ul>
					<ul class="header-actions wrap-content">
						<li>
							<a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
						</li>
						<li>
							<a href=""><i class="fa-solid fa-user"></i></a>
						</li>
						<li>
							<a href=""><i class="fa-solid fa-heart"></i></a>
						</li>
						<li>
							<a href=""><i class="fa-solid fa-cart-arrow-down"></i></a>
						</li>
					</ul>
				</nav>
			</div>
		</header>

		<main class="page-main">
			<section class="section-slideshow">
				<ul class="slideshow-list">
					<li class="slideshow-item">
						<img
							src="https://themes.the4.co/kalles-html/assets/images/home-sport/slide-02.jpg"
							alt="slide-show-1"
						/>
					</li>
				</ul>
				<div class="container">
					<div class="tille-intro">
						<h5>Tranform your life today</h5>
						<h1>
							Lose fat,get fit <br />
							have fun!
						</h1>
						<a href="" class="btn btn-primary">Explore Now</a>
					</div>
					<ul class="paging">
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</section>

			<section class="section-intro">
				<div class="container">
					<ul class="intro-list wrap-content">
						<li class="intro-item col-4">
							<a href="" class="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-01.jpg"
									alt="img-intro"
								/>
							</a>
							<div class="item-text">
								<p>ACCESSORIES</p>
								<p>FOR MEN</p>
							</div>
						</li>
						<li class="intro-item col-4">
							<a href="" class="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-02.jpg"
									alt="img-intro"
								/>
							</a>
							<div class="item-text">
								<p>TRAINING CLOTHING</p>
								<p>FOR WOMEN</p>
							</div>
						</li>
						<li class="intro-item col-4">
							<a href="" class="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-03.jpg"
									alt="img-intro"
								/>
							</a>
							<div class="item-text">
								<p>SUMMER SALE</p>
								<p>-50% OFF</p>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section class="section-products">
				<div class="container">
					<div class="types-products-menu">
						<ul class="type-product-list">
							<li class="type-product-item">Feature</li>
							<li class="type-product-item">New Arrival</li>
							<li class="type-product-item">On Sale</li>
						</ul>
					</div>
					<ul class="products-list wrap-content">
						<li class="product-item col-3">
							<div class="product-image">
								<a href="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-04.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Elip Power Max</h3>
								<span class="product-price">$35,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-08.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Nike As Dri-Fit Training</h3>
								<span class="product-price">$55,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-10.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">NIKE Trophy Training</h3>
								<span class="product-price">$65,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-07.jpg"
										alt="anh san pham"
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Calvin Klein Training</h3>
								<span class="product-price">$15,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
					</ul>
					<a href="" class="btn-prev btn-primary"><i class="fa-solid fa-angle-left"></i></a>
					<a href="" class="btn-next btn-primary"><i class="fa-solid fa-angle-right"></i></a>
				</div>
			</section>

			<section class="section-banner">
				<a href="" class="banner-imgage">
          <img
						src="https://themes.the4.co/kalles-html/assets/images/home-sport/full-width-banner-desktop.jpg"
						alt="banner-imgage"
				  />
        </a>
				<div class="container">
					<div class="tille-intro">
						<p>Black friday</p>
						<h2>
							Save 50% Off <br />
							<span>First Onille Purchase</span>
						</h2>
						<a href="" class="btn-banner">View promotion</a>
					</div>
				</div>
			</section>

			<section class="section-page-tille">
				<div class="container">
					<h2 class="page-tille">Top Selling</h2>
					<div class="tille-separation">
						<span>--</span>
						<i class="fa-solid fa-trophy"></i>
						<span>--</span>
					</div>
					<span class="tille-desciption">
						Whether your goals are to improve weight or body composition,
						increase strength and function, or improve overall
						<br />
						health, resistance training can help you get there.
					</span>
				</div>
			</section>

			<section class="section-products">
				<div class="container">
					<ul class="products-list wrap-content">
						<li class="product-item col-3">
							<div class="product-image">
								<a href="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-04.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Elip Power Max</h3>
								<span class="product-price">$35,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-08.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Nike As Dri-Fit Training</h3>
								<span class="product-price">$55,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-10.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">NIKE Trophy Training</h3>
								<span class="product-price">$65,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-07.jpg"
										alt="anh san pham"
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Calvin Klein Training</h3>
								<span class="product-price">$15,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section class="section-products">
				<div class="container">
					<ul class="products-list wrap-content">
						<li class="product-item col-3">
							<div class="product-image">
								<a href="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-04.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Elip Power Max</h3>
								<span class="product-price">$35,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-08.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Nike As Dri-Fit Training</h3>
								<span class="product-price">$55,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-10.jpg"
										alt=""
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">NIKE Trophy Training</h3>
								<span class="product-price">$65,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li class="product-item col-3">
							<div class="product-image">
								<a href="" class="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-07.jpg"
										alt="anh san pham"
										class="product-img"
									/>
								</a>
								<i class="fa-solid fa-heart"></i>
								<div class="item-btn">
									<a href="" class="btn-product btn-primary">Quick View</a>
									<a href="" class="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div class="product-info">
								<h3 class="product-tille">Calvin Klein Training</h3>
								<span class="product-price">$15,000</span>
								<ul class="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
					</ul>
					<hr class="separation" />
				</div>
			</section>

			<section class="section-page-tille">
				<div class="container">
					<h2 class="page-tille">Latest News</h2>
					<div class="tille-separation">
						<span>--</span>
						<i class="fa-solid fa-trophy"></i>
						<span>--</span>
					</div>
					<span class="tille-desciption">
						Increased caloric expenditure can result from resistance training
						both due to acute effects from training sessions
						<br />
						and long-term effects from increased muscle mass.
					</span>
				</div>
			</section>

			<section class="section-posts">
				<div class="container">
					<ul class="post-list wrap-content">
						<li class="post-item col-4">
							<a href="" class="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/blog-01.jpg"
									alt=""
								/>
							</a>
							<a href="" class="post-tille">Tips At-home Cardio Workouts</a>
							<span class="post-time">
								On
								<time datetime="2020-09-01">September 1, 2020</time></span>
							<p class="post-content">
								Time to get your sweat on with this workout for a flat stomach!
								These are the 10 best moves to tighten up that core...
							</p>
						</li>
						<li class="post-item col-4">
							<a href="" class="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/blog-02.jpg"
									alt=""
								/>
							</a>
							<a href="" class="post-tille">5 Tips To Stay Healthy At Home</a>
							<span class="post-time">
								On
								<time datetime="2020-09-01">September 1, 2020</time></span>
							<p class="post-content">
								And now more than ever its so important to continue to take care
								of ourselves and make sure were putting extra ca...
							</p>
						</li>
						<li class="post-item col-4">
							<a href="" class="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/blog-03.jpg"
									alt=""
								/>
							</a>
							<a href="" class="post-tille">10 Minute Fat Burning Workout</a>
							<span class="post-time">
								On
								<time datetime="2020-09-01">September 1, 2020</time></span>
							<p class="post-content">
								I know sometimes it can be difficult to keep your healthy
								nutrition on track, so thats why I created the Hot Body ...
							</p>
						</li>
					</ul>
					<hr class="separation" />
				</div>
			</section>

			<section class="section-services">
				<div class="container">
					<ul class="service-list wrap-content">
						<li class="service-item col-4">
							<i class="fa-solid fa-truck-fast"></i>
							<div class="service-content">
								<h3>FREE SHIPPING UK&UK</h3>
								<p>Free shipping on all orders abov $100</p>
							</div>
						</li>
						<li class="service-item col-4">
							<i class="fa-solid fa-headphones-simple"></i>
							<div class="service-content">
								<h3>FSUPPORT 24/7</h3>
								<p>Contact us 24 hours a day, 7 days a week</p>
							</div>
						</li>
						<li class="service-item col-4">
							<i class="fa-solid fa-coins"></i>
							<div class="service-content">
								<h3>30 DAYS MONEY BACK</h3>
								<p>Simply return it within 30 days for an exchange.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>

		<footer class="page-footer">
			<div class="container">
				<div class="footer-middle wrap-content">
					<div class="footer-middle-contact col-3">
						<div class="middle-contact-mobile">
							<h3>Contact</h3>
							<i class="fa-solid fa-caret-down"></i>
						</div>
						<ul class="contact-list">
							<li class="contact-item">
								<a href="" class="logo">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/footer-logo.png"
										alt="logo"
									/>
								</a>
							</li>
							<li class="contact-item">
								<i class="fa-solid fa-location-dot"></i>
								<span>184 Main Rd E, St Albans <br />
                  VIC 3021, Australia
                </span>
							</li>
							<li class="contact-item">
								<i class="fa-solid fa-envelope"></i>
								<a href="mailto:contact@company.com"> contact@company.com</a>
							</li>
							<li class="contact-item">
								<i class="fa-solid fa-phone"></i>
								<span>+001 2233 456</span>
							</li>
							<li class="contact-item">
								<ul class="contact-list-icon">
									<li class="contact-icon">
										<a href=""><i class="fa-brands fa-facebook-f"></i></a>
									</li>
									<li class="contact-icon">
										<a href=""><i class="fa-brands fa-twitter"></i></a>
									</li>
									<li class="contact-icon">
										<a href=""><i class="fa-brands fa-instagram"></i></a>
									</li>
									<li class="contact-icon">
										<a href=""><i class="fa-brands fa-invision"></i></a>
									</li>
									<li class="contact-icon">
										<a href=""><i class="fa-solid fa-paragraph"></i></a>
									</li>
								</ul>
							</li>
						</ul>
					</div>

					<div class="footer-middle-col col-2">
						<h3 class="footer-tille">Categories</h3>
						<i class="fa-solid fa-caret-down"></i>
						<ul>
							<li><a href="">Celebrations</a></li>
							<li><a href="">Events</a></li>
							<li><a href="">Home Decor</a></li>
							<li><a href="">Seasonal Bouquet</a></li>
							<li><a href="">Wedding Decor</a></li>
						</ul>
					</div>

					<div class="footer-middle-col col-2">
						<h3 class="footer-tille">Useful links</h3>
						<i class="fa-solid fa-caret-down"></i>
						<ul>
							<li><a href="">Contact us</a></li>
							<li><a href="">Privacy Policy</a></li>
							<li><a href="">Shipping & Delivery</a></li>
							<li><a href="">Terms & Conditions</a></li>
							<li><a href="">Returns & Exchanges</a></li>
						</ul>
					</div>

					<div class="footer-middle-signup col-5">
						<h3 class="footer-tille">Newsletter Signup</h3>
						<p>
							Subscribe to our newsletter and get 10% off your first purchase
						</p>
						<form action="" class="email-submit">
							<input
								type="email"
								name="email"
								placeholder="Your email address"
							/>
							<button type="submit" class="btn-submit btn-primary">
								Subscribe
							</button>
						</form>
						<ul class="logo-list">
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
			<div class="footer-bottom">
				<div class="container wrap-content">
					<p>
						Copyright © 2021 <span>Kalles</span> all rights reserved. Powered by
						<a href="">The4</a>
					</p>
					<ul class="footer-menu wrap-content">
						<li><a href="">Shop</a></li>
						<li><a href="">About Us</a></li>
						<li><a href="">Contact US</a></li>
						<li><a href="">Blog</a></li>
					</ul>
					<div class="menu-mobile">
						<ul class="menu-mobile-list wrap-content">
							<li class="menu-mobile-item col-2-5">
								<a href="">
									<i class="fa-solid fa-house"></i>
									<p>Home</p>
								</a>
							</li>
							<li class="menu-mobile-item col-2-5">
								<a href="">
									<i class="fa-solid fa-heart"></i>
									<p>Wishlist</p>
								</a>
							</li>
							<li class="menu-mobile-item col-2-5">
								<a href="">
									<i class="fa-solid fa-cart-arrow-down"></i>
									<p>Cart</p>
								</a>
							</li>
							<li class="menu-mobile-item col-2-5">
								<a href="">
									<i class="fa-solid fa-user"></i>
									<p>Account</p>
								</a>
							</li>
							<li class="menu-mobile-item col-2-5">
								<a href="">
									<i class="fa-solid fa-magnifying-glass"></i>
									<p>Search</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	</>
  );
}

export default App;
