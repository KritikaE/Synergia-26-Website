import { useState } from 'react';
import { RouterProvider } from 'react-router';
import { motion } from 'motion/react';
import { InsertCoinLoader } from './components/InsertCoinLoader';
import { router } from './routes';
import butterflyVideo from '../assets/butterfly.mp4';

export default function App() {
  const [startupPhase, setStartupPhase] = useState<'loader' | 'video' | 'content'>('loader');

  const handleLoaderComplete = () => {
    setStartupPhase('video');
  };

  return (
    <>
      {startupPhase === 'loader' && <InsertCoinLoader onComplete={handleLoaderComplete} />}

      {startupPhase === 'video' && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <video
            autoPlay
            muted
            playsInline
            onEnded={() => setStartupPhase('content')}
            className="w-full h-full object-cover"
          >
            <source src={butterflyVideo} type="video/mp4" />
          </video>
        </div>
      )}
      
      {startupPhase === 'content' && (
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <RouterProvider router={router} />
        </motion.div>
      )}
    </>
  );
}
