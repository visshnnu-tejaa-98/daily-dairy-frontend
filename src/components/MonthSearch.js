import React, { useEffect } from 'react';
const MonthSearch = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className='month-search container'>
			<h4 className='cursive center pink-text text-lighten-1 '>Search by Month and Year</h4>
			<div class='input-field col s12'>
				<select>
					<option value='' disabled selected>
						Choose your option
					</option>
					<option value='1'>Option 1</option>
					<option value='2'>Option 2</option>
					<option value='3'>Option 3</option>
				</select>
				<label>Materialize Select</label>
			</div>
		</div>
	);
};

export default MonthSearch;
