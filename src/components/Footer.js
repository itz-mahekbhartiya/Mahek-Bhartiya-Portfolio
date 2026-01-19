import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Social Links Data
  const socialLinks = [
    { id: 1, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mahek-bhartiya", label: "LinkedIn" },
    { id: 2, icon: <FaGithub />, url: "https://github.com/itz-mahekbhartiya", label: "GitHub" },
    { id: 3, icon: <FaTwitter />, url: "https://twitter.com/mac_27_08", label: "Twitter" },
    { id: 4, icon: <FaInstagram />, url: "https://instagram.com/mahek_bhartiya", label: "Instagram" },
    { id: 5, icon: <FaEnvelope />, url: "mailto:mahekbhartiya123@email.com", label: "Email" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    } finally {
      setIsSubmitting(false);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000);
    }
  };

  return (
    <footer className="relative bg-[#1f121b] text-white py-10 pt-16 px-6 pt-[20vh]">
      {/* Modal Notification */}
      {showModal && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-[#2d1a27] text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300">
          {modalMessage}
        </div>
      )}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Section: Contact Form */}
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
              className="w-full px-4 py-2 rounded-lg bg-[#1f121b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#555455] transition-all"
            />
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#1f121b] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#555455] transition-all"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#1f121b] hover:bg-[#2d1a27] disabled:opacity-50 transition-colors duration-300 px-6 py-2 rounded-lg font-medium border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#555455]"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Section: Socials & Copyright */}
        <div className="flex flex-col justify-between text-white">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Me</h2>
            <div className="flex gap-6 text-2xl">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-[#F0CAA3] transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
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