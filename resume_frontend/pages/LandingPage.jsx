import { FaRobot, FaFileAlt, FaMagic, FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative py-24 px-4 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full -top-48 -left-48 blur-3xl"></div>
                    <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full -bottom-48 -right-48 blur-3xl"></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AI-Powered Resume Generator
                    </h1>
                    <p className="text-xl mt-6 text-gray-300 leading-relaxed">
                        Transform your Career Story into a stunning Resume with Cutting-Edge AI
                    </p>
                    <Link to="/generate-resume" className="mt-6 px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 inline-block">
                        Get Started
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-12 tracking-tight">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    <FeatureCard
                        icon={<FaRobot className="text-indigo-400 text-3xl" />}
                        title="AI-Generated Content"
                        desc="Professionally crafted Resume Content powered by Cutting-Edge AI Technology."
                    />
                    <FeatureCard
                        icon={<FaFileAlt className="text-indigo-400 text-3xl" />}
                        title="Multiple Templates"
                        desc="Choose from Sleek, Modern Designs Tailored for every Profession."
                    />
                    <FeatureCard
                        icon={<FaMagic className="text-indigo-400 text-3xl" />}
                        title="One-Click Editing"
                        desc="Effortlessly Customize your Resume with Intuitive Controls."
                    />
                    <FeatureCard
                        icon={<FaCloudUploadAlt className="text-indigo-400 text-3xl" />}
                        title="Cloud Save"
                        desc="Safely Store and Access your Resume Anytime, Anywhere."
                    />
                </div>
            </section>