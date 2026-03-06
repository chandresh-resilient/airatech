import './App.css'

import { useEffect, useState } from 'react'

const navItems = [
  { id: 'capabilities', label: 'Services' },
  { id: 'delivery', label: 'Our Approach' },
  { id: 'reviews', label: 'About Us' },
  { id: 'contact', label: 'Contact Us' },
]

const rotatingHeadlines = [
  'Innovative IT Solutions for Growth',
  'Technology Services You Can Trust',
  '15+ Years of Proven IT Excellence',
]

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '24/7', label: 'Production Support' },
  { value: '5-Step', label: 'Delivery Approach' },
  { value: '100%', label: 'Customer Focus' },
]

const capabilities = [
  {
    title: 'Application Development & Re-Design',
    duration: 'Service Area',
    text: 'Custom application engineering and modernization tailored to your business goals, including architecture planning, UI refresh, and performance optimization to improve user experience and long-term maintainability.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    icon: 'AD',
  },
  {
    title: 'Automation of Processes & Business Planning',
    duration: 'Service Area',
    text: 'Workflow automation and process optimization that reduce manual effort, improve data accuracy, and create consistent operational flows across departments for faster and more predictable execution.',
    image:
      'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=80',
    icon: 'AP',
  },
  {
    title: 'Database Design, Conversion & Migration',
    duration: 'Service Area',
    text: 'Reliable database architecture with secure migration and conversion planning, focused on data integrity, minimal downtime, and scalable performance as your systems and transaction volume grow.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    icon: 'DB',
  },
  {
    title: 'Extranet & Intranet Development',
    duration: 'Service Area',
    text: 'Secure internal and partner-facing portals that improve collaboration, centralize critical information, and streamline communication workflows for teams, vendors, and stakeholders.',
    image:
      'https://a3techservice.com/wp-content/uploads/elementor/thumbs/successful-happy-group-of-people-learning-software-engineering-and-business-during-presentation-2-qrax4ghbhw8hcsu22g3f6v6mw08r5wk455d60ivhmo.jpg',
    icon: 'EX',
  },
  {
    title: 'Software Consulting & Integration',
    duration: 'Service Area',
    text: 'Strategic consulting and integration support across modern and legacy enterprise systems.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    icon: 'SI',
  },
  {
    title: 'Web Development & Web Services',
    duration: 'Service Area',
    text: 'Business-focused websites and connected web services built for reliability and performance.',
    image:
      'https://a3techservice.com/wp-content/uploads/elementor/thumbs/software-engineers-working-on-project-4-qrax4dns72v3p4ghh7kbc038pr673ai75ryb3mmbk0.jpg',
    icon: 'WD',
  },
  {
    title: 'Data Warehousing & Data Mining',
    duration: 'Service Area',
    text: 'Structured data platforms and insight pipelines that enable smarter decision-making.',
    image:
      'https://images.unsplash.com/photo-1551281044-8af2f7f5b1ea?auto=format&fit=crop&w=1200&q=80',
    icon: 'DW',
  },
  {
    title: 'Mainframe & Unix Application Support',
    duration: 'Service Area',
    text: 'Stable support and extension of mission-critical mainframe and Unix-based applications.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    icon: 'MU',
  },
  {
    title: 'Platform Migrations & 24/7 Production Support',
    duration: 'Service Area',
    text: 'End-to-end migration execution with ongoing around-the-clock monitoring and support.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    icon: 'PS',
  },
]

const deliverySteps = [
  {
    step: '01',
    title: 'Consultation',
    text: 'We begin with discovery to understand your business challenges, goals, and technical priorities.',
  },
  {
    step: '02',
    title: 'Solution Design',
    text: 'Our team builds a practical blueprint aligned with your operations, budget, and growth targets.',
  },
  {
    step: '03',
    title: 'Implementation',
    text: 'We deploy and integrate the recommended technologies with focus on stability and business continuity.',
  },
  {
    step: '04',
    title: 'Support and Maintenance',
    text: 'Post-launch support keeps systems secure, available, and optimized through proactive management.',
  },
  {
    step: '05',
    title: 'Continuous Improvement',
    text: 'We refine and evolve your IT environment continuously to support long-term performance.',
  },
]

