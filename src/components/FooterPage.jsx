import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="h-5 w-5" />,
      url: "https://github.com/Laxmikant3",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/laxmikant-dubey",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: <FaEnvelope className="h-5 w-5" />,
      url: "mailto:laxmikantdubey@example.com",
      color: "hover:text-red-400"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-dark-card border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4">
              Laxmikant Dubey
            </h3>
            <p className="text-[var(--maintext-color)] mb-4 max-w-md">
              Full Stack Developer passionate about creating innovative web solutions 
              and leveraging cutting-edge technologies to solve real-world problems.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[var(--maintext-color)] ${social.color} transition-colors duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-[var(--text-color)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--maintext-color)] hover:text-[var(--text-color)] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-[var(--text-color)] mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-[var(--maintext-color)]">
              <p>📧 laxmikantdubey@example.com</p>
              <p>📍 Nagpur, Maharashtra, India</p>
              <p>💼 Available for freelance work</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-[var(--maintext-color)] text-sm">
                © {currentYear} Laxmikant Dubey. All rights reserved.
              </p>
            </div>

            

            {/* Additional Links */}
            <div className="text-center md:text-right">
              <p className="text-[var(--maintext-color)] text-sm">
                Built with modern technologies
              </p>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-8 pt-4 border-t border-gray-800">
          <p className="text-[var(--maintext-color)] text-sm italic">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;