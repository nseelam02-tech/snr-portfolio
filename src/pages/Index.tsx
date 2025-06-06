
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Mail, MapPin, Calendar, Download, Menu, X, Phone, Heart, Camera, Code, Plane } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadResume = () => {
    // Create a placeholder resume download
    toast({
      title: "Resume Download",
      description: "Resume download will be available soon. Please contact me directly for now.",
    });
  };

  const projects = [
    {
      title: "SNR FoodleR - Food & Travel Blog",
      description: "A comprehensive food and travel blog featuring recipe tutorials, restaurant reviews, and cultural exploration with advanced content management and social integration.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
      liveDemo: "https://snrfoodler.com",
      github: "#",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop"
    },
    {
      title: "Real-Time Financial Dashboard",
      description: "Interactive dashboard for financial data visualization with live updates, responsive charts, and comprehensive data analytics for business intelligence.",
      technologies: ["React", "TypeScript", "Chart.js", "REST APIs", "Tailwind CSS"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      title: "XpressEats - Train Food Delivery",
      description: "Mobile-first food delivery app designed for train passengers with real-time tracking, regional cuisine options, and seamless ordering experience.",
      technologies: ["React Native", "Node.js", "MongoDB", "UI/UX Design", "Figma"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d90a?w=500&h=300&fit=crop"
    },
    {
      title: "TNV Fashion E-commerce Platform",
      description: "Modern e-commerce platform with advanced filtering, wishlist functionality, secure payment integration, and responsive mobile-first design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Stripe API"],
      liveDemo: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop"
    }
  ];

  const blogPosts = [
    {
      title: "Mastering the Art of Italian Pizza Dough",
      excerpt: "Discover the secrets behind creating the perfect pizza dough that rivals authentic Italian pizzerias with traditional techniques and modern tips...",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
      date: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "The Best Ever Fish Curry",
      excerpt: "A traditional coastal recipe passed down through generations, bringing authentic flavors and aromatic spices to your kitchen...",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      date: "March 10, 2024",
      readTime: "6 min read"
    },
    {
      title: "7 Cup Burfi | Seven Cups Sweet Recipe",
      excerpt: "Learn to make this classic Indian sweet that melts in your mouth with just seven simple ingredients and traditional cooking methods...",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=250&fit=crop",
      date: "March 5, 2024",
      readTime: "5 min read"
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js",
    "UI/UX Design", "Figma", "Adobe XD", "Photoshop", "Responsive Design", "Git", "GitHub", "MySQL", "Tailwind CSS"
  ];

  const interests = [
    { 
      category: "Food", 
      icon: <Heart className="w-8 h-8" />,
      items: ["Recipe Development", "Food Photography", "Culinary Traditions", "Restaurant Reviews"],
      color: "bg-red-50 border-red-200 hover:bg-red-100"
    },
    { 
      category: "Travel", 
      icon: <Plane className="w-8 h-8" />,
      items: ["Cultural Exploration", "Local Cuisines", "Travel Photography", "Adventure Planning"],
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    { 
      category: "Technology", 
      icon: <Code className="w-8 h-8" />,
      items: ["Web Development", "Design Systems", "UX Research", "Mobile Apps"],
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    { 
      category: "Creative", 
      icon: <Camera className="w-8 h-8" />,
      items: ["Content Creation", "Video Editing", "Digital Art", "Blogging"],
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    }
  ];

  const professionalWork = [
    {
      title: "Real-Time Financial Insights Dashboard",
      company: "FactSet (Offsite)",
      period: "Jan 2024 – April 2025 | Full Time",
      role: "Frontend Developer",
      description: "Developed a comprehensive real-time data dashboard for internal use, integrating live financial data using REST APIs. Built responsive UI with React.js and Chart.js, ensuring seamless data visualisation and real-time sync. Collaborated with backend teams to design scalable APIs and maintain performance under live updates.",
      technologies: ["React.js", "Chart.js", "REST APIs", "JavaScript", "Responsive Design"],
      type: "development"
    },
    {
      title: "Corporate Website Revamp & Maintenance",
      company: "PayodSoft Consulting Services (Offsite)",
      period: "March 2022 – Nov 2023 | Full Time", 
      role: "Frontend Developer",
      description: "Redesigned and maintained the company's main website, ensuring optimal performance, cross-browser compatibility, and responsive design. Used HTML, CSS, and JavaScript to build new sections and implement modern UI/UX enhancements. Coordinated with marketing and backend teams for regular updates and feature deployments.",
      technologies: ["HTML", "CSS", "JavaScript", "UI/UX Enhancements", "Cross-browser Compatibility"],
      type: "development"
    }
  ];

  const designTraining = [
    {
      title: "XpressEats – Rail Food Delivery App",
      company: "Designers Academy (Offsite)",
      period: "Jan 2025 – Mar 2025 | As a trainee",
      role: "UX/UI Designer",
      description: "Designed an end-to-end mobile experience to solve real train travel food issues like hygiene, limited options, and lack of customisation. Created comprehensive user flows, wireframes, high-fidelity mockups, and conducted extensive usability testing to ensure seamless ordering and delivery experience.",
      technologies: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Mobile Design"],
      type: "design",
      behanceLink: "https://www.behance.net/naveen_seelam",
      mediumLink: "https://medium.com/@snrdesigns"
    },
    {
      title: "TNV Collection – Fashion E-commerce App",
      company: "Designers Academy (Offsite)",
      period: "Jan 2025 – Mar 2025 | As a trainee",
      role: "UX/UI Designer", 
      description: "Reimagined an existing fashion website into a mobile-first shopping experience tailored for a modern, style-conscious audience. Conducted comprehensive user research, defined personas, built user flows, and developed a clean, elegant UI with strong visual hierarchy and improved conversion rates.",
      technologies: ["User Research", "Persona Development", "Style Guide", "Mobile-First Design", "Visual Hierarchy"],
      type: "design",
      behanceLink: "https://www.behance.net/naveen_seelam",
      mediumLink: "https://medium.com/@snrdesigns"
    }
  ];

  const mediaChannels = [
    {
      platform: "LinkedIn",
      handle: "@snrdesigns",
      description: "Professional updates and industry insights",
      color: "from-blue-600 to-blue-700",
      link: "https://www.linkedin.com/in/snrdesigns"
    },
    {
      platform: "Twitter",
      handle: "@SNR_Foodler",
      description: "Quick thoughts and daily updates",
      color: "from-gray-800 to-black",
      link: "https://twitter.com/SNR_Foodler"
    },
    {
      platform: "Instagram",
      handle: "@snr_foodler",
      description: "Food photography and travel stories",
      color: "from-purple-500 to-pink-500",
      link: "https://www.instagram.com/snr_foodler/"
    },
    {
      platform: "YouTube",
      handle: "@SNR_FoodleR",
      description: "Recipe tutorials and travel vlogs",
      color: "from-red-600 to-red-700",
      link: "https://www.youtube.com/@SNR_FoodleR"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation with smooth animations */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center transform hover:scale-105 transition-transform duration-200">
              <img 
                src="/lovable-uploads/977cc23d-9302-4d1c-9aae-a2e22dbbb34d.png" 
                alt="SNR Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105">About</button>
              <button onClick={() => scrollToSection('work')} className="text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105">Work</button>
              <button onClick={() => scrollToSection('interests')} className="text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105">Interests</button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105">Contact</button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={downloadResume}
                className="bg-black text-white hover:bg-gray-800 border-black transition-all duration-200 hover:scale-105 font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden transform hover:scale-110 transition-transform duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">About</button>
                <button onClick={() => scrollToSection('work')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">Work</button>
                <button onClick={() => scrollToSection('interests')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">Interests</button>
                <button onClick={() => scrollToSection('blog')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">Blog</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">Contact</button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={downloadResume}
                  className="w-fit bg-black text-white hover:bg-gray-800 border-black"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with enhanced animations */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-8 text-gray-900 animate-fade-in">
              Seelam Naveen Reddy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in">
              Front-End Developer | UI/UX Designer | Food & Travel Enthusiast
            </p>
            <p className="text-lg text-gray-500 mb-12 font-light animate-fade-in">
              Crafting digital experiences with passion from Hyderabad, India
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('work')}
                className="bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 transform"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://snrfoodler.com', '_blank')}
                className="border-black text-black hover:bg-black hover:text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105 transform"
              >
                Read My Blog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-thin mb-10 tracking-tight text-gray-900">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                I'm Seelam Naveen Reddy, a passionate Front-End Developer and UI/UX Designer with expertise in creating seamless digital experiences. With a strong foundation in modern web technologies and design principles, I specialize in building responsive, user-centric applications that bridge functionality with aesthetic appeal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                My professional journey spans developing scalable React applications, crafting intuitive user interfaces, and implementing design systems that enhance user engagement. I'm proficient in JavaScript, TypeScript, React, Node.js, and modern CSS frameworks, with a keen eye for detail in both code quality and visual design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-light">
                Beyond technology, I'm the creator of SNR FoodleR, a food and travel blog where I share my culinary adventures and cultural discoveries. This passion project showcases my content creation skills and reflects my belief that great experiences—whether digital or culinary—require the same attention to craftsmanship and user experience.
              </p>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:scale-105 cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/86161906-31db-46ef-b3c1-7f545b4563a9.png" 
                  alt="Seelam Naveen Reddy - Front-End Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="work" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight text-gray-900">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
              Showcasing my expertise in modern web development, UI/UX design, and full-stack solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 animate-fade-in border-0 shadow-lg bg-white rounded-3xl overflow-hidden transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-8">
                  <CardTitle className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600 font-light mb-6">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" onClick={() => window.open(project.liveDemo, '_blank')} className="rounded-full hover:scale-105 transition-transform duration-200">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => window.open(project.github, '_blank')} className="rounded-full hover:scale-105 transition-transform duration-200">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="mb-20">
            <h3 className="text-3xl font-light mb-12 text-center text-gray-800">Professional Development Experience</h3>
            <div className="grid md:grid-cols-2 gap-10">
              {professionalWork.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden transform hover:scale-105">
                  <CardHeader className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="mb-2 bg-blue-50 text-blue-700 border-blue-200 font-medium">{project.role}</Badge>
                    </div>
                    <CardTitle className="text-xl font-medium text-gray-900 mb-2">{project.title}</CardTitle>
                    <div className="text-sm text-gray-600 mb-4">
                      <div className="font-medium">{project.company}</div>
                      <div className="text-gray-500">{project.period}</div>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-gray-600 font-light">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* UI/UX Design Training */}
          <div>
            <h3 className="text-3xl font-light mb-12 text-center text-gray-800">UI/UX Design Training Projects</h3>
            <div className="grid md:grid-cols-2 gap-10">
              {designTraining.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-0 shadow-lg bg-white rounded-2xl overflow-hidden transform hover:scale-105">
                  <CardHeader className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700 border-purple-200 font-medium">{project.role}</Badge>
                    </div>
                    <CardTitle className="text-xl font-medium text-gray-900 mb-2">{project.title}</CardTitle>
                    <div className="text-sm text-gray-600 mb-4">
                      <div className="font-medium">{project.company}</div>
                      <div className="text-gray-500">{project.period}</div>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-gray-600 font-light">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" onClick={() => window.open(project.behanceLink, '_blank')} className="rounded-full hover:scale-105 transition-transform duration-200">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Behance
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => window.open(project.mediumLink, '_blank')} className="rounded-full hover:scale-105 transition-transform duration-200">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Medium
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Interests & Hobbies Section */}
      <section id="interests" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight text-gray-900">Interests & Passions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Beyond coding, I'm passionate about exploring cultures through food, travel, and creative expression. These interests fuel my creativity and bring fresh perspectives to my work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <Card key={index} className={`text-center animate-fade-in border-2 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl overflow-hidden group cursor-pointer transform hover:scale-105 ${interest.color}`}>
                <CardHeader className="p-8">
                  <div className="flex justify-center mb-6 text-gray-700 group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <CardTitle className="text-xl font-medium text-gray-900 mb-6">{interest.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-3">
                    {interest.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-gray-600 text-sm font-light bg-white/50 rounded-full px-4 py-2 hover:bg-white/70 transition-colors duration-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced SNR FoodleR Blog Section */}
      <section id="blog" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight text-gray-900">SNR FoodleR Blog</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Exploring the world through food, culture, and travel stories. Join me on a culinary journey that celebrates the art of cooking and the joy of discovery.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-lg overflow-hidden rounded-2xl bg-white transform hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 font-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-medium line-clamp-2 text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">{post.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-600 font-light">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://snrfoodler.com', '_blank')}
              className="border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 transform"
            >
              Visit Full Blog
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Media & Collaborations Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight text-gray-900">Media & Collaborations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Connect with me across various platforms and follow my latest content, projects, and creative collaborations.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {mediaChannels.map((channel, index) => (
                <a 
                  key={index}
                  href={channel.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 group transform hover:scale-105"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    {channel.platform.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-lg">{channel.platform}</div>
                    <div className="text-gray-600 text-sm font-light">{channel.handle}</div>
                    <div className="text-gray-500 text-sm font-light mt-1">{channel.description}</div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-thin mb-8 tracking-tight text-gray-900">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Whether you want to discuss a project, collaborate, or just say hello, I'd love to hear from you.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-20">
            <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-xl border-gray-200 focus:border-black focus:ring-black transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-xl border-gray-200 focus:border-black focus:ring-black transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border-gray-200 focus:border-black focus:ring-black resize-none transition-all duration-200"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-black hover:bg-gray-800 text-white h-12 rounded-xl font-medium transition-all duration-200 hover:scale-105 transform">
                Send Message
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </form>
            <div className="animate-fade-in">
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-light mb-6 text-gray-900">Get in Touch</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    I'm always open to discussing new opportunities, creative projects, or just having a conversation about technology, design, food, or travel.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 transform hover:scale-105">
                    <Mail className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-700 font-medium">naveen.seelam183@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 transform hover:scale-105">
                    <Phone className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-700 font-medium">+91 7672061316</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 transform hover:scale-105">
                    <MapPin className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-700 font-medium">Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center transform hover:scale-105 transition-transform duration-200">
              <img 
                src="/lovable-uploads/977cc23d-9302-4d1c-9aae-a2e22dbbb34d.png" 
                alt="SNR Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="text-gray-600 text-center md:text-left font-light">
              © 2024 Seelam Naveen Reddy. Crafted with passion for technology and culture.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
