import React, { useRef , useEffect} from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Social from "../home/social";
import { Fade } from "react-awesome-reveal";
import Aos from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wp80959",
        "template_49nq4w5",
        form.current,
        "sa6s6M7ao8TsbDSMN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for messaging ");
        },
        (error) => {
          alert(error.text);
        }
      );
      e.target.reset();
  };

  return (<>
  <Fade>

    <div className="contact" id="contact">
      <div className="title">
      <p className="impact"   data-aos="fade-down"> Get in Touch</p>

        <h2 className="h2">Contacts</h2>
      </div>

      <div className="contact_container">
        <div className="left_contact">
          <div className="email">
            <MdOutlineMail />
            <p>Email</p>
            <p>jitulalita4@gmail.com</p>
            <a
              href="mailto:jitulalita4@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="details"
            >
              Send Emails
            </a>
          </div>

          <div className="email">
            <BiPhoneCall />
            <p>Call</p>
            <p>not available on working hours</p>
            <a href="tel:+918003703865" 
 target="_blank" rel="noreferrer" className="details">
              Dial Now
            </a>
          </div>
          <div className="email">
            <FaWhatsapp />

            <p>Whatsapp</p>
            <p>available anytime</p>
            <a 
              href="https://wa.me/+918003703865"
              target="_blank"
              rel="noreferrer"
              className="details"
            >
              Send Massages
            </a>
          </div>
        </div>
         
     
         <div  className="right_contact">
          <form ref={form} onSubmit={sendEmail}>
           
            <input
              type="text"
              name="from_name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Your Email" />
            <textarea
              name="message"
              rows="13"
              placeholder="Write Your Message"
              required
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
    </div>
       
      </div>
      
    </div>
    
    </Fade>
    <div className="left_icons">
        <Social/>
        </div>
    </>
  );
};

export default Contact
