import React, { useState, useEffect } from 'react';
import { BACKEND_ENDPOINT } from './endpoint';
import HtmlParser from 'react-html-parser';
const SinglePost = () => {
	const [post, setPost] = useState('');
	const [isLoading, seIsLoading] = useState('');
	useEffect(() => {
		const getData = async () => {
			let url = window.location.pathname.split('%20').join(' ');
			console.log(url);
			seIsLoading(true);
			const req = await fetch(`${BACKEND_ENDPOINT}${url}`, {
				headers: {
					authorization: localStorage.getItem('Daily Dairy'),
				},
			});
			const res = await req.json();
			setPost(res);
			seIsLoading(false);
		};
		getData();
	}, []);

	return (
		<div className='single-post container'>
			{isLoading && <div className='loader '>Loading...</div>}
			{post && (
				<div className='fulldiv z-depth-1'>
					<div className='date margin-5 '>
						<p className='  center pink-text text-lighten-1'>{post.post.date}</p>
					</div>
					<div className='row '>
						<div className='col s10 l10 offset-l1 offset-s1'>
							<div className='editor margin-bottom-5 white padding-5-all'>
								<div>{HtmlParser(post.post.post)}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SinglePost;
