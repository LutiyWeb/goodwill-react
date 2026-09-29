"use client";

import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "@/lib/animations";

type PopupProps = {
  open: boolean;
  onClose: () => void;
};

export default function Popup({ open, onClose }: PopupProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="pop_up_wrapper active">
          <motion.div
            className="pop_up_overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <motion.div
            className="pop_up"
            style={{ x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            <div className="pop_up_animate">
              <img src="/img/pop_up_animate.gif" alt="" />
            </div>
            <h2 className="pop_up_title general_text">Thank you!</h2>
            <div className="pop_up_subtitle">Your message has been sent</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
