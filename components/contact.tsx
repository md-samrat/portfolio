"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

const contactDetails = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "01861790495",
    href: "tel:+8801861790495",
  },
  {
    icon: Mail,
    label: "Email",
    value: "md.samrat.dev@gmail.com",
    href: "mailto:md.samrat.dev@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Chittagong, Bangladesh",
    href: undefined,
  },
];

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/mohammad.samrat0/", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-samrat0/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/md-samrat", label: "GitHub" },
];

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (values: FormState) => {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:md.samrat.dev@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      setForm(initialState);
      setTimeout(() => setStatus("idle"), 4000);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-content grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's build something" />
          <Reveal>
            <p className="max-w-sm text-balance leading-relaxed text-muted">
              Have a project in mind or just want to say hello? My inbox is
              always open.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-5">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-edge text-gold">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-foreground transition-colors hover:text-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:border-gold/50 hover:text-gold"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <Reveal>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card-border relative overflow-hidden rounded-3xl bg-card/60 p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={cn(
                    "w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-gold",
                    errors.name ? "border-red-500/60" : "border-edge"
                  )}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className={cn(
                    "w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-gold",
                    errors.email ? "border-red-500/60" : "border-edge"
                  )}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project"
                  className={cn(
                    "w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-gold",
                    errors.message ? "border-red-500/60" : "border-edge"
                  )}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold text-sm font-medium text-background transition-colors hover:bg-gold-soft disabled:opacity-70 sm:w-auto sm:px-8"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && <Send size={15} />}
            </button>

            <AnimatePresence>
              {status === "sent" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="mt-5 flex items-center gap-2 text-sm text-gold"
                >
                  <CheckCircle2 size={16} />
                  Your email client should now be open, ready to send.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
