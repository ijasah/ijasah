
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.1 * i,
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const slideIn = {
  initial: { opacity: 0, x: -30 },
  animate: (i: number) => ({
    opacity: 1, 
    x: 0, 
    transition: { 
      delay: 0.1 * i,
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};
