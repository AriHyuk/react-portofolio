import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaReact, FaNode, FaPaintBrush, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useCarousel from "../hooks/useCarousel";

const items = [
  { icon: <FaReact className="text-4xl text-blue-500" />, label: "React", bg: "bg-blue-100" },
  { icon: <SiJavascript className="text-4xl text-yellow-500" />, label: "JavaScript", bg: "bg-yellow-100" },
  { icon: <SiTailwindcss className="text-4xl text-blue-400" />, label: "Tailwind CSS", bg: "bg-blue-200" },
  { icon: <FaNode className="text-4xl text-green-500" />, label: "Node.js", bg: "bg-green-200" },
  { icon: <FaPaintBrush className="text-4xl text-purple-500" />, label: "UI/UX Design", bg: "bg-purple-200" }
];

// Custom Arrow Components
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-700 dark:text-gray-200" />
    </div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-700 dark:text-gray-200" />
    </div>
  );
};

export default function Carousel() {
  const carouselSettings = {
    ...useCarousel(),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...carouselSettings}>
      {items.map((item, index) => (
        <div key={index} className="p-2">
          <motion.div
            className={`${item.bg} p-4 rounded-lg shadow-lg text-center flex flex-col items-center gap-3 relative overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Gradient Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ x: ["-100%", "100%"], transition: { duration: 1, repeat: Infinity, repeatType: "mirror" } }}
            />

            {/* Icon and Label */}
            {item.icon}
            <p className="text-gray-700 font-bold text-md">{item.label}</p>
          </motion.div>
        </div>
      ))}
    </Slider>
  );
}