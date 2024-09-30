import { Nav } from "./Nav";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useMode } from "@/lib/context/modeContext";

interface ContainerPageProps {
  children: React.ReactNode;
  key: string; // Thêm key để theo dõi trang hiện tại
}

export const ContainerPage = ({ children, key }: ContainerPageProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const pageExitVariants = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const handleExitComplete = () => {
    setIsExiting(false);
  };

  useEffect(() => {
    setIsExiting(true);
  }, [key]);

  const {mode} = useMode();


  return (
    <AnimatePresence mode="popLayout" onExitComplete={handleExitComplete}>
      <motion.div
        key={key}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageExitVariants}
        transition={{ duration: 1.5 }}
      >
        <div className={`grid sm:grid-cols-8 sm:grid-rows-1 min-h-screen ${mode  ? 'bg-[#f0e7db]/60 text-black' : ''}`}>
          {children}
          <Nav />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
