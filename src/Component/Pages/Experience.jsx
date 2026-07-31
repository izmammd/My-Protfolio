import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaSalesforce } from "react-icons/fa";

import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";

// import qspiderImg from "../../assets/qspider.svg";

export default function Experience() {

    const skillCategories = [
        {
            title: "Frontend",
            color: "text-info",
            items: [
                { icon: <FaHtml5 size={32} color="#E34F26" />, name: "HTML" },
                { icon: <FaCss3Alt size={32} color="#1572B6" />, name: "CSS" },
                { icon: <FaBootstrap size={32} color="#7952B3" />, name: "Bootstrap" },
                { icon: <SiJavascript size={32} color="#F7DF1E" />, name: "JavaScript" },
                { icon: <FaReact size={32} color="#61DAFB" />, name: "React.js" },
            ],
        },
        {
            title: "Backend",
            color: "text-success",
            items: [
                { icon: <FaNodeJs size={32} color="#3C873A" />, name: "Node.js" },
                { icon: <SiExpress size={32} />, name: "Express.js" },
            ],
        },
        {
            title: "Database",
            color: "text-warning",
            items: [
                { icon: <SiMongodb size={32} color="#4DB33D" />, name: "MongoDB" },
                { icon: <SiMysql size={32} color="#00758F" />, name: "MySQL" },
            ],
        },
        {
            title: "Tools",
            color: "text-warning",
            items: [
                { icon: <FaGitAlt size={32} color="#F05032" />, name: "Git" },
                { icon: <FaGithub size={32} />, name: "GitHub" },
                { icon: <FaLinux size={32} color="#FCC624" />, name: "Linux" },
                { icon: <SiPostman size={32} color="#FF6C37" />, name: "Postman" },
            ],
        },
    ];

    return (
        <section id="experience" className="container border-bottom" data-aos="fade-left" data-aos-duration="1200">

            <h1 className="text-center text-white fw-bold mt-4" >
                Experience & Skills
            </h1>

            <div className="row my-4">

                {/* Skills */}

                <div className="card-hover col-lg-5 shadow-lg">

                    <div className="p-4">

                        <h3 className="text-warning mb-3">Technical Skills</h3>

                        {skillCategories.map((category, index) => (
                            <div key={index} className="mb-2">
                                <h5 className={`fw-bold ${category.color} mb-2`}>{category.title}</h5>
                                <div className="row g-2">
                                    {category.items.map((skill, skillIndex) => (
                                        <div className="col-4 text-center mb-2" key={skillIndex}>
                                            <div>{skill.icon}</div>
                                            <p className="text-white mt-1 mb-0 small">{skill.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Training */}

                <div className="col-lg-7 mt-4 mt-lg-0">

                    {/* JSpiders */}

                    <div className="card-hover p-4 mb-4 shadow">

                        <div className="d-flex">

                            <img
                                src="https://res.cloudinary.com/ajs7xnt4/image/upload/v1785105840/qspider_ifp76g.svg"
                                alt="JSpiders"
                                style={{
                                    width: "90px",
                                    marginRight: "20px",
                                }}
                            />

                            <div>

                                <h3 className="text-warning">
                                    JSpiders Bangalore
                                </h3>

                                <h6 className="text-info">
                                    MERN Stack Development
                                </h6>

                                <p className="text-light">
                                    Completed 6–7 months of professional
                                    training covering HTML, CSS,
                                    Bootstrap, JavaScript, React.js,
                                    Node.js, Express.js, MongoDB,
                                    MySQL, REST APIs, JWT
                                    Authentication, Git, GitHub,
                                    Postman, and Linux.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Internship */}

                    <div className="card-hover p-4 shadow-lg ">

                        <div className="d-flex justify-content-evenly">
                            <div style={{
                                width: "90px",
                                marginRight: "20px",
                            }}>
                                <FaSalesforce size={50} color="orange" />
                            </div>


                            <div>
                                <h3 className="text-warning">
                                    Salesforce Virtual Internship
                                </h3>

                                <h6 className="text-info">
                                    July 2024
                                </h6>

                                <p className="text-light">
                                    Successfully completed Salesforce
                                    Advanced Architect Virtual Internship,
                                    gaining practical experience in cloud
                                    computing, CRM concepts, workflow
                                    automation, user management, and
                                    application customization.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}