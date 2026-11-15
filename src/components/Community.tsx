import React from 'react';
import { COMMUNITY_EVENTS } from '../data/portfolioData';
import { Users, Calendar, Award, Compass, Zap, MapPin } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section
      id="community"
      className="bg-primary-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-[48px]/[114%] tracking-tight">
          <span className="font-normal pr-2 md:pr-4">Community &</span>
          <span className="font-extrabold">Events</span>
        </h2>

        <p className="text-center text-neutral-500 max-w-2xl mb-12 text-sm sm:text-base">
          Active developer community engagement, tech summits, GDG DevFests, hands-on workshops, and collaborative meetups.
        </p>

        {/* Community Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-12">
          {COMMUNITY_EVENTS.map((event, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Event Type & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 text-neutral-800 border border-neutral-300">
                    <Users className="w-3.5 h-3.5 text-black" />
                    <span>{event.type}</span>
                  </span>
                  {event.dateOrYear && (
                    <span className="text-xs font-mono font-bold text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.dateOrYear}</span>
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-2">
                  {event.title}
                </h3>

                {/* Organization */}
                <p className="text-sm font-semibold text-neutral-600 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  <span>{event.organization}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Status indicator */}
              <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>COMMUNITY PARTICIPATION</span>
                </span>
                <span>ATTENDEE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Other Ecosystem Activities Banner */}
        <div className="w-full max-w-5xl bg-neutral-50 border-2 border-black rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-black" />
            <span>Broader Developer Engagement & Ecosystem Involvement</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <Compass className="w-5 h-5 text-black mb-2" />
              <h4 className="text-sm font-bold text-black mb-1">Hackathon Sprints</h4>
              <p className="text-xs text-neutral-500">
                Actively attending competitive hackathons to build practical solutions under time constraints.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <Award className="w-5 h-5 text-black mb-2" />
              <h4 className="text-sm font-bold text-black mb-1">Tech Competitions</h4>
              <p className="text-xs text-neutral-500">
                Participating in college and club competitions, including winning 1st place in Web Building.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <Users className="w-5 h-5 text-black mb-2" />
              <h4 className="text-sm font-bold text-black mb-1">Peer Collaborations</h4>
              <p className="text-xs text-neutral-500">
                Engaging with developer communities across Chennai to share knowledge and brainstorm projects.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-neutral-200">
              <Zap className="w-5 h-5 text-black mb-2" />
              <h4 className="text-sm font-bold text-black mb-1">Tool Exploration</h4>
              <p className="text-xs text-neutral-500">
                Experimenting with state-of-the-art AI-assisted developer tools and emerging tech stacks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
