"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  // Retro animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-amber-50">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/vintage-paper-texture.jpg')] bg-cover opacity-30 mix-blend-overlay"></div>
      
      {/* Coffee stain decals */}
      <div className="absolute top-20 left-1/4 w-40 h-40 opacity-10">
        <Image 
          src="/images/cf2.png" 
          alt="Coffee Sanz"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 opacity-10">
        <div className="rotate-45">
          <Image 
            src="/images/cf2.png" 
            alt="Coffee Sanz"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>

      {/* Retro diagonal stripes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[length:40px_40px] bg-[linear-gradient(45deg,#f5e1c7_25%,transparent_25%,transparent_50%,#f5e1c7_50%,#f5e1c7_75%,transparent_75%,transparent)] opacity-15"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-4xl mx-auto relative z-10 text-center"
      >
        <motion.div variants={fadeIn} className="mb-8">
          <span className="inline-block px-4 py-2 bg-amber-900 text-amber-50 text-sm font-serif tracking-widest">
            SEJAK 1985
          </span>
        </motion.div>

        <motion.h2 
          variants={fadeIn}
          className="text-4xl md:text-5xl font-serif font-bold mb-6 text-amber-900"
        >
          <span className="block">Siap Membawa</span>
          <span className="block">Kuliner Anda ke Level Berikutnya?</span>
        </motion.h2>
        
        <motion.p 
          variants={fadeIn}
          className="text-lg md:text-xl font-serif text-amber-800 max-w-2xl mx-auto mb-12"
        >
          Temui ahli kuliner kami dan temukan bagaimana kami dapat membantu mewujudkan cita rasa impian Anda.
        </motion.p>
        
        <motion.div 
          variants={fadeIn}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <motion.a
            href="/contact"
            whileHover={{ 
              y: -2,
              boxShadow: "0 4px 20px rgba(120, 53, 15, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-amber-900 text-amber-50 font-serif text-lg border-2 border-amber-900 shadow-retro hover:bg-amber-800 transition-all"
          >
            Mulai Sekarang
          </motion.a>
          
          <motion.a
            href="/demo"
            whileHover={{ 
              y: -2,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-transparent text-amber-900 font-serif text-lg border-2 border-amber-900 shadow-retro hover:bg-amber-100 transition-all"
          >
            Minta Demo
          </motion.a>
        </motion.div>
        
        <motion.p 
          variants={fadeIn}
          className="mt-12 text-sm font-serif text-amber-800"
        >
          Dipercaya oleh 500+ bisnis kuliner di seluruh dunia
        </motion.p>
      </motion.div>
    </section>
  );
}