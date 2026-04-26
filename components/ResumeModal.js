"use client";

import { useEffect } from "react";

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handler = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="resume-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="resume-modal">
        <div className="resume-modal-top">
          <div>
            <p className="eyebrow">Resume</p>
            <h2 id="resume-title">Awab Abedin</h2>
            <p className="resume-contact">
              Farmingville, New York |{" "}
              <a href="mailto:abedinawab1@gmail.com">abedinawab1@gmail.com</a> |{" "}
              <a href="tel:+16317100270">(631) 710-0270</a> |{" "}
              <a href="https://github.com/Abedin02" target="_blank" rel="noreferrer">
                github.com/Abedin02
              </a>
            </p>
          </div>
          <button className="resume-close" type="button" aria-label="Close resume" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="resume-content">
          <section>
            <h3>Profile</h3>
            <p>
              Computer Science and Artificial Intelligence student focused on applied machine
              learning, full-stack software development, and data-driven product work.
            </p>
          </section>

          <section>
            <h3>Education</h3>
            <p><strong>Hofstra University</strong>, Hempstead, New York</p>
            <p>Bachelor of Science in Computer Science and Artificial Intelligence, expected May 2026</p>
            <p>Cumulative Grade Point Average: 3.20</p>
          </section>

          <section>
            <h3>Experience</h3>
            <p><strong>Student Tutor</strong>, Center for Academic Excellence, Hofstra University | September 2023 - Present</p>
            <p><strong>Project Management Intern</strong>, Delivery Hobe, Bangladesh | June 2022 - December 2022</p>
            <p><strong>Branding Intern</strong>, ZSA Interweave, Bangladesh | January 2021 - October 2021</p>
          </section>

          <section>
            <h3>Technical Skills</h3>
            <p>
              Python, C and C++, JavaScript, SQL, React, Next.js, FastAPI, TensorFlow, PyTorch,
              OpenCV, MongoDB, PostgreSQL, Git, Google Cloud Platform, and Vercel.
            </p>
          </section>

          <section>
            <h3>Selected Projects</h3>
            <p><strong>Deep Guard:</strong> Deepfake detection system with image classification and sequential video analysis pipelines.</p>
            <p><strong>ETF Recommender:</strong> Financial data scraping, normalization, analysis, and MongoDB-backed recommendation research.</p>
            <p><strong>Hoftaps:</strong> Peer-to-peer online bookstore for Hofstra students.</p>
            <p><strong>Classification Analysis:</strong> Comparative machine learning analysis across Perceptron, Logistic Regression, and Decision Tree models.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
