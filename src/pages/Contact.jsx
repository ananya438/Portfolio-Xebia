import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-card">

        <h2>Contact Me</h2>

        <div className="contact-item">
          <FaEnvelope />
          <span>ananya.thakur@example.com</span>
        </div>

        <div className="contact-item">
          <FaPhone />
          <span>+91-XXXXXXXXXX</span>
        </div>

        <div className="social">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-btn">
            <FaGithub /> GitHub
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;