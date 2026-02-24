"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <section
        id="home"
        className="scroll-mt-24 min-h-screen flex flex-col items-center justify-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Sean James
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-400 mb-8 text-center"
        >
          Software Engineer | Systems | Rust | C++ | VR
        </motion.p>
      </section>

      <section id="about" className="scroll-mt-24 min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">About</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I build systems-level software, backend services, and immersive VR experiences with a focus on performance and reliability.
          </p>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Projects</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Explore selected work across Rust, C++, web platforms, and real-time systems.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Reach out for collaborations, consulting, or opportunities.
          </p>
        </div>
      </section>
    </main>
  );
}
