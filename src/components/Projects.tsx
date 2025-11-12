import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with shopping cart functionality and payment integration.",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=ecommerce%20website%20interface&sign=5879bdcbf773fca8ce8d4ac2d251d14b",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with real-time collaboration features.",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=task%20management%20app%20dashboard&sign=350a9bed9c9be0b943efc8f0b81e164f",
    technologies: ["React", "Firebase", "Material-UI"],
    link: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application providing real-time weather data and forecasts.",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=weather%20dashboard%20application&sign=929cef126bd04f42c43bc3cd820f160d",
    technologies: ["React", "Tailwind CSS", "API Integration"],
    link: "#"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A social networking app with user profiles, posts, and messaging capabilities.",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=social%20media%20platform%20interface&sign=ece725a32d43801e79ccc894ec2c147a",
    technologies: ["React", "GraphQL", "MongoDB"],
    link: "#"
  },
  {
    id: 5,
    title: "Finance Tracker",
    description: "A personal finance application for tracking expenses and managing budgets.",
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=finance%20tracker%20dashboard&sign=171c8c5f541db88103688dedd670ec30",
    technologies: ["React", "Redux", "Chart.js"],
    link: "#"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export default function Projects() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                View Project
                <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}