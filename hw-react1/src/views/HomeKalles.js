import '../styles/HomeKalles.scss';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
function HomeKalles() {
	return (
		<>
	 	<HeaderComponent />

		<main className="page-main">
			<section className="section-slideshow">
				<ul className="slideshow-list">
					<li className="slideshow-item">
						<img
							src="https://themes.the4.co/kalles-html/assets/images/home-sport/slide-02.jpg"
							alt="slide-show-1"
						/>
					</li>
				</ul>
				<div className="container">
					<div className="tille-intro">
						<h5>Tranform your life today</h5>
						<h1>
							Lose fat,get fit <br />
							have fun!
						</h1>
						<a href="" className="btn btn-primary">Explore Now</a>
					</div>
					<ul className="paging">
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</section>

			<section className="section-intro">
				<div className="container">
					<ul className="intro-list wrap-content">
						<li className="intro-item col-4">
							<a href="" className="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-01.jpg"
									alt="img-intro"
								/>
							</a>
							<div className="item-text">
								<p>ACCESSORIES</p>
								<p>FOR MEN</p>
							</div>
						</li>
						<li className="intro-item col-4">
							<a href="" className="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-02.jpg"
									alt="img-intro"
								/>
							</a>
							<div className="item-text">
								<p>TRAINING CLOTHING</p>
								<p>FOR WOMEN</p>
							</div>
						</li>
						<li className="intro-item col-4">
							<a href="" className="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/banner-collection-03.jpg"
									alt="img-intro"
								/>
							</a>
							<div className="item-text">
								<p>SUMMER SALE</p>
								<p>-50% OFF</p>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className="section-products">
				<div className="container">
					<div className="types-products-menu">
						<ul className="type-product-list">
							<li className="type-product-item">Feature</li>
							<li className="type-product-item">New Arrival</li>
							<li className="type-product-item">On Sale</li>
						</ul>
					</div>
					<ul className="products-list wrap-content">
						<li className="product-item col-3">
							<div className="product-image">
								<a href="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-04.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Elip Power Max</h3>
								<span className="product-price">$35,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-08.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Nike As Dri-Fit Training</h3>
								<span className="product-price">$55,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-10.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">NIKE Trophy Training</h3>
								<span className="product-price">$65,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-07.jpg"
										alt="anh san pham"
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Calvin Klein Training</h3>
								<span className="product-price">$15,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
					</ul>
					<a href="" className="btn-prev btn-primary"><i className="fa-solid fa-angle-left"></i></a>
					<a href="" className="btn-next btn-primary"><i className="fa-solid fa-angle-right"></i></a>
				</div>
			</section>

			<section className="section-banner">
				<a href="" className="banner-imgage">
          <img
						src="https://themes.the4.co/kalles-html/assets/images/home-sport/full-width-banner-desktop.jpg"
						alt="banner-imgage"
				  />
        </a>
				<div className="container">
					<div className="tille-intro">
						<p>Black friday</p>
						<h2>
							Save 50% Off <br />
							<span>First Onille Purchase</span>
						</h2>
						<a href="" className="btn-banner">View promotion</a>
					</div>
				</div>
			</section>

			<section className="section-page-tille">
				<div className="container">
					<h2 className="page-tille">Top Selling</h2>
					<div className="tille-separation">
						<span>--</span>
						<i className="fa-solid fa-trophy"></i>
						<span>--</span>
					</div>
					<span className="tille-desciption">
						Whether your goals are to improve weight or body composition,
						increase strength and function, or improve overall
						<br />
						health, resistance training can help you get there.
					</span>
				</div>
			</section>

			<section className="section-products">
				<div className="container">
					<ul className="products-list wrap-content">
						<li className="product-item col-3">
							<div className="product-image">
								<a href="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-04.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Elip Power Max</h3>
								<span className="product-price">$35,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-08.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Nike As Dri-Fit Training</h3>
								<span className="product-price">$55,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-10.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">NIKE Trophy Training</h3>
								<span className="product-price">$65,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-07.jpg"
										alt="anh san pham"
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Calvin Klein Training</h3>
								<span className="product-price">$15,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<section className="section-products">
				<div className="container">
					<ul className="products-list wrap-content">
						<li className="product-item col-3">
							<div className="product-image">
								<a href="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-04.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Elip Power Max</h3>
								<span className="product-price">$35,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-08.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Nike As Dri-Fit Training</h3>
								<span className="product-price">$55,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-10.jpg"
										alt=""
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">NIKE Trophy Training</h3>
								<span className="product-price">$65,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
						<li className="product-item col-3">
							<div className="product-image">
								<a href="" className="">
									<img
										src="https://themes.the4.co/kalles-html/assets/images/home-sport/pr-07.jpg"
										alt="anh san pham"
										className="product-img"
									/>
								</a>
								<i className="fa-solid fa-heart"></i>
								<div className="item-btn">
									<a href="" className="btn-product btn-primary">Quick View</a>
									<a href="" className="btn-product btn-primary">Add Cart</a>
								</div>
							</div>
							<div className="product-info">
								<h3 className="product-tille">Calvin Klein Training</h3>
								<span className="product-price">$15,000</span>
								<ul className="product-color">
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</li>
					</ul>
					<hr className="separation" />
				</div>
			</section>

			<section className="section-page-tille">
				<div className="container">
					<h2 className="page-tille">Latest News</h2>
					<div className="tille-separation">
						<span>--</span>
						<i className="fa-solid fa-trophy"></i>
						<span>--</span>
					</div>
					<span className="tille-desciption">
						Increased caloric expenditure can result from resistance training
						both due to acute effects from training sessions
						<br />
						and long-term effects from increased muscle mass.
					</span>
				</div>
			</section>

			<section className="section-posts">
				<div className="container">
					<ul className="post-list wrap-content">
						<li className="post-item col-4">
							<a href="" className="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/blog-01.jpg"
									alt=""
								/>
							</a>
							<a href="" className="post-tille">Tips At-home Cardio Workouts</a>
							<span className="post-time">
								On
								<time dateTime="2020-09-01">September 1, 2020</time></span>
							<p className="post-content">
								Time to get your sweat on with this workout for a flat stomach!
								These are the 10 best moves to tighten up that core...
							</p>
						</li>
						<li className="post-item col-4">
							<a href="" className="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/blog-02.jpg"
									alt=""
								/>
							</a>
							<a href="" className="post-tille">5 Tips To Stay Healthy At Home</a>
							<span className="post-time">
								On
								<time dateTime="2020-09-01">September 1, 2020</time></span>
							<p className="post-content">
								And now more than ever its so important to continue to take care
								of ourselves and make sure were putting extra ca...
							</p>
						</li>
						<li className="post-item col-4">
							<a href="" className="item-img">
								<img
									src="https://themes.the4.co/kalles-html/assets/images/home-sport/blog-03.jpg"
									alt=""
								/>
							</a>
							<a href="" className="post-tille">10 Minute Fat Burning Workout</a>
							<span className="post-time">
								On
								<time dateTime="2020-09-01">September 1, 2020</time></span>
							<p className="post-content">
								I know sometimes it can be difficult to keep your healthy
								nutrition on track, so thats why I created the Hot Body ...
							</p>
						</li>
					</ul>
					<hr className="separation" />
				</div>
			</section>

			<section className="section-services">
				<div className="container">
					<ul className="service-list wrap-content">
						<li className="service-item col-4">
							<i className="fa-solid fa-truck-fast"></i>
							<div className="service-content">
								<h3>FREE SHIPPING UK&UK</h3>
								<p>Free shipping on all orders abov $100</p>
							</div>
						</li>
						<li className="service-item col-4">
							<i className="fa-solid fa-headphones-simple"></i>
							<div className="service-content">
								<h3>FSUPPORT 24/7</h3>
								<p>Contact us 24 hours a day, 7 days a week</p>
							</div>
						</li>
						<li className="service-item col-4">
							<i className="fa-solid fa-coins"></i>
							<div className="service-content">
								<h3>30 DAYS MONEY BACK</h3>
								<p>Simply return it within 30 days for an exchange.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>
		
		<FooterComponent />
	</>
	);
}
export default HomeKalles;
