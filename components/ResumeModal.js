"use client";

import { useEffect } from "react";

function AuroraText({ children }) {
  return <span className="aurora-text">{children}</span>;
}

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
            <h2 id="resume-title"><AuroraText>Awab Abedin</AuroraText></h2>
            <p className="resume-contact">
              Farmingville, New York |{" "}
              <a href="mailto:abedinawab1@gmail.com">abedinawab1@gmail.com</a> |{" "}
              <a href="tel:+16317100270">(631) 710-0270</a> |{" "}
              <a href="https://www.linkedin.com/in/awab-abedin" target="_blank" rel="noreferrer">
                linkedin.com/in/awab-abedin
              </a> |{" "}
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
            <h3><AuroraText>Profile</AuroraText></h3>
            <p>
              AI/ML and software engineering graduate building production-minded machine learning
              pipelines, full-stack applications, and data systems with measurable outcomes.
            </p>
          </section>

          <section>
            <h3><AuroraText>Education</AuroraText></h3>
            <p><strong>Hofstra University</strong>, Hempstead, New York</p>
            <p>B.S. in Computer Science with a concentration in AI, May 2026</p>
            <p>Rabinowitz Honors College</p>
          </section>

          <section>
            <h3><AuroraText>Work Experience</AuroraText></h3>
            <p><strong>Student Tutor</strong>, Center for Academic Excellence, Hofstra University | September 2023 - May 2026</p>
            <p>Tutored students in Python, C++, and Java while strengthening debugging, algorithmic thinking, and technical communication.</p>
            <p><strong>Project Management Intern</strong>, Delivery Hobe, Bangladesh | June 2022 - December 2022</p>
            <p>Coordinated three product launches, led stand-ups, tracked blockers, gathered user feedback, and supported 1,000 voice-order confirmations.</p>
            <p><strong>Branding Intern</strong>, ZSA Interweave, Bangladesh | January 2021 - October 2021</p>
            <p>Built a Next.js company website, secured Google verification, and analyzed campaign performance that reached 50,000 people and drove 20,000 interactions.</p>
          </section>

          <section>
            <h3><AuroraText>Technical Skills</AuroraText></h3>
            <p>
              AI/ML: Python, machine learning algorithms, deep learning, NLP, computer vision,
              regression, classification, and clustering. Libraries: Pandas, NumPy, scikit-learn,
              TensorFlow, PyTorch, OpenCV, Matplotlib, Seaborn, and Pillow. Data/Cloud and
              Engineering: SQL, PostgreSQL, MySQL, MongoDB, GCP, Selenium, Beautiful Soup, Docker,
              Hugging Face Hub, Git, GitHub Actions, CI/CD pipelines, REST APIs, FastAPI, Flask,
              model deployment, MLflow, model versioning, unit testing, and JavaScript.
            </p>
          </section>

          <section>
            <h3><AuroraText>Selected Projects</AuroraText></h3>
            <p><strong>DeepGuard:</strong> Multimodal deep learning pipeline achieving 93% precision on deepfake image detection with ensemble CNNs and EfficientNet + LSTM video analysis.</p>
            <p><strong>ETF Recommender:</strong> Multi-source ETF pipeline with 2,300+ normalized records, MongoDB indexing, Gemini 2.5 strategy summaries, and semantic similarity scoring.</p>
            <p><strong>Classification Analysis:</strong> Phishing URL and student performance classification pipelines achieving 99.98% binary recall and 70.3% multiclass recall.</p>
            <p><strong>Hoftaps:</strong> Deployable peer-to-peer bookstore using JavaScript, HTML, CSS, and Firebase workflows for listings and user interactions.</p>
            <p><strong>RoboPathFinder:</strong> Low-level C control flow and navigation rules for repeatable autonomous robot pathfinding behavior.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
