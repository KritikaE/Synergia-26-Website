import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  const days = [
    {
      title: "DAY 1",
      theme: "TECHNICAL",
      date: "MARCH 31, 2026",
      events: [
        { time: "9:00 AM – 4:30 PM", title: "ChipAI-NewGen", category: "Technical", venue: "OPAL Block Simulation Lab" },
        { time: "10:00 AM – 1:00 PM", title: "BuildSphere", category: "Technical", venue: "SMB- 102, 103" },
        { time: "10:00 AM onwards", title: "AlgoHack 1.O", category: "Technical", venue: "SMB training Hall" },
        { time: "10:00 AM – 1:00 PM", title: "Code & Escape", category: "Technical", venue: "Pearl Block, 1st floor" },
        { time: "10:00 AM – 1:00 PM", title: "Chaos2Clarity", category: "Technical", venue: "SMB-207" },
        { time: "10:00 AM – 4:00 PM", title: "Innoventure", category: "Technical", venue: "BFSI Hall" },
        { time: "10:00 AM onwards", title: "EmbedX", category: "Technical", venue: "SSH1" },
        { time: "10:30 AM – 12:30 PM", title: "Raconteur", category: "Technical", venue: "JADE Block" },
        { time: "11:00 AM – 12:00 PM & 1:00 PM - 3:00 PM", title: "Hardware Hustle", category: "Technical", venue: "Emerald block, Simulation lab" },
        { time: "11:00 AM – 1:30 PM", title: "Trash2Tech", category: "Technical", venue: "BFSI hall 2" },
      ],
    },
    {
      title: "DAY 2",
      theme: "CULTURAL & WORKSHOPS",
      date: "APRIL 01, 2026",
      events: [
        { time: "10:00 AM onwards", title: "Battle of Bands", category: "Competition", venue: "Kalavedika" },
        { time: "10:00 AM onwards", title: "Svarautsav", category: "Competition", venue: "SMB Seminar Hall 4th floor" },
        { time: "10:00 AM onwards", title: "Thandav (Western) & Thandav (Classical)", category: "Competition", venue: "Main Stage" },
        { time: "10:00 AM onwards", title: "Chitraang 2.0", category: "Competition", venue: "SMB Training hall 4th floor" },
        { time: "10:00 AM onwards", title: "PicIt", category: "Competition", venue: "Jade Block 104" },
        { time: "10:00 AM onwards", title: "AlgoHack 1.O", category: "Technical", venue: "SMB training Hall" },
        { time: "10:00 AM – 4:00 PM", title: "Pottery Paradise", category: "Workshop", venue: "Beside KALA VEDIKA" },
        { time: "10:00 AM – 4:00 PM", title: "Candle Making", category: "Workshop", venue: "JADE BLOCK" },
        { time: "10:00 AM – 4:00 PM", title: "Candle Holder Decoration", category: "Workshop", venue: "SMB Lawn" },
        { time: "10:00 AM – 4:00 PM", title: "Fabric Painting", category: "Workshop", venue: "DB Drawing Hall" },
      ],
    },
  ];

  const categoryColors: any = {
    Keynote: "text-pink-500",
    Hackathon: "text-cyan-400",
    Competition: "text-yellow-400",
    Technical: "text-green-400",
    Workshop: "text-purple-400",
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="pt-36 pb-8 bg-[#0a0015] text-white px-6 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl md:text-6xl font-bold mb-16 tracking-[0.2em]"
        style={{
          fontFamily: "'Press Start 2P', cursive",
          color: "#a855f7",
          textShadow: "0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #7e22ce"
        }}
      >
        SCHEDULE
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`p-6 border-2 transition-all duration-300 ${
              activeTab === index
                ? "border-pink-500 bg-pink-900/20 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                : "border-gray-800 bg-[#131313] hover:border-gray-600"
            }`}
          >
            <span className="text-xs tracking-widest">{day.title}</span>
            <div className="text-lg font-bold mt-1">{day.theme}</div>
          </button>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8">
          {days[activeTab].events.map((event, i) => (
            <motion.div
              key={i}
              variants={item}
              transition={{ duration: 0.5 }}
              className="flex items-start gap-6"
            >
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
                <h4 className="text-base font-semibold mt-2">{event.title}</h4>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                  <MapPin size={14} /> {event.venue}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};