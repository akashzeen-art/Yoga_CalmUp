import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />

      <div className="relative z-20">
        <Navbar />

        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-sm text-white/60 mb-8">Last Updated: 23-04-2026</p>

            <div className="space-y-6 text-sm leading-relaxed text-white/90">

              <p>
                This Privacy Policy describes how <strong>Zeen Digital Solutions LLP</strong> (operating Zeen Digital Solutions LLP) collects, uses, and shares information about you when you use our services.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support — including name, email, phone, payment info, usage data, and device information.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Your Information</h2>
              <p>
                We use the information to provide, maintain, and improve our Service; process transactions; send notices; respond to support requests; and personalise content.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">3. Sharing of Information</h2>
              <p>
                We may share information with service providers, in response to legal requests, to protect rights and safety, or in connection with a merger or acquisition.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">4. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies. You can instruct your browser to refuse all cookies, though some portions of our Service may not function properly.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">5. User-Generated Content</h2>
              <p>
                Our Service may allow you to post content. You are responsible for the content you post, including its legality, reliability, and appropriateness.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">6. Links to Other Sites</h2>
              <p>
                Our Service may contain links to third-party sites. We have no control over and assume no responsibility for their content or privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">7. Children's Privacy</h2>
              <p>
                Our Services are not intended for users under the age of 16. We do not knowingly collect personal data from children. If you believe a child has submitted personal information through our platform, please contact us immediately at{" "}
                <a href="mailto:reetesh.kumar@zeendigital.com" className="text-purple-400 hover:text-purple-300">reetesh.kumar@zeendigital.com</a>{" "}
                and we will take prompt steps to delete such information from our records.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">8. Security and Data Retention</h2>
              <p>
                We strive to use commercially acceptable means to protect your data. We retain your Personal Data only as long as necessary for the purposes set out in this policy.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">9. Your Rights</h2>
              <p>
                You have the right to access, correct, update, or delete the personal information we hold about you. Contact us through the information below.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">10. Disclaimer</h2>
              <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-5">
                <p>
                  The content provided on this platform, including all workout programs, exercise videos, training sessions, and related materials, is intended for general fitness and wellness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Users are advised to consult a qualified healthcare professional before starting any new fitness or exercise program, especially if they have any pre-existing medical conditions, injuries, or health concerns.
                </p>
                <p className="mt-3">
                  By participating in these workouts and activities, you acknowledge that you do so voluntarily and at your own risk. The platform, trainers, and instructors shall not be held responsible for any injuries, damages, or losses that may occur as a result of using this content. Individual results may vary based on body type, fitness level, consistency, and lifestyle.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8">11. Governing Law and Jurisdiction</h2>
              <p>
                These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising out of or relating to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Gurgaon, Haryana.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">12. Updates to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page.
              </p>

              <div className="pt-4 text-white/80">
                <p className="font-semibold text-white">Zeen Digital Solutions LLP</p>
                <p>418, 4th Floor SPAZE I Tech Park, Sohna Road, Sector 49, Gurugram, Haryana, 122018</p>
                <a href="mailto:reetesh.kumar@zeendigital.com" className="text-purple-400 hover:text-purple-300">reetesh.kumar@zeendigital.com</a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <Link to="/" className="text-purple-400 hover:text-purple-300">← Back to Home</Link>
            </div>
          </div>
        </div>

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
