import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gradient">CareerGuide India</h3>
            <p className="text-sm text-muted-foreground">
              Your personalized career and education advisor for the Indian market.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-coral transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-coral transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-coral transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-coral transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Career Guidance */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Career Guidance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-coral transition-colors">Career Assessment</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Skill Gap Analysis</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Industry Insights</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Job Market Trends</a></li>
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Education</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-coral transition-colors">IIT/NIT Programs</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Online Courses</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Skill Development</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-coral transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 CareerGuide India. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Made with ❤️ for Indian students and professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;