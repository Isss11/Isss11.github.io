import React from 'react';
import isaiahSinclairImage from '../assets/IMG_0964.JPG'

const Home = () => {
	return (
		<div className='container-fluid'>
			<div className='p-4 home-header text-white rounded'>
				<h2 className='container-fluid'>Hey! My name is Isaiah.</h2>
				<p className='container-fluid'>I am a Computer Science student who has a passion for software development, mathematics and economics.
					I enjoy the process of learning and problem-solving, and have established a strong work ethic to achieve my goals.
					I am currently seeking a co-op position for the Summer 2024 semester, so feel free to reach out!</p>
			</div>
			<img src={isaiahSinclairImage} alt="Isaiah Sinclair" className='img-fluid container-fluid rounded' />
		</div>
	);
};

export default Home;