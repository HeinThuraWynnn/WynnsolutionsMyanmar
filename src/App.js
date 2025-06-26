import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { ChevronDown, Code, Smartphone, Globe, Zap, Users, Mail, Phone, ExternalLink, Github, Linkedin, Star, ArrowRight, Brain, Sparkles, Cpu, Network, Database, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Lazy load components for better performance
const FloatingParticles = lazy(() => import('./components/FloatingParticles'));
const GlowEffect = lazy(() => import('./components/GlowEffect'));

const AiPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  // Memoized mouse move handler for performance
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    // Throttle mouse move events for better performance
    let timeoutId;
    const throttledMouseMove = (e) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleMouseMove(e);
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  // Memoized services data
  const services = useMemo(() => [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI-Powered Web Development",
      description: "Next-generation websites with intelligent features, automation, and responsive design that adapts to user behavior.",
      features: ["Smart Analytics", "Auto-optimization", "AI Chatbots"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Intelligent Mobile Apps",
      description: "Cross-platform applications with machine learning capabilities, predictive analytics, and seamless user experiences.",
      features: ["ML Integration", "Predictive UI", "Smart Notifications"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "E-commerce Intelligence",
      description: "Smart shopping platforms with recommendation engines, dynamic pricing, and automated inventory management.",
      features: ["Smart Recommendations", "Dynamic Pricing", "Inventory AI"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration Services",
      description: "Transform your existing systems with artificial intelligence, automation, and smart decision-making capabilities.",
      features: ["Process Automation", "Smart Analytics", "Decision AI"]
    }
  ], []);

  // Memoized team data
  const teamMembers = useMemo(() => [
    {
      name: "Senior AI Developer",
      role: "Team Lead & AI Architect",
      description: "10+ years building intelligent systems, ML pipelines, and enterprise AI solutions.",
      skills: ["Python", "TensorFlow", "React", "Node.js"]
    },
    {
      name: "Frontend AI Specialist",
      role: "UI/UX + AI Integration",
      description: "Expert in creating intuitive interfaces with embedded AI capabilities.",
      skills: ["React", "Vue.js", "AI/UX", "WebGL"]
    },
    {
      name: "ML Engineer",
      role: "Machine Learning Expert",
      description: "Specialized in deploying ML models and creating intelligent user experiences.",
      skills: ["PyTorch", "MLOps", "Computer Vision", "NLP"]
    },
    {
      name: "DevOps AI Engineer",
      role: "Infrastructure & Automation",
      description: "Cloud infrastructure and CI/CD pipelines for AI-powered applications.",
      skills: ["AWS", "Docker", "Kubernetes", "MLflow"]
    }
  ], []);

  // Optimized TypewriterText component
  const TypewriterText = React.memo(({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text]);

    return (
      <span className={className}>
        {displayText}
        <span className="animate-pulse" aria-hidden="true">|</span>
      </span>
    );
  });

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Wynn AI Solutions Myanmar - AI-Powered Development & Intelligent Business Solutions</title>
        <meta name="description" content="Expert AI-powered web development, mobile apps, and intelligent business solutions in Myanmar. Transform your business with cutting-edge artificial intelligence and machine learning." />
        <meta name="keywords" content="AI development Myanmar, web development, mobile apps, artificial intelligence, machine learning, React developer, Myanmar tech, Hein Thura Wynn" />
        <link rel="canonical" href="https://heinthurawynnn.github.io" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
        <Suspense fallback={<div className="fixed inset-0 pointer-events-none" />}>
          <FloatingParticles />
          <GlowEffect mousePosition={mousePosition} />
        </Suspense>
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-cyan-500/20 z-50" role="navigation" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Brain className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Wynn AI Solutions
                </span>
              </div>
              <div className="hidden md:flex space-x-8" role="menubar">
                {['Home', 'Services', 'Team', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                    role="menuitem"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <header className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                <TypewriterText text="AI-Powered Solutions" />
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transforming businesses with intelligent web applications, mobile experiences, and cutting-edge AI integration in Myanmar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                  aria-label="Start your AI journey with Wynn Solutions"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <a 
                  href="tel:+959971879637"
                  className="px-8 py-4 border border-cyan-500 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2"
                  aria-label="Call Wynn Solutions at +959 971 879 637"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call +959 971 879 637
                </a>
              </div>
            </header>
            
            {/* Technology Stack */}
            <section className="relative mt-16" aria-labelledby="tech-stack">
              <h2 id="tech-stack" className="sr-only">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                {[
                  { icon: <Cpu className="w-12 h-12" />, label: "AI/ML", description: "Artificial Intelligence and Machine Learning" },
                  { icon: <Network className="w-12 h-12" />, label: "Cloud", description: "Cloud Computing Solutions" },
                  { icon: <Shield className="w-12 h-12" />, label: "Security", description: "Cybersecurity Solutions" },
                  { icon: <Sparkles className="w-12 h-12" />, label: "Innovation", description: "Innovative Technology Solutions" }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    style={{ animationDelay: `${index * 0.2}s` }}
                    role="img"
                    aria-label={tech.description}
                  >
                    <div className="text-cyan-400 mb-2 flex justify-center" aria-hidden="true">{tech.icon}</div>
                    <p className="text-gray-300 text-sm font-medium">{tech.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 relative" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Intelligent Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We create next-generation digital experiences powered by artificial intelligence and cutting-edge technology.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="group p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Service features">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                        role="listitem"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 relative" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="team-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team combines years of experience with cutting-edge AI expertise to deliver exceptional results.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <article
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center" aria-hidden="true">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-white">
                    {member.name}
                  </h3>
                  <p className="text-purple-300 text-center mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm text-center mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center" role="list" aria-label="Team member skills">
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                        role="listitem"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Connect With AI Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to revolutionize your business with AI? Let's discuss your next intelligent solution.
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <address className="space-y-8 not-italic">
                <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
                  <Mail className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <a href="mailto:heinthurawynn.developer@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      heinthurawynn.developer@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
                  <Phone className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <a href="tel:+959971879637" className="text-gray-300 hover:text-cyan-400 transition-colors">
                      +959 971 879 637
                    </a>
                  </div>
                </div>

                <div className="flex space-x-6" role="list" aria-label="Social media links">
                  <a 
                    href="https://www.upwork.com/freelancers/~01b657b9e93ff6608f" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110"
                    aria-label="Visit Hein Thura Wynn's Upwork profile"
                    role="listitem"
                  >
                    <ExternalLink className="w-6 h-6 text-white" aria-hidden="true" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/hein-thura-wynn-developer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
                    aria-label="Visit Hein Thura Wynn's LinkedIn profile"
                    role="listitem"
                  >
                    <Linkedin className="w-6 h-6 text-white" aria-hidden="true" />
                  </a>
                  <a 
                    href="https://www.facebook.com/heinthurawynnn/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-110"
                    aria-label="Visit Hein Thura Wynn's Facebook profile"
                    role="listitem"
                  >
                    <Star className="w-6 h-6 text-white" aria-hidden="true" />
                  </a>
                </div>
              </address>

              <div className="relative">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-6 text-center text-white">Start Your AI Project</h3>
                  <div className="space-y-4">
                    <button 
                      className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                      aria-label="Schedule an AI consultation with Wynn Solutions"
                    >
                      Schedule AI Consultation
                    </button>
                    <button 
                      className="w-full px-6 py-4 border border-cyan-500 rounded-xl text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                      aria-label="Request a quote for your project"
                    >
                      Request Quote
                    </button>
                    <button 
                      className="w-full px-6 py-4 border border-purple-500 rounded-xl text-purple-400 font-semibold hover:bg-purple-500/10 transition-all duration-300"
                      aria-label="View Wynn Solutions portfolio"
                    >
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Wynn AI Solutions Myanmar. Powered by Artificial Intelligence.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AiPortfolio;