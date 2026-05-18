"use client";

import { motion, Variants } from "framer-motion";
import { Download, MapPin, Coffee, Code2, Sparkles, BookOpen } from 'lucide-react';
import { stats } from "@/lib/skills-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const interests = [
  { icon: Code2, label: "Open Source" },
  { icon: Coffee, label: "Coffee Addict" },
  { icon: Sparkles, label: "UI/UX Design" },
];

const publications = [
  {
    title: "Building Scalable React Applications with Next.js 14",
    journal: "Smashing Magazine",
    year: "2024",
    url: "#",
  },
  {
    title: "Optimizing PostgreSQL Queries for High-Traffic Apps",
    journal: "Medium — Better Programming",
    year: "2023",
    url: "#",
  },
  {
    title: "Accessibility-First Design Systems: A Practical Guide",
    journal: "CSS-Tricks",
    year: "2023",
    url: "#",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image side */}

          <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-start">

            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-indigo-500/20">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alex_Morgan_May19.jpg/960px-Alex_Morgan_May19.jpg"
                  alt="Alex Morgan — Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 border border-white/10 dark:border-white/5 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Currently building</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">Nexus Dashboard</p>
                  </div>
                </div>
              </motion.div>

              {/* Location badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -top-4 -left-4 glass rounded-2xl px-4 py-3 border border-white/10 dark:border-white/5 shadow-xl"
              >
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span className="text-sm font-medium">San Francisco, CA</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
                About Me
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white leading-tight">
                Crafting digital
                <br />
                <span className="gradient-text">experiences</span>
              </h2>
            </div>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a full-stack developer with 5+ years of experience building scalable web
                applications. I specialize in React and Next.js on the frontend, paired with
                Node.js and PostgreSQL on the backend.
              </p>
              <p>
                My journey started with a Computer Science degree from UC Berkeley, followed by
                roles at startups and scale-ups where I shipped products used by hundreds of
                thousands of users. I care deeply about performance, accessibility, and developer
                experience.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open source, writing
                technical articles, or exploring the latest in AI and developer tooling.
              </p>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-3">
              {interests.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-zinc-200 dark:border-zinc-700"
                >
                  <Icon className="w-4 h-4 text-indigo-500" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/Alex-Morgan-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-all hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all group"
            >
              <p className="text-4xl font-black gradient-text group-hover:scale-110 transition-transform inline-block">
                {stat.value}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-indigo-500" />
              <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest">
                Publications
              </p>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
              Featured <span className="gradient-text">Writing</span>
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub) => (
              <motion.a
                key={pub.title}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="group flex flex-col gap-3 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all hover:shadow-md hover:shadow-indigo-500/5"
              >
                <div className="flex items-start justify-between gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-lg">
                    {pub.year}
                  </span>
                </div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {pub.title}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-auto">{pub.journal}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
