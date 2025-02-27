import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { toast } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const controls = useAnimation();
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    
    if (!formData.category) {
      errors.category = "Please select a category";
    }
    
    if (!formData.budget) {
      errors.budget = "Budget is required";
    } else if (isNaN(Number(formData.budget)) || Number(formData.budget) < 0) {
      errors.budget = "Budget must be a positive number";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget" && value !== "" && (isNaN(Number(value)) || Number(value) < 0)) return;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success toast
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset form
      setFormData({ name: "", email: "", category: "", budget: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02, 
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      background: "linear-gradient(to right, #4338ca, #3b82f6)"
    },
    tap: { scale: 0.98 },
    disabled: { 
      opacity: 0.7,
      cursor: "not-allowed" 
    }
  };

  const categories = [
    { value: "Web Development", icon: "💻" },
    { value: "UI/UX Design", icon: "🎨" },
    { value: "E-commerce", icon: "🛒" },
    { value: "Other", icon: "✨" }
  ];
  

  return (
    <section 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center" 
      id="contact"
      aria-labelledby="contact-heading"
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl flex flex-col lg:flex-row border border-gray-200 dark:border-gray-700"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* Left Column - Image and Info */}
        <motion.div
          className="w-full lg:w-2/5 bg-gradient-to-br from-indigo-600 to-blue-500 dark:from-indigo-800 dark:to-blue-700 p-8 lg:p-12 flex flex-col justify-between"
          variants={itemVariants}
        >
          <div>
            <h2 
              id="contact-heading"
              className="text-3xl sm:text-4xl font-extrabold mb-6 text-white"
            >
              Let's work together
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Have a project in mind? I'd love to hear about it. Fill out the form
              and I'll get back to you as soon as possible.
            </p>
          
            <div className="space-y-6 mt-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-blue-100">ariawl0209@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-blue-100">+62 858 9370 7918</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-blue-100">Remote Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          
          
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="w-full lg:w-3/5 p-8 sm:p-10 lg:p-12"
          variants={itemVariants}
          ref={formRef}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Book a Meeting
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Fill out the form below, and I'll respond within 24-48 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white text-base shadow-sm transition-all duration-200`}
                placeholder="John Doe"
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white text-base shadow-sm transition-all duration-200`}
                placeholder="john@example.com"
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
              )}
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
              <div>
                <label htmlFor="category" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                  Service Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${formErrors.category ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white text-base shadow-sm transition-all duration-200 appearance-none bg-no-repeat bg-right pr-10`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundSize: "20px"
                  }}
                >
                  <option value="">Select a category</option>
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.icon} {category.value}
                    </option>
                  ))}
                </select>
                {formErrors.category && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.category}</p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                  Budget (USD)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 dark:text-gray-400">$</span>
                  </div>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full pl-8 px-4 py-3 border ${formErrors.budget ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white text-base shadow-sm transition-all duration-200`}
                    placeholder="5000"
                    min="0"
                  />
                </div>
                {formErrors.budget && (
                  <p className="mt-1 text-sm text-red-500">{formErrors.budget}</p>
                )}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white text-base shadow-sm transition-all duration-200`}
                rows={5}
                placeholder="Tell me about your project, timeline, and specific requirements..."
              />
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
              )}
            </motion.div>

            <motion.div 
              className="pt-2"
              variants={itemVariants}
            >
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-4 rounded-lg text-lg font-medium shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                variants={buttonVariants}
                initial="initial"
                whileHover={!isSubmitting ? "hover" : "disabled"}
                whileTap={!isSubmitting ? "tap" : "disabled"}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </div>
                ) : (
                  "Request for Meeting"
                )}
              </motion.button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Your information is secure and will never be shared with third parties.
              </p>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}