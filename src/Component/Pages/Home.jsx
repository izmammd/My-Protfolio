import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

// import izmamImg from "../../assets/izmam.jpeg";
// IZMAM = src="https://res.cloudinary.com/ajs7xnt4/image/upload/izmam_dfyuhl.jpg"

export default function Home() {
    return (
        <section id="home" className="container border-bottom" data-aos="fade-up" data-aos-duration="1200">

            <div className="row align-items-center my-4">

                {/* Left Side */}

                <div className="card-hover col-lg-7 text-white mt-lg-0 mb-3 shadow-lg rounded">

                    <span className="badge bg-warning text-dark px-3 py-2 mb-3">
                        MERN Stack Developer
                    </span>

                    <h1 className="display-3 fw-bold">
                        Hi,
                        <br />
                        I'm <span className="text-warning">Mohammad Izmam</span>
                    </h1>

                    <h4 className="text-info mt-3">
                        Full Stack Web Developer
                    </h4>

                    <p className="text-light fs-5 mt-4">
                        I am a passionate MERN Stack Developer with hands-on
                        experience in building responsive, secure, and
                        user-friendly web applications using React.js,
                        Node.js, Express.js, and MongoDB.
                    </p>

                    <p className="text-light">
                        I completed my B.Tech in Computer Science &
                        Engineering and successfully completed MERN Stack
                        training from JSpiders, Bangalore.
                    </p>

                    {/* Buttons */}

                    <div className="d-flex flex-wrap gap-3 mt-4">

                        <a href="#projects" className="btn btn-main" >
                            View Projects
                        </a>


                        <a href="#contact" className="btn btn-outline-light btn-outline-main" >
                            Hire Me
                        </a>

                        <a href="https://drive.google.com/file/d/1-iNuGeY3QMIA8xNoA3QHcKe8XjPA1eIW/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-warning"
                        >
                            <FaDownload className="me-2" />
                            Resume
                        </a>

                    </div>

                    {/* Social Icons */}

                    <div className="d-flex gap-4 mt-5">

                        <a href="https://github.com/izmammd" target="_blank" rel="noreferrer" >
                            <FaGithub size={34} color="white" />
                        </a>

                        <a href="https://linkedin.com/in/mohammad-izmam72" target="_blank" rel="noreferrer" >
                            <FaLinkedin size={34} color="#0A66C2" />
                        </a>

                        <a href="mailto:izmammd763@gmail.com">
                            <FaEnvelope size={34} color="#FACC15" />
                        </a>

                    </div>

                </div>

                {/* Right Side */}

                <div className=" col-lg-5 text-center mt-5 mt-lg-0">

                    <img className="card-hover img-top shadow-lg h-75 w-75 rounded border border-2  " src = "https://www.upwork.com/mc/documents/skills-abilities-freelancer-portfolio.jpg" alt="Mohammad Izmam" />

                </div>

            </div>

        </section>
    );
}