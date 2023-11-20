import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SimpleContactUs from "../Contact/SimpleContactUs.js";

// eslint-disable-next-line import/prefer-default-export
export function Modal({ modal, setModal }) {
    return (
        <AnimatePresence>
            {modal && (
                <div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0 minWidth-596">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -50,
                            opacity: 0,
                        }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="absolute z-10 p-5  h-auto w-full max-w-md rounded text-white"
                    >
                        <button
                            onClick={() => setModal(modal => !modal)}
                            className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-indigo-600 border border-indigo-600 h-8 w-8 block mb-2 rounded-full"
                        >
                            &times;
                        </button>
                        <SimpleContactUs />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                        onClick={() => setModal(modal => !modal)}
                        className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
                    />
                </div>
            )}
        </AnimatePresence>
    );
}
