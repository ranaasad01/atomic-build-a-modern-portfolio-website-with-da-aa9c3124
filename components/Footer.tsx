"use client";

import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/alexmorgan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexmorgan", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/alexmorgan", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@alexmorgan.dev", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-2xl font-black">
              <span className="gradient-text">AM</span>
              <span className="text-zinc-900 dark:text-white">.</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              Full-stack developer crafting high-performance web experiences with modern technologies.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Available for freelance</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">Connect</p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
              <a href="mailto:alex@alexmorgan.dev" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                alex@alexmorgan.dev
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
            Built with
            <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5" />
            using Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
