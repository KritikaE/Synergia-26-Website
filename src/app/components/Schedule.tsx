import { useState } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  const days = [
    {
      title: "DAY 1",
      theme: "TECHNICAL SUMMIT",
      date: "MARCH 31, 2026",
      events: [
        { time: "9:30 AM – 11:00 AM", title: "INAUGURATION CEREMONY", category: "Keynote", venue: "Main Auditorium" },
        { time: "11:30 AM – 1:00 PM", title: "TECH QUIZ", category: "Competition", venue: "Seminar Hall A" },
      ],
    },
    {
      title: "DAY 2",
      theme: "CULTURAL HUB",
      date: "APRIL 01, 2026",
      events: [
        { time: "9:30 AM – 12:00 PM", title: "HACKATHON ROUND 1", category: "Hackathon", venue: "Innovation Lab" },
        { time: "1:30 PM – 4:00 PM", title: "PROJECT EXPO", category: "Competition", venue: "Exhibition Hall" },
      ],
    },
    {
      title: "DAY 3",
      theme: "ANNUAL DAY",
      date: "APRIL 02, 2026",
      events: [
        { time: "9:30 AM – 12:30 PM", title: "FINAL HACKATHON ROUND", category: "Hackathon", venue: "Innovation Lab" },
        { time: "2:00 PM – 4:00 PM", title: "VALEDICTORY & PRIZES", category: "Keynote", venue: "Main Auditorium" },
      ],
    },
  ];

  const categoryColors: any = {
    Keynote: "text-pink-500",
    Hackathon: "text-cyan-400",
    Competition: "text-yellow-400",
  };

  return (
    <section className="pt-24 pb-8 bg-[#0a0015] text-white px-6 min-h-screen">
      <h2
        className="text-center text-5xl md:text-6xl font-bold text-pink-500 mb-8 tracking-[0.1em]"
        style={{ 
          textShadow: "0 0 10px #ec4899, 0 0 20px #ec4899",
          fontFamily: "'Press Start 2P', cursive" 
        }}
      >
        SCHEDULE
      </h2>

      <p className="text-center text-gray-400 mb-10 text-base">3 Days - 3 Experiences - Infinite Memories</p>

      {/* TOP BUTTONS - Larger text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`p-6 border-2 transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
              activeTab === index
                ? "border-pink-500 bg-pink-900/20 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                : "border-gray-800 bg-[#131313] hover:border-gray-600"
            }`}
          >
            <span className="text-xs tracking-widest">{day.title}</span>
            <span className="text-lg font-bold">{day.theme}</span>
            <span className="text-xs text-gray-400">{day.date}</span>
          </button>
        ))}
      </div>

      {/* CONTENT - Larger text */}
      <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
        <div className="space-y-8">
          {days[activeTab].events.map((event, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="w-48 pt-2 flex items-center justify-end gap-2 text-sm text-gray-300 font-mono whitespace-nowrap">
                <Clock size={16} className="text-cyan-400 shrink-0" />
                {event.time}
              </div>

              <div className="relative flex flex-col items-center pt-3">
                <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)] z-10"></div>
                <div className="w-0.5 h-full min-h-[60px] bg-cyan-900/50 mt-2"></div>
              </div>

              <div className="flex-1 bg-[#131313] p-6 rounded-lg border border-gray-800 shadow-lg">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${categoryColors[event.category]}`}>
                  {event.category}
                </span>
                <h4 className="text-base font-semibold mt-2 leading-relaxed">{event.title}</h4>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                  <MapPin size={14} /> {event.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
