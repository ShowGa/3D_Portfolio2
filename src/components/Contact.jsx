import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef();
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_KEY,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_KEY,
        {
          from_name: data.name,
          to_name: "ShowGa",
          from_email: data.email,
          to_email: "",
          message: data.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        if (data.name === "" || data.email === "" || data.message === "") {
          toast.error("Please fullfill the required input");
          return;
        }

        setLoading(false);
        toast.success(
          "Message Sending successfully !\nShowGa will reply your message very soon ^_^"
        );

        setData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((e) => {
        setLoading(false);
        toast.error("Sending message unsuccessfully !");
        console.log(e);
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-xl p-8 mx-auto"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12, flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              // required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              // required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={data.message}
              onChange={handleChange}
              placeholder="Say something to me :"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              // required
            />
          </label>

          <div className="bg-tertiary outline-none text-white font-bold shadow-md shadow-primary mx-auto p-[2px] green-pink-gradient hover:outline-red-100 transition-all duration-300 active:outline-red-500">
            <button type="submit" className="bg-tertiary px-8 py-3 ">
              {loading ? "Sending" : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
