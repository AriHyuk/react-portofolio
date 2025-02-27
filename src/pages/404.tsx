import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface ErrorPageProps {
  errorCode?: string | number;
  title?: string;
  message?: string;
  buttonText?: string;
  onHomeClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  buttonClassName?: string;
}

const RocketAnimation: React.FC = () => (
  <motion.div
    className="absolute top-0 left-1/2 transform -translate-x-1/2"
    initial={{ y: -100, rotate: 0 }}
    animate={{ y: "100vh", rotate: 360 }}
    transition={{
      y: { duration: 5, repeat: Infinity, ease: "linear" },
      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
    }}
  >
    <svg
      className="w-20 h-20 text-blue-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  </motion.div>
);

const StarAnimation: React.FC = () => {
  const stars = useMemo(
    () =>
      [...Array(20)].map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 1,
        duration: Math.random() * 1,
      })),
    []
  );

  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ top: star.top, left: star.left }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: star.delay,
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.div>
  );
};

const ErrorPage: React.FC<ErrorPageProps> = ({
  errorCode = "404",
  title = "Page Not Found",
  message = "The page you are looking for doesn't exist or has been moved.",
  buttonText = "Back to Home",
  onHomeClick = () => (window.location.href = "/"),
  backgroundColor = "bg-gray-50",
  textColor = "text-gray-800",
  buttonClassName = "px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 transition-all duration-200 transform hover:-translate-y-1",
}) => {
  return (
    <motion.div
      className={`min-h-screen ${backgroundColor} flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <RocketAnimation />
      <StarAnimation />

      <div className="max-w-md w-full text-center relative z-10">
        <div className="relative mb-8">
          <h1
            className={`text-9xl font-extrabold ${textColor} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500`}
          >
            {errorCode}
          </h1>
          <div className="absolute w-16 h-1 bg-blue-500 rounded-full bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <h2 className={`text-3xl font-bold ${textColor} mb-3`}>{title}</h2>
        <p className="text-gray-600 mb-8">{message}</p>

        <motion.button
          onClick={onHomeClick}
          className={buttonClassName}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ErrorPage;
