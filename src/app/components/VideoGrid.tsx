import rampWalk from '../../assets/videos_web/RampWalk_Synergia25.mp4';
import concert from '../../assets/videos_web/Concert_Synergia25.mp4';
import events from '../../assets/videos_web/Events_Synergia25.mp4';
import flashmob from '../../assets/videos_web/Flashmob_Synergia25.mp4';
import bannerLaunch from '../../assets/videos_web/BannerLaunch_Synergia26.mp4';

const videos = [rampWalk, concert, events, flashmob, bannerLaunch];

export function VideoGrid() {
  return (
    <div className="w-full overflow-hidden py-8 bg-[#0a0015]">
      <div className="flex gap-4 animate-scroll">
        {[...videos, ...videos].map((video, i) => (
          <video
            key={i}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="h-48 w-auto rounded-lg"
          />
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
