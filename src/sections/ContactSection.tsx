import { useState } from "react";
import { Instagram, Linkedin, Send, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_y0jlh8g",
        "template_uyg8sld",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Q5-f7X-gkCI9EBo82"
      );
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "10px",
    color: "white",
  };

  return (
    <section id="contact" className="min-h-screen text-white flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-8 py-20 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-hanson text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center text-white">
            Contact
          </h1>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Info Section */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="font-hanson text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
                  Let's Work Together
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                  I'm always excited to collaborate on new projects and explore creative opportunities. Whether you have a
                  specific vision in mind or want to discuss possibilities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="font-hanson text-lg sm:text-xl font-bold mb-2 text-white">Location</h3>
                  <p style={{ color: "rgba(255,255,255,0.55)" }}>New York, NY</p>
                </div>

                <div>
                  <h3 className="font-hanson text-lg sm:text-xl font-bold mb-2 text-white">Email</h3>
                  <a
                    href="mailto:allenli512@gmail.com"
                    className="transition-colors hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    allenli512@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-hanson text-lg sm:text-xl font-bold mb-2 text-white">Social</h3>
                  <div className="flex items-center space-x-6">
                    {[
                      { href: "https://instagram.com/allenli512", icon: <Instagram size={28} /> },
                      { href: "https://www.linkedin.com/in/allenli512", icon: <Linkedin size={28} /> },
                      { href: "https://github.com/allenallen512", icon: <Github size={28} /> },
                    ].map(({ href, icon }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 hover:scale-110 p-2 rounded-full"
                        style={{
                          color: "rgba(255,255,255,0.6)",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div
              className="p-6 sm:p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block font-hanson text-sm font-bold mb-2 text-white/80">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-base placeholder:text-white/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-hanson text-sm font-bold mb-2 text-white/80">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-base placeholder:text-white/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-hanson text-sm font-bold mb-2 text-white/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={inputStyle}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-base placeholder:text-white/30"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-hanson text-sm font-bold mb-2 text-white/80">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    style={inputStyle}
                    className="w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all resize-none text-base placeholder:text-white/30"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full text-white font-hanson font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Send size={18} />
                  {sending ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <div
                    className="font-bold p-4 rounded-xl text-center"
                    style={{
                      background: "rgba(134,239,172,0.1)",
                      border: "1px solid rgba(134,239,172,0.2)",
                      color: "rgba(134,239,172,0.9)",
                    }}
                  >
                    Message sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
