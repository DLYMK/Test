import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        <section id="profile" className="mb-24">
          <Profile />
        </section>
        
        <section id="skills" className="mb-24">
          <Skills />
        </section>
        
        <section id="projects" className="mb-24">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </motion.main>
      
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Personal Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}