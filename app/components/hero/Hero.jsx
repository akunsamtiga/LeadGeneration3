"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Retro animation variants
const retroVariants = {
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

// Vintage floating effect
const vintageFloat = {
  float: {
    y: [0, -10, 0],
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Hero() {
  const router = useRouter();
  
  const handleExploreMenu = () => {
    router.push("/menu");
  };

  const handleVisitShop = () => {
    router.push("/shop");
  };

  return (
    <section className="relative h-screen overflow-hidden bg-amber-50">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/vintage-paper-texture.jpg')] bg-cover opacity-20 mix-blend-multiply"></div>
      
      {/* Retro diagonal stripes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[length:40px_40px] bg-[linear-gradient(45deg,#f5e1c7_25%,transparent_25%,transparent_50%,#f5e1c7_50%,#f5e1c7_75%,transparent_75%,transparent)] opacity-10"></div>
      </div>

      {/* Retro polaroid photos floating */}
      <motion.div 
        className="absolute top-1 md:top-1/6 lg:top-1/4 left-10 w-48 z-10"
        variants={vintageFloat}
        animate="float"
      >
        <div className="bg-white p-2 shadow-lg rotate-6">
          <Image 
            src="/images/cf1.jpg" 
            alt="Vintage coffee cup"
            width={200}
            height={200}
            className="object-cover w-full h-48"
          />
          <div className="p-2 font-handwriting text-sm text-gray-700">Our Special Brew</div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 md:bottom-1/6 lg:bottom-1/4 -right-10 md:right-4 lg:right-10 w-48 z-10"
        variants={vintageFloat}
        animate="float"
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white p-2 shadow-lg -rotate-3">
          <Image 
            src="/images/fs1.jpg" 
            alt="Vintage fashion"
            width={200}
            height={200}
            className="object-cover w-full h-58"
          />
          <div className="p-2 font-handwriting text-sm text-gray-700">Spring Collection</div>
        </div>
      </motion.div>

      {/* Coffee stain decals */}
      <div className="absolute top-20 right-20 w-40 h-40 opacity-10">
        <Image 
          src="/images/fs1.jpg" 
          alt="Coffee stain"
          fill
          className="object-contain"
        />
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={retroVariants} className="mb-8">
          <span className="inline-block px-4 py-2 bg-amber-900 text-amber-50 text-sm font-serif tracking-widest">
            SINCE 1985
          </span>
        </motion.div>

        <motion.h1 
          variants={retroVariants}
          className="text-5xl md:text-7xl font-serif font-bold mb-6 text-amber-900"
        >
          <span className="block">Authentic</span>
          <span className="block">Vintage Charm</span>
        </motion.h1>

        <motion.p 
          variants={retroVariants}
          className="text-lg md:text-xl font-serif text-amber-800 max-w-2xl mb-12"
        >
          Where every cup, stitch and creation tells a story of timeless craftsmanship
        </motion.p>

        <motion.div 
          variants={retroVariants}
          className="flex flex-col sm:flex-row gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreMenu}
            className="px-8 py-3 bg-amber-900 text-amber-50 font-serif text-lg border-2 border-amber-900 shadow-retro hover:bg-amber-800 transition-all"
          >
            Explore Menu
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleVisitShop}
            className="px-8 py-3 bg-amber-50 text-amber-900 font-serif text-lg border-2 border-amber-900 shadow-retro hover:bg-amber-100 transition-all"
          >
            Visit Our Shop
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Vintage scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-900"
      >
        <svg
          className="w-6 h-6 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}