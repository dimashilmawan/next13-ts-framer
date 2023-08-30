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
            <div className="pointer-events-none fixed inset-0 flex items-end justify-center sm:items-center  ">
              <motion.div
                initial={{
                  opacity: "var(--opacity-from,1)",
                  y: "var(--y-from,0)",
                  scale: "var(--scale-from,1)",
                }}
                animate={{
                  opacity: "var(--opacity-to,1)",
                  y: "var(--y-to,0)",
                  scale: "var(--scale-to,1)",
                }}
                exit={{
                  opacity: "var(--opacity-from,1)",
                  y: "var(--y-from,0)",
                  scale: "var(--scale-from,1)",
                }}
                onClick={(e) => e.stopPropagation()}
                className="pointer-events-auto  h-96 w-[calc(100%_-_40px)] bg-white [--opacity-from:0%] [--opacity-to:100%] max-sm:[--y-from:100%] max-sm:[--y-to:0px] sm:[--scale-from:85%] sm:[--scale-to:100%]"
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
