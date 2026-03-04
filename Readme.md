AI Resume Generator

AI Resume Generator is a full-stack web application that generates professional resumes based on user prompts. The system leverages AI-powered text generation to create structured resumes tailored to specific roles, skills, and experience levels.

The application uses Spring Boot for backend services, React for the frontend interface, and DeepSeek-R1 running through Ollama for AI-driven resume generation.

Users simply provide a prompt describing their skills, experience, and target job role, and the system generates a structured, professional resume within seconds.

Table of Contents

Overview

Features

System Architecture

Tech Stack

Project Structure

How It Works

API Endpoints

Setup & Installation

Usage

AI Model Integration

Future Improvements

Contributing

License

Overview

Modern job applications require well-structured resumes tailored to specific roles. Creating such resumes manually is time-consuming.

AI Resume Generator solves this problem by using AI-assisted content generation to automatically produce resumes aligned with industry standards.

The system enables users to:

Generate resumes instantly

Customize resumes based on job roles

Use AI-generated professional descriptions

Export structured resume content

Features
AI-Powered Resume Generation

Users enter a prompt describing their skills, experience, and desired role, and the AI generates a professional resume.

Fast Local AI Inference

DeepSeek-R1 runs locally through Ollama, enabling low latency and privacy-focused AI processing.

Responsive Web Interface

Built using React and modern UI libraries to provide a smooth user experience.

Custom Resume Templates

Predefined prompt templates help generate consistent and well-formatted resumes.

RESTful Backend API

The Spring Boot backend provides scalable endpoints for resume generation.

Modular Architecture

Separated controller, service, and AI integration layers allow easy extension and maintenance.

System Architecture
User (Browser)
      │
      ▼
React Frontend (Vite + Axios)
      │
      ▼
Spring Boot Backend (REST API)
      │
      ▼
Ollama Local Runtime
      │
      ▼
DeepSeek-R1 AI Model
      │
      ▼
Generated Resume Content
Tech Stack
Backend

Spring Boot – REST API development

Java – Core backend language

Maven – Dependency management and build tool

Ollama – Local AI model runtime

DeepSeek-R1 – AI model for resume generation

Frontend

React – UI framework

Vite – Fast frontend build tool

React Router – Client-side routing

Axios – API communication

Tailwind CSS – UI styling

Tools

Git – Version control

VS Code – Recommended development environment

Project Structure
AI-Resume-Generator
│
├── Resume/                 # Spring Boot Backend
│   ├── controller/         # REST API Controllers
│   ├── service/            # Business Logic
│   ├── model/              # Data Models
│   ├── config/             # Configuration files
│   └── ResumeApplication.java
│
├── resume_frontend/        # React Frontend
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/          # Application pages
│   │   ├── services/       # API integration
│   │   └── App.jsx
│   └── package.json
│
├── resume_prompt.txt       # Prompt template used for AI generation
├── README.md
└── .vscode/                # Editor configuration
How It Works

The user enters resume details such as:

Job role

Skills

Experience

Education

The frontend sends the request to the Spring Boot backend.

The backend formats the prompt using the resume prompt template.

The prompt is sent to DeepSeek-R1 via Ollama.

The AI model generates structured resume content.

The backend returns the generated resume to the frontend.

The frontend displays the resume to the user.

API Endpoints
Generate Resume
POST /api/resume/generate

Request Body

{
  "prompt": "Generate a resume for a Java Backend Developer with 3 years experience in Spring Boot and Microservices."
}

Response

{
  "resume": "Generated resume content..."
}
Setup & Installation
Prerequisites

Ensure the following are installed:

Java 17+

Node.js 18+

Maven

Ollama

Git

Backend Setup (Spring Boot)

Clone the repository

git clone https://github.com/your-username/ai-resume-generator.git

Navigate to backend

cd Resume

Run the application

mvn spring-boot:run

The backend server runs on

http://localhost:8080
Frontend Setup (React)

Navigate to frontend

cd resume_frontend

Install dependencies

npm install

Run development server

npm run dev

The frontend runs on

http://localhost:5173
Ollama and DeepSeek Setup

Install Ollama

https://ollama.com

Pull DeepSeek model

ollama pull deepseek-r1

Run the model

ollama run deepseek-r1

Ensure Ollama is running before starting the backend.

Usage

Start Ollama with the DeepSeek model.

Run the Spring Boot backend.

Run the React frontend.

Open the frontend in your browser.

Enter resume details and generate a resume.

AI Model Integration

The backend communicates with Ollama's REST API to send prompts to the DeepSeek-R1 model.

Prompt templates stored in resume_prompt.txt ensure:

Consistent formatting

Professional language

Structured resume sections

Future Improvements

Resume PDF export

Multiple resume templates

ATS optimization

Resume editing features

User authentication

Resume history storage

Contributing

Contributions are welcome.

Steps:

Fork the repository

Create a new feature branch

Commit your changes

Submit a pull request