import Navbar from './Navbar.';
import React, { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		const M = window.M;
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.slider');
			var instances = M.Slider.init(elems, {});
		});
	}, []);
	return (
		<div className=''>
			{/* <div class='carousel carousel-slider'>
				<a class='carousel-item' href='#one!'>
					<img src='https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg' />
				</a>
			</div> */}
		</div>
	);
};

export default Home;
