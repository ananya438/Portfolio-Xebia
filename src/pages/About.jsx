import "./About.css";
import { FaUserGraduate, FaCogs, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-card">

        <h2>About Me</h2>

        <p className="about-text">
          I am a B.Tech student and Aspiring Fullstack Developer specializing in AI-integrated systems, passionate about building modern, intuitive applications and tackling algorithmic challenges.
        </p>

        <div className="about-grid">

          <div className="about-item">
            <FaCogs />
            <span>AI-integrated system development</span>
          </div>

          <div className="about-item">
            <FaLaptopCode />
            <span>Modern academic UI design</span>
          </div>

          <div className="about-item">
            <FaChalkboardTeacher />
            <span>Consistent DSA problem solver</span>
          </div>

          <div className="about-item">
            <FaUserGraduate />
            <span>Team Lead & independent learner</span>
          </div>

        </div>

        <div className="about-tags">
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Prisma</span>
          <span>Java</span>
        </div>

      </div>

    </section>
  );
}

export default About;