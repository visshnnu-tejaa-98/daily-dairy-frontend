import avatar from '../images/avatar.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FRONTEND_ENDPOINT, BACKEND_ENDPOINT } from './endpoint';
const EditProfile = () => {
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
	const [profile, setProfile] = useState(avatar);
	const [isLoading, setIsLoading] = useState(false);
	// const [editUser, etEditUser] = useState(null);
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
		document.addEventListener('DOMContentLoaded', function () {
			var elems = document.querySelectorAll('.datepicker');
			var instances = M.Datepicker.init(elems, {});
		});
		const getData = async () => {
			const req = await fetch(`${BACKEND_ENDPOINT}/profile`, {
				headers: {
					authorization: localStorage.getItem('Daily Dairy'),
				},
			});
			const res = await req.json();

			setFname(res.fname);
			setLname(res.lname);
			setAge(res.age);
			setEmail(res.email);
			setPhone(res.phone);
			setMobile(res.mobile);
			setHeight(res.height);
			setWeight(res.weight);
			setBlood(res.blood);
			setAddress1(res.address1);
			setAddress2(res.address2);
			setState(res.state);
			setCountry(res.country);
		};
		getData();
	}, []);
	const editData = async (e) => {
		if (
			!fname ||
			!lname ||
			!age ||
			!phone ||
			!mobile ||
			!height ||
			!weight ||
			!blood ||
			!address1 ||
			!state ||
			!country
		) {
			e.preventDefault();
			alert('Input Should not be empty');
		} else {
			setIsLoading(true);
			let data = {
				fname,
				lname,
				age,
				phone,
				mobile,
				height,
				weight,
				blood,
				address1,
				address2,
				state,
				country,
			};
			console.log(data);
			const req = await fetch(`${BACKEND_ENDPOINT}/profile`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					authorization: localStorage.getItem('Daily Dairy'),
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			if (res.message === 'Profile Updated') {
				const M = window.M;
				M.toast({ html: res.message });
				window.location.href = `${FRONTEND_ENDPOINT}/profile`;
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
				Edit Profile <i className='material-icons  '></i>
			</h5>
			<div className='row margin-5 '>
				<div className='col s12 l6 center'>
					<img src={profile} alt='' className='imgsze' />
				</div>
				<div className='col s12 l6 center formSize'>
					<div className='row'>
						<div className='col l12 s12'>
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
						<div className='col l12 s12'>
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
						<div className='col l12 s12'>
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
				onClick={editData}
			>
				{isLoading ? 'Loading...' : 'Edit '}
			</Link>
		</div>
	);
};

export default EditProfile;
