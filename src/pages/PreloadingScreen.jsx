import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const PreloadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const animationControls = useAnimation();
  const circleAnimationControls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      animationControls.start({
        opacity: 0,
        x: "100%",
        transition: { duration: 0.5 },
      });
      circleAnimationControls.start({
        // Ensure these target the correct element:
        opacity: 0,
        scale: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [loading, animationControls, circleAnimationControls]);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "#fff", display: "flex", justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            B
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            i
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            o
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            G
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            a
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            r
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            d
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            e
          </motion.h1>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
            style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          >
            n
          </motion.h1>
        </motion.div>
      ) :  (
        <motion.div
          style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}
          animate={animationControls}
        >
          {/* Ensure both spans are targeted: */}
          <motion.span style={{ display: "inline-block" }} animate={{ rotate: 360, scale: 1.5 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
            ⭕
          </motion.span>{" "}
          <motion.span style={{ display: "inline-block" }} animate={circleAnimationControls}>
            BioGarden
          </motion.span>
        </motion.div>
      )}
    </div>
  );
};

export default PreloadingScreen;
