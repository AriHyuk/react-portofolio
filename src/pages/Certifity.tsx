import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laravelHpc from "../assets/certificates/laravel-hpc.jpg";

export default function Certificate() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const certificates = [
    {
      image: laravelHpc,
      title: "React Certification",
      description: "Certified in React development by Certifity.",
    },
    {
      image: "../assets/certificates/Setifikat.jpg",
      title: "JavaScript Mastery",
      description: "Achieved mastery in JavaScript programming.",
    },
    {
      image: "https://drive.google.com/uc?id=1fdKZG2zE5Xt8Xaot1WLgtt7S51a0l4D6",
      title: "Tailwind CSS Expert",
      description: "Certified as an expert in Tailwind CSS.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Node.js Advanced",
      description: "Advanced certification in Node.js development.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Full Stack Developer",
      description: "Certified in Full Stack Development.",
    },
    {
      image: "https://via.placeholder.com/600x400",
      title: "Python for AI",
      description: "Certification in Python for AI and ML.",
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
    pauseOnHover: false,
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
    pauseOnHover: false,
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

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-26"
      id="certificates"
    >
      <div className="max-w-6xl w-full">
        {/* Judul dan Deskripsi */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="absolute -inset-1 -skew-y-3 bg-blue-100 dark:bg-blue-900 opacity-30 rounded-lg"></span>
            <h1 className="relative text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Certifities
            </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Here are some of the certifications I've earned.
          </p>
        </motion.div>

        {/* Bagian Atas - Sertifikat */}
        <motion.div
          className="overflow-hidden w-full mb-12"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Slider {...settingsTop}>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="p-4"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center text-lg font-semibold">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Bagian Bawah - Sertifikat */}
        <motion.div
          className="overflow-hidden w-full"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <Slider {...settingsBottom}>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="p-4"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center text-lg font-semibold">
                      {cert.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}