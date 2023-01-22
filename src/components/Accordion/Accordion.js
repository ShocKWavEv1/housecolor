import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.2 }}
          >
            Hi This is an Accordion
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Accordion
