import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const socials = [
  { href: "https://github.com/brucemel", label: "GitHub", icon: GithubIcon },
  {
    href: "https://linkedin.com/in/bruce-melendez-62212639a",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  { href: "mailto:bruceml.cvallejo@gmail.com", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Bruce Melendez — Built with Next.js &amp;
          Tailwind CSS
        </p>
        <div className="flex items-center gap-1">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
            >
              <Icon size={18} className="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
