import writing from '../images/dairyWriting.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from './endpoint';
const Forgot = () => {
	const [email, setEmail] = useState('');

	const postData = async (e) => {
		if (!email) {
			e.preventDefault();
			alert('Input Field should not be Empty');
		} else {
			const data = { email };
			const req = await fetch(`${BACKEND_ENDPOINT}/forgot`, {
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
				When all is said and done, leading a good life is more important than keeping a good diary
			</h4>
			{/* <h5 className='center cursive indigo-text '>
				Login Here <i className='material-icons  '></i>
			</h5> */}
			<div className='row margin-5'>
				<div className='col s12 l6 center'>
					<img src={writing} alt='' className='imgsze' />
				</div>
				<div className='col s12 l6 center formSize'>
					<h5 className='center cursive indigo-text '>
						Enter Your Email <i className='material-icons  '></i>
					</h5>

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
					<p className='red-text'>*Please Check Your Email to reset Password</p>
					<Link
						to='#'
						className='waves-effect waves-light btn indigo'
						onClick={postData}
						onclick="M.toast({html: 'I am a toast'})"
					>
						Send Mail
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Forgot;
