import React, { useState, useEffect } from "react";
import "./App.css";

// Skills with icons
const skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", level: 95 },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", level: 90 },
  { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", level: 85 },
  { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 90 },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 85 },
  { name: "NoSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80 },
  { name: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg", level: 75 },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", level: 85 },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90 },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", level: 80 },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 85 },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", level: 75 },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/amazonaws.svg", level: 80 },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", level: 85 },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", level: 90 },
];

const services = [
   {
    title: "UI Development",
    description: "Creating attractive and responsive user interfaces with modern web technologies",
    icon: "🎨",
    features: ["Responsive Design", "React Applications", "Modern CSS", "Interactive Components"]
  },
  {
    title: "Backend Development",
    description: "Building robust and scalable server-side applications using Java and Spring Boot",
    icon: "🚀",
    features: ["RESTful APIs", "Microservices", "Database Design", "Performance Optimization"]
  },
  {
    title: "API Integration",
    description: "Seamless integration with third-party APIs and services for enhanced functionality",
    icon: "🔗",
    features: ["OAuth Integration", "Payment Gateways", "Data Synchronization", "Real-time Processing"]
  },
  {
    title: "DevOps & Deployment",
    description: "Streamlined deployment processes using containerization and CI/CD pipelines",
    icon: "⚡",
    features: ["Docker Containers", "Kubernetes Orchestration", "Jenkins CI/CD", "AWS Deployment"]
  },
  {
    title: "Database Solutions",
    description: "Designing and optimizing database architectures for high-performance applications",
    icon: "💾",
    features: ["MySQL Design", "NoSQL Solutions", "Data Migration", "Performance Tuning"]
  },
];

const projects = [
  {
    title: "Real-Time Analytics Platform",
    description: "Built a real-time data processing system using Java and Apache Kafka for instant business insights",
    tech: ["Java", "Kafka", "Spring Boot", "MySQL"],
  },
   {
    title: "Data Migration Project",
    description: "Successfully migrated legacy data systems ensuring zero downtime and data integrity",
    tech: ["Java", "MySQL", "NoSQL", "AWS"],
  },
  {
    title: "RESTful API Suite",
    description: "Developed comprehensive API suite for third-party integrations and data exchange",
    tech: ["Spring Boot", "REST APIs", "JWT", "Docker"],
  }
];

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
          </div>
          <div className="nav-menu">
            {['home', 'about', 'services', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-item ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Top Contact Info */}
          <div className="nav-contacts">
            <a href="mailto:ganeshnarangle@gmail.com" className="nav-contact-item" title="Email">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="tel:7709761160" className="nav-contact-item" title="Phone">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/nganeshm" target="_blank" rel="noopener noreferrer" className="nav-contact-item" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      <div className="main-container">
        {/* Hero Section - Centered Intro */}
        <section id="home" className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
          <div className="section-container">
            <div className="hero-content-centered">
              <div className="hero-greeting">👋 Hello, I'm</div>
              <h1 className="hero-name">Ganesh Narangle</h1>
              <h2 className="hero-title">Full Stack Java Developer</h2>
              <p className="hero-description">
                Passionate about building scalable backend solutions with Java & Spring Boot. 
                Transforming ideas into robust, high-performance applications.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="section-container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate Java Developer with 2+ years of experience in designing and developing 
                  enterprise-grade applications. My expertise lies in building scalable backend systems 
                  using Spring Boot, creating robust RESTful APIs, and implementing efficient database solutions.
                </p>
                <p>
                  I thrive on solving complex problems and turning innovative ideas into reality. 
                  My commitment to clean code, best practices, and continuous learning drives me 
                  to deliver exceptional results in every project.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span>Problem Solver</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>Fast Learner</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🤝</span>
                    <span>Team Player</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="section-container">
            <h2 className="section-title">What I Do</h2>
            <div className="services-grid-inline">
              {services.map((service, index) => (
                <div key={index} className="service-card-compact">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section - 5x5 Grid Layout */}
        <section id="skills" className="skills-section">
          <div className="section-container-extra-wide">
            <h2 className="section-title">Technical Skills & Expertise</h2>
            <p className="skills-subtitle">
              Proficient in modern technologies and frameworks for building enterprise-grade applications
            </p>
            <div className="skills-grid-5x5">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card-optimized">
                  <div className="skill-icon-wrapper-optimized">
                    <img src={skill.icon} alt={skill.name} className="skill-icon-optimized" />
                  </div>
                  <div className="skill-info-optimized">
                    <span className="skill-name-optimized">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Broad and Centered */}
        <section id="contact" className="contact-section">
          <div className="section-container-wide">
            <div className="contact-content-centered">
              <h2 className="section-title">Let's Connect & Build Something Amazing</h2>
              <p className="contact-subtitle">
                Ready to start your next project? I'm always interested in new opportunities and exciting challenges. 
                Let's discuss how we can work together to bring your ideas to life!
              </p>
              
              <div className="contact-methods-centered">
                <a href="mailto:ganeshnarangle@gmail.com" className="contact-method-large">
                  <div className="method-icon-large">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="method-label">Email Me</div>
                    <div className="method-value">ganeshnarangle@gmail.com</div>
                  </div>
                </a>
                
                <a href="tel:7709761160" className="contact-method-large">
                  <div className="method-icon-large">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="method-label">Call Me</div>
                    <div className="method-value">+91 7709761160</div>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/nganeshm" target="_blank" rel="noopener noreferrer" className="contact-method-large">
                  <div className="method-icon-large">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="method-label">LinkedIn</div>
                    <div className="method-value">Connect with me</div>
                  </div>
                </a>
                
                <div className="contact-method-large">
                  <div className="method-icon-large">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="method-label">Location</div>
                    <div className="method-value">Pune, Maharashtra, India</div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-centered">
                <h3>Send me a message</h3>
                <form className="form-wide">
                  <div className="form-row">
                    <div className="form-group">
                      <input type="text" placeholder="Your Name" className="form-input" />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Your Email" className="form-input" />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Subject" className="form-input" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" className="form-textarea" rows="6"></textarea>
                  </div>
                  <div className="form-submit-wrapper">
                    <button type="submit" className="btn-submit-large">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Ganesh Narangle.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;