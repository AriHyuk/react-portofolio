import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useCarousel from "../hooks/useCarousel";
import { FaJs, FaLaravel, FaReact } from "react-icons/fa";
import { SiExpress, SiGo, SiKotlin, SiNodedotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const items = [
  {
    icon: FaReact,
    label: "React",
    usage: "Frontend Library",
    bg: "bg-gradient-to-tr from-blue-200 to-blue-100",
  },
  {
    icon: FaJs,
    label: "JavaScript",
    usage: "Language",
    bg: "bg-gradient-to-tr from-yellow-200 to-yellow-100",
  },
   {
    icon: SiTypescript,
    label: "TypeScript",
    usage: "Language",
    bg: "bg-gradient-to-tr from-yellow-200 to-yellow-100",
  },
     {
    icon: SiKotlin,
    label: "Kotlin",
    usage: "Language",
    bg: "bg-gradient-to-tr from-yellow-200 to-yellow-100",
  },
  {
    icon: SiTailwindcss,
    label: "Tailwind CSS",
    usage: "Utility-First CSS",
    bg: "bg-gradient-to-tr from-blue-300 to-blue-100",
  },
  {
    icon: SiNodedotjs,
    label: "Node.js",
    usage: "Backend Runtime",
    bg: "bg-gradient-to-tr from-green-200 to-green-100",
  },
  {
    icon: SiGo,
    label: "Go",
    usage: "Backend Language",
    bg: "bg-gradient-to-tr from-purple-200 to-purple-100",
  },
  {
    icon: FaLaravel,
    label: "Laravel",
    usage: "Backend Framework",
    bg: "bg-gradient-to-tr from-purple-200 to-purple-100",
  },
    {
    icon: SiExpress,
    label: "Express.js",
    usage: "Backend Framework",
    bg: "bg-gradient-to-tr from-purple-200 to-purple-100",
  }
];




const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <motion.div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiChevronLeft className="text-gray-800 text-xl" />
    </motion.div>
  );
};

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <motion.div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiChevronRight className="text-gray-800 text-xl" />
    </motion.div>
  );
};

export default function Carousel() {
  const carouselSettings = {
    ...useCarousel(),
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
<div className="relative px-8 py-6">
<Slider {...carouselSettings}>
  {items.map((item, index) => (
    <div key={index} className="p-2">
      {/* Kartu Skill */}
      <motion.div
        className="w-full flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 gap-4 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ scale: 1.03 }}
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
          {/* Icon */}
          {typeof item.icon === "string" ? (
            <img src={item.icon} alt={item.label} className="w-8 h-8" />
          ) : (
            <item.icon className="w-8 h-8 text-gray-800 dark:text-white" />
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            {item.label}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {item.usage}
          </span>
        </div>
      </motion.div>
    </div>
  ))}
</Slider>
</div>
  );
}