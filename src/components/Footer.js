import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mrbqpvlz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalMessage("✅ Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setModalMessage("❌ Failed to send message.");
      }
    } catch (error) {
      setModalMessage("⚠️ Network error. Try again.");
    }

    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <footer className="relative bg-[#1f121b] text-white py-10 pt-16 px-6 pt-[20vh]">
      {/* Modal Notification */}
      {showModal && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#2d1a27] text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300">
          {modalMessage}
        </div>
      )}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Portfolio.<br className="xl:hidden" />
            <span className="text-[#F0CAA3]">
              mahekBhartiya(<span className="text-[#C7D9DD]">Let's-Connect</span>);
            </span>
          </h2>
          <p className="mb-6 text-gray-300">
            I'm always ready to collaborate, learn something new, and innovate.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#1f121b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#555455]"
            />
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#1f121b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#555455]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#1f121b] hover:bg-[#2d1a27] transition-colors duration-300 px-6 py-2 rounded-lg font-medium border-2  border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#555455]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between text-white">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
            <div className="flex gap-6 text-2xl">
              <a href="www.linkedin.com/in/mahek-bhartiya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/itz-mahekbhartiya" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://twitter.com/mac_27_08" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com/mahek_bhartiya" target="_blank" rel="noopener noreferrer" aria-label="Instgram"><FaInstagram/></a>
              <a href="mailto:mahekbhartiya123@email.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
          <p className="mt-10 text-sm text-gray-500">
            © {new Date().getFullYear()} Mahek Bhartiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
