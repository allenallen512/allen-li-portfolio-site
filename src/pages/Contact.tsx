
import Layout from "../components/Layout";
import { Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-900">
        <div className="container mx-auto px-8 py-20">
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
                      hello@allenli.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-hanson text-xl font-bold mb-2">Social</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <Instagram size={24} />
                      </a>
                      <a
                        href="https://linkedin.com"
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
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-hanson text-sm font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-hanson text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block font-hanson text-sm font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white font-hanson font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    Send Message
                  </button>
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
