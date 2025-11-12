import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Skill data for chart
const skillData = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Next.js', level: 80 },
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

export default function Skills() {
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
        My Skills
      </motion.h2>
      
      <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-lg">
        {/* Skills Chart */}
        <motion.div
          variants={itemVariants}
          className="h-80 mb-10"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={skillData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip
                formatter={(value) => [`${value}%`, 'Proficiency']}
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                }}
              />
              <Bar
                dataKey="level"
                fill="#3b82f6"
                radius={[0, 4, 4, 0]}
                barSize={30}
                animationDuration={2000}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
        
        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Frontend Development",
              description: "Building responsive user interfaces with modern JavaScript frameworks",
              icon: "fa-code"
            },
            {
              title: "UI/UX Design",
              description: "Creating intuitive and visually appealing user experiences",
              icon: "fa-paint-brush"
            },
            {
              title: "Performance Optimization",
              description: "Improving website speed and user experience",
              icon: "fa-tachometer-alt"
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-blue-500 text-2xl mb-4">
                <i className={`fas ${category.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
