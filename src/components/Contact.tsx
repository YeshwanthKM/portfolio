import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending / preparing mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open user's default email client with prepopulated message as a direct connection
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <>
      {/* Top Black Divider Band matching Figma reference */}
      <div className="bg-primary-black h-16 md:h-20 w-full" />

      <section
        id="contact"
        className="bg-primary-white relative px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Section Heading matching Figma template */}
          <h2 className="mb-12 text-center text-3xl sm:text-4xl lg:text-5xl/[117%] tracking-tight text-primary-black">
            <span className="font-normal pr-2 md:pr-4">Contact</span>
            <span className="font-extrabold">Me</span>
          </h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Let's Connect Heading & Details */}
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl/[117%] font-extrabold tracking-tight text-black leading-tight">
                Let's{' '}
                <span className="text-stroke-1 sm:text-stroke-2 text-stroke-primary-black text-primary-white px-2">
                  talk
                </span>{' '}
                for <br className="hidden sm:inline" />
                Something special
              </h3>

              <div className="space-y-4 text-neutral-600 text-base/relaxed">
                <p className="font-semibold text-black text-lg">
                  Let's Connect!
                </p>
                <p>
                  I'm always interested in connecting with developers, exploring new technologies, participating in hackathons, and collaborating on innovative ideas.
                </p>
                <p>
                  Whether you have an event invitation, a project idea, or just want to discuss AI and software development, my inbox is always open!
                </p>
              </div>

              {/* Direct Info Links */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex-center shrink-0 text-black">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-neutral-400">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base font-bold text-black hover:underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex-center shrink-0 text-black">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-neutral-400">Location</p>
                    <p className="text-base font-bold text-black">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 flex flex-col gap-3">
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                  External Profiles:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-black bg-white text-black font-bold text-sm hover:bg-black hover:text-white transition-all shadow-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-black bg-white text-black font-bold text-sm hover:bg-black hover:text-white transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form matching template design */}
            <div className="bg-neutral-50 rounded-2xl border-2 border-black p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-extrabold text-black mb-6">
                Send a Message
              </h4>

              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h5 className="text-lg font-bold text-emerald-900">
                    Message Prepared!
                  </h5>
                  <p className="text-sm text-emerald-700">
                    Your email client has been launched with your message. If it didn't open automatically, you can email me directly at{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold underline">
                      {PERSONAL_INFO.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 bg-black text-white text-xs font-bold rounded-md hover:bg-neutral-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Yeshwanth KM"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded border-2 border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded border-2 border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Hackathon Collaboration / Query"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded border-2 border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded border-2 border-black px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full flex-center gap-2 bg-black text-white py-3.5 px-6 rounded border-2 border-black font-bold text-sm tracking-wide transition-all duration-200 hover:bg-neutral-800 active:translate-y-0.5 shadow-sm disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Get In Touch'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
