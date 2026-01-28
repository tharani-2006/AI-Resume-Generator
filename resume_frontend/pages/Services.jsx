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
      
      {/* Core Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-12"
        >
          Our Signature Services
        </motion.h2>
        <motion.p
          variants={fadeIn}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"
        >
          From AI-crafted content to Vibrant Templates, our Services are Designed to make your Resume Shine in a Crowded Market.
        </motion.p>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <ServiceCard
            icon={<FaRobot className="text-teal-400 text-4xl" />}
            title="Smart Resume Creation"
            desc="Our DeepSeek-R1 AI analyzes your input to generate resumes that are precise, professional, and uniquely tailored to your career goals."
          />
          <ServiceCard
            icon={<FaPalette className="text-teal-400 text-4xl" />}
            title="Vibrant Templates"
            desc="Choose from a curated collection of modern, eye-catching templates built with React to suit any industry or role."
          />
          <ServiceCard
            icon={<FaEye className="text-teal-400 text-4xl" />}
            title="Instant Previews"
            desc="See your resume come to life in real-time, with instant edits powered by our seamless Spring Boot backend."
          />
          <ServiceCard
            icon={<FaFileAlt className="text-teal-400 text-4xl" />}
            title="Flexible Exports"
            desc="Download your resume in PDF, Word, or shareable links, ready to impress recruiters in any format they prefer."
          />
        </motion.div>
      </motion.section>

      {/* Unique Approach Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-b from-gray-850 to-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-12"
          >
            What Makes Us Unique
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={fadeIn} className="lg:w-1/2">
              <img
                src={TeamImage}
                alt="Our approach"
                className="rounded-2xl shadow-xl w-full object-cover h-64 lg:h-96 border border-gray-700/50"
              />
            </motion.div>
            <motion.div variants={staggerContainer} className="lg:w-1/2 space-y-6">
              <FeatureItem
                icon={<FaCheckCircle className="text-teal-400 text-2xl" />}
                title="Human-Centric AI"
                desc="Our AI doesn’t just write—it understands your story, weaving your skills and dreams into a resume that feels personal."
              />
              <FeatureItem
                icon={<FaCheckCircle className="text-teal-400 text-2xl" />}
                title="Lightning-Fast Workflow"
                desc="From input to download, our Spring Boot backend ensures a smooth, lag-free experience, even with complex resumes."
              />
              <FeatureItem
                icon={<FaCheckCircle className="text-teal-400 text-2xl" />}
                title="Built for Everyone"
                desc="Whether you’re a coder, artist, or executive, our platform adapts to your needs with intuitive React interfaces."
              />
            </motion.div>
          </div>
        </div>
      </motion.section>