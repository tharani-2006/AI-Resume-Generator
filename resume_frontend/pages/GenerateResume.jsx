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
const handleInputChange = (e, section = "personalInformation") => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [name]: value,
      },
    }));
  };

  const handleArrayChange = (e, section, index) => {
    const { value } = e.target;
    setData((prevData) => {
      const updatedArray = [...prevData[section]];
      updatedArray[index] = value;
      return { ...prevData, [section]: updatedArray };
    });
  };

  const handleNestedArrayChange = (e, section, subsection, index) => {
    const { value } = e.target;
    setData((prevData) => {
      const updatedArray = [...(prevData[section][subsection] || [])];
      updatedArray[index] = value;
      return {
        ...prevData,
        [section]: { ...prevData[section], [subsection]: updatedArray },
      };
    });
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const responseData = await generateResume(description);
      setData((prevData) => ({
        ...prevData,
        ...responseData?.data,
        languages: {
          ...defaultLanguages,
          ...(responseData?.data?.languages || {}),
        },
      }));
      setShowFormUI(true);
      setShowPromptInput(false);
      setShowResumeUI(false);
      toast.success("Resume Generated Successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error Generating Resume!");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowFormUI(false);
    setShowPromptInput(false);
    setShowResumeUI(true);
  };