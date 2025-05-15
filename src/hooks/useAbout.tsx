import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView } from "framer-motion";

export const useCustomAboutHook = () => {
  const [selectedTab, setSelectedTab] = useState("skills");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    hover: { scale: 1.03, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" },
    tap: { scale: 0.98 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    hover: { scale: 1.03, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (custom: number) => ({
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3 + custom * 0.15,
      },
    }),
  };

  const tabVariants = {
    inactive: { opacity: 0.6, y: 5 },
    active: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return {
    selectedTab,
    setSelectedTab,
    controls,
    ref,
    isInView,
    containerVariants,
    itemVariants,
    cardVariants,
    shapeVariants,
    tabVariants,
  };
};
