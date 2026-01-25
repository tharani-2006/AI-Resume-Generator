import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const Contact = () => {
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
        <div className="relative z-10 container mx-auto text-center">
          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl mt-6 text-gray-200 leading-relaxed max-w-2xl mx-auto"
          >
            We’d Love to Hear from You! Reach Out with Questions, Feedback, or Just to Say Hi.
          </motion.p>
          <motion.div variants={fadeIn} className="mt-8 flex gap-4 justify-center">
            <Link
              to="/generate-resume"
              className="px-8 py-4 text-lg bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2"
            >
              <FaPaperPlane /> Create Resume
            </Link>
            <a
              href="#contact-form"
              className="px-8 py-4 text-lg bg-transparent border border-teal-500 hover:bg-teal-500/20 text-teal-400 hover:text-white rounded-full transition-all duration-300"
            >
              Send a Message
            </a>
          </motion.div>
        </div>
      </motion.section>