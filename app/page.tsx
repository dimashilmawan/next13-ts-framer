"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function openModalHandler(e: React.MouseEvent) {
    setIsOpen(true);
  }
  function closeModalHandler(e: React.MouseEvent) {
    setIsOpen(false);
  }

  return (
    <div className="pt-24">
      <div>
        <button
          onClick={openModalHandler}
          className="mx-auto block rounded-md bg-emerald-500 px-4 py-2 font-medium text-white"
        >
          Close
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModalHandler}
              className="fixed inset-0 bg-rose-500/75"
            >
              &nbsp;
            </motion.div>
            <div className="pointer-events-none fixed inset-0 flex items-center justify-center ">
              <motion.div
                initial={{ opacity: 0, y: "-100%", scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: "-100%", scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="pointer-events-auto h-96 w-96  bg-white"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, iure.
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
