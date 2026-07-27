import {
    FaGithub,
    FaExternalLinkAlt,
    FaArrowRight,
} from "react-icons/fa";

// import StudentHubVideo from "../../assets/StudentHubVideo.mp4";
// import RPSGameVideo from "../../assets/RPSGameVideo.mp4";
// import ToDoListVideo from "../../assets/ToDoListVideo.mp4";

// NEWSCOMING="https://player.cloudinary.com/embed/?cloud_name=ajs7xnt4&public_id=News-video_pcavk3"

export default function Projects() {

    const projects = [
        {
            title: "Student Hub",
            video: "https://res.cloudinary.com/ajs7xnt4/video/upload/StudentHubVideo_udmjpl.mp4",
            tech: "React.js • Node.js • Express.js • MongoDB • JWT • Bootstrap",
            github: "https://github.com/izmammd/Student_Hub",
            live: "https://student-pb99x1fvp-syuv3529-7389s-projects.vercel.app/login",
            points: [
                "Developed a full-stack Student Management System.",
                "JWT Authentication & Authorization.",
                "CRUD operations for student records.",
                "REST API integration using Axios.",
                "Responsive Bootstrap UI.",
            ],
        },

        {
            title: "Rock Paper Scissors",
            video: "https://res.cloudinary.com/ajs7xnt4/video/upload/RPSGameVideo_x6zfst.mp4",
            tech: "HTML • CSS • JavaScript",
            github: "https://github.com/izmammd/stone-paper-scissor",
            live: "https://stone-paper-scissor-ar3z9cksy-syuv3529-7389s-projects.vercel.app/",
            points: [
                "Interactive browser game.",
                "Dynamic score board.",
                "Computer generated moves.",
                "Responsive UI.",
            ],
        },

        {
            title: "Text To Speech Converter",
            video: "https://res.cloudinary.com/ajs7xnt4/video/upload/Text_to_speech_cmzv76.mp4",
            tech: "React.js • JavaScript • Bootstrap • Web Speech API",
            github: "https://github.com/izmammd/Text-to-Speak-Convertor.git",
            live: "text-to-speak-convertor-d9ihn50dt-syuv3529-7389s-projects.vercel.app",
            points: [
                "Developed a text-to-speech converter using React.js.",
                "Implemented Web Speech API for converting text into voice.",
                "Added multiple voice selection with browser-supported voices.",
                "Created a responsive Bootstrap-based user interface.",
                "Allows users to enter text and listen to generated speech.",
            ],
        },

        {
            title: "To Do List",
            video: "https://res.cloudinary.com/ajs7xnt4/video/upload/ToDoListVideo_jxpedv.mp4",
            tech: "HTML • CSS • JavaScript",
            github: "https://github.com/izmammd/To-Do-List",
            live: "https://to-do-list-d26rpc5c9-syuv3529-7389s-projects.vercel.app/",
            points: [
                "Add/Edit/Delete tasks.",
                "Local Storage support.",
                "Responsive design.",
                "Task completion tracking.",
            ],
        },
    ];

    return (

        <section id="projects" className="container border-bottom" data-aos="zoom-in" data-aos-duration="1200">

            <h1 className="text-center text-white mt-4">My Projects</h1>

            {
                projects.map((project, index) => (

                    <div
                        key={index}
                        className="p-4 mb-5"
                    >

                        <div className="row align-items-center shadow-lg">

                            <div className="col-lg-4">

                                <video
                                    src={project.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-100 rounded-4 shadow"
                                />

                            </div>

                            <div className="col-lg-8 mt-4 mt-lg-0">

                                <h2 className="text-warning fw-bold mt-3">
                                    {project.title}
                                </h2>

                                <p className="text-info">
                                    {project.tech}
                                </p>

                                {project.points.map((item, i) => (

                                    <p
                                        className="text-white"
                                        key={i}
                                    >
                                        <FaArrowRight
                                            className="me-2 text-warning"
                                        />
                                        {item}
                                    </p>

                                ))}

                                <div className="mt-4 d-flex gap-3 mb-3">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <FaGithub className="me-2" />
                                        Source Code
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-outline-light"
                                    >
                                        <FaExternalLinkAlt className="me-2" />
                                        Live Demo
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

        </section>
    );
}