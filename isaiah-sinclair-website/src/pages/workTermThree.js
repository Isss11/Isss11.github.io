import React from "react";
import "../work-term.css";
import "../work-term-three.css";
import isaiahSinclairDispenser from "../assets/workTermReport3Images/inFrontOfEcoTankDispenserCropped.jpg";
import isaiahSinclairEcoTankCanadaNewOffice from "../assets/workTermReport3Images/newOffice.jpg";
import companyLogo from "../assets/workTermReport3Images/ecoTankLogo.jpg";
import ecraHome from "../assets/workTermReport3Images/ecraHome.png";
import rolesModal from "../assets/workTermReport3Images/rolesModal.png";
import rolesUserManagement from "../assets/workTermReport3Images/rolesUserManagement.png";
import driverLogs from "../assets/workTermReport3Images/driverLogs.png";
import YoutubeEmbed from "../components/YouTubeEmbed";

const WorkTermThree = () => {
  return (
    <div className="container-fluid work-term-report-text">
      <figure>
        <img
          src={isaiahSinclairDispenser}
          className="mx-auto d-block my-2"
          id="ecotank-dispenser-image"
          alt="Isaiah in Front of an EcoTank"
        />
        <figcaption className="figure-caption">
          Isaiah in front of an EcoTank
        </figcaption>
      </figure>
      <div>
        This May, I began working as a Software Developer Co-op at EcoTank
        Canada, excited to help reduce plastic waste one jug at a time. I will
        reflect on my experience over the past 4 months: specifically, what I've
        worked on, what I've learned, and what I will improve on in the future
        to become a better software developer.
      </div>
      <div>
        <img
          src={companyLogo}
          className="singular-image mx-auto d-block my-2"
          alt="EcoTank Canada Logo"
        />
        <h2>About EcoTank Canada</h2>
        <p>
          EcoTank Canada is a windshield washer refill solution company founded
          in Orangeville in 2020. The EcoTank is a windshield washer fluid
          dispenser, that allows users to refill their windshield washer tank
          just like a gas pump. This eliminates the need to buy a single-use
          plastic jug, helping to reduce plastic waste one jug at a time.{" "}
        </p>
        <div className="embedded-video">
          <YoutubeEmbed embedId="KTgeqr23pZQ" />
        </div>
        <p>
          A few years ago, Robbie Mair and Jordon Francis wanted to create a
          business to reduce plastic waste, specifically related to the use of
          windshield washer fluid jugs. They found a company in Slovakia, named
          EcoTank, that had already invented a windshield washer dispenser to
          accomplish this, and agreed to a partnership with them. From this
          agreement, EcoTank Canada was founded. The two businesses have
          operated separately with a strategic partnership that allows them to
          grow symbiotically.
        </p>
        <p>
          While EcoTank Canada already has hundreds of dispensers across Canada
          at different gas stations, from Couche-Tard to Petro Canada, it is
          still a relatively small company. I am the first co-op student they've
          ever hired, and there are less than 20 employees who work for the
          company. They currently have dispensers in Ontario, Quebec, and
          Atlantic Canada. They plan to have dispensers across Canada and in the
          US in the future.
        </p>
        <p>
          EcoTank Canada is not a software company primarily, however, it has
          its own custom-built inventory management software, named ECRA. ECRA
          leverages the benefits of analytics, automation and machine learning
          to increase business efficiencies.
        </p>
      </div>
      <div>
        <h2>My Experience as Software Developer Intern</h2>
        <div className="mx-2">
          <h6 className="goals-area p-1 rounded">
            <strong>Technical Skills: </strong>JavaScript, Node.js, Vue.js,
            Firebase, HTML/CSS, BigQuery, GCP, NoSQL, Rest APIs, Role Based
            Access Control, Git
          </h6>
          <h6 className="goals-area p-1 rounded">
            <strong>Other Skills: </strong>Teamwork, Software Design
          </h6>
          <p>
            Throughout my work term, I worked on EcoTank Canada's custom-built
            inventory management system, ECRA. My supervisor, Sean, designed and
            developed the application himself, so I am the second person to ever
            work on it. As a result of the small size of our team, I was tasked
            with implementing many large, impactful features throughout the
            summer.
          </p>
          <p>
            At the beginning of the term, I worked on UI changes that affected
            the overall styling of the application. For example, I overhauled
            the styling of ECRA, creating a theme that auto-compiles SCSS into
            CSS to style components from an external UI library. This made ECRA
            visually consistent across the application.
          </p>
          <div className="attention-area">
            <strong>
              Please note that all photos of ECRA were taken and published with
              the permission of EcoTank Canada.
            </strong>
          </div>

          <figure>
            <img
              src={ecraHome}
              className="singular-image mx-auto d-block my-2"
              alt="Home Page of ECRA"
            />
            <figcaption className="figure-caption">
              Home page of ECRA
            </figcaption>
          </figure>
          <p>
            As I learned more about the overall code structure of ECRA, my
            supervisor entrusted me with more complex tasks that improved the
            functionality of the application. One of these features was a
            service ticket alert system. EcoTank Canada tracks issues related to
            their dispensers with service tickets created and stored in ECRA. To
            ensure that service managers and drivers promptly fix these issues,
            due dates are assigned to each ticket. I implemented a system to
            notify managers and drivers of service tickets that were overdue.
            After implementing this feature, it raised awareness of service
            tickets that had been overdue for an extended period. As a result,
            my feature helped to reduce overdue service tickets by 73% within a
            month. I used Vue.js, JavaScript, and Firebase Functions to build
            this feature. I did not have previous experience with Vue.js or
            Firebase before accepting my offer at EcoTank Canada, so I learned
            these technologies on my own time and improved on them while working
            on features like these.
          </p>
          <p>
            Another large feature that I implemented was a role-based access
            control system. I researched, designed and implemented a new form of
            access control that made it easier for administrators to assign
            read/write access to users for different parts of the application. I
            read a variety of articles and documentation about different access
            control schemes. After this, I implemented a system that allows
            admins to create roles directly on ECRA, assign read/write
            permissions to these roles and then assign roles to users
            seamlessly. I used Vue.js, Firebase, JavaScript and Firestore Rules
            to implement this feature. I also took advantage of my coursework in
            data structures, using sets to assign permissions to users with
            multiple roles without storing duplicate permissions. This
            experience taught me a lot about software design, technical research
            and decision-making. I also learned a lot about product iteration
            and using feedback from stakeholders (particularly from my
            supervisor) to improve the design of the access control system. This
            allowed me to practically apply some of the theoretical concepts I
            had learned in CIS*3750 (System Analysis and Design in
            Applications), strengthening my knowledge of software engineering
            principles.
          </p>
          <figure>
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={rolesModal}
                className="mx-auto my-2 dual-images"
                alt="Roles Modal"
              />
              <img
                src={rolesUserManagement}
                className="mx-auto my-2 dual-images"
                alt="Selecting roles for a user"
              />
            </div>
            <figcaption className="figure-caption">
              A user can create or edit a role using the roles modal (left) and
              can add roles to specific users with the user management modal
              (right).
            </figcaption>
          </figure>
          <p>
            For the remainder of the semester, I worked on a variety of
            different features, big and small. In my last month as a co-op
            student, I was tasked with implementing an hours-of-service logging
            system for drivers that work for EcoTank Canada. Like the role-based
            access control feature, I spent some time researching and designing
            a solution before beginning development. I used JavaScript and
            Firebase to integrate ECRA with an external vehicle tracking API
            webhook. This allows ECRA to obtain a constant stream of information
            about the status of vehicles. After retrieving data from the
            webhook, this is stored internally in the table that contains driver
            logs. To view the logs, I programmed a UI with Vue.js and
            JavaScript.
          </p>
          <figure>
            <img
              src={driverLogs}
              className="singular-image mx-auto d-block my-2"
              alt="An example of the driver logs feature"
            />
            <figcaption className="figure-caption">
              An example of the driver logging feature.
            </figcaption>
          </figure>
          <p>
            Working as a Software Developer at EcoTank Canada has been a great
            learning experience. I've been able to implement wide-scale changes
            to ECRA, while programming features with technologies that I had no
            previous experience with. As a result, I have strengthened my
            problem-solving and software engineering skills. Additionally, I
            have also learned about the importance of getting feedback from
            different stakeholders to improve the design of the software I
            write. I will use these lessons to continue to improve as a software
            engineer in the future.
          </p>
        </div>
      </div>
      <div>
        <h2>Work Term Goals</h2>
        <p>
          Ahead of my work term, I made a few goals that I wanted to work
          towards. I will list and reflect on each goal below.
        </p>
        <div className="mx-2">
          <h5>
            Learning Goal #1: I want to learn more about back-end development,
            specifically using Firebase, Firestore, and BigQuery.
          </h5>
          <p>
            I shared this goal with my supervisor to indicate my interest in
            back-end development, and that has helped me achieve this goal. I
            have gained a lot of experience in Firebase, Firestore, Cloud
            Functions for Firebase, and even BigQuery. I have used Firebase and
            Firestore for a wide variety of tasks, from creating an overdue
            service ticket notification system to implementing a driver logging
            system using a webhook that was integrated with an external API.
            Given my interest in pursuing a career in back-end development,
            these tasks and features have strengthened my experience in this
            field. As a result, I'm more qualified for positions in back-end
            development.
          </p>
          <h5>
            Learning Goal #2: I want to offer advice on overall software design
            decisions that help to improve ECRA.
          </h5>
          <p>
            My supervisor has given me ample opportunity to give my opinion and
            advice on the direction of the product, particularly concerning
            software design. I had many discussions about the design of the
            role-based access control system I implemented and other features,
            such as adding multi-tenancy to the application. We've also had
            respectful disagreements at times about the use of specific coding
            principles and design decisions. These discussions have pushed me to
            articulate my opinions clearly while considering perspectives on
            alternative designs. I have also been practicing my public speaking
            skills in some extracurriculars this summer, which has helped me
            express my views confidently and concisely.
          </p>
          <h5>
            Learning Goal #3: Become a more patient and resilient software
            developer.
          </h5>
          <p>
            I've become a more resilient software developer, as I've learned a
            wide variety of technologies in a short timeframe. I didn't know
            anything about Vue.js or Firebase until a few months ago, and now
            I'm comfortable with both. I've done this by reading documentation,
            searching the web for help, building personal projects with these
            technologies and getting help from my supervisor when needed for
            work-related programming. However, my supervisor has indicated that
            I should be more willing to ask questions when needed, specifically
            when understanding the design of more complex parts of the
            application. This would help reduce the amount of time it takes for
            me to complete a development task. I will keep this in mind as I
            continue to work at EcoTank part-time, and in future positions in
            general.
          </p>
          <h5>Learning Goal #4: Speak more confidently to my co-workers.</h5>
          <p>
            In comparison to my last internship, I can now speak more
            confidently than before. I have improved by taking deliberate pauses
            to gather my thoughts before speaking, as well as participating
            heavily in a public speaking extracurricular over the summer, named
            “Toastmasters”. Toastmasters has had an impact on my public speaking
            skills, allowing me to try out different speaking techniques in a
            supportive environment that has constructive criticism and
            evaluations. The constructive criticism I have received in
            Toastmasters has helped me refine some of my shortcomings in public
            speaking, allowing me to speak more clearly to my co-workers at
            EcoTank Canada. Speaking skills are key to most professions
            including software development, so I'm proud of the improvements
            I've made in this domain.
          </p>
          <h5>
            Learning Goal #5: Gain a deeper understanding of how businesses
            work, specifically start-ups such as EcoTank.
          </h5>
          <p>
            My position is not heavily focused on the business operations side
            of EcoTank Canada, but I did want to pick up some business skills if
            I ever want to create a business. In my two internships, I have
            learned different managerial strategies when it comes to managing a
            smaller company in comparison to a few teams in a large corporation.
            In a corporation such as NCR Voyix, engineering managers and team
            leads are less involved in the overall business and sales decisions
            of the company. As a result, they focus more on improving the
            productivity of engineering teams and less on over-arching business
            priorities. At EcoTank Canada, Robbie Mair, the CEO, needed to be
            focused on a wider variety of priorities since he runs the whole
            company, not a segment of one. This includes sales, software
            development, customer satisfaction and quality control of
            dispensers. Comparing and contrasting the managerial styles needed
            to run different businesses has broadened my understanding of
            managerial skills.
          </p>
          <p>
            I also have learned about the importance of applying for different
            government grants and subsidies, as they can have an enormous impact
            on a smaller company's ability to expand, given that smaller
            companies are not as wealthy as large corporations. Additionally, I
            have learned about the importance of building strong relationships
            with clients to maintain customer loyalty. While most of these
            lessons are not necessarily relevant to software development
            positions, they will be very useful if I ever want to create a
            business.
          </p>
        </div>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          At the start of the summer, I embarked on my journey with EcoTank
          Canada, reducing plastic waste one jug at a time. Since then, I've
          implemented a variety of major software features, improving their
          inventory management software while levelling up my software
          engineering skills. I've also learned a lot about what it takes to
          build a business from the ground up -- working here has given me
          invaluable experience in startups and business. I'm proud of what
          we've achieved over these past few months, and I'm excited to see what
          the future holds for EcoTank Canada. I will be working there part-time
          over the Fall 2024 semester, so I will continue to be a part of
          shaping that future.
        </p>
      </div>
      <div>
        <h2>Acknowledgments</h2>
        <p>
          I want to thank everyone at EcoTank Canada, for helping me have such a
          successful co-op term. They've all been so kind and welcoming
          throughout the period that I've worked here so far. Specifically, I
          wanted to thank Sean, my supervisor, for always taking time out of his
          day to help me with issues that I encountered, being open-minded to
          suggestions, and being considerate about the difficulties that I faced
          during the onboarding process. I also wanted to thank Robbie, EcoTank
          Canada's CEO, for the praise and respect he had for the software that
          Sean and I have worked on. Lastly, I want to thank Victoria, for her
          constant support throughout my work term as well as for entrusting me
          to be the candidate that EcoTank Canada hired over the summer.
        </p>
      </div>
      <figure>
        <img
          src={isaiahSinclairEcoTankCanadaNewOffice}
          className="singular-image mx-auto d-block my-2"
          alt="Isaiah in Front of the new EcoTank Canada Office Under Construction"
        />
        <figcaption className="figure-caption">
          Isaiah in front of the new EcoTank Canada office that is under
          construction.
        </figcaption>
      </figure>
    </div>
  );
};

export default WorkTermThree;
