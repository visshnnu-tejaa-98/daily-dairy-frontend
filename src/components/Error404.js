import error from '../images/error.png';
import { Link } from 'react-router-dom';
const Error404 = () => {
	return (
		<div className='error container '>
			<div className='center'>
				<img src={error} alt='' className='error-img' />
			</div>
			<div className='center'>
				<Link class='waves-effect waves-light btn indigo' to='/home'>
					<i class='material-icons left'>arrow_back</i>Back
				</Link>
			</div>
		</div>
	);
};

export default Error404;
