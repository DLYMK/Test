import { motion } from 'framer-motion';

export default function Profile() {
  // Animation variants
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16"
    >
      {/* Profile Image */}
      <motion.div
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=square_hd&prompt=professional%20portrait%20of%20a%20developer&sign=6a6c241f9d669d7950bf9e6261b6e51d"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Profile Info */}
      <div className="text-center md:text-left">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          John Doe
        </motion.h1>
        
        <motion.div
          variants={itemVariants}
          className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          Frontend Developer
        </motion.div>
        
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
        >
          Passionate frontend developer with 5+ years of experience building modern, responsive web applications.
          Specializing in React, TypeScript, and Tailwind CSS.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center md:justify-start gap-4"
        >
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}