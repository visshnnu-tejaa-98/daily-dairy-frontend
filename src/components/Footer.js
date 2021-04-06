import { Link } from 'react-router-dom';
const Footer = () => {
	const handleGithub = () => {
		window.location.href = 'https://github.com/visshnnu-tejaa-98/daily-dairy-frontend';
	};
	return (
		<div className='footer'>
			<footer className='page-footer blue-grey darken-3 '>
				<div className='container'>
					<div className='row'>
						<div className='col l6 s12'>
							<h5 className='white-text'>Daily Dairy</h5>
							<p className='grey-text text-lighten-4'>
								A Platform, Where You can store your memories
							</p>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure vero placeat enim
								repudiandae recusandae eius nisi doloremque est veritatis porro.
							</p>
						</div>
						<div className='col l4 offset-l2 s12'>
							<h5 className='white-text'>Navigation</h5>
							<ul>
								<li>
									<Link className='grey-text text-lighten-3' to='' onClick={handleGithub}>
										Github
									</Link>
								</li>
								<li>
									<Link className='grey-text text-lighten-3' to='/home'>
										Home
									</Link>
								</li>
								<li>
									<Link className='grey-text text-lighten-3' to='/about'>
										About
									</Link>
								</li>
								<li>
									<Link className='grey-text text-lighten-3' to='/contact'>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='footer-copyright blue-grey darken-4'>
					<div className='container'>
						© {new Date().getFullYear()} Copyright, All rights Reserved
						<Link className='grey-text text-lighten-4 right' to='' onClick={handleGithub}>
							<i class='fab fa-github'></i> Github
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
