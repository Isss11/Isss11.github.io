import React from "react";
import molViewer1 from "../assets/sinclairMolViewer_1.png"
import finTrack from "../assets/finTrack_1.png"
import randomArtGenerator from "../assets/randomArtGenerator_1.png"
import class2DGames from "../assets/classic2DGames_1.png"
import githubLogo from "../assets/githubLogo.png"

const FeaturedProjects = () => {
	return (
		<div className="container-fluid">
			<h3>Sinclair MolViewer <a href="https://github.com/Isss11/Sinclair-Molecule-Viewer"><img className="small-logo m-1" src={githubLogo} alt="GitHub"></img></a></h3>
			<img src={molViewer1} alt="Sinclair MolViewer" className="rounded singular-image my-2 mx-auto d-block"></img>
			<h6><em><strong>Skills:</strong> jQuery, JavaScript, Python, C, Swig, SQLite, HTML/CSS</em></h6>
			<p>The Sinclair MolViewer takes uploaded SDF files of molecules, and creates a corresponding SVG image file to represent them on the website.
				It outputs the SVG file to the webserver, allowing the user to rotate it as they want to see the molecule from different angles. The user also has the ability to choose the size and colours of different atom elements.</p>
			<h3>FinTrack <a href="https://github.com/Isss11/FinTrack"><img className="small-logo m-1" src={githubLogo} alt="GitHub"></img></a></h3>
			<img className="rounded singular-image my-2 mx-auto d-block" src={finTrack} alt="FinTrack"></img>
			<h6><em><strong>Skills:</strong> React, JavaScript, Python, Django, Bootstrap 5</em></h6>
			<p>This is a full-stack expense tracker application created using primarily React and Django.
				It supports expense editing, expense storage in a SQLite database, and aggregation of expenses by categories using a map data structure implementation.</p>
			<h3>Random Art Generator <a href="https://github.com/Isss11/Random-Art-Generator"><img className="small-logo m-1" src={githubLogo} alt="GitHub"></img></a></h3>
			<img className="rounded singular-image my-2 mx-auto d-block" src={randomArtGenerator} alt="Random Art Generator"></img>
			<h6><em><strong>Skills:</strong> Python, Tkinter, PyCairo, Pillow</em></h6>
			<p>My team ("Grand River Renegades") created an award-winning ("Best User Interface") Random Art Generator that uses Python, Tkinter, Pycairo, TCL themes and other tools.
				It uses pseudo-randomness and interesting algorithms to fill squares (see images on GitHub) with random shapes of different appearances and then outputs them as an array which creates the final digital artwork seen by the user.<br></br><br></br>
				My role was predominantly using Tkinter to create much of the U.I. (the layout and the most of the widgets). Michael Janeway created the art-generating algorithm and added other valuable aspects to the U.I.</p>
			<h3>Classic 2D Board Games <a href="https://github.com/Isss11/Classic-2D-Board-Games"><img className="small-logo m-1" src={githubLogo} alt="GitHub"></img></a></h3>
			<img className="rounded singular-image my-2 mx-auto d-block" src={class2DGames} alt="Classic 2D Board Games"></img>
			<h6><em><strong>Skills:</strong> Java, Swing, Gradle, OOP</em></h6>
			<p>A GUI-based Numerical and Regular Tic-Tac-Toe game that I programmed for CIS*2430. In this assignment, I applied my knowledge of encapsulation,
				cohesion/coupling and polymorphism. Most notably, my skills with regards to interfaces and inheritance allowed me to implement Professor McCuaig's
				saveable interface as well as extending other classes. With regard to my program, it is a GUI-based application that allows the user to play two different
				games: Numerical Tic-Tac-Toe and Regular Tic-Tac-Toe. It has an easy-to-use user experience, as well as a robust UI that allows for invalid input.
				Additionally, it allows to save player info and current games in progress, with the ability to load those files later.</p>
			<h3>Pandemic Gender Wage Cap Statistical Inference <a href="https://github.com/Isss11/Pandemic-Gender-Wage-Gap-Statistical-Inference"><img className="small-logo m-1" src={githubLogo} alt="GitHub"></img></a></h3>
			{/* TODO: Add a PDF that can collapsible PDF here. */}
			<h6><em><strong>Skills:</strong> R, Statistical Inference</em></h6>
			<p>This was a group project created in ECON*3740 (Introductory Econometrics) at the University of Guelph. I created it alongside my group members, Yushan Xie, Jack Ronson, and another group member.

				I used R programming to perform varying statistical tests on LFS data from December 2019 and December 2022 and determined with a 1% level of significance that the gender hourly wage gap has closed over the course of the pandemic. While we cannot derive fully causal effects of the pandemic's impact on the gender pay gap, we found that women did disproportionately better with increases in hourly wages in comparison to men. We also found that holding numerous factors constant, women earned 9.6% in hourly earnings than men, as reported in December 2022. Once again, there could be other unexplained factors that produce downward/upward bias on this coefficient, but we did find a reduction in wages for women even after holding multiple independent variables constant.</p>
		</div>
	);
};

export default FeaturedProjects;