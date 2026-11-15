import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="bg-primary-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-[48px]/[114%] tracking-tight">
          <span className="font-normal pr-2 md:pr-4">My</span>
          <span className="font-extrabold">Education</span>
        </h2>

        <p className="text-center text-neutral-500 max-w-xl mb-12 text-sm sm:text-base">
          Academic background and specialized technical curriculum in Artificial Intelligence and Machine Learning.
        </p>

        {/* Education Card Container */}
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-2xl border-2 border-black p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            {/* Top Row: Degree & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-neutral-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-black text-white flex-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800 border border-neutral-300 mb-1">
                    <span>{EDUCATION.currentYear}</span>
                    <span>•</span>
                    <span>Expected Graduation {EDUCATION.expectedGraduation}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-neutral-600">
                    Specialization in {EDUCATION.specialization}
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Row: Institution & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b-2 border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex-center shrink-0 text-black">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-neutral-400">Institution</p>
                  <p className="text-base font-bold text-neutral-900">{EDUCATION.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex-center shrink-0 text-black">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-neutral-400">Campus Location</p>
                  <p className="text-base font-bold text-neutral-900">{EDUCATION.location}</p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Academic Curriculum Highlights */}
            <div className="pt-6">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-black" />
                <span>Curriculum Focus & Academic Highlights</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-700 font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
