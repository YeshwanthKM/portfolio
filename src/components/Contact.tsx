import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getGmailUrl = (subject?: string, body?: string) => {
    const su = encodeURIComponent(subject || 'Connect Request');
    const bo = encodeURIComponent(body || 'Hi Yeshwanth,\n\n');
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${su}&body=${bo}`;
  };

  const getMailtoUrl = (subject?: string, body?: string) => {
    const su = encodeURIComponent(subject || 'Connect Request');
    const bo = encodeURIComponent(body || 'Hi Yeshwanth,\n\n');
    return `mailto:${PERSONAL_INFO.email}?subject=${su}&body=${bo}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data asynchronously via Formsubmit AJAX endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Message',
          message: formData.message,
          _subject: `New Message from ${formData.name} via Portfolio`
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: mark submitted and launch prefilled email
        setSubmitted(true);
        window.open(getGmailUrl(formData.subject, `From: ${formData.name} (${formData.email})\n\n${formData.message}`), '_blank');
      }
    } catch {
      // Offline or network block fallback
      setSubmitted(true);
      window.open(getGmailUrl(formData.subject, `From: ${formData.name} (${formData.email})\n\n${formData.message}`), '_blank');
    } finally {
      setIsSubmitting(false);
    }
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
                  Whether you have an event invitation, a project idea, or just want to discuss software development and AI, feel free to reach out anytime!
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                {/* Email with 1-click copy and quick webmail launch */}
                <div className="flex items-start gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                  <div className="w-10 h-10 rounded-lg bg-black text-white flex-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs font-mono uppercase text-neutral-500 font-bold mb-1">
                      Direct Email Address
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={getMailtoUrl()}
                        className="text-base font-bold text-black hover:underline break-all"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded bg-white border border-neutral-300 hover:border-black text-neutral-700 transition-colors"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-neutral-500" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="mt-2.5 flex items-center gap-3">
                      <a
                        href={getGmailUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-800 hover:text-black underline underline-offset-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Compose directly in Gmail (Web)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex-center shrink-0 text-black">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-neutral-400 font-bold">Location</p>
                    <p className="text-base font-bold text-black">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex flex-col gap-3">
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

            {/* Right Column: Contact Form */}
            <div className="bg-neutral-50 rounded-2xl border-2 border-black p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="text-xl font-extrabold text-black mb-6">
                Send a Message
              </h4>

              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-6 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h5 className="text-lg font-bold text-emerald-900">
                    Message Sent Successfully!
                  </h5>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'friend'}! Your message has been routed to{' '}
                    <strong className="underline">{PERSONAL_INFO.email}</strong>.
                  </p>

                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <a
                      href={getGmailUrl(formData.subject, `Hi Yeshwanth,\n\nFollowing up on my message:\n${formData.message}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md font-bold text-xs hover:bg-neutral-800 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open in Gmail (Web)</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 bg-white border border-neutral-300 text-neutral-800 text-xs font-bold rounded-md hover:border-black transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
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
                      placeholder="Hackathon Collaboration / Project Query"
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
                    <span>{isSubmitting ? 'Sending Message...' : 'Get In Touch'}</span>
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center mt-1">
                    Directly delivered to <span className="font-semibold text-neutral-800">{PERSONAL_INFO.email}</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
