import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Login from './Login';
import Footer from './Footer';
import StartHere from './StartHere';
import Search from './Search';

const Home = () => {
	const [isToken, setIsToken] = useState(false);
	const [login, setLogin] = useState(false);
	useEffect(() => {
		// const M = window.M;
		M.AutoInit();
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.slider');
			var instances = M.Slider.init(elems, {});
			var elems1 = document.querySelectorAll('.carousel');
			var instances1 = M.Carousel.init(elems1, {});
		});
		const tokenHandler = () => {
			const token = localStorage.getItem('Daily Dairy');
			if (token) {
				setIsToken(true);
			} else {
				setIsToken(false);
			}
		};
		tokenHandler();

		if (isToken) {
			setLogin(true);
		} else {
			setLogin(false);
		}
	}, [isToken, login]);
	return (
		<div>
			<div className=''>
				<section className='bannarOverlay '>
					<div className='bannar'></div>
					<div className='bannar-overlay valign-wrapper box'>
						<div className='container '>
							<h3 className='cursive white-text '>Thinking to store your memories digitally... </h3>
							<h5 className='cursive white-text '>You're are right place!!</h5>
						</div>
					</div>
				</section>
			</div>
			{!isToken ? (
				<section className=' login-section margin-5'>
					<Login />
				</section>
			) : (
				<section className=' login-section margin-5'>
					<StartHere />
					<Search />
				</section>
			)}
			<section className='testimonials margin-bottom-5 margin-5 '>
				<div class='carousel'>
					<h4 className='cursive center pink-text text-lighten-1 '>Reviews from our clients</h4>
					<article class='carousel-item' href='#one!'>
						<div class='card'>
							<div class='card-image'>
								<img
									className='image-width'
									alt=''
									src='https://image.slidesharecdn.com/random-people-preview-160918064958/95/random-people-6-638.jpg?cb=1474788136'
								/>
							</div>
							<div class='card-content'>
								<h6 class='card-title'>Andrew</h6>
								<p>I love to store memories in Daily Dairy</p>
							</div>
						</div>
					</article>
					<article class='carousel-item' href='#one!'>
						<div class='card'>
							<div class='card-image'>
								<img
									className='image-width'
									alt=''
									src='https://i.pinimg.com/originals/32/38/6c/32386c72c7f2a8b5c1a10fc51c149cb1.jpg'
								/>
							</div>
							<div class='card-content'>
								<h6 class='card-title'>Ashley</h6>
								<p>Felt happy about Daily Dairy</p>
							</div>
						</div>
					</article>
					<article class='carousel-item' href='#one!'>
						<div class='card'>
							<div class='card-image'>
								<img
									className='image-width'
									alt=''
									src='https://image.slidesharecdn.com/random-people-preview-160918064958/95/random-people-6-638.jpg?cb=1474788136'
								/>
							</div>
							<div class='card-content'>
								<h6 class='card-title'>John</h6>
								<p>storing memories digitally is amazing with Daily Dairy</p>
							</div>
						</div>
					</article>
					<article class='carousel-item' href='#one!'>
						<div class='card'>
							<div class='card-image'>
								<img
									className='image-width'
									alt=''
									src='https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg'
								/>
							</div>
							<div class='card-content'>
								<h6 class='card-title'>Andrew</h6>
								<p>I never used like this ever, It's just amazing</p>
							</div>
						</div>
					</article>
					<article class='carousel-item' href='#one!'>
						<div class='card'>
							<div class='card-image'>
								<img
									className='image-width'
									alt=''
									src='https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg'
								/>
							</div>
							<div class='card-content'>
								<h6 class='card-title'>Evie</h6>
								<p>I love to store memories in Daily Dairy</p>
							</div>
						</div>
					</article>
				</div>
			</section>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
