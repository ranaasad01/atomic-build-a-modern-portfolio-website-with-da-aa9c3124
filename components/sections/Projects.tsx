"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import { projects, categories } from "@/lib/projects-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from SaaS platforms to AI tools and developer utilities.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 " +
                (activeCategory === cat
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700")
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                variants={cardVariants}
                layout
                className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col"
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                    {project.category}
                  </span>

                  {/* Year badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <Link
                      href={"/projects/" + project.slug}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold transition-all"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-all hover:scale-105"
          >
            <Github className="w-4 h-4" />
            See More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
