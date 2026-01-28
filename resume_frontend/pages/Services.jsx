import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaRobot,
  FaFileAlt,
  FaPalette,
  FaEye,
  FaStar,
  FaRocket,
  FaUsers,
  FaCheckCircle,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import TeamImage from '../assets/team.jpg';
import career from '../assets/career.svg';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Services = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative py-32 px-4 bg-gradient-to-r from-teal-900 via-gray-900 to-purple-900 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-80 h-80 bg-teal-600/30 rounded-full -top-40 left-10 blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-600/30 rounded-full -bottom-40 right-20 blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div variants={fadeIn} className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
              Elevate Your Career
            </h1>
            <motion.p
              variants={fadeIn}
              className="text-xl mt-6 text-gray-200 leading-relaxed max-w-lg"
              animate={{ x: [0, 10, 0], transition: { repeat: Infinity, duration: 3 } }}
            >
              Craft Resumes that Open Doors with our AI-powered Platform. Tailored, Fast, and Uniquely Yours.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8 flex gap-4 justify-center md:justify-start">
              <Link
                to="/generate-resume"
                className="px-8 py-4 text-lg bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2"
              >
                <FaRocket /> Start Crafting
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 text-lg bg-transparent border border-teal-500 hover:bg-teal-500/20 text-teal-400 hover:text-white rounded-full transition-all duration-300"
              >
                See Demo
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="md:w-1/2"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={career}
              alt="Resume creation"
              className="rounded-2xl shadow-xl w-full object-cover h-64 md:h-96 border border-gray-700/50"
            />
          </motion.div>
        </div>
      </motion.section>