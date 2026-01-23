import React from "react";

const Resume = ({ resumeData }) => {
  // Destructure the data with fallback values
  const {
    personalInformation = {},
    summary = "",
    experience = {},
    education = {},
    projects = [],
    achievements = [],
    spokenLanguages = [],
    certifications = [],
    languages = {},
    interests = [],
    contact = {},
  } = resumeData || {};

  return (
    <div className="p-10 bg-gray-900 min-h-screen flex justify-center">
      <div className="w-full max-w-3xl shadow-md bg-gray-800 p-6 rounded-lg">
        {/* Personal Information */}
        <div>
          <h1 className="text-3xl font-bold text-center text-white">
            {personalInformation.fullName || "Your Name"}
          </h1>
          <p className="text-center text-gray-400">
            {personalInformation.location || ""}
          </p>
          <div className="flex justify-center gap-4 my-4">
            {personalInformation.linkedIn && (
              <a
                href={personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            )}
            {personalInformation.gitHub && (
              <a
                href={personalInformation.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            )}
            {personalInformation.portfolio && (
              <a
                href={personalInformation.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Portfolio
              </a>
            )}
          </div>