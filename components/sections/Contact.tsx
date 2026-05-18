"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Send, CheckCircle, AlertCircle, MapPin, Clock } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/alexmorgan", handle: "@alexmorgan" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/alexmorgan", handle: "Alex Morgan" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/alexmorgan", handle: "@alexmorgan" },
  { icon: Mail, label: "Email", href: "mailto:alex@alexmorgan.dev", handle: "alex@alexmorgan.dev" },
];

const contactInfo = [
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
  { icon: Mail, label: "Email", value: "alex@alexmorgan.dev" },
];

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState("loading");

    // Mock submission — replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success (90% of the time)
    if (Math.random() > 0.1) {
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: keyof FormData) =>
    "w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/50 " +
    (errors[field]
      ? "border-red-400 dark:border-red-500"
      : "border-zinc-200 dark:border-zinc-700 focus:border-indigo-400 dark:focus:border-indigo-500");

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

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
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Have a project in mind or want to chat? I&apos;m always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-4">Find me online</p>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-500/40 hover:bg-indigo-50 dark:hover:bg-indigo-500/5 transition-all group"
                  >
                    <Icon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-500 transition-colors" />
                    <div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 sm:p-8">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Message Sent!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-sm">
                    Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold transition-all"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass("name")}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass("email")}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, collaboration, etc."
                      className={inputClass("subject")}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="mt-1 text-xs text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      className={inputClass("message") + " resize-none"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
                  >
                    {formState === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
