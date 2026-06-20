import { useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, ExternalLink, ChevronDown, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const PROJECTS = [
  {
    num: "01",
    title: "Product Feedback & Idea Hub",
    category: "Power Apps · Power Automate · Dataverse",
    year: "2026",
    description:
      "Centralized feedback management app streamlining end-to-end idea submission across 3 teams. Reduced submission-to-decision cycle time by 50% with multi-stage approval workflows and automated email notifications.",
    tags: ["Power Apps", "Power Automate", "Dataverse"],
  },
  {
    num: "02",
    title: "Client Intelligence Monitoring System",
    category: "Power Automate · Power BI · Python",
    year: "2026",
    description:
      "Automated monitoring workflows aggregating M&A activity, leadership transitions, and ownership changes for 50+ enterprise clients. Cut manual research time by 60% per account review cycle with interactive Power BI reporting.",
    tags: ["Power Automate", "Power BI", "Python"],
  },
  {
    num: "03",
    title: "Vendor Assessment & Documentation Workflow",
    category: "Power Automate · SharePoint · Power BI",
    year: "2026",
    description:
      "Standardized vendor lifecycle documentation across 200+ records with enforced 30/60/90-day expiration alerts. Reduced compliance gaps identified in audits by 40% through workflow-driven records management.",
    tags: ["Power Automate", "SharePoint", "Power BI"],
  },
  {
    num: "04",
    title: "NLP AI Chatbot — IT Support",
    category: "NLP · Python · Power BI",
    year: "2025",
    description:
      "Deployed NLP-based chatbot into internal infrastructure resolving 500+ monthly Tier-1 IT support requests, reducing ticket overhead by 45% through intelligent FAQ mapping. Paired with Power BI dashboards for resource allocation.",
    tags: ["NLP", "Python", "Power BI", "REST APIs"],
  },
];

const SKILLS = [
  {
    category: "RPA & Automation",
    items: ["Microsoft Power Automate", "Power Apps", "Workflow Orchestration", "Business Process Automation", "Low-Code Development", "Robotic Process Automation"],
  },
  {
    category: "Business Intelligence",
    items: ["Power BI", "Dataverse", "Data Visualization", "Operational Reporting", "AI-Assisted Monitoring", "KPI Dashboards"],
  },
  {
    category: "Programming & Data",
    items: ["Python", "SQL", "JavaScript", "PHP", "MySQL", "MongoDB", "React.js", "Flask"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, SageMaker)", "Azure (AZ-900)", "Git & GitHub", "REST APIs", "Kubernetes", "CI/CD Pipelines", "Microservices"],
  },
];

const EXPERIENCE = [
  {
    company: "Smart Data Solutions",
    location: "Plano, TX",
    role: "Business Automation Intern",
    period: "Apr 2026 — Present",
    bullets: [
      "Spearheaded 5+ enterprise Power Platform solutions eliminating 300+ hours/month of manual processing; reduced approval cycle time by 35% through multi-stage routing and real-time notifications.",
      "Integrated Dataverse with cloud repositories across 1,000+ vendor records, reducing data integrity issues by 25% and cutting audit preparation time by 40%.",
      "Developed AI-assisted client monitoring workflows for 50+ enterprise accounts; deployed Power BI dashboards improving executive decision-making visibility across 3 departments.",
    ],
  },
  {
    company: "Erik Jonsson School of Engineering and Computer Science",
    location: "Richardson, TX",
    role: "Software Developer",
    period: "Oct 2024 — Mar 2026",
    bullets: [
      "Delivered React.js/Tailwind web apps with ETL pipelines processing 10,000+ records at 85% forecast accuracy; reduced frontend bounce rates by 30% across 5,000+ monthly sessions.",
      "Launched NLP-based AI chatbot resolving 500+ monthly Tier-1 IT support requests, reducing ticket overhead by 45%; Power BI dashboards enabled data-driven resource allocation across 4 departments.",
      "Overhauled relational database performance via advanced SQL joins and strategic indexing, reducing API response latency by 40%.",
    ],
  },
  {
    company: "Agnel Robotics",
    location: "Mumbai, India",
    role: "Software Developer",
    period: "Sept 2021 — May 2024",
    bullets: [
      "Architected edge-to-cloud telemetry frameworks for real-time sensor streaming, reducing system downtime by 25% and accelerating fault detection by 35% across distributed robotic environments.",
      "Constructed PyTorch/YOLO perception pipelines with custom data augmentation, achieving +30% mAP improvement through anchor box tuning and confidence thresholding.",
      "Achieved sub-30ms inference latency for autonomous navigation through model quantization and pruning on high-frequency live video streams.",
    ],
  },
];

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = NAV_LINKS.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const active = useActiveSection();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ─── NAV ─────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-14 border-b border-border bg-background/75 backdrop-blur-xl">
        <button
          onClick={() => scrollTo("hero")}
          className="text-sm font-medium tracking-widest uppercase text-foreground/60 hover:text-foreground transition-colors"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          PB
        </button>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm transition-colors ${active === link.id ? "text-accent" : "text-foreground/50 hover:text-foreground"}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm px-4 py-1.5 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Hire Me
          </button>
        </div>
        <button className="md:hidden text-foreground/70" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`block h-px bg-current transition-all origin-center ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all origin-center ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-14 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
              className="text-3xl font-light text-foreground/70 hover:text-foreground transition-colors"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* ─── HERO ────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-28 overflow-hidden">

        {/* ambient glow — replaces grid */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, #c8f135 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 100% 100%, #c8f135 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full">
          <p
            className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Power Platform & RPA · Available for opportunities
          </p>

          <h1
            className="text-[clamp(3.5rem,12vw,10rem)] leading-[0.92] font-light tracking-tight mb-8"
            style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 144, 'wght' 300" }}
          >
            <span className="block">Prathmesh</span>
            <span
              className="block italic text-accent"
              style={{ fontVariationSettings: "'opsz' 144, 'wght' 200" }}
            >
              Baviskar
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-lg md:text-xl text-foreground/60 max-w-2xl leading-relaxed font-light">
                Power Platform & RPA professional with 3+ years building enterprise workflow automation,
                low-code applications, and business intelligence systems that reduce manual processing by 40%+.
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-muted-foreground text-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span style={{ fontFamily: "'Geist Mono', monospace" }} className="text-xs">Dallas, TX</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <button
                onClick={() => scrollTo("work")}
                className="group flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
              >
                <span>View Work</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <div className="flex gap-4">
                <a href="mailto:prathmeshhb@gmail.com" className="text-foreground/30 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" className="text-foreground/30 hover:text-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com" className="text-foreground/30 hover:text-accent transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ────────────────────────────────────── */}
      <section id="work" className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-border pb-4">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
              Selected Projects
            </h2>
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
              04 projects
            </span>
          </div>

          <div className="flex flex-col">
            {PROJECTS.map((p) => (
              <div
                key={p.num}
                className="group border-b border-border cursor-default"
                onMouseEnter={() => setHoveredProject(p.num)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 py-8 md:py-10">
                  <span
                    className="text-xs text-muted-foreground w-8 flex-shrink-0"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {p.num}
                  </span>

                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-2xl md:text-3xl font-light group-hover:text-accent transition-colors duration-200 leading-tight"
                      style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 72, 'wght' 300" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-xs text-muted-foreground mt-1 tracking-wide"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {p.category}
                    </p>
                  </div>

                  <p className="hidden md:block max-w-sm text-sm text-foreground/45 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {p.description}
                  </p>

                  <div className="hidden lg:flex flex-wrap gap-1.5 max-w-[200px] justify-end">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 border border-border text-muted-foreground group-hover:border-accent/25 group-hover:text-accent/60 transition-colors"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-1 flex-shrink-0">
                    <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {p.year}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-foreground/15 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ──────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-border pb-4">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
              Experience
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                {/* left */}
                <div>
                  <h3
                    className="text-xl font-light text-foreground leading-snug mb-1"
                    style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 36, 'wght' 400" }}
                  >
                    {exp.company}
                  </h3>
                  <p className="text-sm text-accent font-light mb-1">{exp.role}</p>
                  <p
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {exp.period}
                  </p>
                  <p
                    className="text-xs text-muted-foreground mt-0.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {exp.location}
                  </p>
                </div>
                {/* right */}
                <ul className="flex flex-col gap-4">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-foreground/55 font-light leading-relaxed">
                      <span className="mt-[7px] w-1 h-1 flex-shrink-0 bg-accent/50" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SKILLS ──────────────────────────────────────── */}
      <section id="skills" className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-border pb-4">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
              Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SKILLS.map((group) => (
              <div key={group.category}>
                <p
                  className="text-xs tracking-[0.2em] uppercase text-accent mb-5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {group.category}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-sm text-foreground/60 font-light">
                      <span className="w-1 h-1 bg-muted-foreground/50 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* stats */}
          <div className="mt-20 pt-12 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "3+", label: "Years experience" },
              { num: "300+", label: "Hours/month saved" },
              { num: "1,000+", label: "Vendor records managed" },
              { num: "40%+", label: "Processing time reduced" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-4xl md:text-5xl font-light text-foreground mb-1"
                  style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 72, 'wght' 200" }}
                >
                  {stat.num}
                </p>
                <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ───────────────────────────────────────── */}
      <section id="about" className="px-6 md:px-12 py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16 border-b border-border pb-4">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
              About
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* left — text */}
            <div>
              <h3
                className="text-4xl md:text-5xl font-light leading-tight mb-8"
                style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 72, 'wght' 300" }}
              >
                Building systems that make
                <em className="text-accent not-italic"> complexity disappear</em>.
              </h3>
              <div className="flex flex-col gap-5 text-foreground/55 font-light leading-relaxed text-[15px]">
                <p>
                  I&apos;m a Power Platform & RPA professional currently pursuing my M.S. in Computer Science
                  (Data Science specialization) at UT Dallas. My work spans the full automation stack —
                  from low-code Power Apps and Dataverse integration to Python-based diagnostic tools
                  and machine learning pipelines.
                </p>
                <p>
                  Before grad school, I spent nearly three years at Agnel Robotics in Mumbai building
                  edge-to-cloud telemetry systems and real-time computer vision pipelines. That foundation
                  in systems thinking informs how I approach every enterprise workflow I touch today.
                </p>
                <p>
                  I&apos;m at my best when engineering rigor meets business context — identifying the exact
                  friction points in a process and eliminating them with the right level of automation,
                  not the most complex one.
                </p>
              </div>

              {/* certs */}
              <div className="mt-12 pt-8 border-t border-border">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  Certifications & Publications
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Microsoft Azure Fundamentals (AZ-900)",
                    "Data Analysis and Visualization with Power BI — Microsoft",
                    "Smart Surveillance System for Intrusion Detection and Hazard Monitoring — JETNR (2024)",
                  ].map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-foreground/50 font-light">
                      <span className="mt-[7px] w-1 h-1 flex-shrink-0 bg-accent/50" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* right — education */}
            <div className="lg:pt-4 flex flex-col gap-8">
              {/* edu cards */}
              {[
                {
                  school: "The University of Texas at Dallas",
                  degree: "M.S. Computer Science — Data Science",
                  period: "Aug 2024 — May 2026",
                  location: "Dallas, TX",
                },
                {
                  school: "University of Mumbai",
                  degree: "B.E. in Information Technology",
                  period: "Feb 2020 — May 2024",
                  location: "Mumbai, India",
                },
              ].map((edu) => (
                <div
                  key={edu.school}
                  className="group border border-border hover:border-accent/30 transition-colors p-6"
                >
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {edu.period}
                  </p>
                  <h4
                    className="text-xl font-light text-foreground mb-1 group-hover:text-accent transition-colors"
                    style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 36, 'wght' 300" }}
                  >
                    {edu.school}
                  </h4>
                  <p className="text-sm text-foreground/50 font-light">{edu.degree}</p>
                  <p
                    className="text-xs text-muted-foreground mt-2"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {edu.location}
                  </p>
                </div>
              ))}

              {/* summary callout */}
              <div className="relative overflow-hidden border border-accent/20 p-6">
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 0% 50%, #c8f135, transparent 70%)" }}
                />
                <p
                  className="text-[10px] tracking-[0.2em] uppercase text-accent mb-3"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  Core strength
                </p>
                <p className="text-sm text-foreground/60 font-light leading-relaxed">
                  Translating business pain into measurable automation wins — from 35% faster approval
                  cycles to 45% fewer support tickets — using the simplest system that solves the problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────── */}
      <section id="contact" className="px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, #c8f135 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center justify-between mb-16 border-b border-border pb-4">
            <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
              Contact
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3
                className="text-5xl md:text-7xl font-light leading-[0.95] mb-8"
                style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 144, 'wght' 200" }}
              >
                Let&apos;s build
                <br />
                <em className="italic text-accent" style={{ fontVariationSettings: "'opsz' 144, 'wght' 300" }}>
                  something.
                </em>
              </h3>
              <p className="text-foreground/50 font-light text-[15px] leading-relaxed max-w-sm mb-10">
                Open to full-time roles, contracts, and consulting in Power Platform, RPA, and full-stack
                engineering. Based in Dallas, TX — open to remote.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:prathmeshhb@gmail.com"
                  className="group flex items-center gap-3 text-sm text-foreground/55 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>prathmeshhb@gmail.com</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="group flex items-center gap-3 text-sm text-foreground/55 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://github.com"
                  className="group flex items-center gap-3 text-sm text-foreground/55 hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <div>
              {sent ? (
                <div className="h-full flex flex-col justify-center">
                  <p
                    className="text-4xl font-light mb-3"
                    style={{ fontFamily: "'Fraunces', serif", fontVariationSettings: "'opsz' 72, 'wght' 300" }}
                  >
                    Got it —
                  </p>
                  <p className="text-foreground/50 font-light">
                    Thanks for reaching out. I&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {[
                    { label: "Name", key: "name", type: "text", placeholder: "Your name" },
                    { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key} className="flex flex-col gap-1.5">
                      <label
                        className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        value={formState[key as keyof typeof formState]}
                        onChange={(e) => setFormState({ ...formState, [key]: e.target.value })}
                        className="bg-transparent border-b border-border focus:border-accent outline-none py-2 text-sm text-foreground placeholder-muted-foreground transition-colors font-light"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-transparent border-b border-border focus:border-accent outline-none py-2 text-sm text-foreground placeholder-muted-foreground transition-colors resize-none font-light"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 self-start flex items-center gap-2 text-sm px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium"
                  >
                    Send message
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────── */}
      <footer className="px-6 md:px-12 py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
          © 2024 Prathmesh Baviskar
        </p>
        <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Geist Mono', monospace" }}>
          Dallas, TX · Open to remote
        </p>
      </footer>
    </div>
  );
}
