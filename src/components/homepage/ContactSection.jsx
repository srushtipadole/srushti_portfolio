import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/homepage/Navbar";

const contactLinks = {
  LinkedIn: "https://www.linkedin.com/in/srushti-padole-b60b73378/",
  GitHub: "https://github.com/srushtipadole",
  Resume: "https://drive.google.com/file/d/1T8FX5w_3Bk2NCjLf_M4Y14RNzwYe5ViB/view?usp=drivesdk",
};

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert("Something went wrong ❌");
      });
  };

  return (
    <>
      <Navbar />

      <main
        id="contact"
        className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-black"
        // ── COPY PROTECTION ──────────────────────────────────────────
        onCopy={(e) => e.preventDefault()}
        onCut={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none" }}
        // ─────────────────────────────────────────────────────────────
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-20">

          {/* ===== PAGE TITLE ===== */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-white">
            Contact Me
          </h1>

          {/* ===== TOP SECTION ===== */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT */}
            <div className="space-y-5 sm:space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-[#efe6d3] text-sm font-medium text-[#9c8356]">
                AVAILABLE FOR WORK
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Let's build something <br className="hidden sm:block" /> amazing together
              </h2>

              <p className="text-[#d8c195] max-w-xl text-sm sm:text-base">
                I specialize in building robust frontend interfaces and scalable
                backend systems. Whether you have a question, a project idea,
                or just want to say hi, I'm all ears!
              </p>

              {/* EMAIL + LOCATION BADGES */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex items-center gap-3 px-4 sm:px-5 py-3 bg-[#1f2430] text-white rounded-xl shadow-sm">
                  <span>📧</span>
                  <div>
                    <p className="text-xs text-gray-500">Email me at</p>
                    <p className="font-medium text-sm sm:text-base break-all">srushtipadole30@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-4 sm:px-5 py-3 bg-[#1f2430] text-white rounded-xl shadow-sm">
                  <span>📍</span>
                  <div>
                    <p className="text-xs text-gray-500">Based in</p>
                    <p className="font-medium text-sm sm:text-base">Nagpur, MH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-lg font-semibold mb-5 sm:mb-6 flex items-center gap-2 text-white">
                ✳️ Connect with me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "LinkedIn", desc: "Professional updates & networking", key: "LinkedIn" },
                  { name: "GitHub", desc: "Check out my latest code", key: "GitHub" },
                  { name: "Download Resume", desc: "", key: "Resume" },
                ].map((item) => (
                  <div
                    key={item.name}
                    onClick={() => window.open(contactLinks[item.key], "_blank")}
                    className="bg-white rounded-xl p-4 sm:p-5 flex justify-between items-center shadow-sm cursor-pointer hover:shadow-md transition"
                  >
                    <div>
                      <p className="font-medium text-black text-sm sm:text-base">{item.name}</p>
                      {item.desc && <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>}
                    </div>
                    <span className="text-black">➜</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== FORM SECTION ===== */}
          <section className="bg-[#1f2430] rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* LEFT INFO */}
            <div className="space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl text-[#d8c195] font-bold">Send a Message</h2>
              <p className="text-white text-sm sm:text-base">
                Got a technical question? Interested in my work?
                Fill out the form and I'll get back to you within 24 hours.
              </p>

              <ul className="space-y-3 sm:space-y-4 text-white text-sm sm:text-base">
                <li>✅ Frontend Development – React, Vite, Tailwind</li>
                <li>✅ Backend Systems – Node.js, Express js, MongoDB</li>
                <li>✅ UI/UX Design – Figma</li>
              </ul>

              <div className="bg-black/30 text-white p-4 rounded-xl text-sm">
                <strong>Srushti Padole</strong>
                <p className="text-gray-500">Full Stack Developer</p>
                <p className="italic mt-2">"I'm excited to hear about your project!"</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            {/* Note: userSelect none is on <main>, but inputs/textareas need to be interactive */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5 sm:space-y-6"
              style={{ userSelect: "text", WebkitUserSelect: "text" }}
            >
              {success && (
                <p className="text-green-400 font-medium text-sm sm:text-base">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              )}

              <div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="input"
                />
              </div>

              <select name="subject" className="input text-white w-full">
                <option className="text-black">Select a topic</option>
                <option className="text-black">Frontend Development</option>
                <option className="text-black">Backend Development</option>
                <option className="text-black">UI/UX Design</option>
              </select>

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Hi, I'd like to discuss a project..."
                className="input text-white w-full"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d8c195] hover:bg-[#cbb07d] text-white py-3 sm:py-4 rounded-xl font-semibold flex justify-center items-center gap-2 disabled:opacity-60 transition text-sm sm:text-base"
              >
                {loading ? "Sending..." : "Send Message ➜"}
              </button>
            </form>
          </section>

        </div>
      </main>
    </>
  );
}
