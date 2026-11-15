import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Trophy, Award, Flame, CheckCircle, Sparkles } from 'lucide-react';

export const Achievements: React.FC = () => {
  const firstPrize = ACHIEVEMENTS.find((a) => a.isFirstPrize);
  const otherAchievements = ACHIEVEMENTS.filter((a) => !a.isFirstPrize);

  return (
    <section
      id="achievements"
      className="bg-primary-black text-primary-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24 border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-[48px]/[114%] tracking-tight">
          <span className="font-normal pr-2 md:pr-4 text-white">Honors &</span>
          <span className="font-extrabold text-white">Achievements</span>
        </h2>

        <p className="text-center text-neutral-400 max-w-2xl mb-12 text-sm sm:text-base">
          Milestones, competition wins, and national-level hackathon initiatives.
        </p>

        {/* Featured First Place Achievement (Special Visual Prominence) */}
        {firstPrize && (
          <div className="w-full max-w-4xl mb-10">
            <div className="relative rounded-2xl bg-gradient-to-b from-neutral-900 to-black border-2 border-amber-400 p-6 sm:p-10 shadow-[0_0_30px_rgba(251,191,36,0.15)] overflow-hidden">
              {/* Gold Ambient Corner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black tracking-wider uppercase">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>First Prize Winner</span>
                  </div>

                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-neutral-800 text-neutral-300 border border-neutral-700">
                    Year: {firstPrize.year}
                  </span>
                </div>

                {/* Achievement Title */}
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                  {firstPrize.title}
                </h3>

                {/* Organization */}
                <p className="text-amber-300 font-semibold text-sm sm:text-base mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Hosted by {firstPrize.organization}</span>
                </p>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base/relaxed leading-relaxed mb-6 max-w-3xl">
                  {firstPrize.description}
                </p>

                {/* Quick Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>1st Place on Leaderboard</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>UI/UX & Code Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>GeeksforGeeks Campus Club</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Hackathon & Competitive Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          {otherAchievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 rounded-xl p-6 border-2 border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex-center text-white">
                    {idx === 0 ? <Award className="w-5 h-5 text-sky-400" /> : <Flame className="w-5 h-5 text-orange-400" />}
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-neutral-800 text-neutral-400">
                    {item.year}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h4>

                <p className="text-xs font-medium text-neutral-400 mb-3">
                  {item.organization}
                </p>

                <p className="text-neutral-300 text-xs sm:text-sm/relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>{item.badge}</span>
                <span className="text-neutral-400">PRACTICAL BUILDER</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
