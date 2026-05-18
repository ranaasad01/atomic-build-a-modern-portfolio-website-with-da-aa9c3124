"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 as Github, Check, Calendar, Tag, Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
;
import type { Project } from "@/lib/projects-data";

interface Props {
  project: Project;
  relatedProjects: Project[];
}

export default function ProjectDetailClient({ project, relatedProjects }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-zinc-900 dark:text-white">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <span className="text-xl font-black">
              <span className="gradient-text">AM</span>
              <span className="text-zinc-900 dark:text-white">.</span>
            </span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Category & year */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-200 dark:border-indigo-500/20">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                <Calendar className="w-4 h-4" />
                {project.year}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {project.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </a>
              )}
            </div>
          </motion.div>

          {/* Project image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-16 aspect-video"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-10"
            >
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Project Overview</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </div>

              {/* Key highlights */}
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
                    >
                      <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-indigo-500" />
                      </div>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-100 dark:border-indigo-500/20"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Project info card */}
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 space-y-4">
                <h3 className="font-bold text-zinc-900 dark:text-white">Project Info</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide mb-1">Category</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide mb-1">Year</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide mb-1">Status</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 dark:text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                      Live
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700 space-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500 text-sm font-semibold transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* About the developer */}
              <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-3">Built by</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-indigo-500/20">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alex_Morgan_May19.jpg/960px-Alex_Morgan_May19.jpg"
                      alt="Alex Morgan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Alex Morgan</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Full-Stack Developer</p>
                  </div>
                </div>
                <Link
                  href="/"
                  className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500 text-sm font-semibold transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-20"
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">More Projects</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={"/projects/" + related.slug}
                    className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/5"
                  >
                    <div className="h-40 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400">{related.category}</span>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">{related.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-all hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Alex Morgan. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            alexmorgan.dev
          </Link>
        </div>
      </footer>
    </div>
  );
}
