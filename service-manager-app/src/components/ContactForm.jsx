import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [captchaVerified, setCaptchaVerified] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    if (!captchaVerified) {
      alert("Please verify you are not a robot!")
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="max-w-md mx-auto p-4 border border-cyan-500 rounded-lg shadow-lg bg-black text-white">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows="2"
            className="w-full p-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none resize-none"
            required
          />

          <div className="my-2">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // demo key
              onChange={() => setCaptchaVerified(true)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-2 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-cyan-400">Thank you!</h2>
          <p className="mt-2 text-gray-300">Your message has been received.</p>
        </div>
      )}
    </div>
  )
}
