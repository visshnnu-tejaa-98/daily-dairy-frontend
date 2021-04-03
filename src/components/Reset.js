import writing from '../images/dairyWriting.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from './endpoint';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const postData = async (e) => {
		if (!email || !password) {
			e.preventDefault();
			alert('Input fields should not be empty');
		} else {
			setIsLoading(true);
			const data = { email, password };
			const req = await fetch(`${BACKEND_ENDPOINT}/reset`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			if (res.message === 'Password reseted successfully') {
				localStorage.setItem('Daily Dairy', res.token);
				setIsLoading(false);
				window.location.href = `${FRONTEND_ENDPOINT}/home`;
			} else {
				window.location.href = `${FRONTEND_ENDPOINT}/login`;
				alert(res.message, +'Refresh the page to try again');
			}
		}
	};

	return (
		<div className='container'>
			<h4 className='cursive center pink-text text-lighten-1 '>
				To write a diary every day is like returning to one's own vomit
			</h4>
			<h5 className='center cursive indigo-text '>
				Reset Password Here <i className='material-icons  '></i>
			</h5>
			<div className='row margin-5'>
				<div className='col s12 l6 center'>
					<img src={writing} alt='' className='imgsze' />
				</div>
				<div className='col s12 l6 center formSize'>
					<div className='input-field '>
						<i className='material-icons prefix '>email</i>
						<input
							id='email'
							type='text'
							className='validate '
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='input-field '>
						<i className='material-icons prefix '>password</i>
						<input
							id='password'
							type='password'
							className='validate '
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<Link
						to='#'
						className={
							isLoading
								? 'waves-effect waves-light btn indigo disabled'
								: 'waves-effect waves-light btn indigo'
						}
						onClick={postData}
					>
						{isLoading ? 'Loading...' : 'Reset'}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
