import { useState } from "react";
import Layout from "../components/Layout";
import { Instagram, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_y0jlh8g",      // Replace with your EmailJS service ID
        "template_uyg8sld",     // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "Q5-f7X-gkCI9EBo82"       // Replace with your EmailJS public key
      );
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="container mx-auto px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-hanson text-5xl md:text-6xl font-bold mb-12 text-center">
              Contact
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="font-hanson text-3xl font-bold mb-6">
                    Let's Work Together
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    I'm always excited to collaborate on new projects and explore 
                    creative opportunities. Whether you have a specific vision in mind 
                    or want to discuss possibilities, I'd love to hear from you.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-hanson text-xl font-bold mb-2">Location</h3>
                    <p className="text-gray-700">Austin, Texas</p>
                  </div>
                  
                  <div>
                    <h3 className="font-hanson text-xl font-bold mb-2">Email</h3>
                    <a 
                      href="mailto:hello@allenli.com" 
                      className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      allenli512@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-hanson text-xl font-bold mb-2">Social</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com/allenli512"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/allenli512"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <Linkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-hanson text-sm font-bold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-hanson text-sm font-bold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-hanson text-sm font-bold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-hanson text-sm font-bold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white font-hanson font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
                    disabled={sending}
                  >
                    <Send size={18} />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                  {success && (
                    <p className="text-green-600 font-bold mt-2">Message sent successfully!</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
