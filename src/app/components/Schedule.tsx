import { CalendarDays, Clock, MapPin } from "lucide-react";

export const Schedule = () => {
  const days = [
    {
      title: "DAY 1",
      date: "MARCH 31",
      events: [
        { time: "9:30 AM – 11:00 AM", title: "INAUGURATION CEREMONY", category: "Keynote", venue: "Main Auditorium" },
        { time: "11:30 AM – 1:00 PM", title: "TECH QUIZ", category: "Competition", venue: "Seminar Hall A" },
      ],
    },
    {
      title: "DAY 2",
      date: "APRIL 1",
      events: [
        { time: "9:30 AM – 12:00 PM", title: "HACKATHON ROUND 1", category: "Hackathon", venue: "Innovation Lab" },
        { time: "1:30 PM – 4:00 PM", title: "PROJECT EXPO", category: "Competition", venue: "Exhibition Hall" },
      ],
    },
    {
      title: "DAY 3",
      date: "APRIL 2",
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
    <section className="pt-32 pb-8 bg-[#0a0015] text-white px-6 min-h-screen">
      
      {/* HEADING */}
      <h2
        className="text-center font-['Press_Start_2P'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 sm:mb-16"
        style={{ 
          color: '#ff1493',
          textShadow: '0 0 8px rgba(255, 20, 147, 0.6), 0 0 16px rgba(255, 20, 147, 0.3)'
        }}
      >
        SCHEDULE
      </h2>

      <div className="max-w-3xl mx-auto space-y-10">
        {days.map((day, index) => (
          <div key={index}>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-pink-500/20 mb-6">
              <CalendarDays size={16} className="text-pink-400" />
              <span className="text-sm font-bold tracking-widest">{day.title} - {day.date}</span>
            </div>

            <div className="space-y-6">
              {day.events.map((event, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-44 pt-1 flex items-center justify-end gap-1.5 text-[10px] md:text-[11px] text-gray-300 font-mono whitespace-nowrap">
                    <Clock size={12} className="text-cyan-400 shrink-0" />
                    {event.time}
                  </div>

                  <div className="relative flex flex-col items-center pt-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] z-10"></div>
                    <div className="w-0.5 h-full min-h-[50px] bg-cyan-900/50 mt-1.5"></div>
                  </div>

                  <div 
                    className="flex-1 bg-[#131313] p-4 rounded-lg border border-gray-800 shadow-md"
                    style={{ fontFamily: "'Press Start 2P', cursive" }}
                  >
                    <span className={`text-[8px] font-bold uppercase tracking-widest ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                    <h4 className="text-[10px] font-semibold mt-1 leading-relaxed">{event.title}</h4>
                    <div className="flex items-center gap-1 mt-1 text-[8px] text-gray-400">
                      <MapPin size={8} /> {event.venue}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
