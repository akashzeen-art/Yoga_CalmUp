import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import { Link } from "react-router-dom";

export default function Refund() {
  return (
    <div className="relative min-h-screen bg-yoga-cream">
      <VideoBackground />

      <div className="relative z-20">
        <Navbar />

        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
            <p className="text-sm text-white/60 mb-8">Last Updated: 23-04-2026</p>

            <div className="space-y-6 text-sm leading-relaxed text-white/90">

              <p>Thank you for subscribing to <strong>Zeen Digital Solutions LLP</strong>. We hope you are satisfied with our services, but if not, we're here to help.</p>

              <h2 className="text-2xl font-bold text-white mt-8">1. Free Trial</h2>
              <p>Zeen Digital Solutions LLP does not offer a free trial. Users can cancel their subscription at any time from their account page.</p>

              <h2 className="text-2xl font-bold text-white mt-8">2. Cancellation Policy</h2>
              <p>Subscribers may cancel their recurring subscription at any time. Upon cancellation, access remains active until the end of the current billing cycle.</p>

              <h2 className="text-2xl font-bold text-white mt-8">3. Refund Eligibility</h2>
              <p>To be eligible for a refund, you must submit a request within 2 days of your subscription start date. Refunds are granted on a case-by-case basis at the sole discretion of Zeen Digital Solutions LLP.</p>

              <h2 className="text-2xl font-bold text-white mt-8">4. Process for Requesting a Refund</h2>
              <p>
                To request a refund, please contact our customer support team at{" "}
                <a href="mailto:reetesh.kumar@zeendigital.com" className="text-purple-400 hover:text-purple-300">reetesh.kumar@zeendigital.com</a>.
                {" "}Include your account information, subscription details, and a brief explanation.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">5. Refund Processing</h2>
              <p>Once your refund request is received and reviewed, we will notify you of approval or rejection by email. If approved, your refund will be processed within 7 working days.</p>

              <h2 className="text-2xl font-bold text-white mt-8">6. Changes to Refund Policy</h2>
              <p>Zeen Digital Solutions LLP reserves the right to modify this refund policy at any time. Changes take effect immediately upon posting on the website.</p>

              <h2 className="text-2xl font-bold text-white mt-8">7. Contact Us</h2>
              <p>
                If you have any questions about our refund policy, please contact us at{" "}
                <a href="mailto:reetesh.kumar@zeendigital.com" className="text-purple-400 hover:text-purple-300">reetesh.kumar@zeendigital.com</a>.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8">Refund Scenarios</h2>

              <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-green-400 mb-3">✓ Refunds Would Typically Be Granted</h3>
                <ul className="space-y-2">
                  <li><strong>Technical Issues</strong> — Persistent technical issues preventing use of the service.</li>
                  <li><strong>Billing Error</strong> — Incorrectly charged due to a billing error on our part.</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-5">
                <h3 className="text-lg font-bold text-red-400 mb-3">✗ Refunds Would Not Typically Be Granted</h3>
                <ul className="space-y-2">
                  <li><strong>Change of Mind</strong> — Customer decides they no longer want the service after the refund eligibility period.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
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
