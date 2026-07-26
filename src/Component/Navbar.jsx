export default function Navbar() {

    return (
        <nav
            className="navbar navbar-expand-lg sticky-top shadow-lg border-bottom"
            style={{
                 background: "linear-gradient(to right, #0f172a, #1e3a8a)", backdropFilter: "blur(12px)"
                }}
        >
            <div className="container">

                <a href="#home" className="navbar-brand fw-bold fs-2 text-warning" >
                    Portfolio
                </a>

                <button className="btn btn-primary rounded navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" >

                    <ul className="navbar-nav ms-auto">

                        <li>
                            <a href="#home" className="nav-link px-3 text-white" >Home</a>
                        </li>


                        <li>
                            <a href="#about" className="nav-link px-3 text-white">About</a>
                        </li>


                        <li>
                            <a href="#experience" className="nav-link px-3 text-white">Experience</a>
                        </li>


                        <li>
                            <a href="#projects" className="nav-link px-3 text-white" >Projects</a>
                        </li>


                        <li>
                            <a href="#contact" className="nav-link px-3 text-white" >Contact</a>
                        </li>


                    </ul>

                </div>

            </div>
        </nav>
    );
}




// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//     const navStyle = ({ isActive }) => ({
//         color: isActive ? "#facc15" : "#fff",
//         fontWeight: isActive ? "700" : "500",
//     });

//     return (
//         <nav
//             className="navbar navbar-expand-lg sticky-top shadow-lg"
//             style={{
//                 background: "rgba(15,23,42,.85)",
//                 backdropFilter: "blur(12px)",
//             }}
//         >
//             <div className="container">

//                 <NavLink
//                     to="/"
//                     className="navbar-brand fw-bold fs-2 text-warning"
//                 >
//                     Portfolio
//                 </NavLink>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div
//                     className="collapse navbar-collapse"
//                     id="navbarNav"
//                 >
//                     <ul className="navbar-nav ms-auto">

//                         <li className="nav-item">
//                             <NavLink
//                                 to="/"
//                                 style={navStyle}
//                                 className="nav-link px-3"
//                             >
//                                 Home
//                             </NavLink>
//                         </li>

//                         <li className="nav-item">
//                             <NavLink
//                                 to="/about"
//                                 style={navStyle}
//                                 className="nav-link px-3"
//                             >
//                                 About
//                             </NavLink>
//                         </li>

//                         <li className="nav-item">
//                             <NavLink
//                                 to="/experience"
//                                 style={navStyle}
//                                 className="nav-link px-3"
//                             >
//                                 Experience
//                             </NavLink>
//                         </li>

//                         <li className="nav-item">
//                             <NavLink
//                                 to="/projects"
//                                 style={navStyle}
//                                 className="nav-link px-3"
//                             >
//                                 Projects
//                             </NavLink>
//                         </li>

//                         <li className="nav-item">
//                             <NavLink
//                                 to="/contact"
//                                 style={navStyle}
//                                 className="nav-link px-3"
//                             >
//                                 Contact
//                             </NavLink>
//                         </li>

//                     </ul>
//                 </div>

//             </div>
//         </nav>
//     );
// }