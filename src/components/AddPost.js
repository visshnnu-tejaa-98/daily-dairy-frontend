import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BACKEND_ENDPOINT, FRONTEND_ENDPOINT } from './endpoint';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HtmlParser from 'react-html-parser';

const AddPost = () => {
	const [date, setDate] = useState(null);
	const [data, setData] = useState('');
	useEffect(() => {
		const getDate = () => {
			const currentDate = new Date().toString().split(' ');
			const array = [];

			for (let i = 0; i < currentDate.length; i++) {
				if (i === 1 || i === 2 || i === 3) {
					array.push(currentDate[i]);
				}
			}
			const date = array.join(' ');
			console.log(date);
			setDate(date);
		};
		getDate();
	}, []);
	const postData = async (e) => {
		if (!data) {
			alert('Input Should not be empty');
		} else {
			console.log(data);

			const obj = { date, data };
			console.log(obj);
			// console.log(localStorage.getItem('Daily Dairy'));
			const req = await fetch(`${BACKEND_ENDPOINT}/addPost`, {
				method: 'POST',
				headers: {
					authorization: localStorage.getItem('Daily Dairy'),
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(obj),
			});
			const res = await req.json();
			console.log(res);
			if (res.message === 'Submitted Successfully') {
				const M = window.M;
				// M.autoInit();
				M.toast({ html: res.message });
				window.location.href = `${FRONTEND_ENDPOINT}/home`;
			} else {
				const M = window.M;
				// M.autoInit();
				M.toast({ html: res.message });
			}
		}
	};
	return (
		<div className='addPost  container '>
			<div className='z-depth-1 fulldiv'>
				<div className='date margin-5 '>
					<p className='  center pink-text text-lighten-1'>{date}</p>
				</div>
				<div className='row'>
					<div className='col s10 l10 offset-l1 offset-s1'>
						<div class='editor margin-bottom-5'>
							<CKEditor
								editor={ClassicEditor}
								data={data}
								onChange={(event, editor) => {
									const data = editor.getData();
									console.log({ event, editor, data });
									setData(data);
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			{data && (
				<div className='fulldiv z-depth-1'>
					<div className='date margin-5 '>
						<p className='  center pink-text text-lighten-1'>Preview</p>
					</div>
					<div className='row '>
						<div className='col s10 l10 offset-l1 offset-s1'>
							<div class='editor margin-bottom-5 white padding-5-all'>
								<div>{HtmlParser(data)}</div>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className='center margin-bottom-5'>
				<Link
					className='waves-effect waves-light btn indigo'
					onClick={postData}
					onclick="M.toast({html: 'I am a toast'})"
				>
					<i className='material-icons right '>send</i>Submit
				</Link>
			</div>
		</div>
	);
};

export default AddPost;
