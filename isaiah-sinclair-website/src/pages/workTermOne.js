import React from "react";
import ncrOffice1 from "../assets/workTermReport1Images/ncrOffice1.jpg"
import ncrOffice2 from "../assets/workTermReport1Images/ncrOffice2.jpg"
import s23NCRCoops from "../assets/workTermReport1Images/s23NCRCoops.jpg"
import womenUsingNCRATM from "../assets/workTermReport1Images/womenUsingNCRATM.png" // MIGHT HAVE ISSUES WITH PATH OR PNG ON THIS

const WorkTermOne = () => {
	return (
		<div className="container-fluid work-term-report-text">
			<div>
				<img src={ncrOffice1} className="singular-image mx-auto d-block mb-4" alt="NCR Waterloo Office"></img>
				<p>
					In January 2023, I was offered a position to work for NCR over the summer -- an industry leader and innovator in financial technology. I jumped at the opportunity. Now, a semester into my position I'm reflecting on my time at NCR. I will discuss what I've worked on, what I've learned, and what kind of lessons I can take into the future to improve as a software developer.
				</p>
			</div>
			<div>
				<h2>About NCR</h2>
				<p>
					NCR, formerly named "National Cash Register", is a technology company that focuses on creating software and hardware for a variety of financial services, ranging from bank teller applications to ATMs. It is a multinational corporation headquartered out of Georgia. It employs over 35,000 people worldwide. Offices range from Waterloo to Hyderabad, India.
					Founded in 1884, NCR has established itself as a global leader in the financial services industry for generations because of its innovative culture: it invented the electronic cash register, the magnetic credit card strip, and self-check-out machines. It continues to grow as a company through developing innovative solutions to make everyday financial transactions easier.
				</p>
				<img src={womenUsingNCRATM} className="singular-image mx-auto d-block my-2" alt="NCR ATM"></img>
				<p>
					I work in Waterloo, Ontario in a division of NCR that is focussed on software -- specifically with bank teller applications. Notably, in September 2022 NCR announced that it will split into two separate companies by the end of the year, with the software company being named “NCR Voyix” and the ATM hardware company being named “NCR Atleos”.
				</p>
			</div>
			<div>
				<h2>My Experience</h2>
				<p>
					I had a diverse set of experiences at NCR, working on two different teams during the semester. In the first 7 weeks, I was a back-end developer on a feature team, but I later moved to a UI architecture team working as a Full Stack Developer for the remainder of the semester, as initially planned.
				</p>
				<h3>Working as a Back End Developer</h3>
				<em><h6 className="goals-area p-1 rounded">Skills: Java, Kubernetes, Docker, NCR's API Building Tool, Jenkins, Gherkin</h6></em>
				<p>
					While working as a back-end developer, I completed my onboarding, going through NCR's API building tool training which teaches about their in-house API building tool for software developers. I met with my team lead and other team members to learn the basics of Docker, Kubernetes and Jenkins -- all technologies that I had not used in school. After onboarding, I implemented a feature to conditionally return a field for customers in certain endpoints. I programmed this feature by modifying an API definition of an endpoint and updating an existing Java action. This helped me learn more about the software development process and how small code changes can impact other aspects of a large application, given the prevalence of code re-usability.
				</p>
				<h3>Company Experience</h3>
				<p>
					As I settled into my position at NCR, I made it a goal to get involved in ways that put me outside of my comfort zone. When my manager asked co-op students if they wanted to review resumes and help in the interviewing process for the next batch of co-op students, I volunteered. Reviewing resumes and interviewing students was an enlightening experience, getting a different perspective on what employers look for in applicants. I also participated in the NCR Global Hackathon where thousands of employees all across the world work for 48 hours to develop innovative financial services products. My team created an application that leveraged blockchain technology to process money transfers between banks. I'm proud of the product that we created and enjoyed the memories I made along the way with fellow co-ops during the hackathon.
				</p>
				{/* FIXME - need hackathon image here */}
				<img src={s23NCRCoops} className="singular-image mx-auto d-block my-2" alt="NCR Waterloo Summer 2023 Co-ops"></img>
				<h3>Working as Full Stack Developer</h3>
				<em><h6 className="goals-area p-1 rounded">Skills: React, JavaScript, NCR's API Bulding Tool, Docker, Kubernetes, Jest, Software Architecture, Documentation</h6></em>

				<p>
					Midway through the S23 semester, I moved to a UI architecture team to work as a Full Stack Developer. Each task that I received in this position involved high-level decisions about how applications were structured, as opposed to implementing very specific features.
				</p>
				<p>
					In my first task on the UI architecture team, I created a document that standardized UI configurations for a bank teller application. These configurations are used to specify how the bank teller application looks, particularly with input fields. This makes it easier for NCR to create different-looking bank teller applications for a variety of banks and credit unions, depending on what they want. Previously, these configurations were written with no specified format, so input fields such as dropdowns were written in a variety of ways. This led to a plethora of inconsistencies within the configuration files. My document explicitly specifies how to define a text input field, dropdown field, numerical input field, etc., so that we can ensure consistency across the code base going forward. Front-end developers now reference this document before adding configurable UI elements.
				</p>
				<p>
					Creating these configuration formats allowed me to learn more about React, analyzing JavaScript code to find out use cases for specific UI configuration properties. Since this work was such a wide-sweeping architectural change, I met with different people across the company, including technical writers, architects, software engineers and team leads in Canada and India to ask for feedback on my work. This work introduced me to software architecture, making high-level decisions that establish the path forward for applications to write better code in the future.
				</p>
				<p>
					Later in the semester, I was given the chance to get more involved in React and JavaScript development. The most important pull request I created added support for a variety of input field properties that I had specified in the UI configuration formats documentation. My supervisor gave me ample time to experiment with JavaScript and React, helping me learn critical concepts about front-end development while adding important functionality for future developers. I also added Jest testing to test these React input field components, making sure that all their supported properties work as intended. Besides a single project in Object Oriented Programming (CIS*2430), I had minimal experience with testing frameworks such as Jest or JUnit, so my internship at NCR has introduced me to the world of quality assurance within software.
				</p>
				<p>
					In the last few weeks of the semester, I worked with my supervisor to create an API that will be presented at a conference later this year. It will be used to demonstrate the integration of NCR's bank teller application with another product that helps onboard new bank customers. I developed and configured the endpoint, defining its request, response, security, and other functionality. Since I'm considering becoming a back-end developer, I appreciated the process of helping to build an API from the ground up.
				</p>
			</div>
			<div>
				<h2>Work Term Goals</h2>
				<p>
					Ahead of my work term, I made a few goals that I wanted to work towards. I've listed them and reflected on each of the goals below.
				</p>
				<div>


					<h4>Technical Skill Goals</h4>

					<p>Given that this was my first co-op term, I wanted to <em>broaden my horizons</em> as much as possible in the world of software development. Developing a variety of programming skills allows me to see what I like and don't like while becoming a more well-rounded software developer.</p>

					<h5>Goals</h5>
					<ul className="goals-area rounded m-1 py-1">
						<li>
							Get hands-on experience with back-end technologies, such as:
							<ul>
								<li>Docker</li>
								<li>Kubernetes</li>
								<li>Java</li>
								<li>Cassandra</li>
							</ul>
						</li>
						<li>
							Get hands-on experience with front-end technologies, such as:
							<ul>
								<li>JavaScript</li>
								<li>React</li>
							</ul>
						</li>
					</ul>

					<h5>Reflection</h5>
					<p>
						In my view, I was able to accomplish these technical goals. While working as a back-end and full-stack developer, I worked with NCR's API building tool, Java, Kubernetes, and other back-end technologies. I hope to learn more about the Cassandra database in the future, as I was not given any work that directly interfaced with databases. When I shifted over to the architecture team, my work standardizing UI configurations and refactoring input field code allowed me to learn a lot more about React and JavaScript programming. I also learned about other prominent front-end concepts such as micro frontends, Jest testing and Formik. My experiences in both back-end and front-end development helped me understand how full-stack applications are created. It also gave me a stronger sense of the different career fields I can pursue when I graduate from university.
					</p>
				</div>
				<div>
					<h4>Professional Development Goals</h4>

					<p>The goals written here are over-arching goals about becoming more productive in the workplace, school, and life in general. I always seek to find new ways to develop myself as a person, learning new skills and devising new strategies to improve in qualitative and quantitative ways.</p>

					<h5>Goals</h5>
					<ul className="goals-area rounded m-1 py-1">
						<li>Become more efficient, getting more work done in less time.</li>
						<li>Show initiative to take part in work activities, even if they are outside of my comfort zone.</li>
						<li>Listen and learn from co-workers.</li>
						<li>Be adaptable and flexible with my transition from the back-end team to the UI architecture team.</li>
					</ul>

					<h5>Reflection</h5>
					<p>
						I was reasonably successful with my professional development goals as well. I showed initiative in taking part in work activities, helping to run interviews for Fall 2023 co-op applicants and participating in lots of company culture events throughout the semester. These activities often pushed me outside of my comfort zone, expanding myself as a person. I also took every opportunity to learn from co-workers, whether it was from the criticism I received in code reviews or through tips I was given along the way. Taking constructive criticism positively was crucial to my work experience as it allowed me to continuously improve with the feedback I was given, which had a noticeable effect on the quality of code I was writing come the end of the semester.
					</p>
					<p>
						The main area where I could improve is finding more ways to optimize my time. I got all my work done within the time constraints provided, but I feel that I could <em>level up</em> as a software developer if I found different strategies to become even more efficient. I made progress in this area this semester, but I feel I can improve more next semester.
					</p>
				</div>
			</div>
			<div>
				<h2>Conclusion</h2>
				<p>
					My time with NCR so far has been a blast. I've worked in two distinct roles: one as a back-end developer working on implementation-specific tasks, and the other as a full-stack developer that focused on high-level architectural decisions. Everyone has been more than helpful, taking time out of their day to give me advice on coding practices and work through issues that arise as I finish my work. As a result, this semester has been months full of learning, programming, and working with positive people who are fun to work with. Here's to another semester working at NCR!
				</p>
			</div>
			<div>
				<h2>Acknowledgments</h2>
				<p>
					I wanted to thank everyone on both teams that I worked on for always being so kind to me and taking time out of their day to help me learn and progress as a software developer at NCR. Specifically, I wanted to shout out to Anthony and Aj, for mentoring me throughout the semester.
				</p>
			</div>
			<img src={ncrOffice2} className="singular-image mx-auto d-block my-2" alt="NCR Waterloo Office From a Distance"></img>


		</div>
	);
};

export default WorkTermOne;
