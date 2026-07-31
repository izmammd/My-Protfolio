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
                        I am a passionate MERN Stack Developer specializing in
                        building secure, scalable, and responsive web applications
                        using React.js, Node.js, Express.js, and MongoDB.
                    </p>

                    <p className="text-light">
                        I have hands-on experience in developing full-stack
                        applications with JWT Authentication, REST APIs,
                        Redux Toolkit, TanStack Query, and MongoDB Atlas.
                        I enjoy solving real-world problems through clean,
                        efficient, and user-friendly software solutions.
                    </p>

                    <div className="row text-center mt-4">

                        <div className="col-4">
                            <h2 className="text-warning fw-bold">6+</h2>
                            <small className="text-light">Projects</small>
                        </div>

                        <div className="col-4">
                            <h2 className="text-warning fw-bold">10+</h2>
                            <small className="text-light">Technologies</small>
                        </div>

                        <div className="col-4">
                            <h2 className="text-warning fw-bold">Fresher</h2>
                            <small className="text-light">Open to Work</small>
                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="d-flex flex-wrap gap-3 mt-4">

                        <a href="#projects" className="btn btn-main btn-warning" >
                            View Projects
                        </a>


                        <a href="#contact" className="btn btn-outline-light btn-outline-main" >
                            Let's Connect
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

                    <div className="mt-5">

                        <h5 className="text-warning mb-3">
                            Tech Stack
                        </h5>

                        <div className="d-flex flex-wrap gap-2">

                            <span className="badge bg-primary">React</span>

                            <span className="badge bg-success">Node.js</span>

                            <span className="badge bg-success">Express</span>

                            <span className="badge bg-success">MongoDB</span>

                            <span className="badge bg-warning text-dark">JavaScript</span>

                            <span className="badge bg-danger">Redux Toolkit</span>

                            <span className="badge bg-info text-dark">
                                TanStack Query
                            </span>

                            <span className="badge bg-secondary">
                                Git
                            </span>

                            <span className="badge bg-dark">
                                GitHub
                            </span>

                        </div>

                    </div>

                    {/* Social Icons */}

                    <div className="d-flex gap-4 my-4">

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

                    <img className="card-hover img-top shadow-lg border border-2"
                    style={{
                        height: "300px",
                        width: "500px",
                        objectFit:"cover"
                    }}
                        src="https://res.cloudinary.com/ajs7xnt4/image/upload/v1785465762/izmam-5_u7w5td.png"
                        alt="Mohammad Izmam"
                    />

                </div>

            </div>

        </section>
    );
}