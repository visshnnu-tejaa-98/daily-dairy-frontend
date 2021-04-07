import { FRONTEND_ENDPOINT, BACKEND_ENDPOINT } from './endpoint';
import HtmlParser from 'react-html-parser';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const MonthSearch = () => {
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState(null);
	// const [loader, setLoader] = useState(false);
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	const getData = async (e) => {
		if (!month || !year) {
			const M = window.M;
			M.toast({ html: 'Input field should not be empty' });
		} else {
			setIsLoading(true);
			let data = { month, year };
			console.log(data);
			const req = await fetch(`${BACKEND_ENDPOINT}/posts`, {
				headers: {
					'Content-Type': 'application/json',
					authorization: localStorage.getItem('Daily Dairy'),
				},
				method: 'POST',
				body: JSON.stringify(data),
			});
			const res = await req.json();
			console.log(res);
			setPosts(res.post);
			setIsLoading(false);
		}
	};
	return (
		<div className='month-search container'>
			<h4 className='cursive center pink-text text-lighten-1 '>Search by Month and Year</h4>
			<div className='row'>
				<div className='col s6 l4 offset-l2'>
					<div className='input-field'>
						<select value={month} onChange={(e) => setMonth(e.target.value)}>
							<option value='' disabled selected>
								Select Month
							</option>
							<option value='Jan'>Jan</option>
							<option value='Feb'>Feb</option>
							<option value='Mar'>Mar</option>
							<option value='Apr'>Apr</option>
							<option value='May'>May</option>
							<option value='Jun'>Jun</option>
							<option value='Jul'>Jul</option>
							<option value='Aug'>Aug</option>
							<option value='Sep'>Sep</option>
							<option value='Oct'>Oct</option>
							<option value='Nov'>Nov</option>
							<option value='Dec'>Dec</option>
						</select>
						<label>Select Date</label>
					</div>
				</div>
				<div className='col s6 l4'>
					<div className='input-field'>
						<select value={year} onChange={(e) => setYear(e.target.value)}>
							<option value='' disabled selected>
								Select Year
							</option>
							<option value='2021'> 2021</option>
							<option value='2022'> 2022</option>
							<option value='2023'> 2023</option>
							<option value='2024'> 2024</option>
							<option value='2025'> 2025</option>
							<option value='2026'> 2026</option>
							<option value='2027'> 2027</option>
							<option value='2028'> 2028</option>
							<option value='2029'> 2029</option>
							<option value='2030'> 2030</option>
						</select>
						<label>Select Year</label>
					</div>
				</div>
			</div>
			<div className='center'>
				<button
					className={
						isLoading
							? 'waves-effect waves-light btn indigo disabled'
							: 'waves-effect waves-light btn indigo'
					}
					onClick={getData}
				>
					<i className='material-icons left'>search</i>
					{isLoading ? 'Loading...' : 'search'}
				</button>
			</div>
			{isLoading && <div className='loader '>Loading...</div>}
			{posts && (
				<div className='row margin-5 '>
					<table className='col s10 offset-s1 l8 offset-l2 highlight centered'>
						<thead>
							<tr>
								<th>Date</th>
								<th>Button To Navigate</th>
							</tr>
						</thead>

						<tbody>
							{posts.map((post) => {
								return (
									<tr>
										<td>{post.date}</td>
										<td>
											<Link className='waves-effect waves-light btn' to={`/posts/${post.date}`}>
												<i className='material-icons right'>send</i>See
											</Link>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default MonthSearch;
