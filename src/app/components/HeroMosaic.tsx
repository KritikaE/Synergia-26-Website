import React, { useMemo, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { SYNERGIA_GRID } from "../constants";

const img1 = "https://picsum.photos/400/300";
const img2 = "https://picsum.photos/401/300";
const img3 = "https://picsum.photos/402/300";


const SYNERGIA_PHOTOS = [img1, img2, img3];

const HeroMosaic: React.FC = () => {
  const [phase, setPhase] = useState<"dump" | "collecting" | "formed">("dump");
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  const gridScale = useTransform(smoothScroll, [0, 0.15], [1, 4]);
  const gridRotateX = useTransform(smoothScroll, [0, 0.12], [0, 15]);
  const gridOpacity = useTransform(smoothScroll, [0.05, 0.2], [1, 0]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const dumpTimer = setTimeout(() => setPhase("collecting"), 800);
    const formTimer = setTimeout(() => setPhase("formed"), 2400);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(dumpTimer);
      clearTimeout(formTimer);
    };
  }, []);

  const tiles = useMemo(() => {
    const activeCells: any[] = [];

    SYNERGIA_GRID.forEach((row: number[], rowIndex: number) => {
      row.forEach((cell: number, colIndex: number) => {
        if (cell === 1) {
          activeCells.push({
            r: rowIndex,
            c: colIndex,
            id: rowIndex * 100 + colIndex,
          });
        }
      });
    });

    return activeCells;
  }, []);

  const renderedTiles = tiles.map((cell, index) => {
    const imageSource = SYNERGIA_PHOTOS[index % SYNERGIA_PHOTOS.length];

    return (
      <motion.div
        key={cell.id}
        initial={{ scale: 0, opacity: 0 }}
        animate={
          phase === "dump"
            ? { scale: 0.5, opacity: 0.6 }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.6 }}
        style={{
          gridRow: cell.r + 1,
          gridColumn: cell.c + 1,
        }}
        className="relative aspect-square"
      >
        <img
          src={imageSource}
          className="w-full h-full object-cover"
          alt="Synergia highlight"
        />
      </motion.div>
    );
  });

  return (
    <section className="relative w-full py-20 bg-[#0a0015]">

      <motion.div
        style={{
          scale: gridScale,
          rotateX: gridRotateX,
          opacity: gridOpacity,
        }}
        className="grid grid-cols-[repeat(36,minmax(0,1fr))] gap-[2px] max-w-[90vw] mx-auto"
      >
        {renderedTiles}
      </motion.div>

    </section>
  );
};

export default HeroMosaic;