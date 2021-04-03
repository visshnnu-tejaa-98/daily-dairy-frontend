import writing from '../images/dairyWriting.svg';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from './endpoint';
const Login = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const postData = async (e) => {
		if (!name || !email || !password) {
			e.preventDefault();
			alert('Input fields should not be empty');
		} else {
			setIsLoading(true);
			const data = { name, email, password };
			const req = await fetch(`${BACKEND_ENDPOINT}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			if (res.message === 'User Allowed') {
				localStorage.setItem('Daily Dairy', res.token);
				setIsLoading(false);
				const M = window.M;
				M.toast({ html: res.message });
				window.location.href = `${FRONTEND_ENDPOINT}/home`;
			} else {
				const M = window.M;
				M.toast({ html: res.message });
			}
		}
	};

	return (
		<div className='container'>
			<h4 className='cursive center pink-text text-lighten-1 '>
				Keep a diary, and someday it'll keep you
			</h4>
			<h5 className='center cursive indigo-text '>
				Login Here <i className='material-icons  '></i>
			</h5>
			<div className='row margin-5'>
				<div className='col s12 l6 center'>
					<img src={writing} alt='' className='imgsze' />
				</div>
				<div className='col s12 l6 center formSize'>
					<div className='input-field '>
						<i className='material-icons prefix '>account_circle</i>
						<input
							id='name'
							type='text'
							className='validate '
							placeholder='Full Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
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
					<p>
						not have an account? <Link to='/register'>register here</Link>
					</p>
					<p className=''>
						forgot passwrod? <Link to='/forgot'>reset here</Link>
					</p>
					<Link
						to='#'
						onclick="M.toast({html: 'I am a toast'})"
						className={
							isLoading
								? 'waves-effect waves-light btn indigo disabled'
								: 'waves-effect waves-light btn indigo'
						}
						onClick={postData}
					>
						{isLoading ? 'Loading...' : 'Login'}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
