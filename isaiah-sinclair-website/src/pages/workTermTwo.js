import React from "react";
import '../WorkTermOne.css'
import f23NCRCoops from "../assets/workTermReport2Images/f23NCRCoops.jpg"
import isaiahSinclairNCROffice1 from "../assets/workTermReport2Images/isaiahSinclairNCRSign_1.jpg"
import isaiahSinclairNCROffice2 from "../assets/workTermReport2Images/isaiahSinclairNCRSign_2.jpg"
import ncrVoyixLogo from "../assets/workTermReport2Images/ncrVoyixLogo.jpg"
import ncrCashRegister from "../assets/workTermReport2Images/ncrFirstCashRegister.png"
import johnHenryPattersonPortrait from "../assets/workTermReport2Images/johnHenryPattersonPortrait.jpg"
import ncrVisualHistory from "../assets/workTermReport2Images/ncrVisualHistory.png"


const WorkTermTwo = () => {
    return (
        <div className="container-fluid work-term-report-text">
            <img src={isaiahSinclairNCROffice1} className="singular-image mx-auto d-block my-2" alt="Isaiah in Front of the NCR Voyix Waterloo Office"></img>
            <div>
                This May, I began working as a Software Developer Intern at NCR Voyix. It has been a great experience, but my time here has reached its finale.
                I've worked across two different teams, developed code for back-end and front-end features, and learned a lot about software development.
                This semester, I worked on a back-end-focused team as a Full Stack Developer. In this article, I will reflect on my experience in this role over the past 4 months:
                specifically, what I've learned and what I will improve on in the future to become a better software developer.
            </div>
            <div>
                <img src={ncrVoyixLogo} className="mx-auto d-block my-2 singular-image" alt="NCR Voyix Logo"></img>
                <h2>About NCR Voyix</h2>
                <p>
                    NCR Voyix is a technology company that focuses on developing software for a variety of financial services. As of 2023, it is the largest provider of point-of-sale software in the world. It currently operates in 35 different countries, employing over 15,000 employees. It sells a variety of products, ranging from bank teller applications to self-checkout machines. NCR Voyix leverages technological solutions to make point-of-sale experiences better for customers and more efficient for businesses.
                </p>
                <div className="mx-2">
                    <h3 >NCR Voyix History</h3>
                    <p>
                        In 1884, John H. Patterson became the majority owner of National Manufacturing Company based in Dayton, Ohio. He renamed it “National Cash Register Company,” which created the first mechanical cash register. NCR continued to thrive over the coming decades through a culture of innovation, inventing self-checkout machines and magnetic card strips.
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={johnHenryPattersonPortrait} className="mx-auto my-2 dual-images" alt="John Henry Patterson"></img>
                        <img src={ncrCashRegister} className="mx-auto my-2 dual-images" alt="NCR Old Cash Register"></img>
                    </div>
                    <p>
                        Over the centuries NCR Voyix has evolved and transformed as a business in a variety of ways. For example, in 1991 it was acquired by telecom giant AT&T and renamed “AT&T Global Information Solutions”. It was later spun off in 1997 to become a separate company once again, taking back its old name. In September 2022, NCR Corporation announced it would split its digital commerce and ATM businesses into two separate companies. On October 16, 2023, that legal separation was completed. I work for the digital commerce company, now named “NCR Voyix”. The ATM business is named “NCR Atleos”.
                    </p>
                    <img src={ncrVisualHistory} className="singular-image mx-auto d-block my-2" alt="NCR History Represented with a Graphic"></img>
                </div>
            </div>
            <div>
                <h2>My Experience as Software Developer Intern</h2>
                <p>
                    This semester, I switched from being a Full Stack Developer who worked on a UI architecture team to working as a Full Stack Developer on a feature team. Although both roles work on the same projects, this new role was a sizeable change.
                </p>
                <div className="mx-2">
                    <h3>Difference Between Working on a Feature Team vs an Architecture Team</h3>
                    <p>
                        To start, I was introduced to some of the core concepts of agile methodology: 2-week sprints, feature grooming and meeting with stakeholders like product owners and UI designers, whom I had not worked with before. Programming tasks were more directed: working on a feature team is more about implementing changes that others request, while as a developer on the architecture team I made more wide-sweeping code changes.
                    </p>
                    <h3>Working as a Full Stack Developer</h3>
                    <h6 className="goals-area p-1 rounded"><strong>Technical Skills: </strong>Microservices, API Development, Jest, Yup, Docker, Postman, Kubernetes, Java, JavaScript, React.js, API Toolkit, Parallel Programming, Git</h6>
                    <h6 className="goals-area p-1 rounded"><strong>Other Skills: </strong>Agile, Teamwork</h6>
                    <p>
                        Throughout my entire work term, I worked on NCR Voyix's bank teller project. Given that I was a Full Stack Developer, I've had the privilege of being able to work on both the front end and back end, giving me a better understanding of what it takes to build a full-stack application.
                    </p>
                    <p>
                        For my first major task, I implemented a back-end feature that modified a few existing APIs to allow for an override of fees that were charged to customers with certain purchases. I primarily used NCR's API Toolkit to implement this feature. To test my microservice changes, I built docker images and deployed them on clusters using Kubernetes, building on my knowledge of containerization. I enjoyed implementing this feature as it made me more comfortable with certain back-end technologies that I had not spent much time working with this summer. This task also taught me about how interconnected certain APIs can be with each other, as I had to revise my changes a few times to eliminate bugs in other APIs that were caused by my initial implementation.
                    </p>
                    <p>
                        After merging some back-end code changes, one of the test cleanup jobs started to fail consistently. I spoke to my team lead, and he noticed that a race condition within automated testing was causing it to fail. He advised that I should change certain functions to not use a shared system property variable across the entire code-base and instead use a getter function. I implemented and merged these changes. Within hours, the CI/CD pipeline had a green build, meaning all tests passed! Green builds went from 13 in the previous sprint to 35 in the next one, a 169% increase! My software engineering manager even thanked me and my team lead for our fix. This was my first foray into learning about parallel programming in a real-world scenario.
                    </p>
                    <p>
                        Later in my co-op term, I shifted to working mainly on front-end tasks as my team received less back-end work. Notably, I implemented a feature to revise the existing front-end implementation to match corresponding changes in the back-end response. I also coded a feature to revise the design of certain dropdowns to group accounts by specified characteristics. My experience working with React at NCR Voyix has solidified my knowledge of front-end development.
                    </p>
                    <p>
                        Working as a Full Stack Developer at NCR Voyix has been a great learning experience. My shift from an architectural role last semester to an implementation-focused role has given me a well-rounded perspective on how to devise solutions to technical problems. It has also made me more vigilant about meeting the constraints and requirements of a variety of stakeholders. I will continue to use these lessons in the future for the betterment of my career in software development.
                    </p>
                    <h2>Company Experience</h2>
                    <p>
                        This semester, I continued to be involved in a variety of opportunities offered at NCR Voyix. For example, I helped review resumes and conduct interviews for co-op applicants. I also involved myself in 'company culture' events, being the ice-cream scooper for “Co-op Scoop” networking events at work.
                    </p>
                </div>
            </div>
            <img src={f23NCRCoops} className="singular-image mx-auto d-block my-2" alt="NCR Waterloo Fall 2023 Co-ops"></img>
            <div>
                <h2>Work Term Goals</h2>
                <p>
                    Ahead of my work term, I made a few goals that I wanted to work towards. I will list and reflect on each goal below.
                </p>
                <div className="mx-2">
                    <h5>Learning Goal #1: Become more efficient, getting more work done in less time.</h5>
                    <p>
                        While a few tasks were delayed due to issues I encountered during development, I have made strides towards this goal. I have prioritized getting 7 hours of sleep each night, which is the amount I need to function and solve problems efficiently. I have continued to mitigate procrastination by using a to-do list to keep track of work I need to get done in the present workday. Also, my stronger background (compared to last semester) in the tools and technologies that I use at work has made it a lot easier to finish work in a shorter timeframe.
                    </p>
                    <h5>Learning Goal #2: Get involved in back-end development: learn more about Helm, Kubernetes, API Toolkit, Spring Boot and Docker in particular.</h5>
                    <p>
                        At the start of the semester, I had a preference to learn more about back-end development. However, since I was a full-stack developer this semester, my work was intermixed with front-end tasks. As such, I have strengthened my understanding of technologies such as Kubernetes, Docker, and NCR's API Toolkit. However, I did not have the time to learn more about other back-end technologies such as Helm and Sprint Boot since I spent a significant portion of the semester focused on front-end development. While I did not get as much experience with back-end development, I've been able to gain a broader view of what it takes to build a full-stack web application. I will look towards future co-op terms and personal projects to learn more about these back-end technologies.
                    </p>
                    <h5>Learning Goal #3: Take advice from more experienced team members to improve my programming and software development skills.</h5>
                    <p>
                        Throughout my co-op term, I have taken advice from both front-end and back-end developers on my team. This has helped me improve my programming skills and ensure that I follow desired coding practices and principles. I have learned a lot from the feedback I've received in code reviews from my co-workers, revising my implementations to ensure better style and functionality. I also reviewed other team members' code changes to understand different ways to solve technical problems. Additionally, I spoke with team members when I encountered issues with my tasks, and they were able to provide with me tips to approach problems I faced.
                    </p>
                    <h5>Learning Goal #4: Take the initiative to investigate problems on my own (even if they're not mine) to further my understanding of technologies.</h5>
                    <p>
                        While I'm not afraid to ask questions, I tried to not ask 'too many'. I did this because I want to become a more resilient programmer, specifically with tracing bugs and devising solutions. To do this, I felt I needed to spend an ample amount of time trying to solve problems before asking for help. One specific skill that helped me with this was learning how to use a debugger. Previously, I would add print statements to trace issues. Using a debugger made analyzing bugs a lot easier, reducing my need to ask for help from other developers. Additionally, I took the initiative to investigate and resolve issues that were not my own: I frequently fixed programming environment issues our Quality Assurance Engineer encountered when testing application features.
                    </p>
                    <h5>Learning Goal #5: I will take more time to read relevant programming documentation before programming so that I can approach problems more thoughtfully.</h5>
                    <p>
                        Later in my co-op term, I was assigned a technical debt issue where I had to investigate why a container wasn't reconnecting to Kafka, an event streaming platform. Since I had never worked with Kafka, I read documentation about the platform and the concept of event journalling. This preliminary research helped me resolve the issue faster. I've also read other documentation on other libraries/frameworks like React and Jest.
                    </p>
                </div>
            </div>
            <div>
                <h2>Conclusion</h2>
                <p>
                    In May, I embarked on my journey with NCR Voyix without any professional software development experience. I had programmed projects in school and on my own time, but I was eager to apply my skills in a way that meaningfully affected people. After 8 months, tens of pull requests, and many afternoons debugging, I've accomplished exactly that. Additionally, I've been able to work alongside so many intelligent, positive people. Working at NCR Voyix has been a pleasure.
                </p>
            </div>
            <div>
                <h2>Acknowledgments</h2>
                <p>
                    I want to thank everyone on my team, Pi, for helping me have another successful co-op term. They were always willing to take time out of their day to help resolve issues l encountered. Specifically, I wanted to thank my Team Lead, Jeewhoon, especially for his patience when mentoring me. I also wanted to thank my Software Engineering Manager, Freddi for providing me with so many unique opportunities throughout my work term at NCR Voyix.
                </p>
            </div>
            <img src={isaiahSinclairNCROffice2} className="singular-image mx-auto d-block my-2" alt="Isaiah in Front of the NCR Voyix Waterloo Office (Upwards Angle)"></img>
        </div>
    );
};

export default WorkTermTwo;
