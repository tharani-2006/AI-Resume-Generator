import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaMagic, FaEraser, FaBrain, FaSave, FaPlus } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { generateResume } from "../api/ResumeService";
import Resume from "../components/Resume";

const GenerateResume = () => {
  const defaultLanguages = {
    frontend: ["", ""],
    backend: ["", ""],
    database: ["", ""],
    devops: ["", ""],
    tools: ["", ""],
  };

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [showFormUI, setShowFormUI] = useState(false);
  const [showResumeUI, setShowResumeUI] = useState(false);
  const [showPromptInput, setShowPromptInput] = useState(true);
  const [data, setData] = useState({
    personalInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
      linkedIn: "",
      gitHub: "",
      portfolio: "",
      resume: "",
    },
    summary: "",
    experience: {
      companyName: "",
      jobTitle: "",
      duration: "",
      description: "",
      location: "",
    },
    education: {
      schoolName: "",
      degree: "",
      fieldOfStudy: "",
      graduationYear: "",
      location: "",
    },
    projects: ["", ""],
    achievements: ["", ""],
    spokenLanguages: ["", ""],
    certifications: ["", ""],
    languages: defaultLanguages,
    interests: ["", ""],
    contact: {
      email: "",
      phone: "",
      address: "",
      website: "",
    },
  });
