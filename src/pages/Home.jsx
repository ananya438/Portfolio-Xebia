import "./Home.css";
import { 
  FaChalkboardTeacher,
  FaBookOpen,
  FaLaptopCode,
  FaBrain,
  FaCogs,
  FaTrophy 
} from "react-icons/fa";
import profile from "../assets/images/pic.png";

function Home() {
  return (
    <section className="home">

      {/* HERO CARD */}
      <div className="home-card">
        <img className="profile-img" src={profile} alt="Profile" />

        <h1>Ananya Thakur</h1>
        <h3>Full Stack Developer & B.Tech Student</h3>

        <p className="tagline">
          Aspiring Fullstack Developer specializing in AI-integrated systems. Building modern, academic-focused platforms using React, Node.js, and Prisma.
        </p>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="experience-section">

        <h2 className="section-title">Development & Project Experience</h2>

        <div className="cards-grid">

          <div className="exp-card">
            <h3>
              <FaChalkboardTeacher style={{ marginRight: "8px" }} />
              Role
            </h3>
            <p>2nd-Year B.Tech Student at UPES & Lead Developer of Obsidian 404</p>
          </div>

          <div className="exp-card">
            <h3>
              <FaLaptopCode style={{ marginRight: "8px" }} />
              Technical Skills
            </h3>
            <ul>
              <li>React, Node.js & Prisma</li>
              <li>AI Component Integration</li>
              <li>Java (Data Structures & Algorithms)</li>
              <li>Modern Academic UI/UX Design</li>
              <li>Version Control & Deployment (GitHub/Vercel)</li>
            </ul>
          </div>

          <div className="exp-card highlight">
            <h3>
              <FaTrophy style={{ marginRight: "8px" }} />
              Impact
            </h3>
            <br/>
            <p>
              Achieved a perfect 10 SGPA while building platforms like PrepShelf for the student community and developing rapid crisis response systems for the GDG Solution Challenge.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;