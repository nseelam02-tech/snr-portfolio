
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink, Mail, MapPin, Calendar, Download, Menu, X } from 'lucide-react';
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
      title: "Modern E-commerce Platform",
      description: "A fully responsive e-commerce platform built with React and modern UI/UX principles.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Travel Booking App",
      description: "Mobile-first travel booking application with intuitive user experience.",
      technologies: ["React Native", "Figma", "Firebase", "Redux"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "SNR FoodleR Blog",
      description: "Custom-built food and travel blog with CMS integration and social features.",
      technologies: ["React", "Node.js", "MongoDB", "Adobe XD"],
      liveDemo: "https://snrfoodler.com",
      github: "#"
    },
    {
      title: "Design System Library",
      description: "Comprehensive UI component library for consistent design across projects.",
      technologies: ["React", "Storybook", "Figma", "CSS-in-JS"],
      liveDemo: "#",
      github: "#"
    }
  ];

  const blogPosts = [
    {
      title: "Mastering the Art of Italian Pizza Dough",
      excerpt: "Discover the secrets behind creating the perfect pizza dough that rivals authentic Italian pizzerias...",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
      date: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "The Best Ever Fish Curry",
      excerpt: "A traditional recipe passed down through generations, bringing authentic coastal flavors to your kitchen...",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      date: "March 10, 2024",
      readTime: "6 min read"
    },
    {
      title: "7 Cup Burfi | Seven Cups Sweet Recipe",
      excerpt: "Learn to make this classic Indian sweet that melts in your mouth with just seven simple ingredients...",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=250&fit=crop",
      date: "March 5, 2024",
      readTime: "5 min read"
    }
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js",
    "UI/UX Design", "Figma", "Adobe XD", "Photoshop", "Responsive Design", "Git"
  ];

  const interests = [
    { category: "Food", items: ["Recipe Development", "Food Photography", "Culinary Traditions", "Restaurant Reviews"] },
    { category: "Travel", items: ["Cultural Exploration", "Local Cuisines", "Travel Photography", "Adventure Planning"] },
    { category: "Technology", items: ["Web Development", "Design Systems", "UX Research", "Mobile Apps"] },
    { category: "Creative", items: ["Content Creation", "Video Editing", "Digital Art", "Blogging"] }
  ];

  const professionalWork = [
    {
      title: "Real-Time Financial Insights Dashboard",
      company: "FactSet (Offsite)",
      period: "Jan 2024 – April 2025 | Full Time",
      role: "Frontend Developer",
      description: "Developed a real-time data dashboard for internal use, integrating live financial data using REST APIs. Built responsive UI with React.js and Chart.js, ensuring seamless data visualisation and real-time sync. Collaborated with backend teams to design scalable APIs and maintain performance under live updates.",
      technologies: ["React.js", "Chart.js", "REST APIs", "JavaScript", "Responsive Design"],
      type: "development"
    },
    {
      title: "Corporate Website Revamp & Maintenance",
      company: "PayodSoft Consulting Services (Offsite)",
      period: "March 2022 – Nov 2023 | Full Time", 
      role: "Frontend Developer",
      description: "Redesigned and maintained the company's main website, ensuring performance, cross-browser compatibility, and responsive design. Used HTML, CSS, and JavaScript to build new sections and implement UI/UX enhancements. Coordinated with marketing and backend teams for regular updates and feature deployments.",
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
      description: "Designed an end-to-end mobile experience to solve real train travel food issues like hygiene, limited options, and lack of customisation. Created user flows, wireframes, high-fidelity mockups, and conducted usability testing to ensure seamless ordering and delivery experience. Allowed users to browse regional cuisines, filter by preferences (veg/non-veg), and order food directly to their train seat.",
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
      description: "Reimagined an existing fashion website into a mobile-first shopping experience tailored for a modern, style-conscious audience. Conducted user research, defined personas, built user flows, and developed a clean, elegant UI with strong visual hierarchy. Designed style guide, prototypes, and improved usability based on testing insights (e.g., enabling browsing before login).",
      technologies: ["User Research", "Persona Development", "Style Guide", "Mobile-First Design", "Visual Hierarchy"],
      type: "design",
      behanceLink: "https://www.behance.net/naveen_seelam",
      mediumLink: "https://medium.com/@snrdesigns"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/SNR Logo.png" 
                alt="SNR Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('work')} className="text-gray-600 hover:text-gray-900 transition-colors">Work</button>
              <button onClick={() => scrollToSection('interests')} className="text-gray-600 hover:text-gray-900 transition-colors">Interests</button>
              <button onClick={() => scrollToSection('blog')} className="text-gray-600 hover:text-gray-900 transition-colors">Blog</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition-colors">Contact</button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={downloadResume}
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
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
                  className="w-fit border-black text-black hover:bg-black hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
              Seelam Naveen Reddy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Front-End Developer | UI/UX Designer | Food & Travel Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('work')}
                className="bg-black hover:bg-gray-800 text-white px-8 py-3"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://snrfoodler.com', '_blank')}
                className="border-black text-black hover:bg-black hover:text-white px-8 py-3"
              >
                Read My Blog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm Seelam Naveen Reddy, a passionate Front-End Developer and UI/UX Designer with expertise in creating seamless digital experiences. With a strong foundation in modern web technologies and design principles, I specialize in building responsive, user-centric applications that bridge functionality with aesthetic appeal.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                My professional journey spans developing scalable React applications, crafting intuitive user interfaces, and implementing design systems that enhance user engagement. I'm proficient in JavaScript, TypeScript, React, and modern CSS frameworks, with a keen eye for detail in both code quality and visual design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Beyond technology, I'm the creator of SNR FoodleR, a food and travel blog where I share my culinary adventures and cultural discoveries. This passion project showcases my content creation skills and reflects my belief that great experiences—whether digital or culinary—require the same attention to craftsmanship and user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/SNR.jpg" 
                  alt="Seelam Naveen Reddy - Front-End Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Work Section */}
      <section id="work" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Professional Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-time development experience and design training showcase
            </p>
          </div>
          
          {/* Frontend Development Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-medium mb-8 text-center">Frontend Development Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {professionalWork.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="mb-2">{project.role}</Badge>
                    </div>
                    <CardTitle className="text-xl font-medium">{project.title}</CardTitle>
                    <div className="text-sm text-gray-600 mb-2">
                      <div className="font-medium">{project.company}</div>
                      <div>{project.period}</div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
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
            <h3 className="text-2xl font-medium mb-8 text-center">UI/UX Design Training Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {designTraining.map((project, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700 border-purple-200">{project.role}</Badge>
                    </div>
                    <CardTitle className="text-xl font-medium">{project.title}</CardTitle>
                    <div className="text-sm text-gray-600 mb-2">
                      <div className="font-medium">{project.company}</div>
                      <div>{project.period}</div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" onClick={() => window.open(project.behanceLink, '_blank')}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Behance
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => window.open(project.mediumLink, '_blank')}>
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

      {/* Interests & Hobbies Section */}
      <section id="interests" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Interests & Hobbies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond coding, I'm passionate about exploring cultures through food, travel, and creative expression
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <Card key={index} className="text-center animate-fade-in border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-medium">{interest.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {interest.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-gray-600 text-sm">
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

      {/* SNR FoodleR Blog Section */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">SNR FoodleR Blog</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exploring the world through food, culture, and travel stories
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in border-0 shadow-sm overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-medium line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Collaborations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Media & Collaborations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with me across various platforms and see my latest content
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-medium mb-6">Latest from YouTube</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-2">📹</div>
                  <p className="text-gray-600">Latest YouTube Content</p>
                </div>
              </div>
              <Button variant="outline" onClick={() => window.open('https://www.youtube.com/@SNR_FoodleR', '_blank')}>
                Visit Channel
              </Button>
            </div>
            <div className="animate-fade-in">
              <h3 className="text-2xl font-medium mb-6">Follow My Journey</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/snrdesigns" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    LI
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-gray-600 text-sm">Professional Updates</div>
                  </div>
                </a>
                <a 
                  href="https://twitter.com/SNR_Foodler" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white">
                    X
                  </div>
                  <div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-gray-600 text-sm">Quick Updates & Thoughts</div>
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/snr_foodler/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                    IG
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-gray-600 text-sm">Food & Travel Photos</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you want to discuss a project, collaborate, or just say hello, I'd love to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-black hover:bg-gray-800 text-white">
                Send Message
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="animate-fade-in">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Get in Touch</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm always open to discussing new opportunities, creative projects, or just having a conversation about technology, design, food, or travel.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">hello@snrdesigns.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">Available for remote work worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold tracking-tight mb-4 md:mb-0">SNR</div>
            <div className="text-gray-600 text-center md:text-left">
              © 2024 Seelam Naveen Reddy. Crafted with passion for technology and culture.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
