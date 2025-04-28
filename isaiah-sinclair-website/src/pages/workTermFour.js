import React from 'react';
import '../work-term.css';
import internTeamSocial from '../assets/workTermReport4Images/internTeamSocial.JPG';
import isaiahSinclairInFrontOfLogo from '../assets/workTermReport4Images/isaiahSinclairCPPIBLogo.jpg';
import isaiahSinclairInternBowlingSocial from '../assets/workTermReport4Images/isaiahInternBowlingSocial.jpeg';
import cppibTimelineDiagram from '../assets/workTermReport4Images/cppibTimelineDiagram.png';

const WorkTermFour = () => {
  return (
    <div className="container-fluid work-term-report-text">
      <figure>
        <img
          src={isaiahSinclairInFrontOfLogo}
          className="singular-image mx-auto d-block my-2"
          alt="Isaiah in front of CPPIB's logo, at the Toronto HQ."
        />
        <figcaption className="figure-caption">
          Isaiah in front of CPPIB's logo, at the Toronto HQ.
        </figcaption>
      </figure>
      <div>
        At the start of the year, I began working at CPP Investments as a Data
        Engineer Intern. I will reflect on my experience, what I worked on, what
        I've learned, and how I improved as an engineer throughout the work
        term.
      </div>
      <div>
        <h2>About CPP Investments</h2>
        <p>
          The Canada Pension Plan Investment Board (CPPIB) was established in
          1997 to invest CPP contributions, with a goal of maximizing long-term
          investment returns without undue risk. CPPIB is one of the largest
          pension funds in the world, employing thousands of people who work at
          8 different offices, from Toronto to Mumbai.
        </p>
        <p>
          While the driving mission of CPPIB has remained consistent, there have
          been some notable changes in the way it operates and invests. In 1999,
          CPPIB received its first initial transfer from CPP, investing money in
          public stocks with a passive investment strategy. In 2006, CPPIB
          transitioned to an active management strategy, as well as investing in
          private equities, infrastructure and real estate. As a result of
          CPPIB's strong record, the fund currently is worth around $700
          billion.
        </p>
        <p>
          As part of the transition to an active management strategy, CPPIB
          invested more into its Tech & Data division, now employing hundreds of
          engineers to work on internal applications that help investors make
          decisions.
        </p>
        <figure>
          <img
            src={cppibTimelineDiagram}
            className="singular-image mx-auto d-block my-2"
            alt="A timeline of CPP Investments."
          />
          <figcaption className="figure-caption">
            A timeline of CPP Investments.
          </figcaption>
        </figure>
      </div>
      <div>
        <h2>My Experience</h2>
        <div className="mx-2">
          <h6 className="goals-area p-1 rounded">
            <strong>Languages/Technologies: </strong>Python, Terraform, SQL,
            Git, AWS (Athena, Glue, API Gateway, S3, RDS)
          </h6>
          <h6 className="goals-area p-1 rounded">
            <strong>Other Skills: </strong>Apache Iceberg, Data Lakes, API
            Development
          </h6>

          <p>
            This work term, I worked on the Data Foundation team, which
            specializes in data engineering. We develop the foundation of many
            of the data products used at CPPIB. The main product that we provide
            is an ecosystem that provides frameworks, processes, tools and
            services that enable trusted data access across the organization.
            Within this ecosystem, we've developed a variety of services that
            help automate data-related tasks, such as ETL (Extract, Transform,
            Load), data quality, and the creation of tables/views. Effectively
            these are low-code tools that application developers use within the
            organization so that they spend less time building data pipelines,
            and more time building applications that use our data tools.
          </p>
          <p>
            In February, our team shifted its priorities to establishing a Data
            Platform as a Service (DPaaS). When completed, this would make our
            ecosystem more user-friendly while providing a granular level of
            configurability for internal services. To enable the launch of the
            DPaaS, I was tasked with a large project that consisted of creating
            SQL tables that stored internal service configurations. I also
            created organizational tables that stored important information
            teams and users. I then built APIs on top of these tables, allowing
            users to access, create, update and delete resources associated with
            these tables. Lastly, I automated the deployment of the APIs to AWS
            API Gateway with Terraform.
          </p>
          <p>
            By the end of the term, I implemented 48 endpoints on top of 12
            tables, tripling the number of endpoints within the service that I
            worked on. I also enhanced the functionality of these endpoints,
            such as implementing a feature to dynamically create configuration
            files.
          </p>
          <p>
            This term project provided me with an ample amount of experience in
            building a project from the ground up for a major corporation. While
            designing my implementation, I had to consider scalability and
            manageability concerns, such that my APIs could be used by other
            employees to enable the creation of a DPaaS. I also gained
            end-to-end experience in building out features, meaning that I had
            to learn a variety of skills, from building database relationships
            with SQL to automating the deployment of AWS resources with
            Terraform. This experience has reinforced my confidence in building
            large applications and learning new technologies.
          </p>
          <p>
            In addition to my term project, I worked on a many other programming
            tasks. These ranged from fixing bugs related to email notifications
            not triggering when they were expected to, automating the deployment
            of AWS Glue jobs with Terraform, and creating Iceberg versions of
            Hive tables, enabling faster query times.
          </p>
          <p>
            Working on the Data Foundation team at CPPIB has been a great
            learning experience. I've delivered foundational APIs for a DPaaS
            that will be used for one of the biggest pension funds in the world.
            As a result, I've encountered many technical problems that have
            required me to come up with creative solutions, strengthening my
            problem-solving capabilities. I will continue to use these refined
            problem-solving skills to advance my career in software engineering.
          </p>
          <figure>
            <img
              src={internTeamSocial}
              className="singular-image mx-auto d-block my-2"
              alt="An informal social that CPPIB interns set-up."
            />
            <figcaption className="figure-caption">
              An informal social that CPPIB interns set-up.
            </figcaption>
          </figure>
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
            Learning Goal #1: I want to ensure that I effectively communicate
            with my team so that they understand what I'm working on and what
            blockers I'm encountering throughout each development task.
          </h5>
          <p>
            Throughout the semester, I've ensured that I effectively communicate
            with team members and with my manager. I did this by writing down
            notes in advance of stand-up meetings so that I stated all key
            points. I also made sure to discuss key blockers throughout the
            semester with my mentor and other lead engineers throughout the work
            term. Having these discussions with co-workers helped me to learn,
            get feedback on my work, and resolve issues more efficiently.
          </p>
          <h5>
            Learning Goal #2: I want to learn data engineering technologies that
            I haven't had previous experience with, such as Apache Airflow and
            PySpark.
          </h5>
          <p>
            Although I worked on a data engineering team this work term, many of
            the key data engineering technologies that are typically used within
            this domain had been abstracted by the internal services my
            co-workers wrote as part of our ecosystem. Additionally, my
            internship project focussed largely on back-end development:
            building APIs for a data platform as a service. As a result, I
            didn't gain too much direct experience with Apache Airflow or
            PySpark, but I did gain some experience with other data engineering
            technologies, such as Apache Iceberg and SQL.
          </p>
          <h5>
            Learning Goal #3: I want to contribute to projects that enhance my
            understanding of databases and data storage more generally.
          </h5>
          <p>
            I directly worked with databases in many of the tasks that I worked
            on this term. As a result, I have accomplished this goal. I worked
            on tasks such as converting Apache Hive tables to Apache Iceberg,
            where I learned why Apache Iceberg allows for enhanced flexibility
            and faster query times. Additionally, I created 12 different tables
            in my internship project, linking the tables together with a variety
            of different foreign-key relationships. I haven't built a project of
            this magnitude with databases in the past, so this strengthened my
            understanding of database design.
          </p>
          <h5>
            Learning Goal #4: I want to learn more about the overall software
            architecture of how CPP Investments' software works so that I can
            have a broader understanding of building large-scale data
            applications.
          </h5>
          <p>
            I have taken many opportunities to learn about software architecture
            on the Data Foundation team. In my first week, my mentor introduced
            me to the way different services within our architecture interact to
            create datasets and views. Additionally, I often discussed the
            database design my mentor created for my term project to better
            understand my project's requirements. These discussions helped me
            understand how to create a complex database architecture that
            addresses a large technical problem.
          </p>
          <h5>
            Learning Goal #5: I want to get more confident with cloud
            technologies, such as AWS and Terraform.
          </h5>
          <p>
            When I first started working at CPP Investments, I was quite
            intimidated by AWS and Terraform. I took advantage of a program at
            CPPIB that pays for my AWS Certification exam and obtained my
            certification earlier than needed so that I could apply this
            knowledge in my internship sooner. Additionally, I worked a lot with
            Terraform for a variety of bug fixes, alongside automating the
            deployment of APIs for the internship project I worked on throughout
            the semester. Overall, I've become quite comfortable with these
            technologies.
          </p>
        </div>
      </div>
      <div>
        <h2>Conclusion</h2>
        <p>
          At the start of 2025, I began my work term with CPP Investments with
          little experience in data engineering, but with an ambition to learn.
          Since then, I've built foundational APIs and tables for a DPaaS,
          enabling the next iteration of trusted data access at one of the
          biggest pension funds in the world. To say the least, it's been an
          exciting experience.
        </p>
      </div>
      <div>
        <h2>Acknowledgments</h2>
        <p>
          I want to thank everyone on my team, Data Foundation, for always being
          willing to help mentor me when needed, even when being busy with their
          own work. I learned a lot from everyone I've worked with. I also want
          to give a special thanks to my mentor, Kambiz, for teaching me about
          best practices in data engineering. Lastly, I would like to thank my
          manager, Sandip, for entrusting me to work on the Data Foundation team
          this semester, allowing me to work on complex problems that were
          challenging to solve.
        </p>
      </div>
      <figure>
        <img
          src={isaiahSinclairInternBowlingSocial}
          className="singular-image mx-auto d-block my-2"
          alt="Isaiah at an intern end-of-term bowling social."
        />
        <figcaption className="figure-caption">
          Isaiah at an intern end-of-term bowling social.
        </figcaption>
      </figure>
    </div>
  );
};

export default WorkTermFour;
