// import profileImg from "../../assets/avtar-img.webp";
import { FaDownload } from "react-icons/fa";

export default function About() {
    return (
        <section id="about" className="container border-bottom" data-aos="fade-right" data-aos-duration="1200">

            <h1 className="text-white text-center fw-bold mt-4">About Me</h1>

            <div className="p-5">

                <div className="row align-items-center my-4">

                    {/* Left */}

                    <div className="col-lg-4 text-center">

                        <img src="https://res.cloudinary.com/ajs7xnt4/image/upload/f_auto,q_auto/avtar-img_ceuqpf" alt="Profile" className="card-hover img-top shadow rounded-pill border-2" />

                    </div>

                    {/* Right */}

                    <div className="card-hover col-lg-8 text-white mt-4 mt-lg-0 shadow-lg rounded">

                        <h2 className="fw-bold text-warning">
                            Mohammad Izmam
                        </h2>

                        <h5 className="text-info mb-4">
                            MERN Stack Developer
                        </h5>

                        <p className="text-gray fs-5">
                            I am a passionate MERN Stack Developer with
                            practical experience in designing and developing
                            responsive web applications using modern
                            JavaScript technologies.
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