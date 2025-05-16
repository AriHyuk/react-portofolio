import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Proper image imports - all local images should be imported this way
import laravelHpc from "../assets/certificates/laravel-hpc.jpg";
import UIUX from "../assets/certificates/Ari Awaludin.png";
import bestGrup from "../assets/certificates/Ari Awaludin No 1.png";
import AIML from "../assets/certificates/AIML.png";
import backend from "../assets/certificates/backend.png";
import ISC from "../assets/certificates/ISC.png";


export default function Certificate() {
  // Separate controls and refs for each slider
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  
  const isTopInView = useInView(topRef, { once: true });
  const isBottomInView = useInView(bottomRef, { once: true });

  useEffect(() => {
    if (isTopInView) {
      topControls.start("visible");
    }
  }, [isTopInView, topControls]);

  useEffect(() => {
    if (isBottomInView) {
      bottomControls.start("visible");
    }
  }, [isBottomInView, bottomControls]);

  // Fallback image for error handling
  const fallbackImage = "https://via.placeholder.com/600x400?text=Certificate+Image+Not+Available";

  const certificates = [
    {
      image: laravelHpc,
      title: "Laravel backend class",
      description: "Certified in React development by Certifity.",
      alt: "lARAVEL Certification"
    },
    {
      image: UIUX,
      title: "Weekly Class UI/UX",
      description: "Achieved finishing the weekly class in UI/UX GDGOC UIN JAKARTA.",
      alt: "UI/UX Certificate"
    },
    {
      image: bestGrup,
      title: "Best Group In Weekly Class UI/UX",
      description: "Achieved the best group in the weekly class UI/UX GDGOC UIN JAKARTA.",
      alt: "Best Grup UI/UX Certificate"
    },
    {
      image: AIML,
      title: "AI & ML",
      description: "Finished the AI & ML class.",
      alt: "AI & ML Certificate"
    },
    {
      image: backend,
      title: "Dibimbing Backend Class",
      description: "Certified in Backend Development.",
      alt: "Backend Certificate"
    },
    {
      image: ISC,
      title: "ISC web development class", 
      description: "Certified in web development by ISC.",
      alt: "ISC Certificate"
    },
  ];

  const settingsTop = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true, // Changed to true for better UX
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    accessibility: true, // Added for better accessibility
  };

  const settingsBottom = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true, // Changed to true for better UX
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    accessibility: true, // Added for better accessibility
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  // Image error handling function
  const handleImageError = (e : any) => {
    e.target.src = fallbackImage;
  };

  return (
    <section
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-24"
      id="certificates"
      aria-label="Certifications Section"
    >
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <span className="absolute -inset-1 -skew-y-3 bg-blue-100 dark:bg-blue-900 opacity-30 rounded-lg"></span>
            <h2 className="relative text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of the certifications I've earned throughout my professional journey.
          </p>
        </motion.div>

        {/* Top Section - Certificates */}
        <motion.div
          className="overflow-hidden w-full mb-12"
          ref={topRef}
          initial="hidden"
          animate={topControls}
          variants={containerVariants}
          aria-label="Certificates Carousel - Top Row"
        >
          <Slider {...settingsTop}>
            {certificates.map((cert, index) => (
              <motion.div
                key={`top-${index}`}
                className="p-4"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 group">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                    <h3 className="text-white text-center text-lg font-semibold mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-white/80 text-center text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Bottom Section - Certificates */}
        <motion.div
          className="overflow-hidden w-full"
          ref={bottomRef}
          initial="hidden"
          animate={bottomControls}
          variants={containerVariants}
          aria-label="Certificates Carousel - Bottom Row"
        >
          <Slider {...settingsBottom}>
            {certificates.map((cert, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="p-4"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 group">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                    <h3 className="text-white text-center text-lg font-semibold mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-white/80 text-center text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}