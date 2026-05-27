import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />

      <div className="relative z-20">
        <Navbar />

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                About <span className="text-purple-500">Us</span>
              </h1>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-white">Zeen Digital Solutions LLP</h2>

              <p className="text-lg text-white/90 leading-relaxed">
                Zeen Digital Solutions LLP is a premium digital streaming platform focused on fitness and yoga content. Our mission is to make expert-led wellness programs accessible to everyone through a flexible, subscription-based streaming service.
              </p>

              <p className="text-lg text-white/90 leading-relaxed">
                Our library covers beginner-friendly yoga, strength training, cardio, and mindful movement — with new series added regularly.
              </p>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">What We Offer</h3>
                <ul className="space-y-3 text-white/90">
                  {[
                    "Premium yoga and fitness video content",
                    "Unlimited streaming on any device",
                    "Expert-led workout programs",
                    "Flexible subscription plans",
                    "New content added regularly",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-green-400 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Company Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/60 text-sm">Registered Name</p>
                      <p className="text-white font-semibold">Zeen Digital Solutions LLP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/60 text-sm">Address</p>
                      <p className="text-white font-semibold">418, 4th Floor SPAZE I Tech Park, Sohna Road, Sector 49, Gurugram, Haryana, 122018</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/60 text-sm">Phone</p>
                      <a href="tel:+918929836907" className="text-white font-semibold hover:text-purple-400 transition-colors">+91 8929836907</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/60 text-sm">Email</p>
                      <a href="mailto:reetesh.kumar@zeendigital.com" className="text-white font-semibold hover:text-purple-400 transition-colors">reetesh.kumar@zeendigital.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-xl font-bold text-white mb-3">Disclaimer</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  The content provided on this platform, including all workout programs, exercise videos, training sessions, and related materials, is intended for general fitness and wellness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Users are advised to consult a qualified healthcare professional before starting any new fitness or exercise program, especially if they have any pre-existing medical conditions, injuries, or health concerns.
                </p>
                <p className="text-white/80 text-sm leading-relaxed mt-3">
                  By participating in these workouts and activities, you acknowledge that you do so voluntarily and at your own risk. The platform, trainers, and instructors shall not be held responsible for any injuries, damages, or losses that may occur as a result of using this content. Individual results may vary based on body type, fitness level, consistency, and lifestyle.
                </p>
              </div>

              <div className="pt-4">
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
