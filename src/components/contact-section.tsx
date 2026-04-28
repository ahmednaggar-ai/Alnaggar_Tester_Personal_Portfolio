"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-background relative border-t border-card-border/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(100,116,139,0.12)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none opacity-60" />

      <div className="relative z-10 mx-auto w-[90%] py-24 flex flex-col items-center text-center">
        <span className="mb-6 text-xs font-bold tracking-[0.2em] text-muted uppercase">
          ESTABLISHING CONNECTION
        </span>

        <h2 className="mb-12 text-5xl font-extrabold tracking-tight text-foreground lg:text-6xl">
          Let's verify your system together.
        </h2>

        <div className="w-full max-w-xl rounded-xl border border-card-border/40 bg-surface/50 p-12 backdrop-blur-sm transition-all hover:bg-surface/80">
          <span className="mb-3 block text-[10px] font-black tracking-[0.25em] text-muted/60 uppercase">
            PRIMARY_ENDPOINT
          </span>
          <a
            href="mailto:mohamed.hossam@qa-engine.io"
            className="text-2xl font-bold text-foreground transition-colors hover:text-emerald-500 md:text-3xl"
          >
            mohamed.hossam@qa-engine.io
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-10 md:gap-16">
          <a href="#" className="group flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-muted transition hover:text-foreground">
            <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(24,23,23,0.3)]">
              <circle cx="24" cy="24" r="24" fill="#181717"/>
              <path d="M24 10.5C16.54 10.5 10.5 16.54 10.5 24c0 5.97 3.87 11.03 9.24 12.82.67.12.92-.29.92-.65 0-.32-.01-1.17-.02-2.3-3.76.82-4.55-1.81-4.55-1.81-.61-1.56-1.5-1.97-1.5-1.97-1.23-.84.09-.82.09-.82 1.36.1 2.07 1.39 2.07 1.39 1.2 2.07 3.16 1.47 3.93 1.12.12-.87.47-1.47.85-1.81-2.99-.34-6.14-1.5-6.14-6.67 0-1.47.52-2.68 1.39-3.62-.14-.34-.6-1.71.13-3.56 0 0 1.13-.36 3.7 1.38a12.87 12.87 0 0 1 3.37-.45 12.87 12.87 0 0 1 3.37.45c2.57-1.74 3.7-1.38 3.7-1.38.73 1.85.27 3.22.13 3.56.87.94 1.38 2.15 1.38 3.62 0 5.18-3.15 6.32-6.15 6.66.48.42.91 1.24.91 2.5 0 1.81-.02 3.26-.02 3.7 0 .36.24.78.93.65A13.52 13.52 0 0 0 37.5 24C37.5 16.54 31.46 10.5 24 10.5z" fill="#FFFFFF"/>
            </svg>
            GITHUB
          </a>
          <a href="#" className="group flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-muted transition hover:text-foreground">
            <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.3)]">
              <circle cx="24" cy="24" r="24" fill="#0A66C2"/>
              <rect x="13" y="20" width="5" height="16" rx="1" fill="#FFFFFF"/>
              <circle cx="15.5" cy="15.5" r="3" fill="#FFFFFF"/>
              <rect x="22" y="20" width="5" height="16" rx="1" fill="#FFFFFF"/>
              <path d="M27 25c0-2.76 2.24-5 5-5s5 2.24 5 5v11h-5v-11c0-0 0 0 0 0z" fill="#FFFFFF"/>
            </svg>
            LINKEDIN
          </a>
          <a href="#" className="group flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-muted transition hover:text-foreground">
            <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.3)]">
              <circle cx="24" cy="24" r="24" fill="#25D366"/>
              <path d="M10 22c3.87-3.87 9.21-6.27 15.1-6.27 5.89 0 11.23 2.4 15.1 6.27" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
              <path d="M14.5 26.5c2.6-2.6 6.19-4.2 10.16-4.2 3.97 0 7.56 1.6 10.16 4.2" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
              <path d="M19 31c1.37-1.37 3.26-2.22 5.35-2.22 2.09 0 3.98.85 5.35 2.22" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="24.35" cy="36" r="2.5" fill="#FFFFFF"/>
            </svg>
            BLOG
          </a>
          <a href="https://wa.me/yourphonenumber" className="group flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-muted transition hover:text-foreground">
            <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.3)]">
              <circle cx="24" cy="24" r="24" fill="#25D366"/>
              <path d="M24 10.5C16.55 10.5 10.5 16.55 10.5 24c0 2.39.65 4.63 1.78 6.57L10.5 37.5l6.93-1.78A13.43 13.43 0 0 0 24 37.5c7.45 0 13.5-6.05 13.5-13.5S31.45 10.5 24 10.5z" fill="#FFFFFF"/>
              <path d="M24 12.8c-6.18 0-11.2 5.02-11.2 11.2 0 2.1.58 4.06 1.59 5.73l-1.04 3.83 3.93-1.03a11.14 11.14 0 0 0 6.72 2.27c6.18 0 11.2-5.02 11.2-11.2S30.18 12.8 24 12.8z" fill="#25D366"/>
              <path d="M19.73 17.5c-.28-.63-.57-.64-.84-.65-.22-.01-.47-.01-.72-.01-.25 0-.65.09-.99.47-.34.38-1.3 1.27-1.3 3.1s1.33 3.6 1.52 3.85c.19.25 2.6 4.14 6.4 5.64 3.17 1.25 3.81 1 4.5.94.69-.06 2.23-.91 2.54-1.8.31-.88.31-1.64.22-1.8-.09-.16-.34-.25-.71-.44-.37-.19-2.2-1.09-2.54-1.21-.34-.12-.59-.19-.84.19-.25.37-.96 1.21-1.18 1.46-.22.25-.44.28-.81.09-.37-.19-1.57-.58-2.99-1.85-1.1-.99-1.85-2.2-2.07-2.57-.22-.37-.02-.57.17-.75.17-.17.37-.44.56-.66.19-.22.25-.37.37-.62.12-.25.06-.47-.03-.66-.09-.18-.82-2.03-1.15-2.77z" fill="#FFFFFF"/>
            </svg>
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
