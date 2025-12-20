import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, ExternalLink, Download } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => { window.removeEventListener('scroll', handleScroll); window.removeEventListener('mousemove', handleMouse); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => setVisibleSections(prev => ({ ...prev, [entry.target.id]: entry.isIntersecting })));
    }, { threshold: 0.1 });
    document.querySelectorAll('section[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const projects = [
    { title: "Bank Customer Churn Prediction", desc: "Built an intelligent churn prediction system analyzing 10,000+ customer records with 14 behavioral features. Developed a custom ANN achieving 86.2% accuracy and compared it with H2O AutoML's Stacked Ensemble. Engineered key features like BalanceSalaryRatio and TenureByAge, enabling real-time probability scoring for targeted retention campaigns.", tags: ["Python", "H2O AutoML", "Keras", "TensorFlow", "Pandas"], github: "https://github.com/vaishnavi1064/Bank-Customer-Churn-Prediction-using-H2O-Auto-ML", featured: true },
    { title: "Parkinson's Disease Prediction", desc: "Developed an accessible voice-based diagnostic tool analyzing 22 acoustic biomarkers from 195 voice recordings. Achieved 89.7% accuracy using Random Forest with zero false negatives — critical for clinical safety. Compared 5 ML algorithms systematically to ensure optimal model selection for healthcare deployment.", tags: ["Python", "Scikit-learn", "Random Forest", "SVM", "Seaborn"], github: "https://github.com/vaishnavi1064/Parkinson-s-Disease-Prediction", featured: true },
    { title: "Sentiment Analysis using NLP", desc: "Created a deep learning NLP pipeline for sentiment classification using LSTM neural networks. Implemented comprehensive text preprocessing with TF-IDF and Word2Vec embeddings, achieving strong performance validated through ROC-AUC curves and F1 scores. Visualized insights through WordCloud analysis.", tags: ["Python", "LSTM", "TensorFlow", "NLTK", "Word2Vec"], github: "https://github.com/vaishnavi1064/Sentiment-Analysis-using-NLP", featured: true },
    { title: "Geo-Spatial Restaurant Recommendation Engine", desc: "Engineered a recommendation system processing 100K+ Yelp records using Spark. Applied K-Means clustering with silhouette analysis achieving 0.68 score for geographic segmentation. Built ranking algorithm delivering top-5 recommendations with 85% relevance improvement and <2s query latency.", tags: ["Spark", "SQL", "Plotly", "K-Means", "Python"], featured: false },
    { title: "Job Portal Application", desc: "Developed a full-stack MERN application connecting job seekers with employers. Implemented secure JWT authentication, RESTful APIs for CRUD operations, and MongoDB Atlas for scalable cloud storage. Features include role-based access for recruiters and job seekers.", tags: ["React", "Node.js", "MongoDB", "JWT", "Express"], github: "https://github.com/vaishnavi1064/jobportal", featured: false },
    { title: "SaaS Analytics Platform", desc: "Built an enterprise analytics dashboard that identified $15K/month API cost inefficiency. Conducted A/B tests (n=500, p<0.05) to validate routing optimizations, achieving 40% per-user cost reduction. Created D3.js dashboard benchmarking 10+ LLMs via HELM frameworks.", tags: ["AWS", "D3.js", "Python", "A/B Testing"], featured: false }
  ];

  const stack = {
    "Languages": ["Python", "R", "SQL", "Java", "JavaScript", "HTML"],
    "Data Engineering & Big Data": ["AWS (EC2, S3, DynamoDB)", "Spark", "Hive", "Kafka", "Docker", "Kubernetes", "Splunk", "Microsoft Azure"],
    "Machine Learning & Data Science": ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "H2O AutoML", "Pandas", "NumPy", "OpenAI", "RAG", "NLP", "Neural Networks", "SVM", "Random Forest", "Diffusion Models", "Fine-tuning"],
    "Visualization & Analytics": ["Power BI", "Tableau", "Plotly", "Seaborn", "Matplotlib", "A/B Testing", "Statistical Analysis", "Time Series"],
    "Developer Tools": ["Git", "GitHub Copilot", "Linux (CLI)", "IBM Cloud", "Agile", "DSA", "OOP"]
  };

  const experience = [
    { company: "IBM SkillsBuild", role: "Data Science Intern", period: "Jun - Sep 2024", highlights: ["ETL pipeline processing 50K+ records, 90% error reduction", "3 ML models deployed on IBM Cloud, 71% → 82%+ accuracy", "Reduced deployment cycles from 2 days to 3 hours"] },
    { company: "Ministry of Education, India", role: "Software Developer Intern", period: "Jul - Sep 2024", highlights: ["40% login latency reduction for 5,000+ users", "Firebase optimizations reducing drop-off by 15%"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-x-hidden font-light">
      {/* Minimal Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl bg-teal-500/30 transition-all duration-1000 ease-out"
          style={{ left: `${mousePos.x * 60}%`, top: `${mousePos.y * 60}%`, transform: 'translate(-50%, -50%)' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl bg-pink-500/30 transition-all duration-1000 ease-out"
          style={{ left: `${100 - mousePos.x * 40}%`, top: `${100 - mousePos.y * 40}%`, transform: 'translate(-50%, -50%)' }} />
      </div>

      {/* Simple Header - ON TOP OF BANNER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => scrollTo('home')} className="text-xl font-medium tracking-tight">
            <span className="text-teal-400">vaishnavi</span><span className="text-pink-300">.</span>
          </button>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8 text-sm">
              {['projects', 'experience', 'skills', 'contact'].map(item => (
                <button key={item} onClick={() => scrollTo(item)} className="text-white font-semibold hover:text-teal-400 transition-colors capitalize drop-shadow-lg">{item}</button>
              ))}
            </nav>
            <div className="flex gap-3">
              <a href="https://github.com/vaishnavi1064" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-colors drop-shadow-lg"><Github size={18} strokeWidth={2.5} /></a>
              <a href="https://linkedin.com/in/vaishnavichaughule" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors drop-shadow-lg"><Linkedin size={18} strokeWidth={2.5} /></a>
            </div>
          </div>
        </div>
      </header>

      {/* BANNER - Same width as content sections */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6">
        <div className="w-full h-[50vh] rounded-2xl overflow-hidden">
          <img 
            src="https://i.imgur.com/V0qrlar.jpeg" 
            alt="Seattle Skyline"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* HOME Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-[30vh]">
        <div className="relative z-10 max-w-3xl text-center" style={{ transform: `translateY(${scrollY * 0.3}px)`, opacity: Math.max(0, 1 - scrollY * 0.002) }}>
          
          {/* Profile circle with YOUR PHOTO - moved closer to name */}
          <div className="mb-4 inline-block relative">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-pink-400 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-teal-400 to-pink-400 p-[2px]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="https://i.imgur.com/mG5P7Q4.jpeg" 
                    alt="Vaishnavi Chaughule"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-extralight tracking-tight mb-4 animate-slide-up">
            <span className="text-white">Vaishnavi </span>
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">Chaughule</span>
          </h1>

          {/* Email */}
          <p className="text-white font-medium mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            vaishnavi10chaughule@gmail.com
          </p>

          {/* Witty Tagline */}
          <p className="text-lg md:text-xl text-slate-400 mb-8 font-light animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Training models by day. <span className="text-teal-400">Chasing mountain peaks</span> by weekend.<br/>
            <span className="text-pink-300">Debugging life</span>, one epoch at a time.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <button onClick={() => scrollTo('projects')} className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 transition-all">
              View Projects
            </button>
            <a href="#" className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-full text-slate-300 hover:border-pink-400 hover:text-pink-300 transition-all">
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Location badge */}
          <div className="flex justify-center gap-4 mt-10 text-sm text-slate-500 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <span className="flex items-center gap-2"><MapPin size={14} /> Seattle, WA</span>
            <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">Open to Summer 2026</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <button onClick={() => scrollTo('about')} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-teal-400 transition-colors animate-bounce">
          <ChevronDown size={28} />
        </button>
      </section>

      {/* ABOUT Section */}
      <section id="about" className={`relative py-24 px-6 transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-extralight text-slate-300 leading-relaxed mb-8">
            Hi! I'm a <span className="text-teal-400">Data Scientist</span> & <span className="text-pink-300">ML Engineer</span> pursuing my Master's at <span className="text-white">Northeastern University</span>.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            I build intelligent systems that transform raw data into actionable insights and real-world impact. My work spans predictive analytics, deep learning, and full-stack development — from building churn prediction models that help businesses retain customers, to creating voice-based diagnostic tools for healthcare accessibility.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Beyond the code, I'm passionate about community building. As Program Manager at the GameCube Club and Cloud Computing Lead at Google Developer Groups, I've organized 10+ events and trained 500+ developers. When I'm not training models or leading workshops, you'll find me hiking the Pacific Northwest trails, chasing mountain peaks, and fueling it all with way too much coffee.
          </p>
        </div>
      </section>

      {/* PROJECTS Section */}
      <section id="projects" className={`relative py-24 px-6 transition-all duration-1000 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extralight mb-12">
            <span className="text-teal-400">Projects</span>
          </h2>

          <div className="space-y-4">
            {projects.map((p, i) => (
              <a key={i} href={p.github || '#'} target="_blank" rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-teal-500/30 hover:bg-slate-900/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    {p.featured && <span className="text-xs text-pink-400 uppercase tracking-wider mb-2 block">Featured Project</span>}
                    <h3 className="text-xl font-medium text-white group-hover:text-teal-400 transition-colors mb-2 flex items-center gap-2">
                      {p.title}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-400 border border-slate-700/50">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE Section */}
      <section id="experience" className={`relative py-24 px-6 transition-all duration-1000 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extralight mb-12">
            <span className="text-pink-300">Experience</span>
          </h2>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-pink-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">{exp.role}</h3>
                    <p className="text-teal-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start gap-3">
                      <span className="text-teal-400 mt-1">→</span>{h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL STACK Section */}
      <section id="stack" className={`relative py-24 px-6 transition-all duration-1000 ${visibleSections.stack ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extralight mb-12">
            <span className="text-cyan-400">Technical Stack</span>
          </h2>
          <div className="space-y-8">
            {Object.entries(stack).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4 font-medium">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full text-sm bg-slate-900/30 text-slate-300 border border-slate-800/50 hover:border-teal-500/50 hover:text-teal-400 transition-all cursor-default">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS Section */}
      <section id="skills" className={`relative py-24 px-6 transition-all duration-1000 ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extralight mb-12">
            <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="space-y-8">
            {Object.entries(stack).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4 font-medium">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full text-sm bg-slate-900/30 text-slate-300 border border-slate-800/50 hover:border-teal-500/50 hover:text-teal-400 transition-all cursor-default">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT Section */}
      <section id="contact" className={`relative py-24 px-6 transition-all duration-1000 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extralight mb-6">
            <span className="text-teal-400">Let's connect!</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Appreciate you stopping by. If a project sparked something or you just want to chat about ML, mountains, or anything in between — drop me a line.
            <br /><br />
            <span className="text-slate-500">Always keen to collaborate, learn, and ship new ideas.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:vaishnavi10chaughule@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 transition-all">
              <Mail size={18} /> Email Me
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-full text-slate-300 hover:border-pink-400 hover:text-pink-300 transition-all">
              <Download size={18} /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            {[{ icon: Mail, href: 'mailto:vaishnavi10chaughule@gmail.com', label: 'Mail' },
              { icon: Github, href: 'https://github.com/vaishnavi1064', label: 'Github' },
              { icon: Linkedin, href: 'https://linkedin.com/in/vaishnavichaughule', label: 'LinkedIn' }
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-slate-500 hover:text-teal-400 transition-colors">
                <Icon size={20} />
                <span className="text-xs">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 text-center border-t border-slate-800/50">
        <p className="text-slate-600 text-sm">© 2025 Vaishnavi Chaughule · Built with 🏔️ & ☕</p>
      </footer>

      <style>{`
        @keyframes slide-up { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }
      `}</style>
    </div>
  );
}