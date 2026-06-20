import './App.css';

const projects = [
  {
    id: '01',
    title: 'Product Feedback & Idea Hub',
    stack: ['Power Apps', 'Power Automate', 'Dataverse'],
    description:
      'Centralized feedback management app streamlining end-to-end idea submission across 3 teams. Reduced submission-to-decision cycle time by 50% with multi-stage approval workflows and automated email notifications.',
    year: '2026',
  },
  {
    id: '02',
    title: 'Client Intelligence Monitoring System',
    stack: ['Power Automate', 'Power BI', 'Python'],
    description:
      'Automated monitoring workflows aggregating M&A activity, leadership transitions, and ownership changes for 50+ enterprise clients. Cut manual research time by 60% per account review cycle with interactive Power BI reporting.',
    year: '2026',
  },
  {
    id: '03',
    title: 'Vendor Assessment & Documentation Workflow',
    stack: ['Power Automate', 'SharePoint', 'Power BI'],
    description:
      'Built a structured vendor risk and documentation workflow for cross-functional teams, reducing document turnaround time and improving compliance tracking through dashboard-based visibility.',
    year: '2026',
  },
  {
    id: '04',
    title: 'NLP AI Chatbot - IT Support',
    stack: ['NLP', 'Python', 'Power BI', 'REST APIs'],
    description:
      'Designed an AI support assistant that resolved repetitive Tier-1 queries with intent-based responses and escalation routing, enabling faster response times and reducing support overhead.',
    year: '2025',
  },
];

const experience = [
  {
    company: 'Smart Data Solutions',
    role: 'Business Automation Intern',
    period: 'Apr 2026 - Present',
    location: 'Plano, TX',
    bullets: [
      'Spearheaded 5+ enterprise Power Platform solutions eliminating 300+ hours/month of manual processing; reduced approval cycle time by 35% through multi-stage routing and real-time notifications.',
      'Integrated Dataverse with cloud repositories across 1,000+ vendor records, reducing data integrity issues by 25% and cutting audit preparation time by 40%.',
      'Developed AI-assisted client monitoring workflows for 50+ enterprise accounts; deployed Power BI dashboards improving executive decision-making visibility across 3 departments.',
    ],
  },
  {
    company: 'Erik Jonsson School of Engineering and\nComputer Science',
    role: 'Software Developer',
    period: 'Oct 2024 - Mar 2026',
    location: 'Richardson, TX',
    bullets: [
      'Delivered React.js/Tailwind web apps with ETL pipelines processing 10,000+ records at 85% forecast accuracy; reduced frontend bounce rates by 30% across 5,000+ monthly sessions.',
      'Launched NLP-based AI chatbot resolving 500+ monthly Tier-1 IT support requests, reducing ticket overhead by 45%; Power BI dashboards enabled data-driven resource allocation across 4 departments.',
      'Overhauled relational database performance via advanced SQL joins and strategic indexing, reducing API response latency by 40%.',
    ],
  },
  {
    company: 'Agnel Robotics',
    role: 'Software Developer',
    period: 'Sept 2021 - May 2024',
    location: 'Mumbai, India',
    bullets: [
      'Architected edge-to-cloud telemetry frameworks for real-time sensor streaming, reducing system downtime by 25% and accelerating fault detection by 35% across distributed robotic environments.',
      'Constructed PyTorch/YOLO perception pipelines with custom data augmentation, achieving +30% mAP improvement through anchor box tuning and confidence thresholding.',
      'Achieved sub-30ms inference latency for autonomous navigation through model quantization and pruning on high-frequency live video streams.',
    ],
  },
];

const skills = {
  'Automation & Workflow Systems': [
    'Microsoft Power Automate',
    'Power Apps',
    'Workflow Orchestration',
    'Business Process Automation',
    'Low-Code Development',
    'Robotic Process Automation',
  ],
  'Business Intelligence & Analytics': [
    'Power BI',
    'Dataverse',
    'Data Visualization',
    'Operational Reporting',
    'AI-Assisted Monitoring',
    'KPI Dashboards',
  ],
  'Programming, Data & AI': [
    'Python',
    'SQL',
    'JavaScript',
    'PHP',
    'MySQL',
    'MongoDB',
    'React.js',
    'Flask',
  ],
  'Cloud & DevOps': [
    'AWS (EC2, S3, SageMaker)',
    'Azure (AZ-900)',
    'Git & GitHub',
    'REST APIs',
    'Kubernetes',
    'CI/CD Pipelines',
    'Microservices',
  ],
};

