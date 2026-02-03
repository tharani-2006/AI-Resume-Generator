
# AI Resume Generator

AI Resume Generator is a full-stack web application that creates tailored resumes based on user-provided prompts. It leverages **Spring Boot** for the backend, **DeepSeek-R1** (via Ollama) for AI-driven resume content generation, and **React** with modern libraries for a dynamic frontend. The application allows users to input details like skills, experience, and job preferences, generating professional resumes in seconds.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup (Spring Boot)](#backend-setup-spring-boot)
  - [Frontend Setup (React)](#frontend-setup-react)
  - [Ollama and DeepSeek Setup](#ollama-and-deepseek-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [DeepSeek Integration](#deepseek-integration)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Prompt-Based Resume Generation**: Users provide a prompt (e.g., job role, skills, experience), and the AI generates a customized resume.
- **Real-Time Processing**: Fast resume generation using DeepSeek-R1 via Ollama.
- **Responsive UI**: Built with React for a seamless, modern user experience.
- **Customizable Templates**: Predefined resume prompt templates stored in `resume_prompt.txt`.
- **RESTful API**: Spring Boot backend exposes endpoints for resume generation and management.
- **Scalable Architecture**: Modular design with service and controller layers for easy extensions.

## Tech Stack
- **Backend**:
  - **Spring Boot**: Framework for building the REST API and handling business logic.
  - **Ollama**: Local inference engine to run DeepSeek-R1 for resume generation.
  - **DeepSeek-R1**: AI model for generating high-quality resume content.
  - **Maven**: Dependency management and build tool.
- **Frontend**:
  - **React**: JavaScript library for building the user interface.
  - **Vite**: Fast build tool and development server for React.
  - **React Router**: For client-side routing.
  - **Axios**: For making HTTP requests to the backend API.
  - **Tailwind CSS** (assumed): For styling (adjust if you use another CSS framework).
- **Others**:
  - **Git**: Version control.
  - **VS Code**: Recommended IDE with settings in `.vscode`.

## Project Structure
The project is split into two main directories: the Spring Boot backend (`Resume`) and the React frontend (`resume_frontend`).

```
AI-Resume-Generator/
├── Resume/                    # Spring Boot backend
│   ├── .mvn/wrapper/          # Maven wrapper files
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/Resume/
│   │   │   │   ├── Controller/
│   │   │   │   │   └── ResumeController.java       # REST API endpoints
│   │   │   │   ├── Service/
│   │   │   │   │   ├── ResumeService.java          # Service interface
│   │   │   │   │   └── ResumeServiceImpl.java      # Service logic with DeepSeek
│   │   │   │   ├── ResumeApplication.java          # Spring Boot entry point
│   │   │   │   └── ResumeRequest.java              # DTO for user input
│   │   │   └── resources/
│   │   │       ├── application.properties          # Backend config (e.g., Ollama URL)
│   │   │       └── resume_prompt.txt               # Resume prompt templates
│   │   └── test/                                  # Unit tests
│   ├── mvnw, mvnw.cmd                             # Maven wrapper scripts
│   └── pom.xml                                    # Maven dependencies
├── resume_frontend/            # React frontend
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── api/
│   │   │   └── ResumeService.js                   # API client for backend
│   │   ├── assets/                                # Images, SVGs
│   │   ├── components/
│   │   │   ├── Navbar.jsx                         # Navigation bar
│   │   │   └── Resume.jsx                         # Resume display component
│   │   ├── pages/
│   │   │   ├── About.jsx, Contact.jsx, etc.       # Page components
│   │   │   └── GenerateResume.jsx                 # Main resume generation page
│   │   ├── App.css, App.jsx                       # App-level styles and logic
│   │   ├── index.css, main.jsx                    # Entry points
│   ├── vite.config.js                             # Vite configuration
│   ├── package.json                               # Node dependencies
│   └── index.html                                 # HTML entry point
├── .gitignore, .gitattributes                     # Git config
└── README.md                                      # This file
```