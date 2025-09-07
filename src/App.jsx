import React from "react";
import "./App.css";

// Skills with icons
const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/amazonaws.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "NoSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg"},
  { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
];

const highlights = [
  {
    title: "Agile Collaboration",
    desc: "Actively participated in Agile ceremonies, contributing to sprint planning and retrospectives, improving team productivity and project delivery timelines by 20%.",
  },
  {
    title: "Code Quality Improvement",
    desc: "Hands-on experience using CodeRabbit AI code reviewer to enforce coding standards and best practices, reducing bugs and enhancing maintainability.",
  },
  {
    title: "RESTful API Development",
    desc: "Designed and developed RESTful APIs that improved data accessibility for third-party integrations, expanding and facilitating seamless data exchange.",
  },
  {
    title: "Real-Time Data Processing",
    desc: "Contributed to the development of a real-time processing system with Java and Apache Kafka, enabling instant analytics and business insights.",
  },
  {
    title: "Data Migration",
    desc: "Successfully executed a large-scale data migration project, ensuring data integrity and minimal downtime during the transition from legacy systems.",
  },
];

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        
        <div className="header-content">
          <div className="profile-info">
            <h1>Ganesh Narangle</h1>
            <h2>Full Stack Java Developer</h2>
            <span className="experience-badge">2 Years Experience</span>
          </div>
          
          <div className="contact-quick-info">
            <div className="contact-item-header">
              <span className="contact-icon-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span>Vishal Nagar, Wakad, Pune</span>
            </div>
            
            <div className="contact-item-header">
              <span className="contact-icon-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>7709761160</span>
            </div>
            
            <div className="contact-item-header">
              <span className="contact-icon-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>ganeshnarangle@gmail.com</span>
            </div>
            
            <div className="contact-item-header">
              <span className="contact-icon-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
              <span>linkedin.com/in/nganeshm</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="section">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          About Me
        </h2>
        <p>
          Java Developer with 2 years of experience in designing, developing, and maintaining Spring Boot applications. 
          Expertise in crafting high-performance, scalable RESTful APIs and integrating authentication/authorization mechanisms. 
          Strong problem-solving skills and passion for writing clean, maintainable code. Adept at quickly learning new 
          technologies to meet evolving needs. Seeking challenging roles to further enhance enterprise-grade Spring Boot 
          development skills while collaborating with talented teams.
        </p>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          Technical Skills
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="section">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Career Highlights
        </h2>
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight">
            <p>
              <span className="highlight-title">{highlight.title}:</span> {highlight.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="section">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Experience
        </h2>
        <div>
          <div className="job-header">
            <h3>Java Software Engineer</h3>
            <div className="date">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              June 2023 - Present
            </div>
          </div>
          <p className="company">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Yagna IQ, Pune
          </p>
          <p>
            YagnaiQ, Inc. is a cloud-based SaaS company providing AI-driven solutions such as Renewal Cloud, 
            XSUS Cloud, Renewal AI Agents, Channel CPQ, and WiFi Planner. The platform connects vendors, 
            distributors, resellers, and customers to enable secure, seamless transactions and streamline channel workflows.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <h2>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          Education
        </h2>
        <div>
          <div className="edu-header">
            <h3>B. Tech</h3>
            <div className="date">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              2019 - 2022
            </div>
          </div>
          <p className="institution">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            MPGI Engineering College
          </p>
          <p>GPA: <strong>9.1</strong></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          &copy; {new Date().getFullYear()} Ganesh Narangle
        </div>
      </footer>
    </div>
  );
}

export default App;