
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

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
