"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Layers,
  Webhook,
  Database,
  Gauge,
  Bug,
  Rocket,
} from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  layout: Layout,
  server: Server,
  layers: Layers,
  webhook: Webhook,
  database: Database,
  gauge: Gauge,
  bug: Bug,
  rocket: Rocket,
};

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="container-content">
        <SectionHeading eyebrow="Services" title="How I can help" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Layout;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="card-border group relative overflow-hidden rounded-2xl bg-card/60 p-6"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/10" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-edge text-gold">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
