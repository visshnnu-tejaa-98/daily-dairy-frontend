import React, { useState } from 'react';
import { FRONTEND_ENDPOINT, BACKEND_ENDPOINT } from './endpoint';
import HtmlParser from 'react-html-parser';
const SearchPost = () => {
	const [date, setDate] = useState(null);
	const [onePost, setPost] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const [inputDate, setInputDate] = useState('');

	const getDate = async (e) => {
		let months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		if (date === null) {
			e.preventDefault();
			const M = window.M;
			M.toast({ html: 'Input field should not be empty' });
			window.location.href = `${FRONTEND_ENDPOINT}/searchPost`;
		}
		if (
			Number(date.split('-')[1].split('')[1]) > new Date().getMonth() &&
			date.split('-')[2] > new Date().getDate()
		) {
			const M = window.M;
			M.toast({ html: "Input date should not be greater than today's date" });
		} else {
			setLoading(true);
			const month = months[Number(date.split('-')[1].split('')[1]) - 1];
			const searchDate = date.split('-')[2];
			const year = date.split('-')[0];
			const fullDate = `${month} ${searchDate} ${year}`;
			// console.log(fullDate);
			const data = { fullDate };
			setInputDate(fullDate);
			console.log(data);

			const req = await fetch(`${BACKEND_ENDPOINT}/posts/${fullDate}`, {
				method: 'GET',
				headers: {
					authorization: localStorage.getItem('Daily Dairy'),
				},
			});
			const res = await req.json();
			console.log(res);
			if (res.message) {
				const M = window.M;
				M.toast({ html: res.message });
				window.location.href = `${FRONTEND_ENDPOINT}/searchPost`;
			} else {
				setPost(res);
				setLoading(false);
			}
		}
	};
	return (
		<div className='search-post container '>
			<h4 className='cursive center pink-text text-lighten-1 '>Search by Full Date</h4>
			<div className='row'>
				<div className='input-date col s10 l4 offset-s1 offset-l4'>
					<input type='date' value={date} onChange={(e) => setDate(e.target.value)} required />
				</div>
			</div>
			<div className='center'>
				<button className={isLoading ? 'btn indigo disabled' : 'btn indigo '} onClick={getDate}>
					Get
				</button>
			</div>
			{onePost && (
				<div className='fulldiv z-depth-1 margin-bottom-5'>
					<div className='date margin-5  '>
						<p className='  center pink-text text-lighten-1'>{inputDate}</p>
					</div>
					<div className='row '>
						<div className='col s10 l10 offset-l1 offset-s1'>
							<div className='editor margin-bottom-5 white padding-5-all'>
								<div>{HtmlParser(onePost.post.post)}</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{isLoading && <div className='loader '>Loading...</div>}
		</div>
	);
};

export default SearchPost;
