"use client";

import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Spotlight className="top-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Harmony School
          </h2>
          <p className="mt-4 text-sm text-neutral-400">
            Learn music with passion. Master your art with guidance from experts.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-200 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-neutral-400 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-200 mb-4">Contact</h3>
          <p className="text-sm text-neutral-400">📍 Lucknow, India</p>
          <p className="text-sm text-neutral-400">📧 adilsiddddd@gmail.com.com</p>
          <p className="text-sm text-neutral-400">📞 +91 7905617682</p>
        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} MD ADIL. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