const technologies = [
  'Mendix',
  'OutSystems',
  'React',
  'Documentum',
  'Java',
  'Node.js',
  'Angular',
  'Vue.js',
  'Kotlin',
  'Caspio',
  'PowerApps',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
]

const whyChooseUs = [
  'Extensive Experience',
  'Tailored Solutions',
  'Innovative Technologies',
  'Customer-Centric Approach',
  'Skilled Professionals',
  'Commitment to Quality',
  'Comprehensive Support',
  'Proven Success',
]

const leaderStats = [
  { value: '15+', label: 'Years Experience' },
  { value: '24/7', label: 'Support & Monitoring' },
  { value: '5', label: 'Delivery Stages' },
  { value: 'Mon-Fri', label: '9:00 AM - 5:00 PM' },
]

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  toEmail: import.meta.env.VITE_CONTACT_TO_EMAIL || 'info@a3techservice.com',
}

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
}

function App() {
  const [activeHeadline, setActiveHeadline] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState(initialFormState)
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeadline((current) => (current + 1) % rotatingHeadlines.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))

    if (formStatus.type) {
      setFormStatus({ type: '', message: '' })
    }
  }

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const trimmedData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    }

    if (!trimmedData.fullName || !trimmedData.email || !trimmedData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in full name, email, and requirement details.',
      })
      return
    }

    if (!isValidEmail(trimmedData.email)) {
      setFormStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    const hasEmailConfig =
      emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey

    if (!hasEmailConfig) {
      setFormStatus({
        type: 'error',
        message:
          'Email integration is not configured yet. Add EmailJS keys in .env to enable sending.',
      })
      return
    }

    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: emailConfig.serviceId,
          template_id: emailConfig.templateId,
          user_id: emailConfig.publicKey,
          template_params: {
            to_email: emailConfig.toEmail,
            from_name: trimmedData.fullName,
            from_email: trimmedData.email,
            phone: trimmedData.phone || 'Not provided',
            message: trimmedData.message,
          },
        }),
      })

      if (!response.ok) {
        throw new Error('Email request failed')
      }

      setFormData(initialFormState)
      setFormStatus({
        type: 'success',
        message: 'Thank you. Your request has been sent successfully.',
      })
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Unable to send your request right now. Please try again shortly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar-inner container">
          <a href="#home" className="logo">
            <img
              className="logo-mark"
              src="/src/assets/a3logo.png"
              alt="A3 Services logo"
            />
            <span>A3 Services</span>
          </a>

          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn primary menu-mobile-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Start a Conversation
            </a>
          </nav>

          <a href="#contact" className="btn primary btn-top">
            Start a Conversation
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            src="https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_25fps.mp4"
          />
          <div className="overlay" />
          <div className="container hero-content">
            <div className="hero-layout">
              <div className="hero-copy">
                <p className="eyebrow">A3 Services</p>
                <div className="hero-headline-slot" aria-live="polite">
                  {rotatingHeadlines.map((headline, index) => (
                    <h1
                      key={headline}
                      className={`headline-item ${index === activeHeadline ? 'is-active' : ''}`}
                      aria-hidden={index !== activeHeadline}
                    >
                      {headline}
                    </h1>
                  ))}
                </div>
                <p className="hero-subtext">
                  A3 Tech Services delivers innovative IT solutions with over 15 years of
                  experience, helping organizations modernize operations and achieve measurable
                  business outcomes.
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn primary">
                    Start a Conversation
                  </a>
                  <a href="#capabilities" className="btn ghost">
                    Explore Capabilities
                  </a>
                </div>
              </div>
              <aside className="hero-visual" aria-label="Customer support visual highlights">
                <div className="visual-main">
                  <img
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
                    alt="Corporate customer success specialist assisting a client"
                    loading="eager"
                  />
                  <div className="visual-main-overlay">
                    <span>Client Support</span>
                    <strong>24/7 Enterprise Helpdesk</strong>
                  </div>
                </div>
                <div className="visual-side">
                  <video
                    className="visual-side-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4"
                  />
                  <div className="visual-analytics" aria-hidden="true">
                    <div className="pulse-dot" />
                    <p>Automation coverage</p>
                    <strong>98.2%</strong>
                    <div className="data-bars">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="hero-float-chip chip-one">Live Ticket Routing</div>
                <div className="hero-float-chip chip-two">AI Assisted Resolution</div>
              </aside>
            </div>
            <div className="metrics">
              {stats.map((item) => (
                <article key={item.label}>
                  <h2>{item.value}</h2>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="capabilities">
          <h2 className="title">Our Services</h2>
          <p className="subtitle">
            Innovative solutions for a connected world. We provide end-to-end IT services
            designed to support technology advancement and business success.
          </p>
          <div className="service-timeline">
            {capabilities.slice(0, 4).map((service, index) => (
              <article
                className={`service-timeline-item ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
                key={service.title}
              >
                <div className="service-timeline-marker" aria-hidden="true">
                  <span />
                </div>
                <div className="service-timeline-content">
                  <p className="service-timeline-step">Service {String(index + 1).padStart(2, '0')}</p>
                  <div className="service-timeline-head">
                    <span className="service-timeline-icon" aria-hidden="true">
                      {service.icon}
                    </span>
                    <div>
                      <h3>{service.title}</h3>
                      <p className="service-timeline-duration">{service.duration}</p>
                    </div>
                  </div>
                  <p>{service.text}</p>
                  <div className="service-timeline-image">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section leaders">
          <div className="container">
            <h2 className="title">Why Choose Us</h2>
            <p className="subtitle">
              Partner with a proven leader in IT solutions. We combine experience, quality,
              and customer-first delivery to support your long-term goals.
            </p>
            <div className="leaders-grid">
              {whyChooseUs.map((leader) => (
                <article className="leader-card" key={leader}>
                  <span>{leader}</span>
                </article>
              ))}
            </div>
            <div className="leaders-stats">
              {leaderStats.map((item) => (
                <article className="leader-stat-card" key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <h2>Ready to transform your technology and achieve business goals?</h2>
            <a href="#contact" className="btn primary">
              Make Appointment
            </a>
          </div>
        </section>

        <section className="section container" id="delivery">
          <h2 className="title">Our Approach</h2>
          <p className="subtitle">
            A clear five-step delivery framework built to ensure practical implementation,
            quality outcomes, and continuous improvement.
          </p>
          <div className="timeline">
            {deliverySteps.map((step) => (
              <article key={step.step} className="timeline-step">
                <div className="timeline-circle">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process" id="reviews">
          <div className="container">
            <h2 className="title">About Us</h2>
            <p className="subtitle">
              Welcome to A3 Tech Services, a premier IT solutions provider dedicated to
              innovative technology and exceptional service. With over 15 years of experience,
              we are a trusted partner for businesses seeking to harness technology for growth.
            </p>
            <article className="journey-card">
              <h3>Our Mission</h3>
              <p>
                A3 Tech Services, where technology meets excellence. We provide cutting-edge
                solutions tailored to evolving business needs across diverse industries.
              </p>
            </article>
          </div>
        </section>

        <section className="section container" id="technologies">
          <h2 className="title">Technologies We Specialize In</h2>
          <div className="tech-grid">
            {technologies.map((tech) => (
              <div key={tech} className="tech-item">
                {tech}
              </div>
            ))}
          </div>
        </section>

        <section className="section contact container" id="contact">
          <h2 className="title">Reach Out to A3 Services</h2>
          <p className="subtitle">
            Contact us to discuss your IT needs and learn how we can assist with practical,
            high-quality technology solutions.
          </p>
          <div className="contact-meta">
            <p>
              <strong>Phone</strong>
            </p>
            <p>+1 703-814-3133</p>
            <p>
              <strong>Email</strong>
            </p>
            <p>info@a3techservice.com</p>
            <p>
              <strong>Address</strong>
            </p>
            <p>3812 Pineland St, Fairfax, VA 22031</p>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
            <div className="contact-row">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                autoComplete="name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleInputChange}
              autoComplete="tel"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Describe your requirement..."
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            {formStatus.message ? (
              <p className={`form-status ${formStatus.type}`} role="status" aria-live="polite">
                {formStatus.message}
              </p>
            ) : null}
            <button type="submit" className="btn primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        &copy; 2026 A3 Services. IT Solutions &amp; Service Company.
      </footer>
    </div>
  )
}

export default App
