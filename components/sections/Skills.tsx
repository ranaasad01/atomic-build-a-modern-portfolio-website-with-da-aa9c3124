"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/skills-data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const categoryColorMap: Record<string, { bg: string; text: string; border: string; bar: string }> = {
  Frontend: {
    bg: "bg-indigo-50 dark:bg-indigo-500/5",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200 dark:border-indigo-500/20",
    bar: "bg-indigo-500",
  },
  Backend: {
    bg: "bg-emerald-50 dark:bg-emerald-500/5",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-500/20",
    bar: "bg-emerald-500",
  },
  "DevOps & Tools": {
    bg: "bg-amber-50 dark:bg-amber-500/5",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-500/20",
    bar: "bg-amber-500",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            A curated set of technologies I use to build fast, scalable, and maintainable products.
          </p>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const colors = categoryColorMap[category.category] || categoryColorMap["Frontend"];
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all duration-300 group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={"px-3 py-1 rounded-lg text-sm font-bold " + colors.bg + " " + colors.text + " " + colors.border + " border"}
                  >
                    {category.category}
                  </span>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                          {skill.name}
                        </span>
                        <span className={"text-xs font-semibold " + colors.text}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                        <motion.div
                          className={"h-full rounded-full " + colors.bar}
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level + "%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: idx * 0.05, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 font-medium">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Rust", "Go", "Kubernetes", "Terraform", "Elasticsearch",
              "RabbitMQ", "Storybook", "Playwright", "Turborepo", "tRPC",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
