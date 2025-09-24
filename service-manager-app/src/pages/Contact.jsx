import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto p-6 pt-20">
        <h1 className="text-4xl font-bold text-center text-cyan-300 mb-6">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-xl">
            <h2 className="text-xl font-bold text-cyan-400 mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-gray-300">Email</p>
                  <p className="text-cyan-300">karan@egservicemanager.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-gray-300">Phone</p>
                  <p className="text-cyan-300">+91 8425952505</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-gray-300">Address</p>
                  <p className="text-cyan-300">123 Service St, Wellness City</p>
                </div>
              </div>
            </div>
          </div>



          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-xl">
            <h2 className="text-xl font-bold text-cyan-400 mb-6">Send Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}