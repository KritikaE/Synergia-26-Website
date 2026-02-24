import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { motion } from 'motion/react';
import { InsertCoinLoader } from './components/InsertCoinLoader';
import { router } from './routes';

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has seen loader before (optional - can be removed if you want loader every time)
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader) {
      setShowLoader(false);
      setShowContent(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('hasSeenLoader', 'true');
    setShowLoader(false);
    // Delay content appearance for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {showLoader && <InsertCoinLoader onComplete={handleLoaderComplete} />}
      
      {showContent && (
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
