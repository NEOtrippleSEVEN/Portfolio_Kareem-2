const Skills = () => {
  const skillCategories = [
    {
      title: 'Foundation',
      icon: '🔧',
      skills: ['C', 'Bash', 'Linux/UNIX', 'Make', 'Git/GitHub']
    },
    {
      title: 'Core Languages',
      icon: '💻',
      skills: ['Python', 'TypeScript', 'JavaScript']
    },
    {
      title: 'Web & Frontend',
      icon: '🌐',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Next.js']
    },
    {
      title: 'Backend & APIs',
      icon: '⚙️',
      skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'Automation & Tools',
      icon: '🤖',
      skills: ['N8N', 'Make (Integromat)', 'API Integration', 'Web Scraping']
    },
    {
      title: 'Design & Other',
      icon: '🎨',
      skills: ['Adobe Illustrator', 'NumPy', 'VS Code', 'FabLab Access']
    }
  ];

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom websites, e-commerce platforms, and web applications built with modern technologies.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Dashboard & Analytics',
      description: 'Data visualization dashboards with real-time analytics, predictions, and intelligent insights.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Business Automation',
      description: 'Workflow automation, email systems, calendar integrations, and custom API solutions.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Branding & Design',
      description: 'Logo design, brand identity, and product design for startups and small businesses.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'System Development',
      description: 'Custom systems, backend architecture, and infrastructure solutions for complex requirements.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Something Else?',
      description: 'Have a unique project in mind? Let\'s discuss how I can help bring your vision to life.'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-[#0d0d14]">
      <div className="container-custom px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-4 block">
            Skills & Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What I <span className="gradient-text">Bring to the Table</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A versatile skill set combining technical expertise with business understanding.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="gradient-border p-4 card-hover"
            >
              <div className="text-2xl mb-3">{category.icon}</div>
              <h3 className="text-sm font-semibold text-white mb-3">{category.title}</h3>
              <ul className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-xs text-gray-500">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Services I Offer
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            End-to-end solutions for businesses looking to grow their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="gradient-border p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
