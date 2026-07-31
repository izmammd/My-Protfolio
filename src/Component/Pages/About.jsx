// import profileImg from "../../assets/avtar-img.webp";
import { FaDownload } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="container border-bottom" data-aos="fade-right" data-aos-duration="1200">

            <h1 className="text-white text-center fw-bold mt-4">About Me</h1>

            <div className="p-4 ">

                <div className="row align-items-center g-4">

                    {/* Left */}

                    <div className="col-lg-4 text-center">

                        <img className="card-hover shadow rounded-circle border border-2"
                            style={{
                                height: "320px",
                                width: "320px",
                                objectFit: "cover"
                            }}
                            src="https://res.cloudinary.com/ajs7xnt4/image/upload/v1785465790/my_photo_xtvk5p.png"
                            alt="Profile" />

                    </div>

                    {/* Right */}

                    <div className="card-hover col-lg-8 text-white mt-4 mt-lg-0 shadow-lg rounded">

                        <h2 className="fw-bold text-warning">
                            Mohammad Izmam
                        </h2>

                        <h5 className="text-info mb-4">
                            MERN Stack Developer
                        </h5>

                        <p className="text-light fs-5">
                            I'm a MERN Stack Developer with practical experience in
                            designing and developing responsive, secure, and scalable
                            full-stack web applications.
                        </p>


                        <p className="text-gray">
                            I completed my Bachelor of Technology in Computer
                            Science and Engineering and later completed a
                            MERN Stack Development course at JSpiders,
                            Bangalore.
                        </p>

                        <p className="text-gray">
                            I enjoy solving real-world problems, learning
                            new technologies, and building scalable web
                            applications with clean UI and secure backend
                            architecture.
                        </p>

                        <div className="mt-4">

                            <h4 className="text-warning">
                                Education
                            </h4>

                            <ul className="text-light">
                                <li>B.Tech in Computer Science & Engineering</li>
                                <li>MERN Stack Training - JSpiders, Bangalore</li>
                            </ul>

                            <h4 className="text-warning mt-4">
                                Career Objective
                            </h4>

                            <p className="text-light">
                                Seeking an opportunity as a MERN Stack Developer where I can apply my
                                technical skills, contribute to real-world projects, and continuously
                                grow as a software engineer.
                            </p>

                        </div>

                        <div className="mt-4">

                            <a
                                href="https://drive.google.com/file/d/1-iNuGeY3QMIA8xNoA3QHcKe8XjPA1eIW/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-outline-light text-light fw-bold"
                            >
                                <FaDownload className="me-2" />
                                Download Resume
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
} 