import React from 'react';
import './App.css';
import Header from './components/Header.js';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/index';
import FeaturedProjects from './pages/featuredProjects';
import Resume from './pages/resume';
import WorkTermOne from './pages/workTermOne';
import WorkTermTwo from './pages/workTermTwo';
import StandardFooter from './components/StandardFooter';

function App() {
	return (
		// Routing for website, order of routing in this file does not determine link order.
		<HashRouter>
			<Header></Header>
			<Routes>
				{/* Empty path should map to initial search of isaiahsinclair.ca */}
				<Route exact path='' element={<Home />} />
				<Route exact path='/' element={<Home />} />
				<Route path='/featuredProjects' element={<FeaturedProjects />} />
				<Route path='/resume' element={<Resume />} />
				<Route path='/co-op/s23WorkTerm' element={<WorkTermOne />} />
				<Route path='/co-op/f23WorkTerm' element={<WorkTermTwo />} />
			</Routes>
			<StandardFooter></StandardFooter>
		</HashRouter>
	);
}

export default App;
