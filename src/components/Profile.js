import avatar from '../images/avatar.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_ENDPOINT } from './endpoint';
const Profile = () => {
	const [profile, setProfile] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const getData = async () => {
			// setIsLoading(true);
			const req = await fetch(`${BACKEND_ENDPOINT}/profile`, {
				headers: {
					authorization: localStorage.getItem('Daily Dairy'),
				},
			});
			const res = await req.json();
			setProfile(res);
			setIsLoading(false);
		};
		getData();
	}, []);

	return (
		<div className='profile container'>
			<h4 className='cursive center pink-text text-lighten-1 '>Your Profile</h4>
			{isLoading && <div className='loader '>Loading...</div>}
			{profile && (
				<div className='row'>
					<div className='col l5 offset-l1 s12 center'>
						<img src={avatar} alt='' className='avatar' />
					</div>
					<div className='col l5 s12 offset-l1'>
						<p className='profile-details'>
							First Name: <span className='profile-ans'> {profile.fname}</span>
						</p>
						<p className='profile-details'>
							Last Name: <span className='profile-ans'> {profile.lname}</span>
						</p>
						<p className='profile-details'>
							age: <span className='profile-ans'> {profile.age}</span>
						</p>
						<p className='profile-details'>
							email: <span className='profile-ans'>{profile.email}</span>
						</p>
						<p className='profile-details'>
							phone:<span className='profile-ans'>{profile.phone}</span>
						</p>
						<p className='profile-details'>
							mobile: <span className='profile-ans'>{profile.mobile}</span>
						</p>
						<p className='profile-details'>
							height: <span className='profile-ans'>{profile.height} cms</span>
						</p>
						<p className='profile-details'>
							weight: <span className='profile-ans'>{profile.weight} kgs</span>
						</p>
						<p className='profile-details'>
							blood: <span className='profile-ans'>{profile.blood}</span>
						</p>
						<p className='profile-details'>
							address line 1 : <span className='profile-ans'>{profile.address1}</span>
						</p>
						<p className='profile-details'>
							address line 2 : <span className='profile-ans'> {profile.address2}</span>
						</p>
						<p className='profile-details'>
							state : <span className='profile-ans'>{profile.state}</span>
						</p>
						<p className='profile-details'>
							Country : <span className='profile-ans'> {profile.country}</span>
						</p>
						<Link class='waves-effect waves-light btn indigo' to='/editProfile'>
							<i class='material-icons right'>edit</i>Edit Profile
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
