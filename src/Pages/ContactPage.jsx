import React, { useState } from "react";
import LoadingButton from "../components/LoadingButton";
import { toast } from "sonner";
import MotionWrapper from "../utils/MotionWrapper";
import { Globe } from "../components/Globe";
import { ChevronsRight } from "../components/ChevronsRight";
import axios from "axios";
import playSound from "../Hooks/playSound.js";
const ContactPage = () => {
  // Sounds
  const SuccessfulSound = "/Sound/Successful.mp3";
  const ErrorSound = "/Sound/Error.mp3";

  //Sending data to Web3 using axios
  const [loading, setLoading] = useState(false);
  const WEB3FORMS_URL = import.meta.env.VITE_WEB3URL;
  const ACCESS_KEY = import.meta.env.VITE_WEB3KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", ACCESS_KEY);
      const response = await axios.post(WEB3FORMS_URL, formData);
      const data = response.data;
      if (data.success) {
        // Success Logic
        toast.success("🎉 Form submitted successfully.");
        playSound(SuccessfulSound);
        event.target.reset();
      } else {
        console.error("Web3Forms API Error:", data.message);
        toast.warning(` Form submission failed. Error: ${data.message}.`);
        playSound(ErrorSound);
        setLoading(false);
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data?.message || `HTTP Error ${error.response.status}`
        : error.message;
      console.error("Axios Submission Error:", errorMessage);
      toast.warning(` An unexpected error occurred: ${errorMessage}.`);
      playSound(ErrorSound);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--text-color)] mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-[var(--maintext-color)] mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <MotionWrapper direction="y">
            <div className="space-y-8 md:mt-10">
              {/* Social media link  */}
              <div className=" flex flex-col items-center md:items-start">
                {/* Title */}
                <h3 className="text-lg md:text-3xl font-semibold mb-4 flex items-center">
                  <span className="hidden md:flex">
                    <Globe width={"30px"} />
                  </span>
                  <span className="flex md:hidden">
                    <Globe width={"25px"} />
                  </span>
                  Follow Me
                </h3>
                {/* Display on BigScreen */}
                <div className="w-full hidden md:flex flex-col gap-4 p-3 ">
                  {/* X */}
                  <div className="p-2 flex items-center" title="Follow on X">
                    <a
                      href="https://x.com/laxmikant32"
                      className="flex items-center gap-3"
                      target="_blank"
                    >
                      <svg
                        className="fill-[var(--text-color)] rounded-full h-10 w-10 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
                      </svg>
                      <div className="flex items-center text-[var(--text-color)]">
                        https://x.com/LaxmikantDubey _ _ _ _ _ _ _ _ _ _{" "}
                        <ChevronsRight stroke="var(--text-color)" />
                      </div>
                    </a>
                  </div>
                  {/* GitHub */}
                  <div
                    className="p-2 flex items-center"
                    title="Follow on Github"
                  >
                    <a
                      href="https://github.com/laxmikant3"
                      className="flex items-center gap-3"
                      target="_blank"
                    >
                      <svg
                        className="fill-[var(--text-color)] rounded-full h-10 w-10 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2.5 0 19 19"
                      >
                        <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                      </svg>
                      <div className="flex items-center text-[var(--text-color)]">
                        https://github.com/LaxmikantDubey _ _ _ _ _ _ _ _ _{" "}
                        <ChevronsRight stroke="var(--text-color)" />
                      </div>
                    </a>
                  </div>
                  {/* Linkedin */}
                  <div
                    className="p-2 pl-4 flex items-center"
                    title="Follow on Linkedin"
                  >
                    <a
                      href="https://www.linkedin.com/in/Laxmikant-dubey"
                      className="flex items-center gap-5"
                      target="_blank"
                    >
                      <svg
                        className="fill-[var(--text-color)] h-6.5 w-6.5 "
                        viewBox="0 -2 44 44"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g id="Icons" stroke="none" strokeWidth="1">
                          <g transform="translate(-702.000000, -265.000000)">
                            <path
                              d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                              id="LinkedIn"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <div className="flex items-center text-[var(--text-color)]">
                        https://www.linkedin.com/LaxmikantDubey _ _ _ _ _ _ _{" "}
                        <ChevronsRight stroke="var(--text-color)" />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Display only on Phone */}
                <div className="md:hidden flex space-x-4 text-[var(--maintext-color)]">
                  {/* Linkedin  */}
                  <a
                    href="https://www.linkedin.com/in/Laxmikant-dubey"
                    target="_blank"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=linkedin"
                      alt="linkedin"
                      className="h-11 w-11"
                    />
                  </a>

                  {/* GitHub   */}
                  <a href="https://github.com/laxmikant3" target="_blank">
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="Github"
                      className="h-11 w-11"
                    />
                  </a>

                  {/* X */}
                  <a href="https://x.com/laxmikant32" target="_blank">
                    <img
                      src="https://skillicons.dev/icons?i=twitter"
                      alt="X"
                      className="h-11 w-11"
                    />
                  </a>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Contact Form */}
          <MotionWrapper direction="y">
            <div className="bg-dark-card md:p-8 pl-0 pr-0 rounded-xl">
              <form id="contact-form" className="space-y-6" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name   */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-[var(--text-color)] font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full bg-black/30 px-4 py-3 bg-dark border border-gray-700 hover:border-[var(--text-color)] rounded-lg text-[var(--maintext-color)]"
                    />
                  </div>

                  {/* Email   */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-[var(--text-color)] font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-black/30 px-4 py-3 bg-dark border border-gray-700 rounded-lg hover:border-[var(--text-color)] text-[var(--maintext-color)]"
                    />
                  </div>
                </div>

                {/* Disc */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[var(--text-color)] font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full bg-black/30 px-4 py-3 bg-dark border border-gray-700 rounded-lg hover:border-[var(--text-color)] text-[var(--maintext-color)]"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <LoadingButton
                  type={"submit"}
                  loading={loading}
                  children={"Send Message"}
                />
              </form>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
