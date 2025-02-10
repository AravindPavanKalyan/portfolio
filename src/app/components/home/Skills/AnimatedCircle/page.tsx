const AnimatedCircle = () => {
    return (
      <motion.div
        className="absolute top-1/2 left-1/2 bg-cyan-600 rounded-full"
        initial={{ width: 100, height: 100, opacity: 0.8 }}
        animate={{ width: "200vw", height: "200vw", opacity: 0.4 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    );
  };
  
  export default AnimatedCircle;