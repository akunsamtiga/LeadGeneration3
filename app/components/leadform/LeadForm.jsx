"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Properly import the Image component

export default function LeadForm() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "",
    company: "" 
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Nama wajib diisi";
    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid";
    }
    if (!formData.company.trim()) tempErrors.company = "Nama restoran/perusahaan wajib diisi";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage("Terima kasih! Kami akan segera menghubungi Anda untuk berbagi rahasia dapur.");
      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      setMessage("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  // Retro animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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
    <section 
      id="leadform" 
      className="relative py-24 px-6 overflow-hidden bg-amber-50"
    >
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/vintage-paper-texture.jpg')] bg-cover opacity-30 mix-blend-overlay"></div>
      
      {/* Retro coffee stains - Now using Next.js Image component properly */}
      <div className="absolute top-20 right-20 w-40 h-40 opacity-10">
        <Image 
          src="/images/burger.png" 
          alt="Coffee Sanz"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-20 left-20 w-32 h-32 opacity-10">
        <div className="rotate-45">
          <Image 
            src="/images/mie.png" 
            alt="Coffee Sanz"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl md:text-4xl font-serif font-bold mb-4 text-amber-900"
          >
            Mari Ciptakan Hidangan Istimewa
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg font-serif text-amber-800 max-w-2xl mx-auto"
          >
            Bergabunglah dengan jaringan mitra kuliner premium kami dan dapatkan resep rahasia langsung ke email Anda.
          </motion.p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-md mx-auto relative bg-white p-8 shadow-retro border-2 border-amber-900"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Form fields */}
          <motion.div variants={fadeIn} className="mb-6">
            <label htmlFor="name" className="block text-sm font-serif font-medium text-amber-900 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Budi Santoso"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded border-2 font-serif focus:outline-none transition-all ${
                errors.name 
                  ? "border-red-400 focus:ring-0" 
                  : "border-amber-300 focus:border-amber-500 focus:ring-0"
              }`}
            />
            {errors.name && (
              <p className="mt-2 text-sm font-serif text-red-600">{errors.name}</p>
            )}
          </motion.div>

          <motion.div variants={fadeIn} className="mb-6">
            <label htmlFor="email" className="block text-sm font-serif font-medium text-amber-900 mb-2">
              Email Kerja
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="budi@restoran.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded border-2 font-serif focus:outline-none transition-all ${
                errors.email 
                  ? "border-red-400 focus:ring-0" 
                  : "border-amber-300 focus:border-amber-500 focus:ring-0"
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-sm font-serif text-red-600">{errors.email}</p>
            )}
          </motion.div>

          <motion.div variants={fadeIn} className="mb-8">
            <label htmlFor="company" className="block text-sm font-serif font-medium text-amber-900 mb-2">
              Restoran/Perusahaan
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Nama Restoran"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded border-2 font-serif focus:outline-none transition-all ${
                errors.company 
                  ? "border-red-400 focus:ring-0" 
                  : "border-amber-300 focus:border-amber-500 focus:ring-0"
              }`}
            />
            {errors.company && (
              <p className="mt-2 text-sm font-serif text-red-600">{errors.company}</p>
            )}
          </motion.div>

          <motion.button
            variants={fadeIn}
            type="submit"
            disabled={loading}
            className="w-full bg-amber-900 text-amber-50 py-4 rounded-lg font-serif font-medium hover:bg-amber-800 transition-all flex justify-center items-center gap-2 border-2 border-amber-900 shadow-retro-btn"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-amber-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sedang Memproses...
              </>
            ) : (
              "Mulai Sekarang"
            )}
          </motion.button>
        </motion.form>

        {message && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center font-serif text-amber-900"
          >
            {message}
          </motion.p>
        )}

        <motion.p 
          variants={fadeIn}
          className="mt-12 text-center text-sm font-serif text-amber-800"
        >
          Kami menghargai privasi Anda. Anda dapat berhenti berlangganan kapan saja.
        </motion.p>
      </div>
    </section>
  );
}