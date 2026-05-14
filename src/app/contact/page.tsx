import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bruce Melendez — open to remote full-stack roles and interesting projects.",
};

const socials = [
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/brucemel",
    href: "https://github.com/brucemel",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/bruce-melendez-62212639a",
    href: "https://linkedin.com/in/bruce-melendez-62212639a",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bruceml.cvallejo@gmail.com",
    href: "mailto:bruceml.cvallejo@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <SectionReveal>
        <h1 className="text-4xl font-bold text-[var(--fg)] mb-3">
          Get In Touch
        </h1>
        <p className="text-[var(--muted)] leading-relaxed max-w-lg mb-12">
          I&apos;m actively looking for remote full-stack roles at US companies.
          Whether you have a position in mind, want to collaborate on a project,
          or just want to connect — send me a message.
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Form */}
        <SectionReveal delay={0.1} className="md:col-span-3">
          <ContactForm />
        </SectionReveal>

        {/* Social links */}
        <SectionReveal delay={0.2} className="md:col-span-2">
          <div>
            <h2 className="text-sm font-semibold text-[var(--fg)] uppercase tracking-wider mb-5">
              Find me online
            </h2>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-colors group"
                >
                  <Icon
                    size={18}
                    className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors shrink-0"
                  />
                  <div>
                    <p className="text-xs text-[var(--muted)] mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm text-[var(--fg)] font-medium group-hover:text-[var(--accent)] transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                Based in{" "}
                <span className="text-[var(--fg)]">Trujillo, Peru</span> · Open
                to <span className="text-[var(--fg)]">remote positions</span> ·
                Available for US time zones
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
