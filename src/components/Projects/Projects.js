import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.jpeg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/expense.jpeg";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Kauwa"
              description="This system verifies the validity of claims passed from the frontend by analyzing related articles and matching them against the claim on various parameters. The results are displayed on the frontend, and verified claims are stored in a Neo4j knowledge graph for future reference."
              ghLink="https://github.com/RONITrrt/kauwa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Drowsiness Detection System"
              description="The Drowsiness Detection System is a real-time computer vision application that detects driver fatigue by analyzing eye behavior. It uses classical computer vision techniques along with a trained deep learning model to classify eye states (open or closed) and trigger alerts if drowsiness is detected."
              ghLink="https://github.com/RONITrrt/Drowsiness"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Generative AI PDF Summarizer"
              description="The Generative AI PDF Summarizer uses the RAG (Retrieval-Augmented Generation) model to efficiently extract and summarize key information from PDFs. It retrieves relevant sections and then generates concise, context-aware summaries."
              ghLink="https://github.com/RONITrrt/Generative-AI-PDF-Summarizer-with-RAG-Model"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Vehicle Type Detection"
              description="A ML model trained on data sets using Fast Dub and tensorflow to detect the Type of vechile."
              ghLink="https://github.com/RONITrrt/Vechile-type-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cat-Phish"
              description="Our phishing detection system uses URL analysis, comparing them with known phishing URLs, ML algorithms for pattern detection, webpage snapshots for visual inconsistencies, and email filtering. This multi-layered approach provides robust protection against phishing attacks."
              ghLink="https://github.com/RONITrrt/cat-phish"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Expense Tracker"
              description="Interactive expense tracker web app using HTML, CSS, and JavaScript. Features: - Set/track income - Add/delete transactions - View balance, income, and expenses - Local storage for data persistence - Responsive design Helps users manage finances with an engaging UI. Perfect for learning front-end development and basic financial tracking."
              ghLink="https://github.com/RONITrrt/Expense-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="RBAC UI"
              description="Admin Dashboard with Role Management Overview This project is a fully responsive and interactive admin dashboard built using React.js. It features role management, real-time analytics, dark/light mode, and an intuitive UI. Designed for seamless management of users, teams, and system data, the dashboard serves as a central hub for monitoring and controlling operations."
              ghLink="https://github.com/RONITrrt/rbac-ui"
              demoLink="https://rbac-ui-delta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
