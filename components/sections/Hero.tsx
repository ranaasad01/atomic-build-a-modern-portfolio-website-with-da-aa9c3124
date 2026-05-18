"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/alexmorgan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexmorgan", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/alexmorgan", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@alexmorgan.dev", label: "Email" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-40 dark:opacity-100" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-medium">
              Hi, I&apos;m Alex Morgan 👋
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
              <span className="text-zinc-900 dark:text-white">Full-Stack</span>
              <br />
              <span className="gradient-text">Developer</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            I craft high-performance web applications with modern technologies.
            Passionate about clean code, great UX, and turning complex problems
            into elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              View My Work
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-base transition-all duration-200 hover:scale-105 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 active:scale-95"
            >
              About Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mt-2">
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
