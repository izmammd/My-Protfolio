import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // CHECK USER GIVES INPUT
        const formData = new FormData(form.current);

        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");


        // Check empty fields
        if (!name || !email || !subject || !message) {
            alert("Please fill all fields before sending message!");
            return;
        }

        // Email validation check
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }


        // SEND MAIL
        emailjs.sendForm(
            "service_xvw49f9",
            "template_3hgje3f",
            form.current,
            "QES8nudXVnKWsU9JM"
        )
            .then(() => {
                alert("Message sent successfully!");
                form.current.reset();  // after sending msg form will clear
            })
            .catch(() => {
                alert("Failed to send message");
            });
    };

    return (

        <section id="contact" className="container border-bottom" data-aos="fade-up" data-aos-duration="1200">

            <h1 className="text-center text-white mt-4">Contact Me</h1>

            <div className="p-5">

                <div className="row">

                    {/* Left */}

                    <div className="card-hover col-lg-6 shadow-lg">

                        <h2 className="text-warning mb-4">Let's Connect</h2>

                        <p className="text-light fs-5">
                            I am currently looking for a MERN Stack
                            Developer opportunity.
                        </p>

                        <div className="mt-5">

                            <p className="text-white">
                                <FaPhoneAlt className="me-3 text-warning" />
                                +91 7260903355
                            </p>

                            <p className="text-white">
                                <FaEnvelope className="me-3 text-warning" />
                                izmammd763@gmail.Component.
                            </p>

                            <p className="text-white">
                                <FaLinkedin className="me-3 text-warning" />
                                linkedin.com/in/mohammad-izmam72
                            </p>

                            <p className="text-white">
                                <FaGithub className="me-3 text-warning" />
                                github.com/izmammd
                            </p>

                            <p className="text-white">
                                <FaMapMarkerAlt className="me-3 text-warning" />
                                Marathahalli, Bangalore
                            </p>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="card-hover col-lg-6 mt-5 mt-lg-0 shadow-lg">

                        <form ref={form} onSubmit={sendEmail}>

                            <input name="name" className="form-control mb-3" placeholder="Your Name" required />

                            <input type="email" name="email" className="form-control mb-3" placeholder="Email Address" required />

                            <input name="subject" className="form-control mb-3" placeholder="Subject" required />

                            <textarea rows="6" name="message" className="form-control mb-4" placeholder="Your Message" required />

                            <button className="btn btn-main btn-success" type="submit" required >Send Message</button>

                        </form>

                    </div>

                </div>

            </div>

        </section>

    );
}