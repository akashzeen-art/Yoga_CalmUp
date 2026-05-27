import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />

      <div className="relative z-20">
        <Navbar />

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                Contact <span className="text-purple-500">Us</span>
              </h1>
              <p className="text-xl text-white/90">
                We'd love to hear from you. Feel free to reach out.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Company</h3>
                    <p className="text-white/80 text-lg">Zeen Digital Solutions LLP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Address</h3>
                    <p className="text-white/80 text-lg">
                      418, 4th Floor SPAZE I Tech Park, Sohna Road, Sector 49, Gurugram, Haryana, 122018
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+918929836907" className="text-white/80 text-lg hover:text-purple-400 transition-colors">
                      +91 8929836907
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:reetesh.kumar@zeendigital.com" className="text-white/80 text-lg hover:text-purple-400 transition-colors">
                      reetesh.kumar@zeendigital.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-center space-y-6 mt-12 pt-12 border-t border-white/20">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">✉️ Send Us a Message</h3>
                  <p className="text-white/70 mb-2">⚡ Need faster support?</p>
                  <p className="text-white/70">
                    Email us at{" "}
                    <a href="mailto:reetesh.kumar@zeendigital.com" className="text-purple-400 hover:text-purple-300">
                      reetesh.kumar@zeendigital.com
                    </a>{" "}
                    for the quickest response.
                  </p>
                </div>

                <a
                  href="mailto:reetesh.kumar@zeendigital.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Send us a Message
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20">
                <Link to="/" className="text-purple-400 hover:text-purple-300">← Back to Home</Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center text-white text-sm">
            <p className="mb-2">&copy; 2025, Zeen Digital Solutions LLP. All Rights Reserved</p>
            <div className="flex gap-2 justify-center">
              <Link to="/terms" className="hover:text-white/80">Terms of Services</Link>
              <span>|</span>
              <Link to="/refund" className="hover:text-white/80">Refund Policy</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
