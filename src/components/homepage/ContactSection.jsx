import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/homepage/Navbar";

const contactLinks = {
  LinkedIn: "https://www.linkedin.com/in/srushti-padole-b60b73378/",
  GitHub: "https://github.com/srushtipadole",
  Resume: "https://drive.google.com/file/d/1T8FX5w_3Bk2NCjLf_M4Y14RNzwYe5ViB/view?usp=drivesdk", // replace later
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

      <main id="contact" className="pt-32 pb-20 bg-black  ">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
            <h1 className="text-5xl font-extrabold text-center text-white">
              Contact Me
            </h1>
          {/* ===== TOP SECTION ===== */}
          <section className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-[#efe6d3] text-sm font-medium text-[#9c8356]">
                AVAILABLE FOR WORK
              </span>

              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight text-white">
                Let's build something <br /> amazing together
              </h1>

              <p className="text-[#d8c195] max-w-xl">
                I specialize in building robust frontend interfaces and scalable
                backend systems. Whether you have a question, a project idea,
                or just want to say hi, I'm all ears!
              </p>

              <div className="flex gap-4">
                <div className="flex items-center gap-3 px-5 py-3 bg-[#1f2430] text-white rounded-xl shadow-sm">
                  📧
                  <div>
                    <p className="text-xs text-gray-500">Email me at</p>
                    <p className="font-medium">srushtipadole30@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 bg-[#1f2430] text-white rounded-xl shadow-sm">
                  📍
                  <div>
                    <p className="text-xs text-gray-500">Based in</p>
                    <p className="font-medium">Nagpur, MH</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
                ✳️ Connect with me
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
  { name: "LinkedIn", desc: "Professional updates & networking", key: "LinkedIn" },
  { name: "GitHub", desc: "Check out my latest code", key: "GitHub" },
  { name: "Download Resume", desc: "", key: "Resume" },
].map((item) => (
  <div
    key={item.name}
    onClick={() => window.open(contactLinks[item.key], "_blank")}
    className="bg-white rounded-xl p-5 flex justify-between items-center shadow-sm cursor-pointer hover:shadow-md transition"
  >

                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                    ➜
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== FORM SECTION ===== */}
          <section className="bg-[#1f2430]  rounded-3xl shadow-lg p-10 grid lg:grid-cols-2 gap-16">

            {/* LEFT INFO */}
            <div className=" space-y-6 ">
              <h2 className="text-2xl text-[#d8c195] font-bold ">Send a Message</h2>
              <p className="text-white ">
                Got a technical question? Interested in my work?
                Fill out the form and I'll get back to you within 24 hours.
              </p>

              <ul className="space-y-4 text-white">
                <li>✅ Frontend Development – React, Vite, Tailwind</li>
                <li>✅ Backend Systems – Node.js, Express js, MongoDB</li>
                <li>✅ UI/UX Design – Figma</li>
              </ul>

              <div className="bg-[#1f2430] text-white p-4 rounded-xl text-sm">
                <strong>Srushti Padole</strong>
                <p className="text-gray-500">Full Stack Developer</p>
                <p className="italic mt-2">
                  "I'm excited to hear about your project!"
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              {success && (
                <p className="text-green-600 font-medium">
                  ✅ Message sent successfully! I’ll get back to you soon.
                </p>
              )}

              <div className="text-white grid sm:grid-cols-2 gap-4">
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

              <select name="subject" className="input text-white">
                <option className="text-black">Select a topic</option>
                <option className="text-black" >Frontend Development</option>
                <option className="text-black">Backend Development</option>
                <option className="text-black">UI/UX Design</option>
              </select>

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Hi, I'd like to discuss a project..."
                className="input text-white"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d8c195] hover:bg-[#cbb07d] text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 disabled:opacity-60"
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
