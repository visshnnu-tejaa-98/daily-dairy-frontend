import './styles/contact.css';
import React, { useEffect, useState } from 'react';
import { BACKEND_ENDPOINT } from './endpoint';
import { Link } from 'react-router-dom';
const Contact = () => {
	const [isSending, setIsSending] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	const postData = async (e) => {
		if (!name || !email || !message) {
			e.preventDefault();
			const M = window.M;
			M.toast({ html: 'Input Should not be empty!!' });
		} else {
			setIsSending(true);
			const data = { name, email, message };
			console.log(data);
			const req = await fetch(`${BACKEND_ENDPOINT}/contact`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			setIsSending(false);
		}
	};

	return (
		<div className='container '>
			<h4 className='cursive center pink-text text-lighten-1 margin-5 '>Contact Us</h4>
			<div className='divider-contact'></div>

			<div className='row center '>
				<div className='col s12 l6 center'>
					<div class='mapouter'>
						<div class='gmap_canvas'>
							<iframe
								title='map'
								class='gmap_iframe'
								frameborder='0'
								scrolling='no'
								marginheight='0'
								marginwidth='0'
								src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=banglore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
							></iframe>
						</div>
					</div>
				</div>
				<div className='col s12 l6 '>
					<input
						placeholder='Name'
						id='name'
						type='text'
						class='validate'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						placeholder='Email'
						id='email'
						type='email'
						class='validate'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<br />
					<br />
					<textarea
						id='textarea1'
						class='materialize-textarea'
						placeholder='Your Message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
					<Link
						className={
							isSending
								? 'waves-effect waves-light btn indigo disabled'
								: 'waves-effect waves-light btn indigo'
						}
						onClick={postData}
					>
						{isSending ? 'Sending' : 'Send'}
					</Link>
				</div>
			</div>

			<div className='divider-contact'></div>
		</div>
	);
};

export default Contact;