function App() {
  return (
    <>
      <header className="topbar">
        <div className="brand">PB</div>
        <nav>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="cta-link">
            Hire Me
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="eyebrow">Software Engineering - Data Science - AI</p>
        <h1>
          Prathmesh
          <span>Baviskar</span>
        </h1>
        <p className="hero-copy">
          Software engineer and data science graduate student with 3+ years
          building production AI systems, full-stack applications, and analytics
          workflows that improve operational efficiency at scale.
        </p>
        <div className="meta-row">
          <span>Dallas, TX</span>
          <div className="socials">
            <a href="#work">View Work</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-header">
          <p>Selected Projects</p>
          <p>04 projects</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.id}>
              <div className="project-id">{project.id}</div>
              <div className="project-main">
                <h2>{project.title}</h2>
                <p className="project-stack">{project.stack.join(' · ')}</p>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <div className="tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className="project-year">
                  {project.year}
                  <span className="project-arrow">↗</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <p className="section-label">Capabilities</p>
        <div className="skills-grid">
          {Object.entries(skills).map(([title, items]) => (
            <div key={title}>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="metrics">
          <div>
            <h4>3+</h4>
            <p>Years experience</p>
          </div>
          <div>
            <h4>300+</h4>
            <p>Hours/month saved</p>
          </div>
          <div>
            <h4>1,000+</h4>
            <p>Vendor records managed</p>
          </div>
          <div>
            <h4>40%+</h4>
            <p>Processing time reduced</p>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="about-main">
          <div>
            <p className="section-label">About</p>
            <h2 className="about-title">
              Building systems that make <span>complexity disappear.</span>
            </h2>
            <p>
              I&apos;m a software engineer graduated with my M.S. in Computer
              Science (Data Science specialization) at UT Dallas. My work spans
              full-stack application development, data engineering, and machine
              learning-driven systems for real-world operations.
            </p>
            <p>
              Before grad school, I spent nearly three years at Agnel Robotics
              in Mumbai building edge-to-cloud telemetry systems and real-time
              computer vision pipelines. That foundation in systems thinking
              informs how I approach every enterprise workflow I touch today.
            </p>
            <p>
              I&apos;m at my best when engineering rigor meets business context,
              identifying high-impact bottlenecks and solving them with clean,
              maintainable systems and measurable outcomes.
            </p>
          </div>
          <aside className="about-cards">
            <article>
              <p className="card-date">Aug 2024 - May 2026</p>
              <h3>The University of Texas at Dallas</h3>
              <p>M.S. Computer Science - Data Science</p>
              <p>Dallas, TX</p>
            </article>
            <article>
              <p className="card-date">Feb 2020 - May 2024</p>
              <h3>University of Mumbai</h3>
              <p>B.E. in Information Technology</p>
              <p>Mumbai, India</p>
            </article>
            <article className="accent-card">
              <p className="card-date">Core Strength</p>
              <p>
                Translating business pain into measurable automation wins - from
                35% faster approval cycles to 45% fewer support tickets - using
                the simplest system that solves the problem.
              </p>
            </article>
          </aside>
        </div>
        <div className="certifications">
          <p className="section-label">Certifications & Publications</p>
          <ul>
            <li>Microsoft Azure Fundamentals (AZ-900)</li>
            <li>Data Analysis and Visualization with Power BI - Microsoft</li>
            <li>
              Smart Surveillance System for Intrusion Detection and Hazard
              Monitoring - JETNR (2024)
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="experience">
        <p className="section-label">Experience</p>
        <div className="experience-list">
          {experience.map((job) => (
            <article key={job.company} className="experience-item">
              <div className="experience-head">
                <h3>{job.company}</h3>
                <p className="experience-role">{job.role}</p>
                <p className="experience-period">{job.period}</p>
                <p className="experience-location">{job.location}</p>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <p className="section-label">Contact</p>
        <div className="contact-grid">
          <div>
            <h2 className="contact-title">
              Let&apos;s build <span>something.</span>
            </h2>
            <p>
              Open to full-time roles, contracts, and consulting across software
              engineering, data science, and AI product development. Based in
              Dallas, TX.
            </p>
            <ul className="contact-links">
              <li>
                <a href="mailto:prathmeshhb@gmail.com">prathmeshhb@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Your name" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="your@email.com" />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell me about your project..."
            />
            <button type="submit">Send message</button>
          </form>
        </div>
      </section>

      <footer>
        <p>© 2026 Prathmesh Baviskar</p>
        <p>Dallas, TX</p>
      </footer>
    </>
  );
}

export default App;
