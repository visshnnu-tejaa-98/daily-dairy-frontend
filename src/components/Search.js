import { Link } from 'react-router-dom';
const Search = () => {
	return (
		<div className='search padding-y-5 margin-3  center  '>
			<div className='container'>
				<h4 className='cursive center white-text'>Thinking to memorise your past memories...</h4>
				<h6 className='white-text center '>Then Simply Search</h6>
				<div className='row margin-3 '>
					<div className='col s12 l6'>
						<p className='white-text text-btn'>
							You can search your memories based on Full date, to explore this, Click Date Search
							Button <br />
							<em>
								<strong>Here You can get Single Memory</strong>
							</em>
						</p>
					</div>
					<div className='col s12 l6'>
						<Link class='waves-effect  waves-light btn pink lighten-1 margin-5 ' to='/searchPost'>
							<i class='material-icons left'>search</i>Date Search
						</Link>
					</div>
				</div>
				<div className='row margin-3 '>
					<div className='col s12 l6 push-l6'>
						<p className='white-text text-btn'>
							You can search your memories based on Month, to explore this, Click Month Search
							Button <br />
							<em>
								<strong>Here You can get all memories from the specified month</strong>
							</em>
						</p>
					</div>
					<div className='col s12 l6 pull-l6'>
						<Link class='waves-effect  waves-light btn pink lighten-1 margin-5 ' to='/month'>
							<i class='material-icons left'>search</i>Month Search
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
