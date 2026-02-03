const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AERO Performance',
      category: 'E-commerce & Branding',
      description: 'Complete e-commerce platform for athletic nasal strips. Full product design, branding, logo creation, and website development - all delivered in under 2 weeks.',
      tech: ['React', 'Node.js', 'Adobe Illustrator', 'Product Design'],
      highlights: ['Full branding in 2 weeks', 'Product design & development', 'E-commerce integration'],
      color: 'from-purple-500 to-pink-500',
      link: null,
      image: '/images/AERO Performance (Homepage).png'
    },
    {
      id: 2,
      title: 'North Star Invest',
      category: 'Fintech Platform',
      description: 'AI-powered investment analytics platform for PE/VC firms. Features predictive analysis with 60% accuracy, portfolio tracking, and intelligent investment recommendations.',
      tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'AI/ML'],
      highlights: ['60% prediction accuracy', 'Real-time portfolio analytics', 'AI-powered insights'],
      color: 'from-blue-500 to-cyan-500',
      link: null,
      image: '/images/North-Star-Invest Dashboard.png'
    },
    {
      id: 3,
      title: 'Car Deal Finder Pro',
      category: 'Dashboard & Automation',
      description: 'Intelligent car deal analysis system with AI-powered scoring. Features weighted algorithms, eBay API integration, and automated deal alerts.',
      tech: ['React', 'Python', 'Web Scraping', 'APIs', 'N8N'],
      highlights: ['AI deal scoring', 'Diamond deal alerts', 'Automated analysis'],
      color: 'from-green-500 to-emerald-500',
      link: 'https://car-deal-finderr.netlify.app',
      image: '/images/Car-Deal-Finder (Dashboard, Search engine).png'
    },
    {
      id: 4,
      title: 'Halabi Studio',
      category: 'E-commerce & Booking',
      description: 'Designer clothing shop and sewing course platform for a local business in Göttingen. Features course booking, automated calendar, and full shop functionality.',
      tech: ['React', 'Tailwind CSS', 'Calendar Integration', 'E-commerce'],
      highlights: ['Course booking system', 'Automated calendar', 'Full branding'],
      color: 'from-blue-400 to-blue-600',
      link: 'https://halabi-shop.netlify.app',
      image: '/images/Halabi-Schneiderkunst (Hompage).png'
    },
    {
      id: 5,
      title: 'Space Shooter 95',
      category: 'Game Development',
      description: 'Retro-style arcade space shooter game built in just 2 hours. Features 42 levels (a nod to my school), power-ups, and classic 90s aesthetics.',
      tech: ['JavaScript', 'HTML5 Canvas', 'Game Logic'],
      highlights: ['Built in 2 hours', '42 levels', 'Retro aesthetics'],
      color: 'from-pink-500 to-purple-500',
      link: null,
      image: '/images/GUNRUNNER Game(screenshot#1).png'
    },
    {
      id: 6,
      title: '42 Projects',
      category: 'Systems Programming',
      description: 'Low-level C projects from 42 Wolfsburg: libft (C library), get_next_line (file reading), ft_printf (printf recreation), push_swap (sorting algorithm), Born2beRoot (VM setup).',
      tech: ['C', 'Bash', 'Linux', 'Make', 'Git'],
      highlights: ['Memory management', 'System administration', 'Algorithm optimization'],
      color: 'from-gray-500 to-gray-700',
      link: 'https://github.com/NEOtrippleSEVEN',
      image: null
    }
  ];

  return (
    <section id="projects" className="section-padding bg-[#0a0a0f]">
      <div className="container-custom px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of production work spanning e-commerce, fintech, automation, and more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group gradient-border overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center`}>
                    <span className="text-white/80 text-lg font-medium">{project.title}</span>
                  </div>
                )}
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-purple-400 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-purple-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-3">{project.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/NEOtrippleSEVEN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
