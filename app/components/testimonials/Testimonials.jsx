"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  { 
    id: 1, 
    name: "Kim Ji-min",  
    text: "Platform ini membantu saya meningkatkan inovasi menu dan kualitas pelayanan, menciptakan pengalaman kuliner yang luar biasa!", 
    job: "Konsultan Kuliner", 
    photo: "/images/pp6.jpg", 
    rating: 5,
    company: "Naver Corp"
  },
  { 
    id: 2, 
    name: "Lee Seung-hee",  
    text: "Kami melihat peningkatan signifikan dalam kepuasan pelanggan sejak menggunakan layanan ini—sangat direkomendasikan untuk bisnis kuliner!", 
    job: "Manajer E-commerce", 
    photo: "/images/pp2.jpg", 
    rating: 4,
    company: "Coupang"
  },
  { 
    id: 3, 
    name: "Park Hye-jin",  
    text: "Layanan ini menyederhanakan proses operasional restoran kami, memungkinkan kami fokus pada inovasi kuliner sambil mengotomatisasi tugas-tugas rutin.", 
    job: "Manajer Operasional", 
    photo: "/images/pp3.jpg", 
    rating: 5,
    company: "Samsung Electronics"
  },
];

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

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 px-6 bg-amber-50 overflow-hidden">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 bg-[url('/images/vintage-paper-texture.jpg')] bg-cover opacity-20 mix-blend-overlay"></div>
      
      {/* Coffee stain decals */}
      <div className="absolute top-20 left-20 w-40 h-40 opacity-10">
        <Image 
          src="/images/cf2.png" 
          alt="Coffee stain"
          width={160}
          height={160}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-20 right-20 w-32 h-32 opacity-10">
        <div className="rotate-45">
          <Image 
            src="/images/cf2.png" 
            alt="Coffee stain"
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            Kata Mereka Tentang Kami
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-lg font-serif text-amber-800 max-w-2xl mx-auto"
          >
            Testimoni dari pelanggan setia yang merasakan keistimewaan pelayanan kami
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-retro border-2 border-amber-900 hover:shadow-retro-hover transition-all"
            >
              {/* Polaroid-style testimonial card */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-900 shadow-md">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-amber-900">{testimonial.name}</h4>
                  <p className="text-sm font-serif text-amber-700">{testimonial.job}</p>
                  <p className="text-xs font-serif text-amber-600 font-medium mt-1">{testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-amber-900 mb-6 italic relative pl-6 font-serif">
                <svg 
                  className="absolute left-0 top-0 w-5 h-5 text-amber-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {testimonial.text}
              </p>
              
              <div className="flex items-center justify-between border-t border-amber-200 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-amber-200'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <svg 
                  className="w-6 h-6 text-amber-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeIn}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center px-6 py-3 border-2 border-amber-900 shadow-retro-btn font-serif text-amber-900 rounded-lg bg-white hover:bg-amber-50 focus:outline-none transition-all">
            Lihat Lebih Banyak Testimoni
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}