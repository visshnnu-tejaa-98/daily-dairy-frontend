import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AddPost from './components/AddPost';
import EditProfile from './components/EditProfile';
import Error404 from './components/Error404';
import Forgot from './components/Forgot';
import Home from './components/Home';
import Login from './components/Login';
import MonthSearch from './components/MonthSearch';
import Navbar from './components/Navbar.';
import Profile from './components/Profile';
import Register from './components/Register';
import Reset from './components/Reset';
import SearchPost from './components/SearchPost';
import SinglePost from './components/SinglePost';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Route path='/home' exact>
					<Home />
				</Route>
				<Route path='/about' exact>
					<About />
				</Route>
				{/* <Route path='/contact' exact>
					<Contact />
				</Route> */}
				<Route path='/login' exact>
					<Login />
				</Route>
				<Route path='/register' exact>
					<Register />
				</Route>
				<Route path='/forgot' exact>
					<Forgot />
				</Route>
				<Route path='/reset' exact>
					<Reset />
				</Route>
				<Route path='/addPost' exact>
					<AddPost />
				</Route>
				<Route path='/searchPost' exact>
					<SearchPost />
				</Route>
				<Route path='/month' exact>
					<MonthSearch />
				</Route>
				<Route path='/profile'>
					<Profile />
				</Route>
				<Route path='/editProfile'>
					<EditProfile />
				</Route>
				<Route path='/posts/:date'>
					<SinglePost />
				</Route>
				<Route path='*'>
					<Error404 />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
