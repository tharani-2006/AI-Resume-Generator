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
  const InputField = ({ name, label, section = "personalInformation", type = "text" }) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-base-content">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={`Enter ${label}`}
        value={data[section][name] || ""}
        onChange={(e) => handleInputChange(e, section)}
        className="input input-bordered w-full bg-base-100 text-base-content border-base-300 focus:input-primary"
      />
    </div>
  );

  const ArrayInputField = ({ section, index, value, label }) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-base-content">{`${label} ${index + 1}`}</span>
      </label>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => handleArrayChange(e, section, index)}
        className="input input-bordered w-full bg-base-100 text-base-content border-base-300 focus:input-primary"
      />
    </div>
  );

  const NestedArrayInputField = ({ section, subsection, index, value, label }) => (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text text-base-content">{`${label} ${index + 1}`}</span>
      </label>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => handleNestedArrayChange(e, section, subsection, index)}
        className="input input-bordered w-full bg-base-100 text-base-content border-base-300 focus:input-primary"
      />
    </div>
  );

  const ShowInputField = () => (
    <div className="card w-full max-w-4xl bg-base-200 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl font-bold flex items-center justify-center gap-2 text-base-content mx-auto">
          <FaBrain className="text-primary" /> AI Resume Generator
        </h1>
        <textarea
          disabled={loading}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full h-40 bg-base-100 text-base-content border-base-300 focus:textarea-primary resize-none"
          placeholder="Describe yourself, your skills, and experience to generate a tailored resume..."
        />
        <div className="card-actions justify-center gap-4 mt-6">
          <button
            disabled={loading}
            className="btn btn-primary flex items-center gap-2"
            onClick={handleGenerate}
          >
            {loading ? <span className="loading loading-spinner"></span> : <FaMagic />}
            Generate
          </button>
          <button
            className="btn btn-ghost flex items-center gap-2"
            onClick={() => setDescription("")}
          >
            <FaEraser /> Clear
          </button>
        </div>
      </div>
    </div>
  );
