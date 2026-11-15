import React, { useState } from 'react';
import { SKILL_CATEGORIES, CURRENTLY_LEARNING } from '../data/portfolioData';
import {
  Code,
  Terminal,
  Cpu,
  Bot,
  Github,
  Brain,
  Laptop,
  Globe,
  Puzzle,
  Sparkles,
  BookOpen,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'tools' | 'interests'>('all');

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-10 h-10 transition-colors duration-300 group-hover:text-white" };
    switch (iconName) {
      case 'code':
        return <Code {...iconProps} />;
      case 'python':
        return <Terminal {...iconProps} />;
      case 'java':
        return <Cpu {...iconProps} />;
      case 'bot':
        return <Bot {...iconProps} />;
      case 'github':
        return <Github {...iconProps} />;
      case 'brain':
        return <Brain {...iconProps} />;
      case 'laptop':
        return <Laptop {...iconProps} />;
      case 'globe':
        return <Globe {...iconProps} />;
      case 'puzzle':
        return <Puzzle {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab === 'languages') return cat.category === 'Programming Languages';
    if (activeTab === 'tools') return cat.category === 'Development Tools';
    if (activeTab === 'interests') return cat.category === 'Areas of Interest';
    return true;
  });

  return (
    <section
      id="skills"
      className="bg-primary-white px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading matching Figma template */}
        <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-[48px]/[114%] tracking-tight">
          <span className="font-normal pr-2 md:pr-4">My</span>
          <span className="font-extrabold">Skills</span>
        </h2>

        {/* Subtitle / Transparency Note */}
        <p className="text-center text-neutral-500 max-w-2xl mb-8 text-sm sm:text-base">
          An honest reflection of my technical foundation, learning journey, and focal interest areas. Practical project technologies are attributed to AI-assisted workflows.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Capabilities' },
            { id: 'languages', label: 'Languages' },
            { id: 'tools', label: 'Development Tools' },
            { id: 'interests', label: 'Areas of Interest' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border-2 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="w-full space-y-12">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black" />
                <h3 className="text-lg font-extrabold tracking-tight text-neutral-800 uppercase text-xs tracking-widest">
                  {catGroup.category}
                </h3>
                <span className="w-2 h-2 rounded-full bg-black" />
              </div>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center w-full max-w-5xl">
                {catGroup.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="group interactive-card bg-primary-white hover:bg-primary-black flex h-40 w-full sm:h-[186px] sm:w-[186px] flex-col items-center justify-center rounded-lg border-2 border-black p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default text-center"
                  >
                    <div className="flex-center mb-3">
                      {getIcon(skill.iconName)}
                    </div>
                    <h4 className="group-hover:text-primary-white text-base sm:text-lg font-bold tracking-tight text-black transition-colors duration-200">
                      {skill.name}
                    </h4>
                    <span className="mt-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-neutral-100 text-neutral-600 group-hover:bg-neutral-800 group-hover:text-neutral-300 transition-colors duration-200">
                      {skill.tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Currently Learning Section Element */}
        <div className="w-full max-w-5xl mt-16 pt-12 border-t-2 border-dashed border-neutral-200">
          <div className="bg-neutral-50 rounded-2xl border-2 border-black p-6 sm:p-8 md:p-10 relative overflow-hidden">
            {/* Visual Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black text-white flex-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Growth Roadmap
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Active
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                    Currently Learning Journey
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-medium bg-white px-3 py-1.5 rounded-md border border-neutral-200 self-start sm:self-auto">
                <BookOpen className="w-3.5 h-3.5 text-black" />
                <span>2nd Year Core Focus</span>
              </div>
            </div>

            {/* Learning Milestones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CURRENTLY_LEARNING.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-4 border border-neutral-200 hover:border-black transition-colors duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-neutral-400 border-t border-neutral-100 mt-2">
                    <span>TRACK 0{idx + 1}</span>
                    <span className="text-emerald-700 font-bold">IN PROGRESS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
