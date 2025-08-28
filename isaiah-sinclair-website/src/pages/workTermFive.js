import '../work-term.css';
import isaiahSAPLogo from '../assets/workTermReport5Images/isaiahSAPLogo.jpg';
import sapDatabaseExplorer from '../assets/workTermReport5Images/sapDatabaseExplorer.png';
import isaiahWorking from '../assets/workTermReport5Images/isaiahWorking.jpg';
import isaiahDrawing from '../assets/workTermReport5Images/isaiahDrawing.jpg';

const WorkTermFive = () => {
  return (
    <div className="container-fluid work-term-report-text">
      <figure>
        <img
          src={isaiahSAPLogo}
          className="singular-image mx-auto d-block my-2"
          alt="Isaiah in front of the SAP logo at the Waterloo office."
        />
        <figcaption className="figure-caption">
          Isaiah in front of the SAP logo at the Waterloo office.
        </figcaption>
      </figure>
      <div>
        This May, I began working at SAP as a Site Reliability Engineer Intern.
        I will reflect on my experience, what I've learned, and how I improved
        as a software developer throughout the work term.
      </div>
      <div>
        <h2>About SAP</h2>
        <p>
          SAP is the largest software company in Europe, based on market
          capitalization. It is also the world's largest enterprise resource
          planning (ERP) software provider. It currently employs over 100,000
          employees worldwide, from Waterloo, Ontario, to its headquarters in
          Walldorf, Germany. The CEO of SAP is Christian Klein.
        </p>
        <p>
          In the early 1970s, 5 IBM engineers from IBM Tech's AI department were
          working on a software system that was later abandoned by the company.
          As a result of this decision, the engineers decided that they wanted
          to continue the project, so they left the company to pursue this. In
          1972, they founded SAP (Systems, Applications and Products in Data
          Processing).
        </p>
        <p>
          Over the years, the company would expand, branching into accounting
          and ERP software, among many other technological domains. They would
          eventually go public on the New York Stock Exchange (NYSE) in 1998.
        </p>
        <p>
          In addition to SAP's famous ERP software suite, they have also
          branched into cloud database software. They accomplished this partly
          through the purchase of Sybase, an American software company that
          owned Sybase SQLAnywhere, a proprietary relational database system.
          Notably, this database was originally created by a Waterloo-based
          startup, Watcom, which was purchased by Powersoft and later merged
          with Sybase. As a result, SAP's Waterloo office focuses on database
          technology.
        </p>
        <figure>
          <img
            src={sapDatabaseExplorer}
            className="singular-image mx-auto d-block my-2"
            alt="SAP HANA Database Explorer Example"
          />
          <figcaption className="figure-caption">
            SAP HANA Database Explorer Example
          </figcaption>
        </figure>
        <p>
          By 2005, SAP did not commercialize its own database technology, and
          many SAP customers often relied on non-SAP databases from vendors such
          as Oracle. SAP wanted to move away from this operating model as some
          of these databases were slow for real-time analytics, so SAP's
          research labs began investigating databases that leverage in-memory
          computing, instead of keeping data on disks. In 2010, SAP HANA (High
          Performance Analytic Application) was released: an in-memory,
          column-oriented, relational database management system created by SAP.
          Over the years, SAP has gradually integrated SAP HANA to its broader
          business suite, particularly through the creation of S/4HANA, which is
          an ERP software that runs exclusively using the SAP HANA database.
          SAP's Waterloo office works on the development and management of the
          SAP HANA database.
        </p>
      </div>
      <div>
        <h2>My Experience</h2>
        <div className="mx-2">
          <h6 className="goals-area p-1 rounded">
            <strong>Languages: </strong>Python, SQL
          </h6>
          <h6 className="goals-area p-1 rounded">
            <strong>Other Skills: </strong>Git, Kubernetes, Docker, Prometheus,
            Grafana, Site Reliability Engineering, Agentic AI, Flask, Helm
          </h6>

          <p>
            This work term, I worked on the Hana Cloud Tooling Engineering
            (HTCE) team, which specializes in the development of the cloud tools
            that are integrated into the SAP HANA managed database service. I
            was specifically working as a Site Reliability Engineer.
          </p>
          <p>
            Site Reliability Engineering (SRE) is broadly focused around
            ensuring that large-scale systems work reliably and efficiently by
            combining software engineering practices with operations and
            infrastructure knowledge. SREs bridge the gap between software
            development and IT operations, specifically focusing on ensuring
            that systems are:
          </p>
          <p>
            By the end of the term, I implemented 48 endpoints on top of 12
            tables, tripling the number of endpoints within the service that I
            worked on. I also enhanced the functionality of these endpoints,
            such as implementing a feature to dynamically create configuration
            files.
          </p>
          <ol>
            <li>Highly available: they don't go down often.</li>
            <li>Performant: they run quickly.</li>
            <li>Scalable: they can grow.</li>
            <li>Observable: easy to monitor and troubleshoot.</li>
          </ol>
          <p>
            Most of the tasks that I was assigned related to at least one of
            these goals - I worked on the monitoring services for the SAP HANA
            database's cloud services.
          </p>
          <p>
            At the beginning of the work term, I was assigned a variety of
            smaller tasks to reduce operational toil and enhance our existing
            alerting systems. Some of these tasks revolved around simplifying
            some of the logic within automated scripts that create Jira tickets
            for developers. I also learned the basics of Prometheus, Grafana,
            and Kubernetes. I did not have previous experience with Helm,
            Prometheus, or Grafana, so I learned this on my own by reading
            documentation online. I used these skills to create and deploy
            Prometheus alerts that query information about microservices and
            send out alerts if a condition evaluated to true. An example of such
            an alert would be one that triggers when the average latency time of
            outbound requests in a microservice exceeds 1 second. These alerts
            are then sent to a service that automatically creates Jira tickets
            for developers and operations team members to evaluate.
          </p>
          <figure>
            <img
              src={isaiahWorking}
              className="singular-image mx-auto d-block my-2"
              alt="Isaiah working in the SAP Waterloo office."
            />
            <figcaption className="figure-caption">
              Isaiah working in the SAP Waterloo office.
            </figcaption>
          </figure>
          <p>
            In mid July, I was tasked with one large project that took me the
            remainder of the work term. Currently, many Jira tickets are
            automatically created when triggered by Prometheus alerts.
            Oftentimes, multiple alerts have the same root cause, and it is
            rather obvious to developers that the corresponding tickets should
            be grouped together so that one developer can analyze the single
            root cause for multiple tickets. I built an Agentic AI tool that
            leverages LLMs to quickly analyze and compare the content of alert
            tickets against others, and group them together leveraging the Jira
            API. I haven't had experience building a large AI tool like this,
            but I have previously used LLMs in hackathons as part of our
            prototype application. Working on this project allowed me to refine
            my existing skills in GenAI APIs and Python programming.
          </p>
          <p>
            In mid July, I was tasked with one large project that took me the
            remainder of the work term. Currently, many Jira tickets are
            automatically created when triggered by Prometheus alerts.
            Oftentimes, multiple alerts have the same root cause, and it is
            rather obvious to developers that the corresponding tickets should
            be grouped together so that one developer can analyze the single
            root cause for multiple tickets. I built an Agentic AI tool that
            leverages LLMs to quickly analyze and compare the content of alert
            tickets against others, and group them together leveraging the Jira
            API. I haven't had experience building a large AI tool like this,
            but I have previously used LLMs in hackathons as part of our
            prototype application. Working on this project allowed me to refine
            my existing skills in GenAI APIs and Python programming.
          </p>
          <p>
            Working as a Site Reliability Engineering Intern at SAP has been a
            great experience. I've been able to learn so much about another
            domain of software engineering. This has given me a different
            perspective on the complexities of building a scalable and
            high-performance software system that is used by millions of people
            around the world. Additionally, I've enjoyed working at a leading
            software company that employs some of the best software developers
            in the tech industry. Working alongside so many smart software
            engineers has improved me as a software developer, in both technical
            and non-technical ways. I will continue to use these refined skills
            as I progress in my software engineering career.
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
            Learning Goal #1: Enhance my understanding and experience with
            Kubernetes, such that I feel comfortable using it by the end of the
            semester.
          </h5>
          <p>
            I feel a lot more comfortable with Kubernetes than at the beginning
            of the semester, because I worked on many tickets that required
            Kubernetes. I worked on a variety of tasks that related to deploying
            monitoring service alerts for specific microservices - this
            experience allowed me to work with Kubernetes and Helm to accomplish
            this. I also had one task in which I had to deploy new versions of a
            specific microservice to add new functionality that included using
            one of the container's environment variables to generate a unique
            correlation ID. I feel that Kubernetes is a very complicated
            orchestration tool, though, so I think I will need more experience
            with Kubernetes to truly feel like an expert with this tool.
          </p>
          <h5>
            Learning Goal #2: Speak confidently and clearly to my colleagues.
          </h5>
          <p>
            I think I spoke confidently and clearly to my colleagues throughout
            the work term. Ahead of each stand-up meeting, I made a written list
            of what I had worked on in the previous workday, and a list of what
            I wanted to accomplish for the next day. This helped me speak
            confidently and clearly during stand-up meetings, which helped my
            supervisor and manager understand my progress on tasks. I also made
            sure to communicate blockers to my colleagues so that I could get
            help when needed.
          </p>
          <h5>
            Learning Goal #3: I want to enhance my programming productivity,
            delivering more work in less time.
          </h5>
          <p>
            My supervisor commented multiple times throughout the semester that
            I'm very 'productive', so I have accomplished this goal. I'm
            particularly proud of this accomplishment as I feel productivity has
            been something I have struggled with in school in the past, so I
            have made significant progress over the past few years in this area.
            I think my productivity has improved as I've gained more experience,
            but also as I've adapted my approach to software development. In my
            first co-op, I was often nervous to take risks because I feared
            making a mistake. Now I take calculated and responsible risks such
            that I exhaust all possible methods to solve a problem. This has
            allowed me to solve problems more easily on my own and enhance my
            programming productivity.
          </p>
          <h5>
            Learning Goal #4: Learn about other cloud technologies (other than
            Kubernetes), such as Docker, Grafana, Prometheus, or Helm.
          </h5>
          <p>
            I have gained experience with Grafana, Prometheus, and Helm. I
            gained a little bit of experience with Docker, but not as much as
            the other technologies. I implemented many dashboard features and
            alerts using Grafana, Prometheus and Helm at the beginning of the
            semester, which gave me sufficient experience in learning the basics
            of these technologies. These skills will all be useful if I continue
            to pursue a career in Site Reliability Engineering or back-end
            engineering more broadly.
          </p>
          <h5>
            Learning Goal #5: Partake in opportunities to learn from colleagues.
          </h5>
          <p>
            I asked questions when needed from colleagues to get help on tasks
            that I was working on. I also often attended knowledge transfer
            sessions to present my own work and learn from others. I feel that I
            could've taken a little bit more initiative to learn from colleagues
            by occasionally asking them questions about their own work, so that
            I could have a broader understanding of some of the work that our
            team was working on.
          </p>
        </div>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          At the start of May, I began my work term at SAP excited to learn
          about the technicalities of cloud engineering and database software.
          Since then, I've enhanced and developed many tools that improve
          observability and reduce operational toil, while working with
          technologies that I've always wanted to learn more about, such as
          Kubernetes and Grafana. It's been a memorable experience working at
          SAP in Waterloo, and I would love to come back sometime.
        </p>
      </div>
      <div>
        <h2>Acknowledgments</h2>
        <p>
          I want to thank everyone on the HTCE team for helping me learn
          throughout the work term and always bringing a positive attitude to
          the workplace. It was nice to work with a team of kind people who
          cared about each other's success. I want to give a special thanks to
          my supervisor, Ken, for taking the initiative to onboard me so
          quickly, answering all my questions thoroughly, and making sure that I
          felt included in the team. Lastly, I would like to thank my team lead,
          Bill, for encouraging me throughout the semester to work on more
          complex software problems and always taking the time to recognize my
          positive contributions to the team.
        </p>
      </div>
      <figure>
        <img
          src={isaiahDrawing}
          className="singular-image mx-auto d-block my-2"
          alt="Isaiah drawing a technical diagram in the SAP Waterloo office."
        />
        <figcaption className="figure-caption">
          Isaiah drawing a technical diagram in the SAP Waterloo office.
        </figcaption>
      </figure>
    </div>
  );
};

export default WorkTermFive;
