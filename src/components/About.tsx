import React from 'react';
import { ABOUT_ME } from '../data/portfolioData';
import { Brain, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import aboutIllustration from '../assets/about_illustration.svg';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-primary-black text-primary-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Illustration */}
        <div className="flex-center lg:w-1/2 w-full max-w-md lg:max-w-none">
          <div className="relative w-full max-w-md aspect-square flex-center p-4">
            {/* Visual white border accent */}
            <div className="absolute inset-2 rounded-2xl border-2 border-dashed border-neutral-700 pointer-events-none" />
            <img
              src={aboutIllustration}
              alt="About Yeshwanth KM illustration"
              className="relative z-10 w-full h-auto max-h-[480px] object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Right: Text and Details */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          {/* Section Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl/[117%] tracking-tight">
            <span className="font-normal pr-2 md:pr-4 text-white">About</span>
            <span className="font-extrabold text-white">Me</span>
          </h2>

          {/* About Paragraphs */}
          <div className="space-y-4 text-neutral-300 text-base/relaxed font-normal">
            {ABOUT_ME.paragraphs.map((para, index) => (
              <p key={index} className="transition-colors hover:text-white">
                {para}
              </p>
            ))}
          </div>

          {/* Quick Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">Education</p>
                <p className="text-sm font-bold text-white">B.E. CSE (AI & ML)</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3">
              <Brain className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">Specialization</p>
                <p className="text-sm font-bold text-white">AI & Machine Learning</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
              <div>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">Location</p>
                <p className="text-sm font-bold text-white">Chennai, India</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
              <div>
                <p className="text-[11px] font-mono text-neutral-400 uppercase">Graduation</p>
                <p className="text-sm font-bold text-white">Class of 2029</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
