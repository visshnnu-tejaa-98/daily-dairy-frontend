import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FRONTEND_ENDPOINT } from './endpoint';
const Navbar = () => {
	const [home, setHome] = useState(false);
	const [github, setGithub] = useState(false);
	const [about, setAbout] = useState(false);
	const [contact, setContact] = useState(false);
	const [login, setLogin] = useState(false);
	const [isToken, setIsToken] = useState(false);

	useEffect(() => {
		let M = window.M;
		M.AutoInit();
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, {});
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
			console.log(isToken);
		} else {
			setLogin(false);
		}
	}, [isToken, login]);
	const handleHome = () => {
		setHome(true);
		setAbout(false);
		setContact(false);
		setLogin(false);
	};
	const handleAbout = () => {
		setHome(false);
		setAbout(true);
		setContact(false);
		setLogin(false);
	};
	const handleContact = () => {
		setHome(false);
		setAbout(false);
		setContact(true);
		setLogin(false);
	};
	const handleLogin = () => {
		setHome(false);
		setAbout(false);
		setContact(false);
		setLogin(true);
	};
	const handleLogout = () => {
		localStorage.removeItem('Daily Dairy');
		setLogin(false);
		window.location.href = `${FRONTEND_ENDPOINT}/home`;
	};
	const handleGithub = () => {
		window.location.href = 'https://github.com/visshnnu-tejaa-98/daily-dairy-frontend';
	};
	return (
		<div>
			<nav className='indigo'>
				<div className='nav-wrapper container '>
					<Link to='#' className='brand-logo cursive'>
						Daily Dairy
					</Link>
					<Link to='#' data-target='mobile-demo' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</Link>
					<ul className='right hide-on-med-and-down'>
						<li>
							<Link to='/home' className={home ? 'bold' : ''} onClick={handleHome}>
								Home
							</Link>
						</li>
						<li>
							<Link to='/home' className={github ? 'bold' : ''} onClick={handleGithub}>
								Github
							</Link>
						</li>
						{/* <li>
							<Link to='/about' className={about ? 'bold' : ''} onClick={handleAbout}>
								About
							</Link>
						</li>
						<li>
							<Link to='/contact' className={contact ? 'bold' : ''} onClick={handleContact}>
								Contact
							</Link>
						</li> */}
						<li>
							<Link
								to='/login'
								className={login ? 'hide' : 'waves-effect waves-light btn pink lighten-1'}
								onClick={handleLogin}
							>
								<i className='material-icons right'>login</i>Login
							</Link>
						</li>
						<li>
							<Link
								to='/login'
								className={!isToken ? 'hide' : 'waves-effect waves-light btn pink lighten-1'}
								onClick={handleLogout}
							>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='' onClick={handleGithub}>
						Github
					</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
