import writing from '../images/dairyWriting.svg';
import Laptop from '../images/laptop.svg';
import RArrow from '../images/right_arrow.PNG';
import { Link } from 'react-router-dom';
const StartHere = () => {
	return (
		<div className='container center'>
			<h4 className='cursive center pink-text text-lighten-1 '>
				Convert Book, Pen to Digital Dairy writing
			</h4>
			{/* <h5 className='center cursive indigo-text '>
				Login Here <i className='material-icons  '></i>
			</h5> */}
			<div className='row margin-5 margin-bottom-10'>
				<div className='col s12 l4 center'>
					<img src={writing} alt='' className='img-size' />
				</div>
				<div className='col s12 l4 center dynamicImage-center'>
					<div className='img-size dynamicImage'></div>
				</div>
				<div className='col s12 l4 center'>
					<img src={Laptop} alt='' className='img-size' />
				</div>
			</div>
			<div clasName='center margin-bottom-10 '>
				<Link className='waves-effect waves-light btn indigo' to='/addPost'>
					<i className='material-icons right '>send</i>Start Here
				</Link>
			</div>
		</div>
	);
};

export default StartHere;
