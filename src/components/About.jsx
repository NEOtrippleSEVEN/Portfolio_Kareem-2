const About = () => {
  return (
    <section id="about" className="section-padding bg-[#0a0a0f]">
      <div className="container-custom px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div>
            <span className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              From Sales to{' '}
              <span className="gradient-text">Software Engineering</span>
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                I'm <span className="text-white font-medium">Kareem Murched</span>,
                a student at <span className="text-white font-medium">42 Wolfsburg</span> with
                a background in sales and business development. After running multiple startups,
                I discovered my passion for building the technology that powers modern businesses.
              </p>
              <p>
                Today, I combine my business acumen with technical expertise to create
                solutions that actually matter. Whether it's an e-commerce platform that
                drives sales, a dashboard that saves hours of manual work, or an automation
                system that runs 24/7 - I build tools that deliver real value.
              </p>
              <p>
                My entrepreneurial journey taught me that the best technology is invisible -
                it just works. That's the standard I hold myself to with every project.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="gradient-border p-4">
                <div className="text-2xl font-bold text-white">42</div>
                <div className="text-sm text-gray-500">Wolfsburg Student</div>
              </div>
              <div className="gradient-border p-4">
                <div className="text-2xl font-bold text-white">Germany</div>
                <div className="text-sm text-gray-500">Based In</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="gradient-border p-8 glow">
              <div className="space-y-6">
                {/* Journey Timeline */}
                <h3 className="text-lg font-semibold text-white mb-6">My Journey</h3>

                {[
                  {
                    icon: '💼',
                    title: 'Business & Sales',
                    description: 'Started with sales and business development, learning what makes businesses tick.'
                  },
                  {
                    icon: '🚀',
                    title: 'Multiple Startups',
                    description: 'Founded and co-founded ventures, gaining hands-on entrepreneurial experience.'
                  },
                  {
                    icon: '💻',
                    title: '42 Wolfsburg',
                    description: 'Joined the peer-to-peer coding school to master software engineering.'
                  },
                  {
                    icon: '⚡',
                    title: 'Tech Entrepreneur',
                    description: 'Now building digital solutions that help businesses grow and automate.'
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
