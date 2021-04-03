import writing from '../images/dairyWriting.svg';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FRONTEND_ENDPOINT, BACKEND_ENDPOINT } from './endpoint';
const Register = () => {
	const [fname, setFname] = useState('');
	const [lname, setLname] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [mobile, setMobile] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [blood, setBlood] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const M = window.M;
		M.AutoInit();
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.datepicker');
			var instances = M.Datepicker.init(elems, {});
		});
	}, []);

	const postData = async (e) => {
		if (
			!fname ||
			!lname ||
			!age ||
			!email ||
			!phone ||
			!mobile ||
			!height ||
			!weight ||
			!blood ||
			!address1 ||
			!state ||
			!country ||
			!password
		) {
			e.preventDefault();
			alert('Input Should not be empty');
		} else {
			setIsLoading(true);
			let data = {
				fname,
				lname,
				age,
				email,
				phone,
				mobile,
				height,
				weight,
				blood,
				address1,
				address2,
				state,
				country,
				password,
			};
			console.log(data);
			const req = await fetch(`${BACKEND_ENDPOINT}/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			if (res.message === 'User Created') {
				const M = window.M;
				M.toast({ html: res.message });
				window.location.href = `${FRONTEND_ENDPOINT}/login`;
				setIsLoading(false);
			} else {
				const M = window.M;
				M.toast({ html: res.message });
			}
		}
	};

	return (
		<div className='container'>
			<h4 className='cursive center pink-text text-lighten-1 '>
				Write a diary, imagining that you are trying to make an old person jealous
			</h4>
			<h5 className='center cursive indigo-text '>
				Register Here <i className='material-icons  '></i>
			</h5>
			<div className='row margin-5 '>
				<div className='col s12 l6 center'>
					<img src={writing} alt='' className='imgsze' />
				</div>
				<div className='col s12 l6 center formSize'>
					<div className='row'>
						<div className='col l6 s12'>
							<div className='input-field '>
								<i className='material-icons prefix '>account_circle</i>
								<input
									id='fname'
									type='text'
									className='validate '
									placeholder='First Name'
									value={fname}
									onChange={(e) => setFname(e.target.value)}
									required
								/>
							</div>
						</div>
						<div className='col l6 s12'>
							<div className='input-field '>
								<i className='material-icons prefix '>account_circle</i>
								<input
									id='lname'
									type='text'
									className='validate '
									placeholder='Last Name'
									value={lname}
									onChange={(e) => setLname(e.target.value)}
									required
								/>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col l6 s12'>
							<div className='input-field '>
								<i className='material-icons prefix '>query_builder</i>
								<input
									id='age'
									type='number'
									value={age}
									onChange={(e) => setAge(e.target.value)}
									className='validate '
									placeholder='Age'
									required
								/>
							</div>
						</div>
						<div className='col l6 s12'>
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
						</div>
					</div>
					<div className='row'>
						<div className='col l6 s12'>
							<div className='input-field '>
								<i className='material-icons prefix '>password</i>
								<input
									id='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									type='password'
									className='validate '
									placeholder='Password'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>phone</i>
						<input
							id='phone'
							type='text'
							className='validate '
							placeholder='Phone'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>phone</i>
						<input
							id='mobile'
							type='text'
							className='validate '
							placeholder='Mobile'
							value={mobile}
							onChange={(e) => setMobile(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>height</i>
						<input
							id='height'
							type='number'
							className='validate '
							placeholder='Height (cms)'
							value={height}
							onChange={(e) => setHeight(e.target.value)}
							required
						/>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>monitor_weight</i>
						<input
							id='weight'
							type='number'
							className='validate '
							placeholder='Weight (kgs)'
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>bloodtype</i>
						<input
							id='blood'
							type='text'
							className='validate '
							placeholder='Blood Group'
							value={blood}
							onChange={(e) => setBlood(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>home</i>
						<input
							id='address1'
							type='text'
							className='validate '
							placeholder='Address Lin1 1'
							value={address1}
							onChange={(e) => setAddress1(e.target.value)}
							required
						/>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>home</i>
						<input
							id='address2'
							type='text'
							className='validate '
							placeholder='Address Lin1 2'
							value={address2}
							onChange={(e) => setAddress2(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>business</i>
						<input
							id='state'
							type='text'
							className='validate '
							placeholder='State'
							value={state}
							onChange={(e) => setState(e.target.value)}
							required
						/>
					</div>
				</div>
				<div className='col l4 s12'>
					<div className='input-field '>
						<i className='material-icons prefix '>flag</i>
						<input
							id='country'
							type='text'
							className='validate '
							placeholder='Country'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
							required
						/>
					</div>
				</div>
			</div>

			<Link
				to='#'
				onclick="M.toast({html: 'I am a toast'})"
				className={
					isLoading
						? ' waves-effect waves-light btn indigo margin-bottom-5 disabled'
						: 'waves-effect waves-light btn indigo margin-bottom-5'
				}
				onClick={postData}
			>
				{isLoading ? 'Registering...' : 'Register'}
			</Link>
		</div>
	);
};

export default Register;
